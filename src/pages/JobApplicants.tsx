import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
import { ArrowLeft, FileText, Loader2, Users, MapPin, Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

interface Applicant {
  id: string;
  user_id: string;
  status: string;
  created_at: string;
  profile: {
    username: string | null;
    experience_level: string | null;
    job_profile: string | null;
    resume_url: string | null;
  } | null;
}

interface JobInfo {
  id: string;
  title: string;
  location: string;
  job_type: string;
  experience_level: string;
  created_at: string;
}

const STATUS_OPTIONS = [
  { value: "pending", label: "Pending" },
  { value: "shortlisted", label: "Shortlisted" },
  { value: "accepted", label: "Accepted" },
  { value: "rejected", label: "Rejected" },
];

const statusColors: Record<string, string> = {
  pending: "bg-muted text-muted-foreground",
  shortlisted: "bg-primary/10 text-primary border-primary/20",
  accepted: "bg-green-500/10 text-green-700 border-green-500/20",
  rejected: "bg-destructive/10 text-destructive border-destructive/20",
};

export default function JobApplicants() {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [job, setJob] = useState<JobInfo | null>(null);
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    if (jobId) fetchData();
  }, [jobId]);

  const fetchData = async () => {
    setLoading(true);

    // Fetch job info
    const { data: jobData } = await supabase
      .from("job_postings")
      .select("id, title, location, job_type, experience_level, created_at")
      .eq("id", jobId!)
      .maybeSingle();

    if (jobData) setJob(jobData);

    // Fetch applications
    const { data: apps } = await supabase
      .from("job_applications")
      .select("id, user_id, status, created_at")
      .eq("job_id", jobId!)
      .order("created_at", { ascending: false });

    if (apps && apps.length > 0) {
      const userIds = apps.map((a) => a.user_id);
      
      // Fetch profiles and company profiles in parallel
      const [{ data: profiles }, { data: companyUsers }] = await Promise.all([
        supabase
          .from("profiles")
          .select("id, username, experience_level, job_profile, resume_url")
          .in("id", userIds),
        supabase
          .from("company_profiles")
          .select("user_id")
          .in("user_id", userIds),
      ]);

      const companyUserIds = new Set(companyUsers?.map((c) => c.user_id) || []);
      const profileMap = new Map(profiles?.map((p) => [p.id, p]) || []);

      // Filter out company accounts
      setApplicants(
        apps
          .filter((app) => !companyUserIds.has(app.user_id))
          .map((app) => ({
            ...app,
            profile: profileMap.get(app.user_id) || null,
          }))
      );
    }

    setLoading(false);
  };

  const handleViewResume = async (resumeUrl: string) => {
    const newWindow = window.open("", "_blank");
    
    let storagePath = resumeUrl;
    const marker = "/object/public/resumes/";
    const idx = resumeUrl.indexOf(marker);
    if (idx !== -1) {
      storagePath = resumeUrl.substring(idx + marker.length);
    }

    const { data } = await supabase.storage
      .from("resumes")
      .createSignedUrl(storagePath, 300);

    if (data?.signedUrl && newWindow) {
      newWindow.location.href = data.signedUrl;
    } else {
      newWindow?.close();
      toast({ title: "Error", description: "Could not load resume.", variant: "destructive" });
    }
  };

  const handleStatusChange = async (applicationId: string, newStatus: string) => {
    setUpdatingId(applicationId);
    const { error } = await supabase
      .from("job_applications")
      .update({ status: newStatus })
      .eq("id", applicationId);

    if (error) {
      toast({ title: "Error", description: "Failed to update status.", variant: "destructive" });
    } else {
      setApplicants((prev) =>
        prev.map((a) => (a.id === applicationId ? { ...a, status: newStatus } : a))
      );
      toast({ title: "Status updated", description: `Application marked as ${newStatus}.` });
    }
    setUpdatingId(null);
  };

  const formatJobProfile = (profile: string | null) => {
    if (!profile) return null;
    if (profile.startsWith("other:")) return profile.replace("other:", "");
    return profile;
  };

  const statusCounts = {
    pending: applicants.filter((a) => a.status === "pending").length,
    shortlisted: applicants.filter((a) => a.status === "shortlisted").length,
    accepted: applicants.filter((a) => a.status === "accepted").length,
    rejected: applicants.filter((a) => a.status === "rejected").length,
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container px-4 sm:px-6 lg:px-8 py-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/company-dashboard")}
            className="gap-2 mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>

          {job && (
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                Applicants for "{job.title}"
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase className="h-3.5 w-3.5" />
                  {job.job_type}
                </span>
                <span>Posted {format(new Date(job.created_at), "MMM d, yyyy")}</span>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="container px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {STATUS_OPTIONS.map((opt) => (
            <Card key={opt.value}>
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold">{statusCounts[opt.value as keyof typeof statusCounts]}</p>
                <p className="text-xs text-muted-foreground mt-1">{opt.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Applicants */}
        {applicants.length === 0 ? (
          <Card>
            <CardContent className="text-center py-16">
              <Users className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">No applications yet</h3>
              <p className="text-sm text-muted-foreground">
                Candidates will appear here once they apply to this position.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            <p className="text-sm font-medium text-muted-foreground">
              {applicants.length} applicant{applicants.length !== 1 ? "s" : ""}
            </p>
            {applicants.map((applicant) => (
              <Card key={applicant.id}>
                <CardContent className="p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    {/* Avatar & Info */}
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <Avatar className="h-12 w-12 shrink-0">
                        <AvatarFallback className="bg-primary/10 text-primary text-lg">
                          {(applicant.profile?.username || "U").charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0">
                        <p className="font-semibold truncate">
                          {applicant.profile?.username || "Anonymous User"}
                        </p>
                        <div className="flex items-center gap-2 flex-wrap mt-1">
                          {applicant.profile?.experience_level && (
                            <Badge variant="outline" className="text-xs">
                              {applicant.profile.experience_level === "fresher" ? "Fresher" : "Experienced"}
                            </Badge>
                          )}
                          {formatJobProfile(applicant.profile?.job_profile ?? null) && (
                            <Badge variant="secondary" className="text-xs">
                              {formatJobProfile(applicant.profile?.job_profile ?? null)}
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Applied {format(new Date(applicant.created_at), "MMM d, yyyy 'at' h:mm a")}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 sm:shrink-0">
                      {applicant.profile?.resume_url && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1.5"
                          onClick={() => handleViewResume(applicant.profile!.resume_url!)}
                        >
                          <FileText className="h-3.5 w-3.5" />
                          Resume
                        </Button>
                      )}
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground hidden sm:inline">Status:</span>
                        <Select
                          value={applicant.status}
                          onValueChange={(val) => handleStatusChange(applicant.id, val)}
                          disabled={updatingId === applicant.id}
                        >
                          <SelectTrigger
                            className={`w-[140px] h-9 text-xs ${statusColors[applicant.status] || ""}`}
                          >
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {STATUS_OPTIONS.map((opt) => (
                              <SelectItem key={opt.value} value={opt.value} className="text-xs">
                                {opt.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
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
