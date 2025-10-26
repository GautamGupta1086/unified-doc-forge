import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Collaborator {
  id: number;
  name: string;
  avatar: string;
  color: string;
  status: string;
}

interface EditorCanvasProps {
  collaborators: Collaborator[];
}

const EditorCanvas = ({ collaborators }: EditorCanvasProps) => {
  const [content] = useState(`
# Product Roadmap Q1 2025

## Overview
This document outlines our strategic initiatives and feature development plans for Q1 2025. Our focus is on enhancing collaboration features and improving platform performance.

## Key Objectives
- **Real-time Collaboration**: Implement CRDT-based conflict resolution
- **Diagram Integration**: Launch Mermaid diagram support
- **AI Features**: Beta release of AI assistant capabilities
- **Performance**: Reduce sync latency by 50%

## Timeline

### January 2025
- Complete CRDT implementation
- Launch beta testing program
- Begin diagram editor development

### February 2025
- Roll out real-time editing to all users
- Integrate Mermaid diagram rendering
- AI assistant private beta

### March 2025
- Public release of AI features
- Performance optimization sprint
- Security audit and compliance review

## Success Metrics
- User engagement: +40%
- Collaboration sessions: +60%
- Platform performance: 50% faster sync
- User satisfaction: 4.5+ stars

---

*Last updated by Alice Chen - 2 minutes ago*
  `.trim());

  const activeCollaborators = collaborators.filter(c => c.status === "editing");

  return (
    <div className="max-w-4xl mx-auto px-8 py-12 relative">
      {/* Collaboration Indicators */}
      {activeCollaborators.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-2">
          {activeCollaborators.map((collab) => (
            <Badge 
              key={collab.id}
              variant="outline"
              className="animate-pulse"
              style={{ 
                borderColor: collab.color,
                backgroundColor: `${collab.color}15`
              }}
            >
              <Avatar className="h-4 w-4 mr-2" style={{ backgroundColor: collab.color }}>
                <AvatarFallback className="text-[8px] text-white">
                  {collab.avatar}
                </AvatarFallback>
              </Avatar>
              <span style={{ color: collab.color }}>{collab.name} is editing</span>
            </Badge>
          ))}
        </div>
      )}

      {/* Editor Content */}
      <div className="prose prose-lg max-w-none">
        <div className="space-y-6">
          {content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('# ')) {
              return (
                <h1 key={idx} className="text-4xl font-bold text-foreground mb-6">
                  {paragraph.slice(2)}
                </h1>
              );
            }
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={idx} className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  {paragraph.slice(3)}
                </h2>
              );
            }
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-xl font-semibold text-foreground mt-6 mb-3">
                  {paragraph.slice(4)}
                </h3>
              );
            }
            if (paragraph.startsWith('- ')) {
              const lines = paragraph.split('\n');
              return (
                <ul key={idx} className="space-y-2 my-4">
                  {lines.map((line, i) => (
                    <li key={i} className="text-foreground ml-4">
                      {line.startsWith('- **') ? (
                        <>
                          <strong>{line.split('**')[1]}</strong>
                          {line.split('**')[2]}
                        </>
                      ) : (
                        line.slice(2)
                      )}
                    </li>
                  ))}
                </ul>
              );
            }
            if (paragraph.startsWith('---')) {
              return <hr key={idx} className="my-8 border-border" />;
            }
            if (paragraph.startsWith('*')) {
              return (
                <p key={idx} className="text-sm text-muted-foreground italic">
                  {paragraph.slice(1, -1)}
                </p>
              );
            }
            return (
              <p key={idx} className="text-foreground leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>

      {/* Simulated Cursor Positions */}
      {activeCollaborators.slice(0, 2).map((collab, idx) => (
        <div
          key={collab.id}
          className="absolute pointer-events-none animate-pulse"
          style={{
            top: `${200 + idx * 150}px`,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <div 
            className="h-6 w-0.5 animate-pulse"
            style={{ backgroundColor: collab.color }}
          />
          <Badge 
            className="mt-1 text-xs"
            style={{ 
              backgroundColor: collab.color,
              color: 'white'
            }}
          >
            {collab.name}
          </Badge>
        </div>
      ))}
    </div>
  );
};

export default EditorCanvas;
