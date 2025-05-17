
import { AppLayout } from "@/components/layout/AppLayout";
import { TasksWidget } from "@/components/dashboard/TasksWidget";
import { CropsWidget } from "@/components/dashboard/CropsWidget";
import { WaterWidget } from "@/components/dashboard/WaterWidget";
import { WeatherWidget } from "@/components/dashboard/WeatherWidget";

const Index = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome to your garden management hub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TasksWidget />
          <WeatherWidget />
          <CropsWidget />
          <WaterWidget />
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
