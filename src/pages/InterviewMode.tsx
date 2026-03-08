import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Code, Trophy, FileText, LayoutDashboard, User, LogOut, Target, Zap, Briefcase, Brain, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import WelcomeDialog from "@/components/WelcomeDialog";
import NotificationBell from "@/components/NotificationBell";

interface UserStats {
  interviewsCompleted: number;
  challengesCompleted: number;
  totalPoints: number;
}

const InterviewMode = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [stats, setStats] = useState<UserStats>({
    interviewsCompleted: 0,
    challengesCompleted: 0,
    totalPoints: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
   const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUserEmail(session.user.email || null);

        // Fetch interview sessions count
        const { count: interviewCount } = await supabase
          .from("interview_sessions")
          .select("*", { count: "exact", head: true })
          .eq("user_id", session.user.id);

        // Fetch challenge completions
        const { data: challengeData } = await supabase
          .from("challenge_completions")
          .select("points")
          .eq("user_id", session.user.id);

        const challengesCompleted = challengeData?.length || 0;
        const totalPoints = challengeData?.reduce((sum, c) => sum + (c.points || 0), 0) || 0;

        setStats({
          interviewsCompleted: interviewCount || 0,
          challengesCompleted,
          totalPoints,
        });
         
         // Check if this is a new user (first time visiting after signup/signin)
         const hasSeenWelcome = localStorage.getItem("prepmaster_welcome_seen");
         if (!hasSeenWelcome) {
           setShowWelcome(true);
           localStorage.setItem("prepmaster_welcome_seen", "true");
         }
      }
      setIsLoading(false);
    };
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/");
  };

   const handleWelcomeClose = (open: boolean) => {
     setShowWelcome(open);
   };
 
  const checkAuthAndNavigate = async (path: string, scrollToDemo = false) => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to access practice modes.",
        variant: "destructive",
      });
      navigate("/auth");
      return;
    }

    navigate(path);
    if (scrollToDemo) {
      setTimeout(() => {
        document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const modes = [
    {
      icon: MessageSquare,
      title: "Interview Practice",
      description: "Practice your interview skills with AI-powered voice interviews tailored to your job profile.",
      highlight: "Real-time AI feedback • Voice-based • Role-specific questions",
      path: "/interview-practice",
      action: () => checkAuthAndNavigate("/interview-practice"),
      gradient: "from-blue-500/10 to-indigo-500/10",
      iconBg: "bg-blue-500/15",
      iconColor: "text-blue-600",
    },
    {
      icon: Code,
      title: "Code Editor",
      description: "Write and run code in a VS Code-like environment with syntax highlighting and multiple language support.",
      highlight: "Multi-language • Live execution • Auto-complete",
      path: "/coding-practice",
      action: () => checkAuthAndNavigate("/coding-practice"),
      gradient: "from-emerald-500/10 to-teal-500/10",
      iconBg: "bg-emerald-500/15",
      iconColor: "text-emerald-600",
    },
    {
      icon: Trophy,
      title: "Coding Challenge",
      description: "Take on timed coding challenges, earn points, and climb the leaderboard against other students.",
      highlight: "Timed challenges • Points system • Leaderboard",
      path: "/coding-challenge",
      action: () => checkAuthAndNavigate("/coding-challenge"),
      gradient: "from-amber-500/10 to-orange-500/10",
      iconBg: "bg-amber-500/15",
      iconColor: "text-amber-600",
    },
    {
      icon: FileText,
      title: "Resume Analyzer",
      description: "Upload your resume and get instant AI-powered feedback with actionable suggestions to improve it.",
      highlight: "AI-powered analysis • ATS score • Improvement tips",
      path: "/resume-analyzer",
      action: () => checkAuthAndNavigate("/resume-analyzer"),
      gradient: "from-violet-500/10 to-purple-500/10",
      iconBg: "bg-violet-500/15",
      iconColor: "text-violet-600",
    },
    {
      icon: Brain,
      title: "Aptitude Practice",
      description: "Sharpen your quantitative aptitude and logical reasoning skills with curated MCQ sets.",
      highlight: "500+ questions • Quant & logical • Detailed solutions",
      path: "/aptitude-practice",
      action: () => checkAuthAndNavigate("/aptitude-practice"),
      gradient: "from-pink-500/10 to-rose-500/10",
      iconBg: "bg-pink-500/15",
      iconColor: "text-pink-600",
    },
    {
      icon: MapPin,
      title: "Career Roadmap",
      description: "Explore 28+ detailed career paths with skills, resources, timelines, and salary insights in INR.",
      highlight: "28+ paths • Step-by-step • Salary insights",
      path: "/roadmap",
      action: () => checkAuthAndNavigate("/roadmap"),
      gradient: "from-cyan-500/10 to-sky-500/10",
      iconBg: "bg-cyan-500/15",
      iconColor: "text-cyan-600",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
       <WelcomeDialog open={showWelcome} onOpenChange={handleWelcomeClose} />
 
      {/* Navigation Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              PrepMaster
            </h2>
            <nav className="hidden md:flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/dashboard")}
                className="gap-2"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/jobs")}
                className="gap-2"
              >
                <Briefcase className="h-4 w-4" />
                Jobs
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/profile-settings")}
                className="gap-2"
              >
                <User className="h-4 w-4" />
                Profile Settings
              </Button>
            </nav>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {userEmail?.charAt(0).toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                  <p className="font-medium text-sm">{userEmail || "User"}</p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/dashboard")} className="md:hidden">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/jobs")} className="md:hidden">
                <Briefcase className="mr-2 h-4 w-4" />
                Jobs
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/profile-settings")} className="md:hidden">
                <User className="mr-2 h-4 w-4" />
                Profile Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator className="md:hidden" />
              <DropdownMenuSeparator className="md:hidden" />
              <DropdownMenuItem onClick={handleLogout} className="text-destructive focus:text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <div className="container px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Choose Your Practice Mode
            </h1>
            <p className="text-lg text-muted-foreground">
              Select how you want to practice and improve your skills
            </p>
          </div>

          {/* Progress Tracker */}
          <div className="mb-10 p-6 rounded-xl border bg-card shadow-soft max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Your Progress
            </h3>
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-20 bg-muted animate-pulse rounded-lg" />
                ))}
              </div>
            ) : (
              <>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary/10">
                        <MessageSquare className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{stats.interviewsCompleted}</p>
                        <p className="text-sm text-muted-foreground">Interviews</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Code className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{stats.challengesCompleted}</p>
                        <p className="text-sm text-muted-foreground">Challenges</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{stats.totalPoints}</p>
                        <p className="text-sm text-muted-foreground">Points</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {!isLoading && stats.interviewsCompleted === 0 && stats.challengesCompleted === 0 && (
              <p className="mt-4 text-sm text-muted-foreground text-center">
                Start practicing to track your progress!
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {modes.map((mode, index) => (
              <Card 
                key={index}
                className={`hover:shadow-lg transition-all duration-300 hover:scale-[1.03] cursor-pointer flex flex-col bg-gradient-to-br ${mode.gradient} border`}
                onClick={mode.action}
              >
                <CardHeader className="p-5 pb-3 flex-1">
                  <div className={`w-12 h-12 rounded-xl ${mode.iconBg} flex items-center justify-center mb-4`}>
                    <mode.icon className={`w-6 h-6 ${mode.iconColor}`} />
                  </div>
                  <CardTitle className="text-lg mb-1">{mode.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {mode.description}
                  </CardDescription>
                  <p className="text-xs text-primary/80 font-medium mt-2">
                    {mode.highlight}
                  </p>
                </CardHeader>
                <CardContent className="p-5 pt-0">
                  <Button variant="outline" size="sm" className="w-full">
                    Get Started →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewMode;
