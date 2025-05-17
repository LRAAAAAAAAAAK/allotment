
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplet, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

export function TasksWidget() {
  // This would normally come from your Supabase database
  const tasks = [
    { id: 1, title: "Water tomato plants", category: "water", priority: "high" },
    { id: 2, title: "Harvest carrots", category: "harvest", priority: "medium" },
    { id: 3, title: "Plant lettuce seeds", category: "plant", priority: "low" },
  ];

  return (
    <Card className="animate-fade-in hover-lift card-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium">Tasks</CardTitle>
          <Badge variant="outline" className="bg-primary/10 text-primary">
            {tasks.length} pending
          </Badge>
        </div>
        <CardDescription>Today's garden activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {tasks.map((task) => (
            <div 
              key={task.id}
              className="flex items-center gap-3 p-2 rounded-md border bg-card hover:bg-muted/50 transition-colors"
            >
              {task.category === 'water' ? 
                <Droplet className="h-4 w-4 text-garden-water" /> : 
                <Leaf className="h-4 w-4 text-garden-leaf" />
              }
              <span className="flex-1">{task.title}</span>
              <Badge 
                variant="outline" 
                className={`
                  ${task.priority === 'high' ? 'border-garden-tomato text-garden-tomato' : ''}
                  ${task.priority === 'medium' ? 'border-garden-carrot text-garden-carrot' : ''}
                  ${task.priority === 'low' ? 'border-garden-leaf-light text-garden-leaf-light' : ''}
                `}
              >
                {task.priority}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <Link to="/tasks">View all tasks</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
