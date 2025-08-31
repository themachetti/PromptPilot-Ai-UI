import { useState } from "react";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Eye, 
  Heart, 
  MessageSquare, 
  Share, 
  Calendar,
  Instagram,
  Twitter,
  Linkedin,
  Play,
  Download,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from "recharts";

const Analytics = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("30d");
  const [selectedMetric, setSelectedMetric] = useState("engagement");

  // Mock data
  const overviewStats = [
    {
      title: "Total Reach",
      value: "847.2K",
      change: "+12.5%",
      trend: "up",
      icon: Eye,
      color: "text-primary"
    },
    {
      title: "Engagement Rate",
      value: "4.8%",
      change: "+0.3%",
      trend: "up",
      icon: Heart,
      color: "text-accent"
    },
    {
      title: "Total Followers",
      value: "12,847",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      color: "text-success"
    },
    {
      title: "Posts Published",
      value: "23",
      change: "+4",
      trend: "up",
      icon: Calendar,
      color: "text-warning"
    }
  ];

  const engagementData = [
    { date: "Jan 1", Instagram: 4200, TikTok: 3800, LinkedIn: 1200, Twitter: 2100 },
    { date: "Jan 8", Instagram: 5100, TikTok: 4200, LinkedIn: 1400, Twitter: 2300 },
    { date: "Jan 15", Instagram: 4800, TikTok: 5600, LinkedIn: 1600, Twitter: 2500 },
    { date: "Jan 22", Instagram: 6200, TikTok: 4900, LinkedIn: 1800, Twitter: 2200 },
    { date: "Jan 29", Instagram: 5800, TikTok: 6100, LinkedIn: 2000, Twitter: 2800 },
    { date: "Feb 5", Instagram: 7200, TikTok: 5400, LinkedIn: 2200, Twitter: 3100 },
    { date: "Feb 12", Instagram: 6900, TikTok: 7300, LinkedIn: 2400, Twitter: 2900 }
  ];

  const platformData = [
    { platform: "Instagram", followers: 8234, engagement: 5.2, posts: 12, reach: 342000 },
    { platform: "TikTok", followers: 3456, engagement: 7.1, posts: 8, reach: 289000 },
    { platform: "LinkedIn", followers: 1157, engagement: 3.8, posts: 5, reach: 87000 },
    { platform: "Twitter", followers: 2987, engagement: 2.9, posts: 15, reach: 129000 }
  ];

  const topPosts = [
    {
      id: 1,
      platform: "TikTok",
      content: "5 AI tools that changed my workflow",
      metrics: { views: 45200, likes: 3240, comments: 189, shares: 567 },
      engagement_rate: 8.4,
      date: "2 days ago"
    },
    {
      id: 2,
      platform: "Instagram",
      content: "Behind the scenes: Content creation setup",
      metrics: { views: 23400, likes: 1890, comments: 76, shares: 234 },
      engagement_rate: 6.8,
      date: "4 days ago"
    },
    {
      id: 3,
      platform: "LinkedIn",
      content: "The future of AI in marketing",
      metrics: { views: 12100, likes: 456, comments: 89, shares: 123 },
      engagement_rate: 5.5,
      date: "1 week ago"
    },
    {
      id: 4,
      platform: "Twitter",
      content: "Thread: 10 ChatGPT prompts for marketers",
      metrics: { views: 8900, likes: 678, comments: 45, shares: 89 },
      engagement_rate: 9.1,
      date: "3 days ago"
    }
  ];

  const hashtagPerformance = [
    { hashtag: "#AITools", posts: 8, reach: 125000, engagement: 6.2 },
    { hashtag: "#ContentCreation", posts: 12, reach: 98000, engagement: 5.8 },
    { hashtag: "#MarketingTips", posts: 6, reach: 87000, engagement: 4.9 },
    { hashtag: "#SocialMedia", posts: 15, reach: 156000, engagement: 4.2 },
    { hashtag: "#AIRevolution", posts: 4, reach: 45000, engagement: 7.1 }
  ];

  const audienceData = [
    { age: "18-24", percentage: 15 },
    { age: "25-34", percentage: 35 },
    { age: "35-44", percentage: 28 },
    { age: "45-54", percentage: 15 },
    { age: "55+", percentage: 7 }
  ];

  const COLORS = ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];

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

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground text-lg">
            Track your content performance and audience insights
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat, index) => (
          <Card key={index} className="hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <div className="flex items-center space-x-1">
                    {stat.trend === "up" ? (
                      <TrendingUp className="w-4 h-4 text-success" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-destructive" />
                    )}
                    <span className={`text-sm font-medium ${stat.trend === "up" ? "text-success" : "text-destructive"}`}>
                      {stat.change}
                    </span>
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

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="platforms">Platforms</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="hashtags">Hashtags</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Engagement Chart */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Engagement Trends</CardTitle>
                    <CardDescription>Engagement across all platforms</CardDescription>
                  </div>
                  <Select value={selectedMetric} onValueChange={setSelectedMetric}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engagement">Engagement</SelectItem>
                      <SelectItem value="reach">Reach</SelectItem>
                      <SelectItem value="impressions">Impressions</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={engagementData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="Instagram" 
                      stackId="1"
                      stroke="#e11d48" 
                      fill="#e11d48"
                      fillOpacity={0.6}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="TikTok" 
                      stackId="1"
                      stroke="#374151" 
                      fill="#374151"
                      fillOpacity={0.6}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="LinkedIn" 
                      stackId="1"
                      stroke="#2563eb" 
                      fill="#2563eb"
                      fillOpacity={0.6}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="Twitter" 
                      stackId="1"
                      stroke="#0ea5e9" 
                      fill="#0ea5e9"
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Top Performing Content */}
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Posts</CardTitle>
                <CardDescription>Your best content this month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {topPosts.slice(0, 4).map((post) => {
                  const PlatformIcon = getPlatformIcon(post.platform);
                  return (
                    <div key={post.id} className="flex items-center space-x-4 p-3 rounded-lg bg-muted/30">
                      <div className={`p-2 rounded-lg bg-background ${getPlatformColor(post.platform)}`}>
                        <PlatformIcon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{post.content}</p>
                        <div className="flex items-center space-x-3 mt-1 text-xs text-muted-foreground">
                          <span>{formatNumber(post.metrics.views)} views</span>
                          <span>{post.engagement_rate}% eng.</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {post.engagement_rate}%
                      </Badge>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Platforms Tab */}
        <TabsContent value="platforms" className="space-y-6">
          <div className="grid gap-6">
            {platformData.map((platform) => {
              const PlatformIcon = getPlatformIcon(platform.platform);
              return (
                <Card key={platform.platform}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-xl bg-muted/50 ${getPlatformColor(platform.platform)}`}>
                        <PlatformIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle>{platform.platform}</CardTitle>
                        <CardDescription>{formatNumber(platform.followers)} followers</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">{formatNumber(platform.followers)}</p>
                        <p className="text-sm text-muted-foreground">Followers</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-accent">{platform.engagement}%</p>
                        <p className="text-sm text-muted-foreground">Engagement</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-success">{platform.posts}</p>
                        <p className="text-sm text-muted-foreground">Posts</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-warning">{formatNumber(platform.reach)}</p>
                        <p className="text-sm text-muted-foreground">Reach</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* Content Tab */}
        <TabsContent value="content" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>All Posts Performance</CardTitle>
              <CardDescription>Detailed performance metrics for all your content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPosts.map((post) => {
                  const PlatformIcon = getPlatformIcon(post.platform);
                  return (
                    <div key={post.id} className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-lg bg-background ${getPlatformColor(post.platform)}`}>
                          <PlatformIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-medium">{post.content}</p>
                          <p className="text-sm text-muted-foreground">{post.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4 text-muted-foreground" />
                          <span>{formatNumber(post.metrics.views)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4 text-muted-foreground" />
                          <span>{formatNumber(post.metrics.likes)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageSquare className="w-4 h-4 text-muted-foreground" />
                          <span>{post.metrics.comments}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Share className="w-4 h-4 text-muted-foreground" />
                          <span>{post.metrics.shares}</span>
                        </div>
                        <Badge variant="secondary">
                          {post.engagement_rate}%
                        </Badge>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Hashtags Tab */}
        <TabsContent value="hashtags" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Hashtag Performance</CardTitle>
              <CardDescription>See which hashtags are driving the most engagement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {hashtagPerformance.map((hashtag, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                    <div className="flex items-center space-x-4">
                      <Badge variant="outline" className="font-mono">
                        {hashtag.hashtag}
                      </Badge>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Used in {hashtag.posts} posts
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6 text-sm">
                      <div>
                        <span className="font-medium">{formatNumber(hashtag.reach)}</span>
                        <span className="text-muted-foreground ml-1">reach</span>
                      </div>
                      <Badge variant="secondary">
                        {hashtag.engagement}% eng.
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Audience Tab */}
        <TabsContent value="audience" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Age Demographics</CardTitle>
                <CardDescription>Age distribution of your followers</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={audienceData}
                      dataKey="percentage"
                      nameKey="age"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      label={({ age, percentage }) => `${age}: ${percentage}%`}
                    >
                      {audienceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Audience Insights</CardTitle>
                <CardDescription>Key demographic information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Gender Split</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 rounded-lg bg-muted/30">
                        <p className="text-2xl font-bold text-primary">58%</p>
                        <p className="text-sm text-muted-foreground">Female</p>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-muted/30">
                        <p className="text-2xl font-bold text-accent">42%</p>
                        <p className="text-sm text-muted-foreground">Male</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Top Locations</span>
                    </div>
                    <div className="space-y-2">
                      {["United States (32%)", "United Kingdom (18%)", "Canada (12%)", "Australia (8%)"].map((location, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-sm">{location.split(" (")[0]}</span>
                          <span className="text-sm text-muted-foreground">{location.match(/\(([^)]+)\)/)?.[1]}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Most Active Times</span>
                    </div>
                    <div className="space-y-2">
                      {["2:00 PM (Peak)", "9:00 AM (High)", "7:00 PM (High)", "11:00 AM (Medium)"].map((time, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-sm">{time.split(" (")[0]}</span>
                          <Badge variant="outline" className="text-xs">
                            {time.match(/\(([^)]+)\)/)?.[1]}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;