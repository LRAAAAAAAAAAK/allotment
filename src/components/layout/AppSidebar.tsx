
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Settings, Calendar, Droplet, CloudSun } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

export function AppSidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Sidebar className={isExpanded ? "w-[260px]" : "w-[72px]"}>
      <SidebarHeader className="py-5 px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-garden-leaf font-semibold">
          <div className="bg-garden-leaf text-white p-1 rounded">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-5 w-5"
            >
              <path d="M7 17.259V6.741a1 1 0 0 1 1.504-.864l9.015 5.26a1 1 0 0 1 0 1.727l-9.015 5.259A1 1 0 0 1 7 17.259z"/>
            </svg>
          </div>
          {isExpanded && <span className="text-lg">Garden Buddy</span>}
        </Link>
        <SidebarTrigger onClick={() => setIsExpanded(!isExpanded)} />
      </SidebarHeader>
      <Separator />
      <SidebarContent className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="flex gap-3 items-center" asChild>
              <Link to="/">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-5 w-5"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                {isExpanded && <span>Dashboard</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton className="flex gap-3 items-center" asChild>
              <Link to="/tasks">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-5 w-5"
                >
                  <path d="M12 2v4"/>
                  <path d="M12 18v4"/>
                  <path d="m4.93 4.93 2.83 2.83"/>
                  <path d="m16.24 16.24 2.83 2.83"/>
                  <path d="M2 12h4"/>
                  <path d="M18 12h4"/>
                  <path d="m4.93 19.07 2.83-2.83"/>
                  <path d="m16.24 7.76 2.83-2.83"/>
                </svg>
                {isExpanded && <span>Tasks</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton className="flex gap-3 items-center" asChild>
              <Link to="/crops">
                <Calendar className="h-5 w-5" />
                {isExpanded && <span>Crops</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton className="flex gap-3 items-center" asChild>
              <Link to="/water">
                <Droplet className="h-5 w-5" />
                {isExpanded && <span>Water</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton className="flex gap-3 items-center" asChild>
              <Link to="/weather">
                <CloudSun className="h-5 w-5" />
                {isExpanded && <span>Weather</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 mt-auto">
        <Button variant="outline" size="sm" className="w-full flex gap-2" asChild>
          <Link to="/settings">
            <Settings className="h-4 w-4" />
            {isExpanded && <span>Settings</span>}
          </Link>
        </Button>
        {isExpanded && (
          <div className="text-xs text-muted-foreground mt-4 text-center">
            Garden Buddy v1.0
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
