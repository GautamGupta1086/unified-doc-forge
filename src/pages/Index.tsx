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
  Cloud,
  Smartphone,
  Plus,
  Minus
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();
  const [headlineIndex, setHeadlineIndex] = useState(0);
  
  const headlines = [
    { text: "Write", highlight: false },
    { text: "Diagram", highlight: false },
    { text: "Write, Diagram, and Collaborate", highlight: true }
  ];

  useEffect(() => {
    if (headlineIndex < 2) {
      const timer = setTimeout(() => {
        setHeadlineIndex(prev => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [headlineIndex]);

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

  const testimonials = [
    {
      quote: "The diagrams-as-code feature is a game-changer. Our documentation and system architecture are finally in sync.",
      author: "Project Lead",
      role: "Beta Tester"
    },
    {
      quote: "Finally, our user flows and text specs are in one place. The real-time sync is incredibly fast.",
      author: "UX Designer",
      role: "Beta Tester"
    }
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
          <Badge className="mb-6 bg-secondary text-secondary-foreground border-primary/20 animate-fade-in text-base px-4 py-2 shadow-glow">
            <Zap className="h-4 w-4 mr-1" />
            The Future of Collaborative Documentation
          </Badge>
          
          <h1 className="text-6xl font-bold mb-6 animate-fade-in-up min-h-[5rem]">
            <span className="inline-block transition-all duration-500">
              {headlines[headlineIndex].highlight ? (
                <>
                  {headlines[headlineIndex].text.split('Collaborate')[0]}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">Collaborate</span>
                </>
              ) : (
                headlines[headlineIndex].text
              )}
            </span>
            {" in Real-Time"}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            CollabBoard unifies text editing, visual diagramming, and version control into one powerful platform. 
            No more juggling tools—just seamless teamwork.
          </p>
          
          <div className="flex items-center justify-center gap-6 mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-4">
                <Button variant="hero" size="lg" onClick={() => navigate('/editor')}>
                  Start Creating Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="glass" size="lg">
                  <Cloud className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-2 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <p className="text-sm text-muted-foreground font-medium">Or try our native Android app</p>
              <div className="p-3 bg-card border-2 border-primary/20 rounded-xl shadow-soft hover:shadow-glow transition-all">
                <div className="w-24 h-24 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Smartphone className="h-12 w-12 text-primary-foreground" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Scan to download</p>
            </div>
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

        {/* Hero Image/Preview - Animated Demo */}
        <div className="mt-16 max-w-6xl mx-auto animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-20 rounded-3xl"></div>
            
            {/* Browser Window Frame */}
            <div className="relative rounded-2xl border border-border/50 bg-card shadow-glow overflow-hidden">
              {/* Browser Chrome */}
              <div className="bg-muted/30 border-b border-border/50 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                </div>
                <div className="flex-1 bg-background/50 rounded px-3 py-1 text-xs text-muted-foreground ml-2">
                  collabboard.app/project/demo
                </div>
              </div>
              
              {/* Content Area */}
              <div className="p-8 space-y-6">
                {/* Animated Cursors */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div 
                        key={i} 
                        className="h-8 w-8 rounded-full border-2 border-background shadow-soft animate-pulse"
                        style={{
                          backgroundColor: `hsl(${i * 90 + 200}, 60%, 60%)`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground animate-pulse">4 people editing live</span>
                </div>
                
                <div className="space-y-3 relative">
                  {/* Real-time typing simulation */}
                  <div className="relative">
                    <div className="h-8 w-3/4 bg-muted rounded-lg flex items-center px-3 text-sm font-semibold">
                      ## Project Goals
                    </div>
                    <div className="absolute right-1/4 -top-2 w-4 h-6 bg-primary animate-pulse" 
                         style={{clipPath: 'polygon(0 0, 0 100%, 100% 50%)'}}></div>
                  </div>
                  
                  <div className="h-6 w-full bg-muted/70 rounded-lg animate-pulse" style={{animationDelay: '0.2s'}} />
                  <div className="h-6 w-5/6 bg-muted/70 rounded-lg animate-pulse" style={{animationDelay: '0.4s'}} />
                  
                  {/* Diagram Section with Code */}
                  <div className="my-8 p-6 bg-secondary/30 rounded-xl border border-primary/20 relative overflow-hidden">
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="text-xs">
                        <Sparkles className="h-3 w-3 mr-1" />
                        Live Sync
                      </Badge>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Mermaid Code */}
                      <div>
                        <div className="text-xs text-muted-foreground mb-3 font-mono font-semibold">Mermaid Code</div>
                        <div className="bg-background/50 rounded-lg p-3 font-mono text-xs space-y-1">
                          <div className="text-muted-foreground">graph TD</div>
                          <div className="text-muted-foreground">  A[Start] {'->'} B[Process]</div>
                          <div className="text-muted-foreground">  B {'->'} C[End]</div>
                          <div className="text-primary animate-pulse">  C {'->'} D[Deploy]</div>
                        </div>
                      </div>
                      
                      {/* Visual Diagram */}
                      <div>
                        <div className="text-xs text-muted-foreground mb-3 font-mono font-semibold">Visual Output</div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 animate-fade-in">
                            <div className="h-12 w-20 bg-primary/20 border-2 border-primary rounded flex items-center justify-center text-xs font-medium">
                              Start
                            </div>
                            <ArrowRight className="h-4 w-4 text-primary" />
                            <div className="h-12 w-20 bg-primary/20 border-2 border-primary rounded flex items-center justify-center text-xs font-medium">
                              Process
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-14"></div>
                            <ArrowRight className="h-4 w-4 text-primary rotate-90" />
                          </div>
                          <div className="flex items-center gap-2 animate-fade-in" style={{animationDelay: '0.5s'}}>
                            <div className="h-12 w-20 bg-primary/20 border-2 border-primary rounded flex items-center justify-center text-xs font-medium">
                              End
                            </div>
                            <ArrowRight className="h-4 w-4 text-primary animate-pulse" />
                            <div className="h-12 w-20 bg-accent/40 border-2 border-accent rounded flex items-center justify-center text-xs font-medium animate-pulse">
                              Deploy
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* AI Assistant Demo */}
                  <div className="relative p-4 bg-accent/10 border border-accent/30 rounded-lg animate-fade-in" style={{animationDelay: '1s'}}>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-accent rounded-lg">
                        <Sparkles className="h-4 w-4 text-accent-foreground animate-pulse" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="text-xs font-semibold text-accent-foreground">AI Assistant</div>
                        <div className="text-sm text-muted-foreground">
                          Summarized 3 pages into key points:
                        </div>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-3 w-3 mt-0.5 text-primary" />
                            Real-time collaboration with offline support
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-3 w-3 mt-0.5 text-primary" />
                            Diagrams stored as version-controlled code
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-3 w-3 mt-0.5 text-primary" />
                            Unified search across all content
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
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
          {features.map((feature, idx) => {
            const isDiagramFeature = feature.title === "Diagrams as Code";
            return (
              <div 
                key={idx}
                className={`group p-6 rounded-xl border transition-all duration-300 hover:shadow-medium animate-fade-in-up ${
                  isDiagramFeature 
                    ? 'bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 border-primary/30 shadow-glow' 
                    : 'bg-gradient-card border-border/50 hover:border-primary/50'
                }`}
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 shadow-soft group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{feature.description}</p>
                
                {/* Micro Demos */}
                {feature.title === "Version History" && (
                  <div className="mt-4 p-3 bg-background/50 rounded-lg border border-border/50 font-mono text-xs space-y-1">
                    <div className="flex items-center gap-2 text-green-500">
                      <Plus className="h-3 w-3" />
                      <span>Added new section</span>
                    </div>
                    <div className="flex items-center gap-2 text-red-500">
                      <Minus className="h-3 w-3" />
                      <span>Removed old paragraph</span>
                    </div>
                  </div>
                )}
                
                {isDiagramFeature && (
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="p-2 bg-background/50 rounded border border-primary/20 font-mono text-[10px] text-muted-foreground">
                      graph TD;<br/>
                      A--&gt;B;
                    </div>
                    <div className="p-2 bg-background/50 rounded border border-primary/20 flex items-center justify-center gap-1">
                      <div className="w-8 h-8 border-2 border-primary rounded-sm flex items-center justify-center text-[8px]">A</div>
                      <ArrowRight className="h-3 w-3 text-primary" />
                      <div className="w-8 h-8 border-2 border-primary rounded-sm flex items-center justify-center text-[8px]">B</div>
                    </div>
                  </div>
                )}
                
                {feature.title === "Unified Search" && (
                  <div className="mt-4 p-3 bg-background/50 rounded-lg border border-border/50 space-y-2">
                    <div className="flex items-center gap-2 p-2 bg-muted/30 rounded text-xs">
                      <FileText className="h-3 w-3 text-primary" />
                      <span className="text-muted-foreground">Document result</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-muted/30 rounded text-xs">
                      <Workflow className="h-3 w-3 text-primary" />
                      <span className="text-muted-foreground">Diagram result</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-muted/30 rounded text-xs">
                      <Users className="h-3 w-3 text-primary" />
                      <span className="text-muted-foreground">Comment result</span>
                    </div>
                  </div>
                )}
                
                {feature.title === "AI Assistant" && (
                  <div className="mt-4 p-3 bg-accent/10 rounded-lg border border-accent/30 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-accent animate-pulse" />
                    <span className="text-xs text-accent-foreground">Summarized 3 pages</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-xl bg-card border border-border/50 shadow-soft animate-fade-in-up"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="mb-4">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Sparkles key={i} className="h-4 w-4 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground italic">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <div className="relative p-12 rounded-2xl bg-gradient-card border border-primary/20 shadow-glow">
              <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-2xl"></div>
              <div className="relative">
                <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Experience the future of collaborative documentation today.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Button variant="hero" size="lg" onClick={() => navigate('/editor')}>
                    Try Demo Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="lg" className="border border-primary/50 hover:bg-primary/10">
                    Schedule a Demo
                  </Button>
                </div>
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
