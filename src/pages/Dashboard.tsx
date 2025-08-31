import { useState } from "react";
import { 
  Plus, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Calendar,
  Instagram,
  Twitter,
  Linkedin,
  Play,
  Eye,
  Heart,
  Share,
  MoreHorizontal,
  Sparkles,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";

const Dashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("7d");

  // Mock data
  const stats = [
    {
      title: "Total Followers",
      value: "12,847",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      color: "text-primary"
    },
    {
      title: "Engagement Rate",
      value: "4.8%",
      change: "+12.5%",
      trend: "up", 
      icon: Heart,
      color: "text-accent"
    },
    {
      title: "Posts This Week",
      value: "23",
      change: "+4",
      trend: "up",
      icon: Calendar,
      color: "text-success"
    },
    {
      title: "Avg. Reach",
      value: "8,542",
      change: "+15.3%",
      trend: "up",
      icon: Eye,
      color: "text-warning"
    }
  ];

  const chartData = [
    { name: "Mon", engagement: 2400, reach: 4000 },
    { name: "Tue", engagement: 1398, reach: 3000 },
    { name: "Wed", engagement: 9800, reach: 8000 },
    { name: "Thu", engagement: 3908, reach: 5000 },
    { name: "Fri", engagement: 4800, reach: 7000 },
    { name: "Sat", engagement: 3800, reach: 6000 },
    { name: "Sun", engagement: 4300, reach: 6500 }
  ];

  const platformData = [
    { platform: "Instagram", posts: 12, engagement: "5.2%", followers: "8,234" },
    { platform: "TikTok", posts: 8, engagement: "7.1%", followers: "3,456" },
    { platform: "LinkedIn", posts: 5, engagement: "3.8%", followers: "1,157" },
    { platform: "Twitter", posts: 15, engagement: "2.9%", followers: "2,987" }
  ];

  const recentPosts = [
    {
      id: 1,
      platform: "Instagram",
      content: "5 AI tools that will transform your content creation workflow...",
      status: "published",
      metrics: { views: "12.4K", likes: "892", comments: "43", shares: "156" },
      timeAgo: "2h ago",
      image: "/api/placeholder/64/64"
    },
    {
      id: 2, 
      platform: "TikTok",
      content: "Behind the scenes: How I create viral content using AI...",
      status: "scheduled",
      scheduledFor: "Today, 3:00 PM",
      image: "/api/placeholder/64/64"
    },
    {
      id: 3,
      platform: "LinkedIn",
      content: "The future of AI in social media marketing: A deep dive...",
      status: "published",
      metrics: { views: "5.2K", likes: "134", comments: "28", shares: "67" },
      timeAgo: "1d ago",
      image: "/api/placeholder/64/64"
    },
    {
      id: 4,
      platform: "Twitter",
      content: "Thread: 10 ChatGPT prompts for better social media captions 🧵",
      status: "draft",
      image: "/api/placeholder/64/64"
    }
  ];

  const upcomingPosts = [
    { platform: "Instagram", title: "Weekly motivation post", time: "Today, 2:00 PM" },
    { platform: "TikTok", title: "Tutorial: AI video editing", time: "Tomorrow, 10:00 AM" },
    { platform: "LinkedIn", title: "Industry insights article", time: "Tomorrow, 9:00 AM" },
    { platform: "Twitter", title: "Engagement thread", time: "Tomorrow, 4:00 PM" }
  ];

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "Instagram": return Instagram;
      case "TikTok": return Play;
      case "LinkedIn": return Linkedin;
      case "Twitter": return Twitter;
      default: return MessageSquare;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "Instagram": return "text-pink-500";
      case "TikTok": return "text-gray-900 dark:text-white";
      case "LinkedIn": return "text-blue-600";
      case "Twitter": return "text-sky-500";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Good morning, John! ✨</h1>
          <p className="text-muted-foreground text-lg">
            Your content is performing great. Here's what's happening with your audience.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button className="btn-ai-secondary">
            <Sparkles className="w-4 h-4 mr-2" />
            Generate Ideas
          </Button>
          <Button className="btn-ai-primary">
            <Plus className="w-4 h-4 mr-2" />
            Create Content
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4 text-success" />
                    <span className="text-sm text-success font-medium">{stat.change}</span>
                  </div>
                </div>
                <div className={`p-3 rounded-xl bg-muted/50 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Engagement Chart */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Engagement Overview</CardTitle>
                <CardDescription>Daily engagement and reach metrics</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                {["7d", "30d", "90d"].map((timeframe) => (
                  <Button
                    key={timeframe}
                    variant={selectedTimeframe === timeframe ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTimeframe(timeframe)}
                  >
                    {timeframe}
                  </Button>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="engagement" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))" }}
                />
                <Line 
                  type="monotone" 
                  dataKey="reach" 
                  stroke="hsl(var(--accent))" 
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--accent))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Platform Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Platform Performance</CardTitle>
            <CardDescription>Content performance across platforms</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={platformData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="platform" />
                <YAxis />
                <Tooltip />
                <Bar 
                  dataKey="posts" 
                  fill="hsl(var(--primary))" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Content Overview */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Posts */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Posts</CardTitle>
            <CardDescription>Your latest content performance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentPosts.map((post) => {
              const PlatformIcon = getPlatformIcon(post.platform);
              return (
                <div key={post.id} className="flex items-center space-x-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={post.image} />
                    <AvatarFallback>
                      <PlatformIcon className={`w-6 h-6 ${getPlatformColor(post.platform)}`} />
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <Badge variant="outline" className="text-xs">
                        {post.platform}
                      </Badge>
                      <Badge 
                        variant={post.status === "published" ? "default" : post.status === "scheduled" ? "secondary" : "outline"}
                        className="text-xs"
                      >
                        {post.status}
                      </Badge>
                    </div>
                    <p className="font-medium truncate">{post.content}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                      {post.metrics ? (
                        <>
                          <span>{post.metrics.views} views</span>
                          <span>{post.metrics.likes} likes</span>
                          <span>{post.timeAgo}</span>
                        </>
                      ) : post.scheduledFor ? (
                        <span>Scheduled for {post.scheduledFor}</span>
                      ) : (
                        <span>Draft</span>
                      )}
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Upcoming Posts */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Posts</CardTitle>
            <CardDescription>Scheduled content</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingPosts.map((post, index) => {
              const PlatformIcon = getPlatformIcon(post.platform);
              return (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/20">
                  <div className={`p-2 rounded-lg bg-background ${getPlatformColor(post.platform)}`}>
                    <PlatformIcon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{post.title}</p>
                    <p className="text-xs text-muted-foreground">{post.time}</p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>AI-Powered Suggestions</CardTitle>
          <CardDescription>Let PromptPilot help you create engaging content</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <div className="flex items-center space-x-2 mb-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="font-semibold">Trending Topic</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                "AI productivity tools" is trending in your niche. Create content about this?
              </p>
              <Button size="sm" className="btn-ai-primary">
                Generate Post
              </Button>
            </div>
            
            <div className="p-4 rounded-xl bg-gradient-to-br from-accent/10 to-success/10 border border-accent/20">
              <div className="flex items-center space-x-2 mb-2">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="font-semibold">Repurpose Content</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Turn your "AI tools" blog post into a Twitter thread and Instagram carousel.
              </p>
              <Button size="sm" variant="outline">
                Repurpose Now
              </Button>
            </div>
            
            <div className="p-4 rounded-xl bg-gradient-to-br from-success/10 to-warning/10 border border-success/20">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="w-5 h-5 text-success" />
                <span className="font-semibold">Optimal Timing</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Your audience is most active at 2 PM today. Schedule a post?
              </p>
              <Button size="sm" variant="outline">
                Schedule Post
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;