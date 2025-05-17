
import { AppLayout } from "@/components/layout/AppLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplet } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const Water = () => {
  const { toast } = useToast();
  
  // This would normally come from your Supabase database
  const waterSchedule = [
    { 
      id: 1, 
      name: "Vegetable Patch", 
      lastWatered: "2025-05-15", 
      nextWatering: "2025-05-18",
      moisture: 45,
      schedule: "Every 3 days",
      needsWater: true
    },
    { 
      id: 2, 
      name: "Herb Garden", 
      lastWatered: "2025-05-16", 
      nextWatering: "2025-05-19",
      moisture: 60,
      schedule: "Every 3 days",
      needsWater: false
    },
    { 
      id: 3, 
      name: "Fruit Trees", 
      lastWatered: "2025-05-14", 
      nextWatering: "2025-05-17",
      moisture: 30,
      schedule: "Every 3 days",
      needsWater: true
    },
    { 
      id: 4, 
      name: "Flower Beds", 
      lastWatered: "2025-05-17", 
      nextWatering: "2025-05-19",
      moisture: 70,
      schedule: "Every 2 days",
      needsWater: false
    },
  ];
  
  const rainForecast = [
    { day: "Monday", chance: 10, amount: "0mm" },
    { day: "Tuesday", chance: 20, amount: "0-1mm" },
    { day: "Wednesday", chance: 80, amount: "5-10mm" },
    { day: "Thursday", chance: 60, amount: "2-5mm" },
    { day: "Friday", chance: 30, amount: "0-1mm" },
  ];

  const waterHistory = [
    { date: "2025-05-17", areas: ["Flower Beds"], amount: "10L" },
    { date: "2025-05-16", areas: ["Herb Garden"], amount: "5L" },
    { date: "2025-05-15", areas: ["Vegetable Patch"], amount: "15L" },
    { date: "2025-05-14", areas: ["Fruit Trees"], amount: "20L" },
  ];

  const markAsWatered = (id: number) => {
    // In production, this would update in Supabase
    toast({
      title: "Area watered",
      description: "Watering record has been updated",
    });
  };

  const getMoistureColor = (moisture: number) => {
    if (moisture < 40) return "bg-garden-tomato";
    if (moisture < 60) return "bg-garden-carrot";
    return "bg-garden-leaf";
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Water Manager</h1>
          <p className="text-muted-foreground mt-1">
            Track soil moisture and manage watering schedule.
          </p>
        </div>

        <Tabs defaultValue="schedule" className="animate-fade-in">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="schedule">Watering Schedule</TabsTrigger>
            <TabsTrigger value="forecast">Rain Forecast</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="schedule" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Current Schedule</CardTitle>
                <CardDescription>
                  {waterSchedule.filter(area => area.needsWater).length} areas need watering
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {waterSchedule.map((area) => (
                    <div 
                      key={area.id}
                      className="p-4 rounded-lg border bg-card"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">{area.name}</h4>
                          {area.needsWater && (
                            <Badge className="bg-garden-tomato">Needs Water</Badge>
                          )}
                        </div>
                        <Button 
                          variant="outline"
                          size="sm"
                          onClick={() => markAsWatered(area.id)}
                          className="text-garden-water hover:text-garden-water/80 hover:border-garden-water"
                        >
                          <Droplet className="mr-1 h-4 w-4" />
                          Mark as Watered
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Last watered</p>
                          <p>{new Date(area.lastWatered).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Next watering</p>
                          <p>{new Date(area.nextWatering).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Schedule</p>
                          <p>{area.schedule}</p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-muted-foreground mb-1">Soil Moisture</p>
                        <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${getMoistureColor(area.moisture)}`} 
                            style={{ width: `${area.moisture}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-right mt-1">{area.moisture}%</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="forecast" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Rain Forecast</CardTitle>
                <CardDescription>
                  Upcoming precipitation predictions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-2">
                  {rainForecast.map((day, index) => (
                    <div key={index} className="flex flex-col items-center p-4 border rounded-lg">
                      <p className="font-medium">{day.day}</p>
                      <div 
                        className={`w-12 h-12 rounded-full flex items-center justify-center my-2
                          ${day.chance > 70 ? 'bg-garden-water text-white' : ''}
                          ${day.chance > 40 && day.chance <= 70 ? 'bg-garden-sky text-garden-soil-dark' : ''}
                          ${day.chance <= 40 ? 'bg-muted text-muted-foreground' : ''}
                        `}
                      >
                        <Droplet className="h-6 w-6" />
                      </div>
                      <p className="text-sm font-medium">{day.chance}%</p>
                      <p className="text-xs text-muted-foreground">{day.amount}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <p className="text-sm text-muted-foreground">
                    Based on the forecast, you may want to delay watering the garden until after Wednesday when significant rain is expected.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="history" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Watering History</CardTitle>
                <CardDescription>
                  Recent watering activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {waterHistory.map((record, index) => (
                    <div key={index} className="flex items-center p-4 border rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-garden-water/20 flex items-center justify-center mr-4">
                        <Droplet className="h-5 w-5 text-garden-water" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{new Date(record.date).toLocaleDateString()}</p>
                        <p className="text-sm text-muted-foreground">
                          Watered: {record.areas.join(", ")}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-medium">{record.amount}</p>
                        <p className="text-xs text-muted-foreground">Water used</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Water;
