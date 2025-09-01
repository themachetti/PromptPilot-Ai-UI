import { ArrowRight, Bot, Calendar, BarChart3, MessageSquare, Sparkles, Users, Shield, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-image.jpg";

const Landing = () => {
  const features = [
    {
      icon: Bot,
      title: "AI Content Generation", 
      description: "Generate high-quality, engaging content for any platform in seconds"
    },
    {
      icon: Target,
      title: "Content Repurposing & Transformation",
      description: "Turn one piece of content into optimized posts for every platform"
    },
    {
      icon: MessageSquare,
      title: "Brand Voice Memory",
      description: "AI learns and maintains your unique brand voice across all content"
    },
    {
      icon: Sparkles,
      title: "Caption & Hook Optimization",
      description: "Craft attention-grabbing captions and hooks that stop the scroll"
    },
    {
      icon: Calendar,
      title: "Multi-Platform Scheduling",
      description: "Schedule optimized posts across TikTok, Instagram, LinkedIn, and Twitter"
    },
    {
      icon: BarChart3,
      title: "Analytics & Performance",
      description: "Track engagement, growth, and performance with detailed insights"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together seamlessly with team members and clients"
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Enterprise-grade security with full control over your content"
    }
  ];

  const stats = [
    { number: "80%", label: "Time Saved" },
    { number: "3x", label: "More Engagement" },
    { number: "5+", label: "Platforms Supported" },
    { number: "24/7", label: "AI Assistant" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-2 shadow-lg ring-1 ring-primary/10">
              <img 
                src="/lovable-uploads/3f420088-d9e7-4b55-a36b-55a4bb2021b0.png" 
                alt="PromptPilot AI" 
                className="w-full h-full object-contain drop-shadow-sm"
              />
            </div>
            <span className="text-2xl font-bold text-gradient drop-shadow-sm">PromptPilot AI</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button className="btn-ai-primary" onClick={() => window.location.href = '/app/dashboard'}>
              Get Started <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI-Powered Content Co-Pilot
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Your AI-Powered{" "}
                  <span className="text-gradient">Content Co-Pilot</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  PromptPilot AI doesn't just schedule your posts — it creates, optimizes, and transforms your content for maximum engagement across TikTok, Instagram, LinkedIn, and Twitter.
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg font-semibold text-foreground">
                  🚀 Save time, increase quality and consistency, and grow your audience by automating the entire content lifecycle.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="btn-ai-primary" onClick={() => window.location.href = '/app/dashboard'}>
                    Start Creating Content
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="btn-ai-secondary">
                    Watch Demo
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <img 
                src={heroImage} 
                alt="PromptPilot AI Dashboard" 
                className="relative rounded-3xl shadow-2xl float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              More Than Just a{" "}
              <span className="text-gradient">Social Media Scheduler</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              PromptPilot AI is your intelligent content assistant that takes one piece of content and transforms it into a suite of optimized posts, complete with platform-specific formatting, engaging hooks, and relevant hashtags.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="glass pulse-glow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Smart Content Creation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Feed it a video, blog, or idea, and watch as PromptPilot automatically crafts compelling content tailored for each platform's unique audience and algorithm.
                </p>
              </CardContent>
            </Card>

            <Card className="glass pulse-glow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Platform Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Each post is optimized for its specific platform — from TikTok's trending hooks to LinkedIn's professional tone, ensuring maximum engagement everywhere.
                </p>
              </CardContent>
            </Card>

            <Card className="glass pulse-glow">
              <CardHeader>
                <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-success" />
                </div>
                <CardTitle>Consistent Brand Voice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your unique brand voice is maintained across all platforms and posts, so your audience always feels like it's authentically you speaking.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Powerful Features for{" "}
              <span className="text-gradient">Content Success</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to create, optimize, schedule, and analyze your social media content with AI-powered precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-background/90"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-xl text-white/80">
              Join thousands of creators and businesses who are already using PromptPilot AI to create better content in less time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-2 shadow-lg ring-1 ring-primary/10">
                  <img 
                    src="/lovable-uploads/3f420088-d9e7-4b55-a36b-55a4bb2021b0.png" 
                    alt="PromptPilot AI" 
                    className="w-full h-full object-contain drop-shadow-sm"
                  />
                </div>
                <span className="text-xl font-bold text-gradient drop-shadow-sm">PromptPilot AI</span>
              </div>
              <p className="text-muted-foreground">
                Your AI-powered content co-pilot for social media success.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Features</div>
                <div>Pricing</div>
                <div>API</div>
                <div>Integrations</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>About</div>
                <div>Blog</div>
                <div>Careers</div>
                <div>Contact</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Help Center</div>
                <div>Community</div>
                <div>Status</div>
                <div>Privacy</div>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            © 2024 PromptPilot AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;