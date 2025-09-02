import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Target, Zap, BarChart3, Calendar, Users, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 shadow-lg ring-1 ring-primary/10">
              <img 
                src="/lovable-uploads/daba77a7-fce2-46ec-88fd-082f343fcb5b.png" 
                alt="PromptPilot AI" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-bold text-gradient drop-shadow-sm">PromptPilot AI</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <a href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => window.location.href = '/login'}>Sign In</Button>
            <Button className="btn-ai-primary" onClick={() => window.location.href = '/app/dashboard'}>
              Get Started <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-background/90"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              About PromptPilot AI
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Redefining How the World Creates Content
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            {/* Introduction */}
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-xl text-muted-foreground leading-relaxed">
                At PromptPilot AI, we believe great content shouldn't require endless hours. That's why we built an AI-powered platform that helps creators, marketers, and businesses automate their social media content—from ideation to publishing—so they can focus on what truly matters: creativity and growth.
              </p>
            </div>

            {/* Our Story */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-3xl font-bold">Our Story</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  PromptPilot AI was founded by a team of content creators, engineers, and marketers who were tired of the repetitive, time-consuming tasks that come with managing social media. We saw firsthand how much energy was wasted rewriting captions, researching hashtags, and manually scheduling posts—instead of crafting meaningful content. So we set out to build a smarter solution.
                </p>
              </CardContent>
            </Card>

            {/* What We Do */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-3xl font-bold">What We Do</CardTitle>
                <CardDescription className="text-lg">
                  PromptPilot AI is more than a social media scheduler. It's your content co-pilot. Using advanced artificial intelligence, we help you:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg">Generate</h4>
                      <p className="text-muted-foreground">engaging captions, hooks, and ideas in seconds</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg">Repurpose</h4>
                      <p className="text-muted-foreground">one piece of content across all major platforms</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg">Maintain</h4>
                      <p className="text-muted-foreground">a consistent brand voice everywhere</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg">Schedule and publish</h4>
                      <p className="text-muted-foreground">content effortlessly</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <BarChart3 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg">Track performance</h4>
                      <p className="text-muted-foreground">with actionable analytics</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg">Team collaboration</h4>
                      <p className="text-muted-foreground">for businesses of all sizes</p>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mt-6">
                  Whether you're a solo creator or part of a team, PromptPilot helps you work smarter—not harder.
                </p>
              </CardContent>
            </Card>

            {/* Our Mission */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-3xl font-bold">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower creators and businesses to produce high-quality content efficiently, authentically, and at scale. We're here to remove the friction from content creation so you can share your voice with the world—without burnout.
                </p>
              </CardContent>
            </Card>

            {/* Join Thousands */}
            <Card className="glass bg-gradient-primary text-white">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white">Join Thousands of Creators</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  Teams and individuals around the world use PromptPilot to streamline their workflow, strengthen their brand, and grow their audience. You focus on the idea—we'll handle the rest.
                </p>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Start Creating Smarter
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 shadow-lg ring-1 ring-primary/10">
                <img 
                  src="/lovable-uploads/daba77a7-fce2-46ec-88fd-082f343fcb5b.png" 
                  alt="PromptPilot AI" 
                  className="w-full h-full object-cover"
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

export default About;