
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { BadgePlus, Calendar } from "lucide-react";

const Crops = () => {
  // This would normally come from your Supabase database
  const crops = [
    { 
      id: 1, 
      name: "Tomatoes (Cherry)", 
      variety: "Gardener's Delight",
      plantedDate: "2025-03-15", 
      daysToHarvest: 80,
      progress: 70, 
      daysLeft: 15,
      notes: "Growing well, needs staking"
    },
    { 
      id: 2, 
      name: "Carrots", 
      variety: "Nantes",
      plantedDate: "2025-04-01", 
      daysToHarvest: 70, 
      progress: 50, 
      daysLeft: 25,
      notes: "Thin seedlings to 5cm apart"
    },
    { 
      id: 3, 
      name: "Lettuce", 
      variety: "Butterhead",
      plantedDate: "2025-04-20", 
      daysToHarvest: 45, 
      progress: 90, 
      daysLeft: 5,
      notes: "Almost ready to harvest"
    },
    { 
      id: 4, 
      name: "Cucumber", 
      variety: "Telegraph",
      plantedDate: "2025-04-10", 
      daysToHarvest: 65, 
      progress: 60, 
      daysLeft: 20,
      notes: "Training up trellis"
    },
    { 
      id: 5, 
      name: "Potatoes", 
      variety: "Charlotte",
      plantedDate: "2025-03-01", 
      daysToHarvest: 100, 
      progress: 75, 
      daysLeft: 25,
      notes: "Earth up when leaves reach 20cm"
    }
  ];

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Crops</h1>
            <p className="text-muted-foreground mt-1">
              Monitor and manage your growing plants.
            </p>
          </div>
          <Button className="bg-garden-leaf hover:bg-garden-leaf-dark">
            <BadgePlus className="mr-2 h-4 w-4" />
            Add Crop
          </Button>
        </div>

        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>Current Crops</CardTitle>
            <CardDescription>
              {crops.length} active plantings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Variety</TableHead>
                  <TableHead>Planted</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Est. Harvest</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {crops.map((crop) => (
                  <TableRow key={crop.id}>
                    <TableCell className="font-medium">{crop.name}</TableCell>
                    <TableCell>{crop.variety}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        {new Date(crop.plantedDate).toLocaleDateString()}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="w-full flex flex-col gap-1">
                        <Progress 
                          value={crop.progress} 
                          className="h-2" 
                          indicatorClassName={`
                            ${crop.progress > 75 ? 'bg-garden-leaf' : ''}
                            ${crop.progress > 25 && crop.progress <= 75 ? 'bg-garden-carrot' : ''}
                            ${crop.progress <= 25 ? 'bg-garden-tomato' : ''}
                          `}
                        />
                        <span className="text-xs text-muted-foreground">{crop.progress}% - {crop.daysLeft} days left</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      {new Date(new Date(crop.plantedDate).setDate(
                        new Date(crop.plantedDate).getDate() + crop.daysToHarvest
                      )).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="max-w-[200px] truncate" title={crop.notes}>
                      {crop.notes}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Crops;
