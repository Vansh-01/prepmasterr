import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Brain, Calculator, CheckCircle2, XCircle, RotateCcw, ChevronLeft, ChevronRight, Timer, TimerOff, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { aptitudeQuestions, type AptitudeQuestion } from "@/data/aptitudeQuestions";

type Category = "all" | "quantitative" | "logical";

const AptitudePractice = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState<Category>("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [lastPointsEarned, setLastPointsEarned] = useState<number | null>(null);
  const [answered, setAnswered] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  // Timer state
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [timerDuration, setTimerDuration] = useState(60); // seconds per question
  const [timeLeft, setTimeLeft] = useState(60);
  const [timerExpired, setTimerExpired] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const filteredQuestions = useMemo(() => {
    if (category === "all") return aptitudeQuestions;
    return aptitudeQuestions.filter((q) => q.category === category);
  }, [category]);

  const currentQuestion: AptitudeQuestion | undefined = filteredQuestions[currentIndex];
  const totalQuestions = filteredQuestions.length;
  const progress = totalQuestions > 0 ? ((currentIndex + 1) / totalQuestions) * 100 : 0;

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    clearTimer();
    setTimeLeft(timerDuration);
    setTimerExpired(false);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearTimer();
          setTimerExpired(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [timerDuration, clearTimer]);

  // Auto-submit when timer expires
  useEffect(() => {
    if (timerExpired && !isAnswered && currentQuestion) {
      setIsAnswered(true);
      setAnswered((a) => a + 1);
      setShowExplanation(true);
    }
  }, [timerExpired, isAnswered, currentQuestion]);

  // Start/reset timer when question changes
  useEffect(() => {
    if (timerEnabled && !isAnswered) {
      startTimer();
    }
    return () => clearTimer();
  }, [currentIndex, timerEnabled, category]);

  useEffect(() => {
    setCurrentIndex(0);
    setSelectedAnswer("");
    setIsAnswered(false);
    setShowExplanation(false);
    setScore(0);
    setTotalPoints(0);
    setLastPointsEarned(null);
    setAnswered(0);
    setTimerExpired(false);
  }, [category]);

  const handleSubmitAnswer = () => {
    if (!selectedAnswer || !currentQuestion) return;
    clearTimer();
    setIsAnswered(true);
    setAnswered((a) => a + 1);
    if (parseInt(selectedAnswer) === currentQuestion.correctAnswer) {
      setScore((s) => s + 1);
      const basePoints = 10;
      const timeBonus = timerEnabled ? Math.ceil((timeLeft / timerDuration) * 5) : 0;
      const earned = basePoints + timeBonus;
      setTotalPoints((p) => p + earned);
      setLastPointsEarned(earned);
    } else {
      setLastPointsEarned(0);
    }
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer("");
      setIsAnswered(false);
      setShowExplanation(false);
      setTimerExpired(false);
      setLastPointsEarned(null);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      setSelectedAnswer("");
      setIsAnswered(false);
      setShowExplanation(false);
      setTimerExpired(false);
    }
  };

  const handleReset = () => {
    clearTimer();
    setCurrentIndex(0);
    setSelectedAnswer("");
    setIsAnswered(false);
    setShowExplanation(false);
    setScore(0);
    setTotalPoints(0);
    setLastPointsEarned(null);
    setAnswered(0);
    setTimerExpired(false);
  };

  const toggleTimer = () => {
    if (timerEnabled) {
      clearTimer();
      setTimerEnabled(false);
    } else {
      setTimerEnabled(true);
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const timerPercentage = timerDuration > 0 ? (timeLeft / timerDuration) * 100 : 0;

  const isCorrect = currentQuestion
    ? parseInt(selectedAnswer) === currentQuestion.correctAnswer
    : false;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center gap-4 px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" size="icon" onClick={() => navigate("/interview-mode")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1 min-w-0">
            <h1 className="text-xl font-bold truncate">Aptitude Practice</h1>
            <p className="text-xs text-muted-foreground truncate">Quantitative & Logical Reasoning</p>
          </div>
          <Badge variant="secondary" className="hidden sm:flex gap-1">
            <CheckCircle2 className="h-3 w-3" /> {score}/{answered} correct
          </Badge>
          <div className="flex items-center gap-2">
            <Select
              value={String(timerDuration)}
              onValueChange={(v) => {
                setTimerDuration(Number(v));
                setTimeLeft(Number(v));
              }}
            >
              <SelectTrigger className="w-[90px] h-8 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">30s</SelectItem>
                <SelectItem value="60">1 min</SelectItem>
                <SelectItem value="90">1.5 min</SelectItem>
                <SelectItem value="120">2 min</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant={timerEnabled ? "default" : "outline"}
              size="sm"
              onClick={toggleTimer}
              className="gap-1 h-8 text-xs"
            >
              {timerEnabled ? <TimerOff className="h-3.5 w-3.5" /> : <Timer className="h-3.5 w-3.5" />}
              <span className="hidden sm:inline">{timerEnabled ? "Stop" : "Timer"}</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="container px-4 sm:px-6 lg:px-8 py-6 max-w-3xl mx-auto">
        {/* Category Tabs */}
        <Tabs value={category} onValueChange={(v) => setCategory(v as Category)} className="mb-6">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="all" className="gap-1.5">
              <Brain className="h-4 w-4 hidden sm:block" /> All
            </TabsTrigger>
            <TabsTrigger value="quantitative" className="gap-1.5">
              <Calculator className="h-4 w-4 hidden sm:block" /> Quantitative
            </TabsTrigger>
            <TabsTrigger value="logical" className="gap-1.5">
              <Brain className="h-4 w-4 hidden sm:block" /> Logical
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Progress Bar */}
        <div className="mb-4 flex items-center gap-3">
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            Q {currentIndex + 1}/{totalQuestions}
          </span>
          <Progress value={progress} className="h-2 flex-1" />
          <Button variant="ghost" size="sm" onClick={handleReset} className="gap-1 text-muted-foreground">
            <RotateCcw className="h-3.5 w-3.5" /> Reset
          </Button>
        </div>

        {/* Score card (mobile) */}
        <div className="sm:hidden mb-4 flex items-center gap-2">
          <Badge variant="secondary" className="gap-1">
            <CheckCircle2 className="h-3 w-3" /> {score}/{answered} correct
          </Badge>
        </div>

        {/* Timer Display */}
        {timerEnabled && !isAnswered && (
          <div className="mb-4 flex items-center gap-3">
            <Clock className={`h-4 w-4 ${timeLeft <= 10 ? "text-destructive animate-pulse" : "text-muted-foreground"}`} />
            <div className="flex-1 relative h-3 rounded-full bg-secondary overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-1000 ${
                  timeLeft <= 10 ? "bg-destructive" : timerPercentage <= 30 ? "bg-yellow-500" : "bg-primary"
                }`}
                style={{ width: `${timerPercentage}%` }}
              />
            </div>
            <span className={`text-sm font-mono font-bold min-w-[3rem] text-right ${timeLeft <= 10 ? "text-destructive" : "text-foreground"}`}>
              {formatTime(timeLeft)}
            </span>
          </div>
        )}

        {timerExpired && !selectedAnswer && isAnswered && (
          <div className="mb-4 p-3 rounded-lg border border-destructive/20 bg-destructive/5 flex items-center gap-2">
            <TimerOff className="h-4 w-4 text-destructive" />
            <span className="text-sm text-destructive font-medium">Time's up! Moving on...</span>
          </div>
        )}

        {/* Question Card */}
        {currentQuestion && (
          <Card className="mb-6">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-base sm:text-lg leading-relaxed">
                  {currentQuestion.question}
                </CardTitle>
                <Badge variant="outline" className="shrink-0 text-xs">
                  {currentQuestion.category === "quantitative" ? "Quant" : "Logic"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <RadioGroup
                value={selectedAnswer}
                onValueChange={setSelectedAnswer}
                disabled={isAnswered}
                className="space-y-3"
              >
                {currentQuestion.options.map((option, idx) => {
                  let optionStyle = "";
                  if (isAnswered) {
                    if (idx === currentQuestion.correctAnswer) {
                      optionStyle = "border-green-500 bg-green-500/10";
                    } else if (parseInt(selectedAnswer) === idx && idx !== currentQuestion.correctAnswer) {
                      optionStyle = "border-destructive bg-destructive/10";
                    }
                  }
                  return (
                    <Label
                      key={idx}
                      htmlFor={`option-${idx}`}
                      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors hover:bg-accent/50 ${optionStyle} ${isAnswered ? "cursor-default" : ""}`}
                    >
                      <RadioGroupItem value={String(idx)} id={`option-${idx}`} />
                      <span className="text-sm">{option}</span>
                      {isAnswered && idx === currentQuestion.correctAnswer && (
                        <CheckCircle2 className="h-4 w-4 text-green-500 ml-auto shrink-0" />
                      )}
                      {isAnswered && parseInt(selectedAnswer) === idx && idx !== currentQuestion.correctAnswer && (
                        <XCircle className="h-4 w-4 text-destructive ml-auto shrink-0" />
                      )}
                    </Label>
                  );
                })}
              </RadioGroup>

              {!isAnswered && (
                <Button onClick={handleSubmitAnswer} disabled={!selectedAnswer} className="w-full">
                  Submit Answer
                </Button>
              )}

              {/* Explanation */}
              {showExplanation && (
                <div className={`p-4 rounded-lg border ${isCorrect ? "bg-green-500/5 border-green-500/20" : "bg-destructive/5 border-destructive/20"}`}>
                  <p className="font-semibold text-sm mb-1 flex items-center gap-2">
                    {isCorrect ? (
                      <><CheckCircle2 className="h-4 w-4 text-green-500" /> Correct!</>
                    ) : (
                      <><XCircle className="h-4 w-4 text-destructive" /> Incorrect</>
                    )}
                  </p>
                  <p className="text-sm text-muted-foreground">{currentQuestion.explanation}</p>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between pt-2">
                <Button variant="outline" onClick={handlePrev} disabled={currentIndex === 0} className="gap-1">
                  <ChevronLeft className="h-4 w-4" /> Prev
                </Button>
                <Button variant="outline" onClick={handleNext} disabled={currentIndex >= totalQuestions - 1} className="gap-1">
                  Next <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AptitudePractice;
