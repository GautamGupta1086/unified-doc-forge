import { useEffect, useRef } from "react";
import mermaid from "mermaid";
import { Card } from "@/components/ui/card";

interface DiagramViewProps {
  showCode: boolean;
}

const DiagramView = ({ showCode }: DiagramViewProps) => {
  const diagramRef = useRef<HTMLDivElement>(null);
  
  const mermaidCode = `graph TD
    A[Project Planning] --> B{Requirements Clear?}
    B -->|Yes| C[Design Phase]
    B -->|No| D[Gather Requirements]
    D --> B
    C --> E[Development Sprint]
    E --> F[Code Review]
    F --> G{Tests Pass?}
    G -->|Yes| H[Deploy to Staging]
    G -->|No| E
    H --> I[QA Testing]
    I --> J{Approved?}
    J -->|Yes| K[Production Deploy]
    J -->|No| E
    K --> L[Monitor & Support]
    L --> M[Retrospective]
    M --> A
    
    style A fill:#667eea,stroke:#764ba2,stroke-width:2px,color:#fff
    style K fill:#667eea,stroke:#764ba2,stroke-width:2px,color:#fff
    style C fill:#f093fb,stroke:#f5576c,stroke-width:2px,color:#fff
    style E fill:#4facfe,stroke:#00f2fe,stroke-width:2px,color:#fff`;

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'base',
      themeVariables: {
        primaryColor: '#667eea',
        primaryTextColor: '#fff',
        primaryBorderColor: '#764ba2',
        lineColor: '#667eea',
        secondaryColor: '#f093fb',
        tertiaryColor: '#4facfe',
      }
    });

    if (diagramRef.current && !showCode) {
      diagramRef.current.innerHTML = '';
      const diagramId = `mermaid-${Date.now()}`;
      diagramRef.current.innerHTML = `<div class="mermaid" id="${diagramId}">${mermaidCode}</div>`;
      mermaid.run({
        querySelector: `#${diagramId}`,
      });
    }
  }, [showCode, mermaidCode]);

  if (showCode) {
    return (
      <div className="max-w-4xl mx-auto px-8 py-12">
        <Card className="p-6 bg-muted/30">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Mermaid Diagram Code</h3>
            <span className="text-xs text-muted-foreground font-mono">diagram.mmd</span>
          </div>
          <pre className="bg-card p-4 rounded-lg overflow-x-auto border border-border">
            <code className="text-sm font-mono text-foreground">
              {mermaidCode}
            </code>
          </pre>
          <p className="text-sm text-muted-foreground mt-4">
            This diagram is stored as text and can be version-controlled, searched, and collaborated on in real-time.
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-8 py-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Development Workflow</h2>
        <p className="text-muted-foreground">
          Visualize your team's processes with interactive, version-controlled diagrams
        </p>
      </div>
      
      <Card className="p-8 bg-gradient-card border-border/50">
        <div ref={diagramRef} className="flex items-center justify-center min-h-[500px]" />
      </Card>

      <div className="mt-6 text-sm text-muted-foreground text-center">
        <p>💡 Tip: Toggle to code view to see the Mermaid syntax behind this diagram</p>
      </div>
    </div>
  );
};

export default DiagramView;
