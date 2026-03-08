import { useEffect, useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Building2,
  LogOut,
  Briefcase,
  Plus,
  PauseCircle,
  Search,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import NotificationBell from "@/components/NotificationBell";
import CreateJobDialog from "@/components/company/CreateJobDialog";
import JobListings, { type JobPosting } from "@/components/company/JobListings";

interface CompanyProfile {
  id: string;
  company_name: string;
  created_at: string;
}

export default function CompanyDashboard() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [companyProfile, setCompanyProfile] = useState<CompanyProfile | null>(null);
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [showCreateJob, setShowCreateJob] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
      navigate("/for-companies");
      return;
    }

    const { data, error } = await supabase
      .from("company_profiles")
      .select("id, company_name, created_at")
      .eq("user_id", session.user.id)
      .maybeSingle();

    if (error || !data) {
      navigate("/for-companies");
      return;
    }

    setCompanyProfile(data);
    await fetchJobs(data.id);
    setLoading(false);
  };

  const fetchJobs = useCallback(async (companyId?: string) => {
    const id = companyId || companyProfile?.id;
    if (!id) return;

    const { data, error } = await supabase
      .from("job_postings")
      .select("*")
      .eq("company_id", id)
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to load job postings.",
        variant: "destructive",
      });
      return;
    }

    setJobs(data || []);
  }, [companyProfile?.id, toast]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-lg text-muted-foreground">Loading...</div>
      </div>
    );
  }

  const activeJobs = jobs.filter((j) => j.status === "active").length;
  const pausedJobs = jobs.filter((j) => j.status === "paused").length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Building2 className="h-5 w-5 text-primary" />
            </div>
            <Link to="/company-dashboard" className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              PrepMaster
            </Link>
            <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">
              Company
            </span>
          </div>

          <div className="flex items-center gap-2">
            <NotificationBell />
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Avatar className="w-6 h-6">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                    {(companyProfile?.company_name || "C").charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden sm:inline">{companyProfile?.company_name}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-card z-50">
              <DropdownMenuLabel>{companyProfile?.company_name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer text-destructive focus:text-destructive"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome + Create Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">
              Welcome, {companyProfile?.company_name}
            </h1>
            <p className="text-muted-foreground">
              Manage your job postings and recruitment pipeline
            </p>
          </div>
          <Button onClick={() => setShowCreateJob(true)} className="gap-2 shrink-0">
            <Plus className="h-4 w-4" />
            Post a Job
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Jobs</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{jobs.length}</div>
              <p className="text-xs text-muted-foreground mt-1">Job listings created</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
              <Briefcase className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeJobs}</div>
              <p className="text-xs text-muted-foreground mt-1">Currently live</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Paused Listings</CardTitle>
              <PauseCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pausedJobs}</div>
              <p className="text-xs text-muted-foreground mt-1">Temporarily hidden</p>
            </CardContent>
          </Card>
        </div>

        {/* Job Listings */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-4">Your Job Postings</h2>
          <JobListings
            jobs={jobs}
            onRefresh={() => fetchJobs()}
            onCreateClick={() => setShowCreateJob(true)}
          />
        </div>
      </main>

      {/* Create Job Dialog */}
      {companyProfile && (
        <CreateJobDialog
          open={showCreateJob}
          onOpenChange={setShowCreateJob}
          companyId={companyProfile.id}
          onJobCreated={() => fetchJobs()}
        />
      )}
    </div>
  );
}
