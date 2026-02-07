import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Building2, ArrowLeft } from "lucide-react";

export default function CompanyAuth() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({ companyName: "", email: "", password: "", confirmPassword: "" });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({
      title: "Company Login",
      description: "Company portal is coming soon! We'll notify you when it's ready.",
    });
    setIsLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (signUpData.password !== signUpData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure both passwords match.",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({
      title: "Account Requested!",
      description: "Your company account request has been submitted. We'll be in touch shortly.",
    });
    setSignUpData({ companyName: "", email: "", password: "", confirmPassword: "" });
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 py-6">
        <div className="container px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">PrepMaster</span>
          </Link>
          <Link to="/auth">
            <Button variant="outline" size="sm">Student Login</Button>
          </Link>
        </div>
      </div>

      <Card className="w-full max-w-md shadow-large">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-2">
            <div className="p-3 bg-primary/10 rounded-full">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            PrepMaster
          </CardTitle>
          <CardDescription>Company Portal — Sign in or create your company account</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="signin">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Work Email</Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="you@company.com"
                    value={loginData.email}
                    onChange={(e) => setLoginData((p) => ({ ...p, email: e.target.value }))}
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    value={loginData.password}
                    onChange={(e) => setLoginData((p) => ({ ...p, password: e.target.value }))}
                    required
                    disabled={isLoading}
                  />
                </div>
                <Button type="submit" className="w-full" variant="gradient" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input
                    id="company-name"
                    placeholder="Acme Inc."
                    value={signUpData.companyName}
                    onChange={(e) => setSignUpData((p) => ({ ...p, companyName: e.target.value }))}
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Work Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="you@company.com"
                    value={signUpData.email}
                    onChange={(e) => setSignUpData((p) => ({ ...p, email: e.target.value }))}
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    value={signUpData.password}
                    onChange={(e) => setSignUpData((p) => ({ ...p, password: e.target.value }))}
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="••••••••"
                    value={signUpData.confirmPassword}
                    onChange={(e) => setSignUpData((p) => ({ ...p, confirmPassword: e.target.value }))}
                    required
                    disabled={isLoading}
                  />
                </div>
                <Button type="submit" className="w-full" variant="gradient" disabled={isLoading}>
                  {isLoading ? "Creating account..." : "Sign Up"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
