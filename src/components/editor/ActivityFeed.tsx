import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { FileText, MessageSquare, History, Code, CheckCircle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const ActivityFeed = () => {
  const activities = [
    {
      id: 1,
      user: { name: "Alice Chen", avatar: "AC", color: "hsl(200, 60%, 60%)" },
      action: "edited",
      target: "Success Metrics section",
      time: "2 min ago",
      icon: FileText,
    },
    {
      id: 2,
      user: { name: "Bob Smith", avatar: "BS", color: "hsl(280, 60%, 60%)" },
      action: "commented on",
      target: "Timeline",
      time: "5 min ago",
      icon: MessageSquare,
    },
    {
      id: 3,
      user: { name: "Carol Davis", avatar: "CD", color: "hsl(120, 60%, 60%)" },
      action: "updated diagram",
      target: "Development Workflow",
      time: "12 min ago",
      icon: Code,
    },
    {
      id: 4,
      user: { name: "Alice Chen", avatar: "AC", color: "hsl(200, 60%, 60%)" },
      action: "created version",
      target: "v2.4 - Timeline updates",
      time: "18 min ago",
      icon: History,
    },
    {
      id: 5,
      user: { name: "David Kim", avatar: "DK", color: "hsl(40, 60%, 60%)" },
      action: "completed task",
      target: "Review Q1 objectives",
      time: "1 hour ago",
      icon: CheckCircle,
    },
    {
      id: 6,
      user: { name: "Carol Davis", avatar: "CD", color: "hsl(120, 60%, 60%)" },
      action: "added section",
      target: "Key Objectives",
      time: "2 hours ago",
      icon: FileText,
    },
  ];

  return (
    <div className="p-4 space-y-4">
      <div>
        <h3 className="font-semibold mb-1">Activity Feed</h3>
        <p className="text-xs text-muted-foreground">Real-time collaboration updates</p>
      </div>

      <div className="space-y-3">
        {activities.map((activity) => (
          <div 
            key={activity.id} 
            className="flex gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors animate-fade-in"
          >
            <Avatar 
              className="h-8 w-8 shrink-0" 
              style={{ backgroundColor: activity.user.color }}
            >
              <AvatarFallback className="text-xs text-white font-medium">
                {activity.user.avatar}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
              <div className="flex items-start gap-2">
                <activity.icon className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm">
                    <span className="font-medium">{activity.user.name}</span>
                    {' '}
                    <span className="text-muted-foreground">{activity.action}</span>
                  </p>
                  <p className="text-sm text-foreground font-medium truncate">
                    {activity.target}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-border">
        <Badge variant="outline" className="w-full justify-center">
          View All Activity
        </Badge>
      </div>
    </div>
  );
};

export default ActivityFeed;
