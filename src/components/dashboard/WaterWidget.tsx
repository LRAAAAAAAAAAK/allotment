
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplet } from "lucide-react";
import { Link } from "react-router-dom";

export function WaterWidget() {
  // This would normally come from your Supabase database or sensors
  const waterData = {
    lastWatered: "2 days ago",
    soilMoisture: 45,
    nextWateringDue: "Tomorrow",
    rainProbability: 20,
  };

  return (
    <Card className="animate-fade-in hover-lift card-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium">Water</CardTitle>
          <Droplet className="h-5 w-5 text-garden-water" />
        </div>
        <CardDescription>Moisture & irrigation</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex flex-col">
              <span className="text-muted-foreground">Last watered</span>
              <span className="font-medium">{waterData.lastWatered}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground">Soil moisture</span>
              <span className="font-medium">{waterData.soilMoisture}%</span>
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground">Next watering</span>
              <span className="font-medium">{waterData.nextWateringDue}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground">Rain chance</span>
              <span className="font-medium">{waterData.rainProbability}%</span>
            </div>
          </div>
          <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
            <div 
              className="bg-garden-water h-full" 
              style={{ width: `${waterData.soilMoisture}%` }}
            ></div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <Link to="/water">View watering schedule</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
