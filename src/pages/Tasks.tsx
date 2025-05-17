
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { AppLayout } from "@/components/layout/AppLayout";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const Tasks = () => {
  const { toast } = useToast();
  
  // This would normally come from your Supabase database
  const tasks = [
    { 
      id: 1, 
      title: "Water tomato plants", 
      description: "Make sure to water thoroughly at the base", 
      completed: false, 
      priority: "high", 
      category: "water",
      assignedTo: {
        name: "Alice Smith",
        email: "alice@example.com",
        avatar: ""
      }
    },
    { 
      id: 2, 
      title: "Harvest carrots", 
      description: "Pull gently and check for full growth", 
      completed: false, 
      priority: "medium", 
      category: "harvest",
      assignedTo: {
        name: "Bob Johnson",
        email: "bob@example.com",
        avatar: ""
      }
    },
    { 
      id: 3, 
      title: "Plant lettuce seeds", 
      description: "Space 15cm apart, 1cm deep", 
      completed: true, 
      priority: "low", 
      category: "plant",
      assignedTo: {
        name: "You",
        email: "you@example.com",
        avatar: ""
      }
    },
    { 
      id: 4, 
      title: "Prune apple trees", 
      description: "Cut any dead or crossing branches", 
      completed: false, 
      priority: "medium", 
      category: "maintenance",
      assignedTo: {
        name: "Carol Davis",
        email: "carol@example.com",
        avatar: ""
      }
    }
  ];

  const markAsComplete = (id: number) => {
    // In production, this would update the task in Supabase
    toast({
      title: "Task updated",
      description: "Task has been marked as complete",
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-garden-tomato text-garden-tomato';
      case 'medium':
        return 'border-garden-carrot text-garden-carrot';
      case 'low':
        return 'border-garden-leaf-light text-garden-leaf-light';
      default:
        return '';
    }
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Tasks</h1>
            <p className="text-muted-foreground mt-1">
              Manage your garden tasks and track progress.
            </p>
          </div>
          <Button className="bg-garden-leaf hover:bg-garden-leaf-dark">
            Add Task
          </Button>
        </div>

        <Card className="animate-fade-in">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>All Tasks</CardTitle>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>All Tasks</DropdownMenuItem>
                  <DropdownMenuItem>My Tasks</DropdownMenuItem>
                  <DropdownMenuItem>High Priority</DropdownMenuItem>
                  <DropdownMenuItem>Completed</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <CardDescription>
              {tasks.filter(t => !t.completed).length} tasks pending, {tasks.filter(t => t.completed).length} completed
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tasks.map((task) => (
                <div 
                  key={task.id}
                  className={`p-4 rounded-lg border ${task.completed ? 'bg-muted/50' : 'bg-card'} transition-colors`}
                >
                  <div className="flex items-start gap-3">
                    <Checkbox 
                      checked={task.completed} 
                      onCheckedChange={() => markAsComplete(task.id)}
                      className="mt-1"
                    />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className={`font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                          {task.title}
                        </h4>
                        <Badge variant="outline" className={getPriorityColor(task.priority)}>
                          {task.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {task.description}
                      </p>
                    </div>
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={task.assignedTo.avatar} />
                      <AvatarFallback>
                        {task.assignedTo.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Tasks;
