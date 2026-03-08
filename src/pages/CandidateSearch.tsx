import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, CheckSquare, FileText, Loader2, Search, Users, Briefcase } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import NotificationBell from "@/components/NotificationBell";

interface CandidateResult {
  applicationId: string;
  userId: string;
  status: string;
  appliedAt: string;
  jobId: string;
  jobTitle: string;
  profile: {
    username: string | null;
    experience_level: string | null;
    job_profile: string | null;
    resume_url: string | null;
  } | null;
}

const STATUS_OPTIONS = [
  { value: "all", label: "All Statuses" },
  { value: "pending", label: "Pending" },
  { value: "shortlisted", label: "Shortlisted" },
  { value: "accepted", label: "Accepted" },
  { value: "rejected", label: "Rejected" },
];

const EXPERIENCE_OPTIONS = [
  { value: "all", label: "All Levels" },
  { value: "fresher", label: "Fresher" },
  { value: "experienced", label: "Experienced" },
];

const statusColors: Record<string, string> = {
  pending: "bg-muted text-muted-foreground",
  shortlisted: "bg-primary/10 text-primary border-primary/20",
  accepted: "bg-green-500/10 text-green-700 border-green-500/20",
  rejected: "bg-destructive/10 text-destructive border-destructive/20",
};

export default function CandidateSearch() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [candidates, setCandidates] = useState<CandidateResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [experienceFilter, setExperienceFilter] = useState("all");
  const [jobFilter, setJobFilter] = useState("all");
  const [jobs, setJobs] = useState<{ id: string; title: string }[]>([]);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [bulkUpdating, setBulkUpdating] = useState(false);
  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    setLoading(true);
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { navigate("/for-companies"); return; }

    // Get company profile
    const { data: company } = await supabase
      .from("company_profiles")
      .select("id")
      .eq("user_id", session.user.id)
      .maybeSingle();

    if (!company) { navigate("/for-companies"); return; }

    // Get all company jobs
    const { data: jobData } = await supabase
      .from("job_postings")
      .select("id, title")
      .eq("company_id", company.id)
      .order("created_at", { ascending: false });

    const companyJobs = jobData || [];
    setJobs(companyJobs);

    if (companyJobs.length === 0) {
      setLoading(false);
      return;
    }

    const jobIds = companyJobs.map((j) => j.id);
    const jobMap = new Map(companyJobs.map((j) => [j.id, j.title]));

    // Get all applications for company jobs
    const { data: apps } = await supabase
      .from("job_applications")
      .select("id, user_id, status, created_at, job_id")
      .in("job_id", jobIds)
      .order("created_at", { ascending: false });

    if (!apps || apps.length === 0) {
      setLoading(false);
      return;
    }

    const userIds = [...new Set(apps.map((a) => a.user_id))];

    // Fetch profiles & filter out company accounts
    const [{ data: profiles }, { data: companyUsers }] = await Promise.all([
      supabase.from("profiles").select("id, username, experience_level, job_profile, resume_url").in("id", userIds),
      supabase.from("company_profiles").select("user_id").in("user_id", userIds),
    ]);

    const companyUserIds = new Set(companyUsers?.map((c) => c.user_id) || []);
    const profileMap = new Map(profiles?.map((p) => [p.id, p]) || []);

    const results: CandidateResult[] = apps
      .filter((app) => !companyUserIds.has(app.user_id))
      .map((app) => ({
        applicationId: app.id,
        userId: app.user_id,
        status: app.status,
        appliedAt: app.created_at,
        jobId: app.job_id,
        jobTitle: jobMap.get(app.job_id) || "Unknown Job",
        profile: profileMap.get(app.user_id) || null,
      }));

    setCandidates(results);
    setLoading(false);
  };

  const handleViewResume = async (resumeUrl: string) => {
    const newWindow = window.open("", "_blank");
    let storagePath = resumeUrl;
    const marker = "/object/public/resumes/";
    const idx = resumeUrl.indexOf(marker);
    if (idx !== -1) storagePath = resumeUrl.substring(idx + marker.length);

    const { data } = await supabase.storage.from("resumes").createSignedUrl(storagePath, 300);
    if (data?.signedUrl && newWindow) {
      newWindow.location.href = data.signedUrl;
    } else {
      newWindow?.close();
      toast({ title: "Error", description: "Could not load resume.", variant: "destructive" });
    }
  };

  const handleStatusChange = async (applicationId: string, newStatus: string) => {
    setUpdatingId(applicationId);
    const { error } = await supabase.from("job_applications").update({ status: newStatus }).eq("id", applicationId);
    if (error) {
      toast({ title: "Error", description: "Failed to update status.", variant: "destructive" });
    } else {
      setCandidates((prev) => prev.map((c) => (c.applicationId === applicationId ? { ...c, status: newStatus } : c)));
      toast({ title: "Status updated", description: `Application marked as ${newStatus}.` });
    }
    setUpdatingId(null);
  };

  const formatJobProfile = (profile: string | null) => {
    if (!profile) return null;
    if (profile.startsWith("other:")) return profile.replace("other:", "");
    return profile;
  };

  const filtered = candidates.filter((c) => {
    if (statusFilter !== "all" && c.status !== statusFilter) return false;
    if (experienceFilter !== "all" && c.profile?.experience_level !== experienceFilter) return false;
    if (jobFilter !== "all" && c.jobId !== jobFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const name = (c.profile?.username || "").toLowerCase();
      const role = (c.profile?.job_profile || "").toLowerCase();
      const job = c.jobTitle.toLowerCase();
      if (!name.includes(q) && !role.includes(q) && !job.includes(q)) return false;
    }
    return true;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigate("/company-dashboard")} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Dashboard
            </Button>
            <h1 className="text-xl font-bold">Candidate Search</h1>
          </div>
          <NotificationBell />
        </div>
      </header>

      <main className="container px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, role, or job..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {STATUS_OPTIONS.map((o) => (
                <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={experienceFilter} onValueChange={setExperienceFilter}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {EXPERIENCE_OPTIONS.map((o) => (
                <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={jobFilter} onValueChange={setJobFilter}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Jobs</SelectItem>
              {jobs.map((j) => (
                <SelectItem key={j.id} value={j.id}>{j.title}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          {filtered.length} candidate{filtered.length !== 1 ? "s" : ""} found
        </p>

        {/* Results */}
        {filtered.length === 0 ? (
          <Card>
            <CardContent className="text-center py-16">
              <Users className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">No candidates found</h3>
              <p className="text-sm text-muted-foreground">
                {candidates.length === 0
                  ? "No one has applied to your jobs yet."
                  : "Try adjusting your search filters."}
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {filtered.map((c) => (
              <Card key={c.applicationId}>
                <CardContent className="p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <Avatar className="h-11 w-11 shrink-0">
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {(c.profile?.username || "U").charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0">
                        <p className="font-semibold truncate">{c.profile?.username || "Anonymous"}</p>
                        <div className="flex items-center gap-2 flex-wrap mt-1">
                          {c.profile?.experience_level && (
                            <Badge variant="outline" className="text-xs">
                              {c.profile.experience_level === "fresher" ? "Fresher" : "Experienced"}
                            </Badge>
                          )}
                          {formatJobProfile(c.profile?.job_profile ?? null) && (
                            <Badge variant="secondary" className="text-xs">
                              {formatJobProfile(c.profile?.job_profile ?? null)}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                          <Briefcase className="h-3 w-3" />
                          <span>{c.jobTitle}</span>
                          <span>•</span>
                          <span>{format(new Date(c.appliedAt), "MMM d, yyyy")}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 sm:shrink-0">
                      {c.profile?.resume_url && (
                        <Button variant="outline" size="sm" className="gap-1.5" onClick={() => handleViewResume(c.profile!.resume_url!)}>
                          <FileText className="h-3.5 w-3.5" />
                          Resume
                        </Button>
                      )}
                      <Select
                        value={c.status}
                        onValueChange={(val) => handleStatusChange(c.applicationId, val)}
                        disabled={updatingId === c.applicationId}
                      >
                        <SelectTrigger className={`w-[130px] h-9 text-xs ${statusColors[c.status] || ""}`}>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {STATUS_OPTIONS.filter((o) => o.value !== "all").map((o) => (
                            <SelectItem key={o.value} value={o.value} className="text-xs">{o.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
