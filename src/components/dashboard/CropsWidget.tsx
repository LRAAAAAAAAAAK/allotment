
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

export function CropsWidget() {
  // This would normally come from your Supabase database
  const crops = [
    { id: 1, name: "Tomatoes", progress: 70, daysToHarvest: 15 },
    { id: 2, name: "Carrots", progress: 50, daysToHarvest: 25 },
    { id: 3, name: "Lettuce", progress: 90, daysToHarvest: 5 },
  ];

  return (
    <Card className="animate-fade-in hover-lift card-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Crops</CardTitle>
        <CardDescription>Growth progress</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {crops.map((crop) => (
            <div key={crop.id} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>{crop.name}</span>
                <span className="text-muted-foreground">{crop.daysToHarvest} days left</span>
              </div>
              <Progress value={crop.progress} className="h-2" 
                indicatorClassName={`
                  ${crop.progress > 75 ? 'bg-garden-leaf' : ''}
                  ${crop.progress > 25 && crop.progress <= 75 ? 'bg-garden-carrot' : ''}
                  ${crop.progress <= 25 ? 'bg-garden-tomato' : ''}
                `}
              />
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <Link to="/crops">Manage crops</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
