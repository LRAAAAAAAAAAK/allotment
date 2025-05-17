
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const profileFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  location: z.string().min(2, {
    message: "Location must be at least 2 characters.",
  }),
});

const notificationsFormSchema = z.object({
  taskReminders: z.boolean().default(true),
  waterReminders: z.boolean().default(true),
  weatherAlerts: z.boolean().default(true),
  harvestReminders: z.boolean().default(true),
  emailNotifications: z.boolean().default(true),
});

const gardenFormSchema = z.object({
  gardenName: z.string().min(2, {
    message: "Garden name must be at least 2 characters.",
  }),
  gardenType: z.string({
    required_error: "Please select a garden type.",
  }),
  hardiness: z.string({
    required_error: "Please select your hardiness zone.",
  }),
  soilType: z.string({
    required_error: "Please select your soil type.",
  }),
});

const Settings = () => {
  const { toast } = useToast();

  const profileForm = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: "Garden Enthusiast",
      email: "gardener@example.com",
      location: "Portland, OR",
    },
  });

  const notificationsForm = useForm<z.infer<typeof notificationsFormSchema>>({
    resolver: zodResolver(notificationsFormSchema),
    defaultValues: {
      taskReminders: true,
      waterReminders: true,
      weatherAlerts: true,
      harvestReminders: true,
      emailNotifications: true,
    },
  });

  const gardenForm = useForm<z.infer<typeof gardenFormSchema>>({
    resolver: zodResolver(gardenFormSchema),
    defaultValues: {
      gardenName: "My Urban Garden",
      gardenType: "urban",
      hardiness: "8b",
      soilType: "loam",
    },
  });

  function onProfileSubmit(values: z.infer<typeof profileFormSchema>) {
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated.",
    });
  }

  function onNotificationsSubmit(values: z.infer<typeof notificationsFormSchema>) {
    toast({
      title: "Notification preferences saved",
      description: "Your notification settings have been updated.",
    });
  }

  function onGardenSubmit(values: z.infer<typeof gardenFormSchema>) {
    toast({
      title: "Garden settings saved",
      description: "Your garden information has been updated.",
    });
  }

  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground mt-1">
            Manage your account and garden preferences.
          </p>
        </div>

        <Tabs defaultValue="profile" className="animate-fade-in">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="garden">Garden</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>
                  Manage your personal information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...profileForm}>
                  <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-6">
                    <FormField
                      control={profileForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={profileForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={profileForm.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location</FormLabel>
                          <FormControl>
                            <Input placeholder="City, State" {...field} />
                          </FormControl>
                          <FormDescription>
                            Used for local weather and planting recommendations.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex justify-end">
                      <Button type="submit">Save Changes</Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>
                  Configure how and when you receive alerts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...notificationsForm}>
                  <form onSubmit={notificationsForm.handleSubmit(onNotificationsSubmit)} className="space-y-6">
                    <FormField
                      control={notificationsForm.control}
                      name="taskReminders"
                      render={({ field }) => (
                        <FormItem className="flex items-center justify-between rounded-lg border p-3">
                          <div>
                            <FormLabel>Task Reminders</FormLabel>
                            <FormDescription>
                              Get notified about upcoming garden tasks.
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={notificationsForm.control}
                      name="waterReminders"
                      render={({ field }) => (
                        <FormItem className="flex items-center justify-between rounded-lg border p-3">
                          <div>
                            <FormLabel>Watering Reminders</FormLabel>
                            <FormDescription>
                              Notifications when plants need watering.
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={notificationsForm.control}
                      name="weatherAlerts"
                      render={({ field }) => (
                        <FormItem className="flex items-center justify-between rounded-lg border p-3">
                          <div>
                            <FormLabel>Weather Alerts</FormLabel>
                            <FormDescription>
                              Receive alerts about extreme weather conditions.
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={notificationsForm.control}
                      name="harvestReminders"
                      render={({ field }) => (
                        <FormItem className="flex items-center justify-between rounded-lg border p-3">
                          <div>
                            <FormLabel>Harvest Reminders</FormLabel>
                            <FormDescription>
                              Get notified when crops are ready to harvest.
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={notificationsForm.control}
                      name="emailNotifications"
                      render={({ field }) => (
                        <FormItem className="flex items-center justify-between rounded-lg border p-3">
                          <div>
                            <FormLabel>Email Notifications</FormLabel>
                            <FormDescription>
                              Receive notifications via email.
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <div className="flex justify-end">
                      <Button type="submit">Save Preferences</Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="garden" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Garden Settings</CardTitle>
                <CardDescription>
                  Update your garden details for better recommendations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...gardenForm}>
                  <form onSubmit={gardenForm.handleSubmit(onGardenSubmit)} className="space-y-6">
                    <FormField
                      control={gardenForm.control}
                      name="gardenName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Garden Name</FormLabel>
                          <FormControl>
                            <Input placeholder="My Garden" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={gardenForm.control}
                      name="gardenType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Garden Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select garden type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="urban">Urban Garden</SelectItem>
                              <SelectItem value="allotment">Allotment</SelectItem>
                              <SelectItem value="backyard">Backyard Garden</SelectItem>
                              <SelectItem value="community">Community Garden</SelectItem>
                              <SelectItem value="farm">Small Farm</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            This helps us recommend appropriate crops and techniques.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={gardenForm.control}
                      name="hardiness"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Hardiness Zone</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select hardiness zone" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="6a">Zone 6a</SelectItem>
                              <SelectItem value="6b">Zone 6b</SelectItem>
                              <SelectItem value="7a">Zone 7a</SelectItem>
                              <SelectItem value="7b">Zone 7b</SelectItem>
                              <SelectItem value="8a">Zone 8a</SelectItem>
                              <SelectItem value="8b">Zone 8b</SelectItem>
                              <SelectItem value="9a">Zone 9a</SelectItem>
                              <SelectItem value="9b">Zone 9b</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Your USDA hardiness zone determines suitable plants.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={gardenForm.control}
                      name="soilType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Soil Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select soil type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="clay">Clay</SelectItem>
                              <SelectItem value="sandy">Sandy</SelectItem>
                              <SelectItem value="loam">Loam</SelectItem>
                              <SelectItem value="silty">Silty</SelectItem>
                              <SelectItem value="chalky">Chalky</SelectItem>
                              <SelectItem value="peat">Peat</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Understanding your soil helps with planting and care advice.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex justify-end">
                      <Button type="submit">Save Garden Settings</Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
              <CardFooter className="flex flex-col items-start border-t p-6">
                <h4 className="text-sm font-medium">External Connections</h4>
                <p className="text-sm text-muted-foreground mt-1 mb-4">
                  Connect to external services for enhanced features.
                </p>
                <div className="flex flex-col gap-2 w-full">
                  <Button variant="outline" className="justify-start">
                    Connect to Weather Service
                  </Button>
                  <Button variant="outline" className="justify-start">
                    Link Smart Irrigation System
                  </Button>
                  <Button variant="outline" className="justify-start">
                    Connect Soil Sensors
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Settings;
