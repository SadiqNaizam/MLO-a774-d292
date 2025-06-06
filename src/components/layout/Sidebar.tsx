import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from '@/lib/utils';
import AppLogo from '@/components/AppLogo'; // Assuming AppLogo might be used in the sidebar header

interface SidebarProps {
  children: React.ReactNode;
  className?: string;
  // You could add props like `isOpen`, `onToggle` if it's a collapsible sidebar
}

const Sidebar: React.FC<SidebarProps> = ({ children, className }) => {
  console.log("Rendering Sidebar");

  return (
    <aside
      className={cn(
        "h-screen w-60 bg-background border-r flex flex-col", // Use theme background, adjust width as needed
        "hidden md:flex", // Hidden on small screens, flex on medium and up
        className
      )}
    >
      {/* Sidebar Header - e.g., Logo and App Name */}
      <div className="h-16 border-b flex items-center px-4 shrink-0">
        <AppLogo width={100} height={28} />
        {/* You could add an app title next to the logo if desired */}
        {/* <h1 className="ml-2 text-lg font-semibold">App Name</h1> */}
      </div>

      {/* Sidebar Navigation/Content Area */}
      <ScrollArea className="flex-1">
        <nav className="py-4 px-2 space-y-1">
          {children ? children : (
            <div className="p-2 text-sm text-muted-foreground">
              {/* Placeholder for navigation items */}
              <p>Navigation links go here.</p>
              <p>You can pass Button components or custom NavLink components as children.</p>
            </div>
          )}
        </nav>
      </ScrollArea>

      {/* Sidebar Footer - e.g., User profile quick access, settings */}
      <div className="mt-auto p-4 border-t shrink-0">
        {/* Placeholder for user info or settings link */}
        {/* Example: <UserButton /> or <Button variant="ghost">Settings</Button> */}
        <p className="text-xs text-muted-foreground text-center">© Your App</p>
      </div>
    </aside>
  );
};

export default Sidebar;