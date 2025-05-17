
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, Menu, User } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export function AppHeader() {
  const isMobile = useIsMobile();

  return (
    <header className="h-16 border-b w-full flex items-center px-4 sticky top-0 bg-background z-10">
      <div className="flex items-center gap-2 mr-2">
        {isMobile && <SidebarTrigger />}
        {isMobile && (
          <div className="text-garden-leaf font-bold flex items-center">
            <span className="mr-2">Garden Buddy</span>
          </div>
        )}
      </div>
      
      {/* Search section - optional */}
      <div className="flex-1"></div>
      
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground">
          <Bell className="h-5 w-5" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Sign in with Clerk</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
