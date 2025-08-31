import { useState } from "react";
import { 
  Calendar, 
  Clock, 
  Plus, 
  Edit, 
  Trash2, 
  Send,
  Instagram,
  Twitter,
  Linkedin,
  Play,
  ChevronLeft,
  ChevronRight,
  Filter,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface ScheduledPost {
  id: string;
  platform: 'Instagram' | 'TikTok' | 'LinkedIn' | 'Twitter';
  content: string;
  caption: string;
  scheduledDate: Date;
  status: 'scheduled' | 'published' | 'failed';
  image?: string;
}

const Scheduler = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'day'>('month');
  const [filterPlatform, setFilterPlatform] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock scheduled posts
  const scheduledPosts: ScheduledPost[] = [
    {
      id: '1',
      platform: 'Instagram',
      content: '5 AI tools that will revolutionize your workflow',
      caption: '🤖 Ready to 10x your productivity? These AI tools are game-changers!\n\n1. ChatGPT for writing\n2. Midjourney for visuals\n3. Notion AI for notes\n4. Jasper for marketing\n5. Loom AI for videos\n\nWhich one are you excited to try? 👇\n\n#AITools #Productivity',
      scheduledDate: new Date(2024, 0, 16, 14, 0),
      status: 'scheduled',
      image: '/api/placeholder/64/64'
    },
    {
      id: '2',
      platform: 'TikTok',
      content: 'Behind the scenes: My content creation process',
      caption: 'POV: You discover the secret to viral content 🤯 #ContentCreator #BehindTheScenes #Viral',
      scheduledDate: new Date(2024, 0, 16, 16, 30),
      status: 'scheduled'
    },
    {
      id: '3',
      platform: 'LinkedIn',
      content: 'The future of AI in business automation',
      caption: 'After 5 years in tech, here\'s my take on AI:\n\n→ It\'s not replacing jobs, it\'s transforming them\n→ Early adopters will have a massive advantage\n→ The key is human + AI collaboration\n\nWhat\'s your experience with AI tools?',
      scheduledDate: new Date(2024, 0, 17, 9, 0),
      status: 'scheduled'
    },
    {
      id: '4',
      platform: 'Twitter',
      content: 'Thread: 10 ChatGPT prompts for better productivity',
      caption: '🧵 Thread: 10 ChatGPT prompts that will boost your productivity by 200%\n\n1/ "Act as a productivity coach and help me prioritize my tasks..."',
      scheduledDate: new Date(2024, 0, 17, 15, 45),
      status: 'scheduled'
    },
    {
      id: '5',
      platform: 'Instagram',
      content: 'Weekly motivation: Consistency beats perfection',
      caption: '✨ Monday Motivation ✨\n\nConsistency beats perfection every single time.\n\nYou don\'t need to be perfect, you just need to show up.\n\n💭 What\'s one thing you\'re going to be consistent with this week?',
      scheduledDate: new Date(2024, 0, 15, 10, 0),
      status: 'published'
    }
  ];

  const platforms = [
    { id: 'Instagram', name: 'Instagram', icon: Instagram, color: 'text-pink-500' },
    { id: 'TikTok', name: 'TikTok', icon: Play, color: 'text-gray-900 dark:text-white' },
    { id: 'LinkedIn', name: 'LinkedIn', icon: Linkedin, color: 'text-blue-600' },
    { id: 'Twitter', name: 'Twitter', icon: Twitter, color: 'text-sky-500' }
  ];

  const getPlatformIcon = (platform: string) => {
    const found = platforms.find(p => p.id === platform);
    return found?.icon || Calendar;
  };

  const getPlatformColor = (platform: string) => {
    const found = platforms.find(p => p.id === platform);
    return found?.color || 'text-muted-foreground';
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit', 
      hour12: true 
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const getPostsForDate = (date: Date) => {
    return scheduledPosts.filter(post => {
      const postDate = new Date(post.scheduledDate);
      return postDate.toDateString() === date.toDateString();
    });
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const filteredPosts = scheduledPosts.filter(post => {
    const matchesPlatform = filterPlatform === 'all' || post.platform === filterPlatform;
    const matchesSearch = post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.caption.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPlatform && matchesSearch;
  });

  const upcomingPosts = filteredPosts
    .filter(post => post.scheduledDate > new Date() && post.status === 'scheduled')
    .sort((a, b) => a.scheduledDate.getTime() - b.scheduledDate.getTime())
    .slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Content Scheduler</h1>
          <p className="text-muted-foreground text-lg">
            Plan, schedule, and manage your content calendar
          </p>
        </div>
        <Button className="btn-ai-primary">
          <Plus className="w-4 h-4 mr-2" />
          Schedule New Post
        </Button>
      </div>

      {/* Controls */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex items-center space-x-2">
          <Search className="w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <Select value={filterPlatform} onValueChange={setFilterPlatform}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="All Platforms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Platforms</SelectItem>
              {platforms.map(platform => (
                <SelectItem key={platform.id} value={platform.id}>
                  {platform.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <Select value={viewMode} onValueChange={(value: 'month' | 'week' | 'day') => setViewMode(value)}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="month">Month</SelectItem>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="day">Day</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">
                  {currentDate.toLocaleDateString('en-US', { 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" onClick={prevMonth}>
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={nextMonth}>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-1">
                {getDaysInMonth(currentDate).map((day, index) => {
                  const postsForDay = day ? getPostsForDate(day) : [];
                  const isToday = day && day.toDateString() === new Date().toDateString();
                  const isSelected = day && selectedDate && day.toDateString() === selectedDate.toDateString();
                  
                  return (
                    <div
                      key={index}
                      className={cn(
                        "min-h-[100px] p-2 border rounded-lg cursor-pointer transition-colors",
                        day ? "hover:bg-muted/50" : "",
                        isToday ? "border-primary bg-primary/5" : "border-border",
                        isSelected ? "bg-muted" : ""
                      )}
                      onClick={() => day && setSelectedDate(day)}
                    >
                      {day && (
                        <>
                          <div className={cn(
                            "text-sm font-medium mb-1",
                            isToday ? "text-primary" : "text-foreground"
                          )}>
                            {day.getDate()}
                          </div>
                          <div className="space-y-1">
                            {postsForDay.slice(0, 2).map(post => {
                              const PlatformIcon = getPlatformIcon(post.platform);
                              return (
                                <div
                                  key={post.id}
                                  className="flex items-center space-x-1 text-xs p-1 rounded bg-muted/50"
                                >
                                  <PlatformIcon className={cn("w-3 h-3", getPlatformColor(post.platform))} />
                                  <span className="truncate">{formatTime(post.scheduledDate)}</span>
                                </div>
                              );
                            })}
                            {postsForDay.length > 2 && (
                              <div className="text-xs text-muted-foreground">
                                +{postsForDay.length - 2} more
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Posts */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Upcoming Posts</CardTitle>
              <CardDescription>Next 5 scheduled posts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingPosts.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-4">
                  No upcoming posts scheduled
                </p>
              ) : (
                upcomingPosts.map(post => {
                  const PlatformIcon = getPlatformIcon(post.platform);
                  return (
                    <div key={post.id} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={post.image} />
                        <AvatarFallback>
                          <PlatformIcon className={cn("w-5 h-5", getPlatformColor(post.platform))} />
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{post.content}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {post.platform}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {formatDate(post.scheduledDate)} at {formatTime(post.scheduledDate)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Plus className="w-4 h-4 mr-2" />
                Create Post
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Clock className="w-4 h-4 mr-2" />
                Best Times
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Send className="w-4 h-4 mr-2" />
                Bulk Schedule
              </Button>
            </CardContent>
          </Card>

          {/* Calendar Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">This Month</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Scheduled</span>
                <span className="font-medium">12 posts</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Published</span>
                <span className="font-medium">8 posts</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Draft</span>
                <span className="font-medium">3 posts</span>
              </div>
              <div className="pt-2 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Total Posts</span>
                  <span className="font-bold text-primary">23</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Selected Date Details */}
      {selectedDate && (
        <Card>
          <CardHeader>
            <CardTitle>
              Posts for {selectedDate.toLocaleDateString('en-US', { 
                weekday: 'long', 
                month: 'long', 
                day: 'numeric' 
              })}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {getPostsForDate(selectedDate).map(post => {
                const PlatformIcon = getPlatformIcon(post.platform);
                return (
                  <div key={post.id} className="flex items-center justify-between p-4 rounded-xl border">
                    <div className="flex items-center space-x-4">
                      <div className={cn("p-2 rounded-lg bg-muted/50", getPlatformColor(post.platform))}>
                        <PlatformIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium">{post.content}</p>
                        <div className="flex items-center space-x-3 mt-1 text-sm text-muted-foreground">
                          <span>{formatTime(post.scheduledDate)}</span>
                          <Badge variant={
                            post.status === 'published' ? 'default' : 
                            post.status === 'failed' ? 'destructive' : 'secondary'
                          }>
                            {post.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                );
              })}
              {getPostsForDate(selectedDate).length === 0 && (
                <p className="text-muted-foreground text-center py-8">
                  No posts scheduled for this date
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Scheduler;