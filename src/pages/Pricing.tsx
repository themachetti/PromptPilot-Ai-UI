import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Star } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const Pricing = () => {
  const plans = [
    {
      name: "Free Plan",
      subtitle: "Starter",
      description: "Perfect for individuals and small businesses getting started.",
      price: "$0",
      period: "/month",
      features: [
        "5 posts per month",
        "1 connected social platform",
        "Basic AI content generation",
        "Basic analytics"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Pro Plan",
      subtitle: "For Creators",
      description: "Ideal for content creators and growing brands.",
      price: "$29",
      period: "/month",
      features: [
        "200 posts per month",
        "Up to 5 connected platforms",
        "Brand Voice Memory",
        "Content repurposing & AI hashtags",
        "Full content calendar & scheduler",
        "Engagement booster"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Business Plan",
      subtitle: "For Teams",
      description: "Built for agencies and teams scaling their content.",
      price: "$79",
      period: "/month",
      features: [
        "Unlimited posts",
        "15 connected platforms",
        "Advanced analytics dashboard",
        "A/B testing & ROI tracking",
        "Team collaboration (5 members)",
        "Priority support"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Enterprise Plan",
      subtitle: "Custom Solutions",
      description: "For organizations needing custom workflows and scale.",
      price: "Custom",
      period: "",
      features: [
        "Unlimited everything",
        "Custom integrations & white-label",
        "Dedicated account manager",
        "API access for enterprise workflows"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  const faqs = [
    {
      question: "What counts as a 'post'?",
      answer: "A post is counted each time you generate, schedule, or publish content for one social platform."
    },
    {
      question: "Can I change plans later?",
      answer: "Yes, you can upgrade or downgrade at any time from your account settings."
    },
    {
      question: "Do you offer annual billing?",
      answer: "Yes! Save 20% with annual billing on all paid plans."
    },
    {
      question: "Is there a contract?",
      answer: "No, all plans are month-to-month. Cancel anytime."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards and PayPal."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade security and never share your data."
    }
  ];

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
            <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
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
              Pricing Plans
            </h1>
            <p className="text-xl text-white/80">
              We've designed simple, transparent plans that scale with you.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative glass ${plan.popular ? 'ring-2 ring-primary shadow-glow' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">{plan.subtitle}</CardDescription>
                  <p className="text-muted-foreground">{plan.description}</p>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'btn-ai-primary' : ''}`}
                    variant={plan.buttonVariant}
                    onClick={() => window.location.href = '/app/dashboard'}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="glass">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
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
              Ready to Transform Your Content?
            </h2>
            <p className="text-xl text-white/80">
              Join thousands of creators using PromptPilot AI to scale their content effortlessly.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
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

export default Pricing;