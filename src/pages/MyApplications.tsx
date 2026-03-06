import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Briefcase, MapPin, Clock, Loader2 } from "lucide-react";

interface Application {
  id: string;
  status: string;
  created_at: string;
  job: {
    title: string;
    location: string;
    job_type: string;
    company_name: string;
  } | null;
}

const statusConfig: Record<string, { label: string; className: string }> = {
  pending: { label: "Pending", className: "bg-muted text-muted-foreground" },
  shortlisted: { label: "Shortlisted", className: "bg-primary/10 text-primary border-primary/20" },
  accepted: { label: "Accepted", className: "bg-green-500/10 text-green-700 border-green-500/20" },
  rejected: { label: "Rejected", className: "bg-destructive/10 text-destructive border-destructive/20" },
};

export default function MyApplications() {
  const navigate = useNavigate();
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { navigate("/auth"); return; }

      const { data: apps } = await supabase
        .from("job_applications")
        .select("id, status, created_at, job_id")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (!apps?.length) { setApplications([]); setLoading(false); return; }

      const jobIds = [...new Set(apps.map(a => a.job_id))];
      const { data: jobs } = await supabase
        .from("job_postings")
        .select("id, title, location, job_type, company_id")
        .in("id", jobIds);

      const companyIds = [...new Set(jobs?.map(j => j.company_id) || [])];
      const { data: companies } = await supabase
        .from("company_profiles")
        .select("id, company_name")
        .in("id", companyIds);

      const companyMap = new Map(companies?.map(c => [c.id, c.company_name]) || []);
      const jobMap = new Map(jobs?.map(j => [j.id, { ...j, company_name: companyMap.get(j.company_id) || "Unknown" }]) || []);

      setApplications(apps.map(a => {
        const job = jobMap.get(a.job_id);
        return {
          id: a.id,
          status: a.status,
          created_at: a.created_at,
          job: job ? { title: job.title, location: job.location, job_type: job.job_type, company_name: job.company_name } : null,
        };
      }));
      setLoading(false);
    };
    load();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Button variant="ghost" size="icon" onClick={() => navigate("/jobs")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">My Applications</h1>
        </div>

        {loading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : applications.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <Briefcase className="h-10 w-10 mx-auto mb-3 opacity-50" />
            <p className="font-medium">No applications yet</p>
            <p className="text-sm mt-1">Browse the <button onClick={() => navigate("/jobs")} className="text-primary underline">Job Board</button> to get started.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {applications.map((app) => {
              const cfg = statusConfig[app.status] || statusConfig.pending;
              return (
                <Card key={app.id}>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm truncate">{app.job?.title || "Unknown Position"}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{app.job?.company_name}</p>
                      <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{app.job?.location}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{new Date(app.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className={cfg.className}>{cfg.label}</Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
