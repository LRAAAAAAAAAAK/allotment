
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CloudRain, CloudSnow, CloudSun, Droplet, Thermometer } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Weather = () => {
  // This would normally come from a weather API
  const currentWeather = {
    temperature: 24,
    feelsLike: 26,
    condition: "Sunny",
    humidity: 40,
    windSpeed: 10,
    windDirection: "NE",
    precipitation: 0,
    pressure: 1015,
    visibility: 10,
    uvIndex: 6
  };
  
  const forecast = [
    {
      day: "Today",
      condition: "Sunny",
      high: 24,
      low: 14,
      precipitation: 0,
      icon: CloudSun
    },
    {
      day: "Tuesday",
      condition: "Partly Cloudy",
      high: 22,
      low: 13,
      precipitation: 10,
      icon: CloudSun
    },
    {
      day: "Wednesday",
      condition: "Rain",
      high: 19,
      low: 15,
      precipitation: 80,
      icon: CloudRain
    },
    {
      day: "Thursday",
      condition: "Showers",
      high: 20,
      low: 12,
      precipitation: 60,
      icon: CloudRain
    },
    {
      day: "Friday",
      condition: "Mostly Sunny",
      high: 23,
      low: 13,
      precipitation: 20,
      icon: CloudSun
    }
  ];
  
  const gardeningAdvice = [
    "Today's sunny conditions are ideal for harvesting and garden maintenance.",
    "With rain expected on Wednesday, consider postponing any planting until Thursday.",
    "Plan to water deeply tomorrow, as the next few days will be quite warm.",
    "Consider covering sensitive plants on Thursday night due to cooler temperatures."
  ];

  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Weather</h1>
          <p className="text-muted-foreground mt-1">
            Current conditions and forecast for your garden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Current Conditions</CardTitle>
              <CardDescription>As of {new Date().toLocaleTimeString()}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex flex-col items-center">
                  <CloudSun className="h-16 w-16 text-garden-sun mb-2" />
                  <span className="text-4xl font-bold">{currentWeather.temperature}°C</span>
                  <span className="text-muted-foreground">Feels like {currentWeather.feelsLike}°C</span>
                  <span className="font-medium mt-2">{currentWeather.condition}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 md:gap-8 flex-1">
                  <div className="flex items-center gap-2">
                    <Droplet className="h-5 w-5 text-garden-water" />
                    <div>
                      <p className="text-sm text-muted-foreground">Humidity</p>
                      <p className="font-medium">{currentWeather.humidity}%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="h-5 w-5 text-muted-foreground"
                    >
                      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/>
                      <path d="M9.6 4.6A2 2 0 1 1 11 8H2"/>
                      <path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>
                    </svg>
                    <div>
                      <p className="text-sm text-muted-foreground">Wind</p>
                      <p className="font-medium">{currentWeather.windSpeed} km/h {currentWeather.windDirection}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CloudRain className="h-5 w-5 text-garden-water" />
                    <div>
                      <p className="text-sm text-muted-foreground">Precipitation</p>
                      <p className="font-medium">{currentWeather.precipitation} mm</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="h-5 w-5 text-garden-sun"
                    >
                      <circle cx="12" cy="12" r="4"/>
                      <path d="M12 2v2"/>
                      <path d="M12 20v2"/>
                      <path d="m4.93 4.93 1.41 1.41"/>
                      <path d="m17.66 17.66 1.41 1.41"/>
                      <path d="M2 12h2"/>
                      <path d="M20 12h2"/>
                      <path d="m6.34 17.66-1.41 1.41"/>
                      <path d="m19.07 4.93-1.41 1.41"/>
                    </svg>
                    <div>
                      <p className="text-sm text-muted-foreground">UV Index</p>
                      <p className="font-medium">{currentWeather.uvIndex} (Moderate)</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Garden Impact</CardTitle>
              <CardDescription>Weather effects on your plants</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-garden-leaf"></div>
                  <span>Good growing conditions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-garden-water"></div>
                  <span>Natural watering expected Wed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-garden-sun"></div>
                  <span>UV protection needed for seedlings</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-garden-soil"></div>
                  <span>Soil warming well for root growth</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="forecast" className="animate-fade-in">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="forecast">5-Day Forecast</TabsTrigger>
            <TabsTrigger value="advice">Gardening Advice</TabsTrigger>
          </TabsList>
          
          <TabsContent value="forecast" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>5-Day Forecast</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {forecast.map((day, index) => (
                    <div key={index} className="flex flex-col items-center border rounded-lg p-4">
                      <p className="font-medium">{day.day}</p>
                      <day.icon className="h-10 w-10 my-3 text-garden-leaf" />
                      <p className="mb-1">{day.condition}</p>
                      <div className="flex gap-2 items-center">
                        <span className="text-garden-tomato font-medium">{day.high}°</span>
                        <span className="text-garden-water">{day.low}°</span>
                      </div>
                      <div className="flex items-center gap-1 mt-2">
                        <Droplet className="h-4 w-4 text-garden-water" />
                        <span>{day.precipitation}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="advice" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Weather-Based Gardening Advice</CardTitle>
                <CardDescription>Optimize your gardening based on weather conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {gardeningAdvice.map((advice, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Thermometer className="h-4 w-4 text-primary" />
                      </div>
                      <p>{advice}</p>
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

export default Weather;
