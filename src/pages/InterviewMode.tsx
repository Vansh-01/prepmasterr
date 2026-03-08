import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Code, Trophy, FileText, LayoutDashboard, User, LogOut, Target, Zap, Briefcase, Brain } from "lucide-react";
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
      description: "Practice your interview skills with AI-powered voice interviews tailored to your job profile",
      path: "/interview-practice",
      action: () => checkAuthAndNavigate("/interview-practice")
    },
    {
      icon: Code,
      title: "Start Practicing",
      description: "Write code in a VS Code-like environment and practice coding",
      path: "/coding-practice",
      action: () => checkAuthAndNavigate("/coding-practice")
    },
    {
      icon: Trophy,
      title: "Coding Challenge",
      description: "Take on coding challenges and test your skills",
      path: "/coding-challenge",
      action: () => checkAuthAndNavigate("/coding-challenge")
    },
    {
      icon: FileText,
      title: "Resume Analyzer",
      description: "Get AI-powered feedback on your resume to stand out",
      path: "/resume-analyzer",
      action: () => checkAuthAndNavigate("/resume-analyzer")
    },
    {
      icon: Brain,
      title: "Aptitude Practice",
      description: "Practice quantitative aptitude and logical reasoning MCQs",
      path: "/aptitude-practice",
      action: () => checkAuthAndNavigate("/aptitude-practice")
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
          <div className="mb-10 p-6 rounded-xl border bg-card shadow-soft max-w-3xl mx-auto">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Your Progress
            </h3>
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-20 bg-muted animate-pulse rounded-lg" />
                ))}
              </div>
            ) : (
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
            )}
            {!isLoading && stats.interviewsCompleted === 0 && stats.challengesCompleted === 0 && (
              <p className="mt-4 text-sm text-muted-foreground text-center">
                Start practicing to track your progress!
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {modes.map((mode, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col"
                onClick={mode.action}
              >
                <CardHeader className="p-4 pb-2 flex-1">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <mode.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-base">{mode.title}</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    {mode.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <Button variant="outline" size="sm" className="w-full">
                    Get Started
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
