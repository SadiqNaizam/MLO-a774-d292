import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '@/components/layout/Sidebar'; // Custom Sidebar
import AppLogo from '@/components/AppLogo'; // Custom AppLogo
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BarChart, Settings, UserCircle, LogOut, LayoutDashboard, FileText, Users, ShoppingCart, Bell } from 'lucide-react';

// Sample data for the table
const sampleActivities = [
  { id: '1', type: 'New Order', description: 'Order #12345 placed for $49.99', date: '2023-10-26', status: 'Processing' },
  { id: '2', type: 'User Registration', description: 'User john.doe@example.com registered', date: '2023-10-25', status: 'Completed' },
  { id: '3', type: 'Product Update', description: 'Product "SuperWidget" updated', date: '2023-10-24', status: 'Completed' },
  { id: '4', type: 'Support Ticket', description: 'Ticket #S-789 opened by jane.doe', date: '2023-10-26', status: 'Open' },
];

const ApplicationDashboardPage = () => {
  const navigate = useNavigate();
  console.log('ApplicationDashboardPage loaded');

  const handleLogout = () => {
    console.log("User logging out...");
    // Clear authentication state (e.g., remove token from localStorage)
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar>
        {/* Sidebar Navigation Links */}
        <Button variant="ghost" className="w-full justify-start mb-1" onClick={() => console.log("Navigate to Dashboard Home")}>
          <LayoutDashboard className="mr-2 h-4 w-4" /> Dashboard
        </Button>
        <Button variant="ghost" className="w-full justify-start mb-1" onClick={() => console.log("Navigate to Orders")}>
          <ShoppingCart className="mr-2 h-4 w-4" /> Orders
        </Button>
        <Button variant="ghost" className="w-full justify-start mb-1" onClick={() => console.log("Navigate to Products")}>
          <FileText className="mr-2 h-4 w-4" /> Products
        </Button>
        <Button variant="ghost" className="w-full justify-start mb-1" onClick={() => console.log("Navigate to Customers")}>
          <Users className="mr-2 h-4 w-4" /> Customers
        </Button>
        <Button variant="ghost" className="w-full justify-start" onClick={() => console.log("Navigate to Analytics")}>
          <BarChart className="mr-2 h-4 w-4" /> Analytics
        </Button>
      </Sidebar>

      <div className="flex-1 flex flex-col">
        {/* Top Navigation Bar */}
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b bg-white px-6 shadow-sm">
          <div className="flex items-center">
            {/* Mobile Sidebar Toggle (if needed) or App Title */}
             <div className="md:hidden mr-4">
                <AppLogo width={80} height={24} />
             </div>
            <h1 className="text-lg font-semibold hidden md:block">Application Dashboard</h1>
          </div>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
                  Overview
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
                  Reports
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
                  Settings
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User Avatar" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => console.log("Profile clicked")}>
                  <UserCircle className="mr-2 h-4 w-4" /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => console.log("Settings clicked")}>
                  <Settings className="mr-2 h-4 w-4" /> Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Welcome back, User!</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
                  <CardDescription className="text-2xl font-bold">$45,231.89</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">New Signups</CardTitle>
                  <CardDescription className="text-2xl font-bold">+2,350</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Users</CardTitle>
                  <CardDescription className="text-2xl font-bold">1,205</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">+19% from last month</p>
                </CardContent>
              </Card>
               <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">Pending Orders</CardTitle>
                  <CardDescription className="text-2xl font-bold">32</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">-2 since last hour</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>An overview of recent events in the application.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Type</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sampleActivities.map((activity) => (
                      <TableRow key={activity.id}>
                        <TableCell>{activity.type}</TableCell>
                        <TableCell>{activity.description}</TableCell>
                        <TableCell>{activity.date}</TableCell>
                        <TableCell>{activity.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ApplicationDashboardPage;