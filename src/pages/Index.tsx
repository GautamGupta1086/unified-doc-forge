import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Workflow, 
  Users, 
  History, 
  Search, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Cloud
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: "Real-Time Collaboration",
      description: "Work together seamlessly with live cursors, presence indicators, and instant sync - even offline."
    },
    {
      icon: Workflow,
      title: "Diagrams as Code",
      description: "Create flowcharts and diagrams with Mermaid. Version-controlled, searchable, and mergeable."
    },
    {
      icon: Search,
      title: "Unified Search",
      description: "Find anything across documents, diagrams, and comments with AI-powered semantic search."
    },
    {
      icon: History,
      title: "Version History",
      description: "Track every change with detailed diffs. Roll back to any version with one click."
    },
    {
      icon: Shield,
      title: "Fine-Grained Permissions",
      description: "Control access at document and section level with role-based security."
    },
    {
      icon: Sparkles,
      title: "AI Assistant",
      description: "Voice transcription, smart suggestions, and diagram generation powered by AI."
    }
  ];

  const benefits = [
    "No more context switching between tools",
    "Offline-first with automatic conflict resolution",
    "Mobile-optimized for work anywhere",
    "Enterprise-grade security and compliance"
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation */}
      <nav className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-soft">
                <FileText className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                CollabBoard
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">Features</Button>
              <Button variant="ghost" size="sm">Pricing</Button>
              <Button variant="ghost" size="sm">Docs</Button>
              <Button variant="outline" size="sm">Sign In</Button>
              <Button variant="hero" size="sm" onClick={() => navigate('/editor')}>
                Try Demo <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-secondary text-secondary-foreground border-primary/20 animate-fade-in">
            <Zap className="h-3 w-3 mr-1" />
            The Future of Collaborative Documentation
          </Badge>
          
          <h1 className="text-6xl font-bold mb-6 animate-fade-in-up">
            Write, Diagram, and
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Collaborate </span>
            in Real-Time
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            CollabBoard unifies text editing, visual diagramming, and version control into one powerful platform. 
            No more juggling tools—just seamless teamwork.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <Button variant="hero" size="lg" onClick={() => navigate('/editor')}>
              Start Creating Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="glass" size="lg">
              <Cloud className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-in" style={{animationDelay: '0.3s'}}>
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {benefit}
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image/Preview */}
        <div className="mt-16 max-w-6xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-20 rounded-3xl"></div>
            <div className="relative rounded-2xl border border-border/50 bg-card shadow-glow overflow-hidden">
              <div className="p-8 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div 
                        key={i} 
                        className="h-8 w-8 rounded-full border-2 border-background shadow-soft"
                        style={{
                          backgroundColor: `hsl(${i * 90 + 200}, 60%, 60%)`,
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">4 people editing</span>
                </div>
                
                <div className="space-y-3">
                  <div className="h-8 w-3/4 bg-muted rounded-lg animate-pulse" />
                  <div className="h-6 w-full bg-muted/70 rounded-lg animate-pulse" style={{animationDelay: '0.2s'}} />
                  <div className="h-6 w-5/6 bg-muted/70 rounded-lg animate-pulse" style={{animationDelay: '0.4s'}} />
                  
                  <div className="my-8 p-6 bg-secondary/30 rounded-xl border border-primary/20">
                    <div className="text-xs text-muted-foreground mb-3 font-mono">Mermaid Diagram</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="h-12 w-24 bg-primary/20 border-2 border-primary rounded flex items-center justify-center text-xs font-medium">
                          Start
                        </div>
                        <ArrowRight className="h-4 w-4 text-primary" />
                        <div className="h-12 w-24 bg-primary/20 border-2 border-primary rounded flex items-center justify-center text-xs font-medium">
                          Process
                        </div>
                        <ArrowRight className="h-4 w-4 text-primary" />
                        <div className="h-12 w-24 bg-primary/20 border-2 border-primary rounded flex items-center justify-center text-xs font-medium">
                          End
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-6 w-4/5 bg-muted/70 rounded-lg animate-pulse" style={{animationDelay: '0.6s'}} />
                  <div className="h-6 w-full bg-muted/70 rounded-lg animate-pulse" style={{animationDelay: '0.8s'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-accent-foreground">
            Powerful Features
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Everything You Need to Collaborate</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for teams that value both speed and structure. From startups to enterprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="group p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-medium animate-fade-in-up"
              style={{animationDelay: `${idx * 0.1}s`}}
            >
              <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 shadow-soft group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-12 rounded-2xl bg-gradient-card border border-primary/20 shadow-glow">
            <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-2xl"></div>
            <div className="relative">
              <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of teams already collaborating smarter with CollabBoard.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button variant="hero" size="lg" onClick={() => navigate('/editor')}>
                  Try Demo Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <FileText className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">CollabBoard</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 CollabBoard. Built for better collaboration.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
