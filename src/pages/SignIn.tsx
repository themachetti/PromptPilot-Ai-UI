import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github, Apple, Mail, ArrowLeft } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const SignIn = () => {
  const handleProvider = (provider: string) => {
    // Placeholder: navigate to app after mock login
    window.location.href = '/app/dashboard';
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Header with back button and theme toggle */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => window.history.back()}
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Button>
        <ThemeToggle />
      </div>
      
      <Card className="w-full max-w-md glass">
        <CardHeader className="text-center space-y-3">
          <div className="mx-auto w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 shadow-lg ring-1 ring-primary/10">
            <img src="/lovable-uploads/daba77a7-fce2-46ec-88fd-082f343fcb5b.png" alt="PromptPilot AI" className="w-full h-full object-cover" />
          </div>
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>Sign in to continue to PromptPilot AI</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button className="w-full btn-ai-primary" onClick={() => handleProvider('google')}>
            <img src="https://www.gstatic.com/images/branding/product/1x/gsa_64dp.png" alt="Google" className="w-5 h-5 mr-2" />
            Continue with Google
          </Button>
          <Button variant="outline" className="w-full" onClick={() => handleProvider('github')}>
            <Github className="w-5 h-5 mr-2" />
            Continue with GitHub
          </Button>
          <Button variant="outline" className="w-full" onClick={() => handleProvider('apple')}>
            <Apple className="w-5 h-5 mr-2" />
            Continue with Apple
          </Button>

          <div className="relative py-2">
            <Separator />
          </div>

          <Button variant="outline" className="w-full" onClick={() => handleProvider('email')}>
            <Mail className="w-5 h-5 mr-2" />
            Continue with Email
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
