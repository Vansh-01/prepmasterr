import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ChevronRight, CheckCircle2, Circle, MapPin, Clock, BookOpen, TrendingUp, Lightbulb, Search, Sparkles, X } from "lucide-react";
import { careerPaths, type CareerPath } from "@/data/careerRoadmaps";

const popularTags = ["Data", "Developer", "Security", "Cloud", "Design", "AI", "Product", "DevOps"];

const recommendations: { label: string; query: string }[] = [
  { label: "🔥 Trending in Tech", query: "Engineer" },
  { label: "📊 Data Careers", query: "Data" },
  { label: "🛡️ Security & Ops", query: "Security" },
  { label: "🎨 Creative Roles", query: "Design" },
  { label: "🤖 AI & ML", query: "AI" },
];

const Roadmap = () => {
  const navigate = useNavigate();
  const [selectedPath, setSelectedPath] = useState<CareerPath | null>(null);
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredPaths = useMemo(() => {
    const q = (activeTag || searchQuery).toLowerCase();
    if (!q) return careerPaths;
    return careerPaths.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.steps.some((s) => s.skills.some((sk) => sk.toLowerCase().includes(q)))
    );
  }, [searchQuery, activeTag]);

  const toggleStep = (stepTitle: string) => {
    setCompletedSteps((prev) => {
      const next = new Set(prev);
      if (next.has(stepTitle)) next.delete(stepTitle);
      else next.add(stepTitle);
      return next;
    });
  };

  if (selectedPath) {
    const progress = Math.round(
      (selectedPath.steps.filter((s) => completedSteps.has(s.title)).length /
        selectedPath.steps.length) *
        100
    );

    return (
      <div className="min-h-screen bg-background">
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
          <div className="container flex h-16 items-center gap-4 px-4 sm:px-6 lg:px-8">
            <Button variant="ghost" size="sm" onClick={() => setSelectedPath(null)} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              All Roadmaps
            </Button>
            <div className="ml-auto">
              <Button variant="outline" size="sm" onClick={() => navigate("/interview-mode")}>
                Back to Hub
              </Button>
            </div>
          </div>
        </header>

        <div className="container px-4 sm:px-6 lg:px-8 py-8 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2.5 rounded-xl border ${selectedPath.color}`}>
                <selectedPath.icon className="h-7 w-7" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold">{selectedPath.title} Roadmap</h1>
                <p className="text-muted-foreground">{selectedPath.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
              <Badge variant="secondary">{selectedPath.demandLevel} Demand</Badge>
              <span>💰 {selectedPath.avgSalary}</span>
              <span>{selectedPath.steps.length} phases</span>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex-1 h-3 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                {progress}% complete
              </span>
            </div>
          </div>

          <div className="relative space-y-0">
            {selectedPath.steps.map((step, index) => {
              const isCompleted = completedSteps.has(step.title);
              const isLast = index === selectedPath.steps.length - 1;

              return (
                <div key={step.title} className="relative flex gap-4">
                  {!isLast && (
                    <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-border" />
                  )}
                  <button
                    onClick={() => toggleStep(step.title)}
                    className="relative z-10 mt-1 flex-shrink-0"
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="h-10 w-10 text-primary fill-primary/20" />
                    ) : (
                      <Circle className="h-10 w-10 text-muted-foreground/40" />
                    )}
                  </button>

                  <Card className={`flex-1 mb-6 transition-all ${isCompleted ? "border-primary/30 bg-primary/5" : ""}`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <CardTitle className="text-lg">{step.title}</CardTitle>
                        <Badge variant="secondary" className="gap-1 text-xs">
                          <Clock className="h-3 w-3" />
                          {step.duration}
                        </Badge>
                      </div>
                      <CardDescription>{step.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-2 flex items-center gap-1.5">
                          <TrendingUp className="h-3.5 w-3.5 text-primary" />
                          Skills to Learn
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {step.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-2 flex items-center gap-1.5">
                          <BookOpen className="h-3.5 w-3.5 text-primary" />
                          Recommended Resources
                        </h4>
                        <ul className="space-y-1">
                          {step.resources.map((resource) => (
                            <li key={resource} className="text-sm text-muted-foreground flex items-center gap-2">
                              <ChevronRight className="h-3 w-3 text-primary/60 flex-shrink-0" />
                              {resource}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <h4 className="text-sm font-semibold mb-1 flex items-center gap-1.5">
                          <Lightbulb className="h-3.5 w-3.5 text-yellow-500" />
                          Pro Tip
                        </h4>
                        <p className="text-sm text-muted-foreground">{step.tips}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
        <div className="container flex h-16 items-center gap-4 px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            PrepMaster
          </h2>
          <div className="ml-auto">
            <Button variant="outline" size="sm" onClick={() => navigate("/interview-mode")}>
              Back to Hub
            </Button>
          </div>
        </div>
      </header>

      <div className="container px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <MapPin className="h-4 w-4" />
              Career Roadmaps
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              Choose Your Career Path
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Follow a structured, step-by-step roadmap with {careerPaths.length} career paths. Each includes skills, resources, timelines, and pro tips.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {careerPaths.map((path) => (
              <Card
                key={path.id}
                className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
                onClick={() => setSelectedPath(path)}
              >
                <CardHeader className="pb-3">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-3 ${path.color}`}>
                    <path.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-base group-hover:text-primary transition-colors">
                    {path.title}
                  </CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    {path.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                    <Badge variant="secondary" className="text-[10px]">{path.demandLevel}</Badge>
                    <span>{path.avgSalary}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{path.steps.length} phases</span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
