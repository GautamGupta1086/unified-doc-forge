import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitBranch, RotateCcw, Eye } from "lucide-react";

const VersionHistory = () => {
  const versions = [
    {
      id: "v2.4",
      title: "Timeline updates",
      user: { name: "Alice Chen", avatar: "AC", color: "hsl(200, 60%, 60%)" },
      time: "18 min ago",
      changes: "+12, -3 lines",
      isCurrent: true,
    },
    {
      id: "v2.3",
      title: "Added success metrics",
      user: { name: "Carol Davis", avatar: "CD", color: "hsl(120, 60%, 60%)" },
      time: "2 hours ago",
      changes: "+24, -0 lines",
      isCurrent: false,
    },
    {
      id: "v2.2",
      title: "Updated objectives",
      user: { name: "Bob Smith", avatar: "BS", color: "hsl(280, 60%, 60%)" },
      time: "5 hours ago",
      changes: "+8, -4 lines",
      isCurrent: false,
    },
    {
      id: "v2.1",
      title: "Diagram refinements",
      user: { name: "Carol Davis", avatar: "CD", color: "hsl(120, 60%, 60%)" },
      time: "1 day ago",
      changes: "+15, -2 lines",
      isCurrent: false,
    },
    {
      id: "v2.0",
      title: "Q1 2025 planning",
      user: { name: "Alice Chen", avatar: "AC", color: "hsl(200, 60%, 60%)" },
      time: "2 days ago",
      changes: "+186, -45 lines",
      isCurrent: false,
    },
  ];

  return (
    <div className="p-4 space-y-4">
      <div>
        <h3 className="font-semibold mb-1">Version History</h3>
        <p className="text-xs text-muted-foreground">Track all document changes</p>
      </div>

      <div className="space-y-2">
        {versions.map((version) => (
          <div 
            key={version.id} 
            className={`p-3 rounded-lg border transition-all ${
              version.isCurrent 
                ? 'bg-primary/5 border-primary/50' 
                : 'bg-card border-border hover:border-primary/30'
            }`}
          >
            <div className="flex items-start gap-3">
              <Avatar 
                className="h-8 w-8 shrink-0" 
                style={{ backgroundColor: version.user.color }}
              >
                <AvatarFallback className="text-xs text-white font-medium">
                  {version.user.avatar}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline" className="text-xs font-mono">
                    {version.id}
                  </Badge>
                  {version.isCurrent && (
                    <Badge variant="default" className="text-xs">
                      Current
                    </Badge>
                  )}
                </div>
                
                <p className="text-sm font-medium mb-1 truncate">
                  {version.title}
                </p>
                
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <span>{version.user.name}</span>
                  <span>•</span>
                  <span>{version.time}</span>
                </div>

                <div className="flex items-center gap-1 text-xs">
                  <GitBranch className="h-3 w-3 text-muted-foreground" />
                  <span className="text-muted-foreground">{version.changes}</span>
                </div>

                {!version.isCurrent && (
                  <div className="flex gap-2 mt-3">
                    <Button variant="ghost" size="sm" className="h-7 text-xs">
                      <Eye className="h-3 w-3 mr-1" />
                      Preview
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 text-xs">
                      <RotateCcw className="h-3 w-3 mr-1" />
                      Restore
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-border">
        <Button variant="outline" size="sm" className="w-full">
          <GitBranch className="h-4 w-4 mr-2" />
          View Full History
        </Button>
      </div>
    </div>
  );
};

export default VersionHistory;
