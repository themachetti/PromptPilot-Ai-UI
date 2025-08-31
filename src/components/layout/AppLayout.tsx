import { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { 
  Bot, 
  LayoutDashboard, 
  PenTool, 
  Calendar, 
  MessageSquare, 
  BarChart3, 
  Mic, 
  Archive, 
  Settings,
  Menu,
  X,
  Sun,
  Moon,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
             (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });
  
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    { 
      name: "Dashboard", 
      path: "/app/dashboard", 
      icon: LayoutDashboard,
      description: "Overview & insights"
    },
    { 
      name: "Content Studio", 
      path: "/app/content-studio", 
      icon: PenTool,
      description: "Create & optimize content"
    },
    { 
      name: "Scheduler", 
      path: "/app/scheduler", 
      icon: Calendar,
      description: "Plan & schedule posts"
    },
    { 
      name: "Engagement", 
      path: "/app/engagement", 
      icon: MessageSquare,
      description: "Manage interactions"
    },
    { 
      name: "Analytics", 
      path: "/app/analytics", 
      icon: BarChart3,
      description: "Performance insights"
    },
    { 
      name: "Brand Voice", 
      path: "/app/brand-voice", 
      icon: Mic,
      description: "Voice & tone settings"
    },
    { 
      name: "Content History", 
      path: "/app/content-history", 
      icon: Archive,
      description: "Past content & backups"
    },
    { 
      name: "Settings", 
      path: "/app/settings", 
      icon: Settings,
      description: "Account & preferences"
    }
  ];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed lg:static inset-y-0 left-0 z-50 w-72 bg-card border-r border-border transform transition-transform duration-200 ease-in-out lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient">PromptPilot AI</h1>
                <p className="text-xs text-muted-foreground">Content Co-Pilot</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={cn(
                    "w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200",
                    isActive 
                      ? "bg-gradient-primary text-white shadow-glow" 
                      : "text-foreground hover:bg-muted/50 hover:scale-105"
                  )}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium">{item.name}</div>
                    <div className={cn(
                      "text-xs truncate",
                      isActive ? "text-white/80" : "text-muted-foreground"
                    )}>
                      {item.description}
                    </div>
                  </div>
                </button>
              );
            })}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center space-x-3 mb-4">
              <Avatar className="w-10 h-10">
                <AvatarImage src="" />
                <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                  U
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">John Doe</div>
                <div className="text-sm text-muted-foreground">Pro Plan</div>
              </div>
              <Badge variant="secondary" className="text-xs">PRO</Badge>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full"
              onClick={() => navigate("/")}
            >
              Sign Out
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="bg-card/50 backdrop-blur-xl border-b border-border sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 lg:px-6 py-4">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <div>
                <h2 className="text-xl font-semibold">
                  {navigationItems.find(item => item.path === location.pathname)?.name || "Dashboard"}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {navigationItems.find(item => item.path === location.pathname)?.description || "Welcome to PromptPilot AI"}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={toggleTheme}>
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></span>
              </Button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-4 lg:p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;