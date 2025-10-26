import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreVertical, Mail, UserPlus } from "lucide-react";

interface Collaborator {
  id: number;
  name: string;
  avatar: string;
  color: string;
  status: string;
}

interface CollaboratorsListProps {
  collaborators: Collaborator[];
}

const CollaboratorsList = ({ collaborators }: CollaboratorsListProps) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "editing":
        return <Badge className="bg-primary/20 text-primary border-primary/50">Editing</Badge>;
      case "viewing":
        return <Badge variant="outline" className="border-muted-foreground/30">Viewing</Badge>;
      case "offline":
        return <Badge variant="secondary">Offline</Badge>;
      default:
        return null;
    }
  };

  const getStatusIndicator = (status: string) => {
    switch (status) {
      case "editing":
        return "bg-primary animate-pulse";
      case "viewing":
        return "bg-muted-foreground";
      case "offline":
        return "bg-muted";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold mb-1">Team Members</h3>
          <p className="text-xs text-muted-foreground">
            {collaborators.filter(c => c.status !== "offline").length} active now
          </p>
        </div>
        <Button variant="ghost" size="icon">
          <UserPlus className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-2">
        {collaborators.map((collaborator) => (
          <div 
            key={collaborator.id}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
          >
            <div className="relative">
              <Avatar 
                className="h-10 w-10" 
                style={{ backgroundColor: collaborator.color }}
              >
                <AvatarFallback className="text-sm text-white font-medium">
                  {collaborator.avatar}
                </AvatarFallback>
              </Avatar>
              <div 
                className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${getStatusIndicator(collaborator.status)}`}
              />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">
                {collaborator.name}
              </p>
              <div className="mt-1">
                {getStatusBadge(collaborator.status)}
              </div>
            </div>

            <Button variant="ghost" size="icon" className="shrink-0">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-border space-y-2">
        <Button variant="outline" size="sm" className="w-full">
          <Mail className="h-4 w-4 mr-2" />
          Invite Team Members
        </Button>
        <Button variant="ghost" size="sm" className="w-full">
          Manage Permissions
        </Button>
      </div>
    </div>
  );
};

export default CollaboratorsList;
