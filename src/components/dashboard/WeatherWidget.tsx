
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CloudSun } from "lucide-react";

export function WeatherWidget() {
  // This would normally fetch data from a weather API
  const weatherData = {
    temperature: 24,
    condition: "Sunny",
    humidity: 40,
    windSpeed: 10
  };

  return (
    <Card className="animate-fade-in hover-lift card-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium">Weather</CardTitle>
          <CloudSun className="h-5 w-5 text-garden-leaf" />
        </div>
        <CardDescription>Today's conditions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold">{weatherData.temperature}°C</p>
            <p className="text-muted-foreground">{weatherData.condition}</p>
          </div>
          <div className="flex flex-col text-right">
            <div className="flex items-center justify-end gap-2">
              <span className="text-muted-foreground">Humidity:</span>
              <span>{weatherData.humidity}%</span>
            </div>
            <div className="flex items-center justify-end gap-2">
              <span className="text-muted-foreground">Wind:</span>
              <span>{weatherData.windSpeed} km/h</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
