import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  FileText,
  Users,
  History,
  Settings,
  Search,
  Download,
  Share2,
  Eye,
  Code,
  MessageSquare,
  Clock,
  ChevronRight,
  Sparkles,
  Save,
  MoreVertical
} from "lucide-react";
import EditorCanvas from "@/components/editor/EditorCanvas";
import DiagramView from "@/components/editor/DiagramView";
import ActivityFeed from "@/components/editor/ActivityFeed";
import CollaboratorsList from "@/components/editor/CollaboratorsList";
import VersionHistory from "@/components/editor/VersionHistory";

const Editor = () => {
  const [activeTab, setActiveTab] = useState<"document" | "diagram">("document");
  const [showDiagramCode, setShowDiagramCode] = useState(false);
  const [sidebarView, setSidebarView] = useState<"activity" | "history" | "collaborators">("activity");

  const collaborators = [
    { id: 1, name: "Alice Chen", avatar: "AC", color: "hsl(200, 60%, 60%)", status: "editing" },
    { id: 2, name: "Bob Smith", avatar: "BS", color: "hsl(280, 60%, 60%)", status: "viewing" },
    { id: 3, name: "Carol Davis", avatar: "CD", color: "hsl(120, 60%, 60%)", status: "editing" },
    { id: 4, name: "David Kim", avatar: "DK", color: "hsl(40, 60%, 60%)", status: "offline" },
  ];

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Top Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <FileText className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-lg font-semibold">Product Roadmap Q1 2025</h1>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>Edited 2 minutes ago</span>
                  <span>•</span>
                  <Badge variant="outline" className="h-5 px-2 text-xs">
                    <Users className="h-3 w-3 mr-1" />
                    {collaborators.filter(c => c.status !== "offline").length} active
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex -space-x-2 mr-4">
                {collaborators.slice(0, 3).map((collab) => (
                  <Avatar 
                    key={collab.id} 
                    className="h-8 w-8 border-2 border-background"
                    style={{ backgroundColor: collab.color }}
                  >
                    <AvatarFallback className="text-xs text-white font-medium">
                      {collab.avatar}
                    </AvatarFallback>
                  </Avatar>
                ))}
                {collaborators.length > 3 && (
                  <div className="h-8 w-8 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                    <span className="text-xs font-medium">+{collaborators.length - 3}</span>
                  </div>
                )}
              </div>

              <Button variant="ghost" size="sm">
                <MessageSquare className="h-4 w-4 mr-2" />
                Comments
              </Button>
              <Button variant="ghost" size="sm">
                <History className="h-4 w-4 mr-2" />
                History
              </Button>
              <Separator orientation="vertical" className="h-6" />
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="default" size="sm">
                <Save className="h-4 w-4 mr-2" />
                Saved
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Secondary Toolbar */}
        <div className="px-6 py-2 border-t border-border/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button 
              variant={activeTab === "document" ? "secondary" : "ghost"} 
              size="sm"
              onClick={() => setActiveTab("document")}
            >
              <FileText className="h-4 w-4 mr-2" />
              Document
            </Button>
            <Button 
              variant={activeTab === "diagram" ? "secondary" : "ghost"} 
              size="sm"
              onClick={() => setActiveTab("diagram")}
            >
              <Code className="h-4 w-4 mr-2" />
              Diagram
            </Button>
            
            {activeTab === "diagram" && (
              <>
                <Separator orientation="vertical" className="h-6" />
                <Button 
                  variant={showDiagramCode ? "secondary" : "ghost"} 
                  size="sm"
                  onClick={() => setShowDiagramCode(!showDiagramCode)}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  {showDiagramCode ? "View Diagram" : "View Code"}
                </Button>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Sparkles className="h-4 w-4 mr-2" />
              AI Assist
            </Button>
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button variant="ghost" size="sm">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Main Editor */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-auto">
            {activeTab === "document" ? (
              <EditorCanvas collaborators={collaborators} />
            ) : (
              <DiagramView showCode={showDiagramCode} />
            )}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 border-l border-border bg-card/30 backdrop-blur-sm flex flex-col">
          <div className="p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <Button 
                variant={sidebarView === "activity" ? "secondary" : "ghost"} 
                size="sm"
                onClick={() => setSidebarView("activity")}
                className="flex-1"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Activity
              </Button>
              <Button 
                variant={sidebarView === "history" ? "secondary" : "ghost"} 
                size="sm"
                onClick={() => setSidebarView("history")}
                className="flex-1"
              >
                <History className="h-4 w-4 mr-2" />
                History
              </Button>
              <Button 
                variant={sidebarView === "collaborators" ? "secondary" : "ghost"} 
                size="sm"
                onClick={() => setSidebarView("collaborators")}
                className="flex-1"
              >
                <Users className="h-4 w-4 mr-2" />
                Team
              </Button>
            </div>
          </div>

          <ScrollArea className="flex-1">
            {sidebarView === "activity" && <ActivityFeed />}
            {sidebarView === "history" && <VersionHistory />}
            {sidebarView === "collaborators" && <CollaboratorsList collaborators={collaborators} />}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Editor;
