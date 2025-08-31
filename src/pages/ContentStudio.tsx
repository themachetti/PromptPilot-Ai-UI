import { useState } from "react";
import { 
  Plus, 
  Upload, 
  Link, 
  Sparkles, 
  Wand2, 
  Copy, 
  Check,
  Instagram,
  Twitter,
  Linkedin,
  Play,
  Hash,
  MessageSquare,
  Calendar,
  Eye,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { mockApiService } from "@/services/mockData";
import { useToast } from "@/hooks/use-toast";

const ContentStudio = () => {
  const [activeTab, setActiveTab] = useState("create");
  const [inputMethod, setInputMethod] = useState("text");
  const [textInput, setTextInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["Instagram"]);
  const [selectedBrandVoice, setSelectedBrandVoice] = useState("Tech Enthusiast");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<any[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isRepurposing, setIsRepurposing] = useState(false);
  const [hashtagSuggestions, setHashtagSuggestions] = useState<string[]>([]);
  const { toast } = useToast();

  const platforms = [
    { id: "Instagram", name: "Instagram", icon: Instagram, color: "text-pink-500" },
    { id: "TikTok", name: "TikTok", icon: Play, color: "text-gray-900 dark:text-white" },
    { id: "LinkedIn", name: "LinkedIn", icon: Linkedin, color: "text-blue-600" },
    { id: "Twitter", name: "Twitter", icon: Twitter, color: "text-sky-500" }
  ];

  const brandVoices = [
    "Tech Enthusiast",
    "Professional Expert", 
    "Casual Creator",
    "Educational Authority",
    "Inspirational Coach"
  ];

  const handlePlatformToggle = (platformId: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(p => p !== platformId)
        : [...prev, platformId]
    );
  };

  const handleGenerateContent = async () => {
    if (!textInput.trim() && inputMethod === "text") {
      toast({
        title: "Input Required",
        description: "Please enter some content to generate posts.",
        variant: "destructive",
      });
      return;
    }

    if (!urlInput.trim() && inputMethod === "url") {
      toast({
        title: "URL Required", 
        description: "Please enter a URL to analyze and generate content.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    try {
      const promises = selectedPlatforms.map(platform => 
        mockApiService.generateContent(
          inputMethod === "text" ? textInput : urlInput,
          platform,
          selectedBrandVoice
        )
      );
      
      const results = await Promise.all(promises);
      setGeneratedContent(results);
      
      // Get hashtag suggestions for the first platform
      if (results.length > 0) {
        const hashtags = await mockApiService.suggestHashtags(results[0].content, results[0].platform);
        setHashtagSuggestions(hashtags);
      }
      
      toast({
        title: "Content Generated! ✨",
        description: `Created ${results.length} optimized posts for your selected platforms.`,
      });
      
      setActiveTab("review");
    } catch (error) {
      toast({
        title: "Generation Failed",
        description: "Failed to generate content. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleRepurposeContent = async () => {
    if (!textInput.trim()) {
      toast({
        title: "Content Required",
        description: "Please enter content to repurpose.",
        variant: "destructive",
      });
      return;
    }

    setIsRepurposing(true);
    
    try {
      const results = await mockApiService.repurposeContent(textInput, selectedPlatforms);
      setGeneratedContent(results);
      
      toast({
        title: "Content Repurposed! 🔄",
        description: `Successfully adapted your content for ${results.length} platforms.`,
      });
      
      setActiveTab("review");
    } catch (error) {
      toast({
        title: "Repurposing Failed",
        description: "Failed to repurpose content. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsRepurposing(false);
    }
  };

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
      
      toast({
        title: "Copied!",
        description: "Content copied to clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy content to clipboard.",
        variant: "destructive",
      });
    }
  };

  const getPlatformIcon = (platform: string) => {
    const found = platforms.find(p => p.id === platform);
    return found?.icon || MessageSquare;
  };

  const getPlatformColor = (platform: string) => {
    const found = platforms.find(p => p.id === platform);
    return found?.color || "text-muted-foreground";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Content Studio</h1>
        <p className="text-muted-foreground text-lg">
          Create, optimize, and repurpose content with AI-powered assistance
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="create">Create New</TabsTrigger>
          <TabsTrigger value="repurpose">Repurpose</TabsTrigger>
          <TabsTrigger value="review">Review & Edit</TabsTrigger>
        </TabsList>

        {/* Create New Content */}
        <TabsContent value="create" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Input Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span>Content Input</span>
                </CardTitle>
                <CardDescription>
                  Choose how you'd like to provide your content idea
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Input Method Selection */}
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    variant={inputMethod === "text" ? "default" : "outline"}
                    onClick={() => setInputMethod("text")}
                    className="flex items-center space-x-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Text</span>
                  </Button>
                  <Button
                    variant={inputMethod === "url" ? "default" : "outline"}
                    onClick={() => setInputMethod("url")}
                    className="flex items-center space-x-2"
                  >
                    <Link className="w-4 h-4" />
                    <span>URL</span>
                  </Button>
                  <Button
                    variant={inputMethod === "upload" ? "default" : "outline"}
                    onClick={() => setInputMethod("upload")}
                    className="flex items-center space-x-2"
                  >
                    <Upload className="w-4 h-4" />
                    <span>File</span>
                  </Button>
                </div>

                {/* Input Fields */}
                {inputMethod === "text" && (
                  <div className="space-y-2">
                    <Label htmlFor="text-input">Your content idea or topic</Label>
                    <Textarea
                      id="text-input"
                      placeholder="Enter your blog post content, video transcript, or content idea..."
                      value={textInput}
                      onChange={(e) => setTextInput(e.target.value)}
                      rows={6}
                    />
                  </div>
                )}

                {inputMethod === "url" && (
                  <div className="space-y-2">
                    <Label htmlFor="url-input">Content URL</Label>
                    <Input
                      id="url-input"
                      placeholder="https://example.com/blog-post"
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                    />
                    <p className="text-sm text-muted-foreground">
                      We'll analyze the content from this URL and create social media posts
                    </p>
                  </div>
                )}

                {inputMethod === "upload" && (
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Drop files here or click to upload
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Supports: PDF, DOCX, TXT, MP4, MP3
                    </p>
                    <Button variant="outline" className="mt-4">
                      Choose Files
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Settings Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Wand2 className="w-5 h-5 text-accent" />
                  <span>Generation Settings</span>
                </CardTitle>
                <CardDescription>
                  Customize how your content will be generated
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Platform Selection */}
                <div className="space-y-3">
                  <Label>Target Platforms</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {platforms.map((platform) => {
                      const Icon = platform.icon;
                      const isSelected = selectedPlatforms.includes(platform.id);
                      return (
                        <Button
                          key={platform.id}
                          variant={isSelected ? "default" : "outline"}
                          onClick={() => handlePlatformToggle(platform.id)}
                          className="flex items-center space-x-2 justify-start"
                        >
                          <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : platform.color}`} />
                          <span>{platform.name}</span>
                        </Button>
                      );
                    })}
                  </div>
                </div>

                {/* Brand Voice Selection */}
                <div className="space-y-2">
                  <Label htmlFor="brand-voice">Brand Voice</Label>
                  <Select value={selectedBrandVoice} onValueChange={setSelectedBrandVoice}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select brand voice" />
                    </SelectTrigger>
                    <SelectContent>
                      {brandVoices.map((voice) => (
                        <SelectItem key={voice} value={voice}>
                          {voice}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Advanced Options */}
                <div className="space-y-4 pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label>Include Hashtags</Label>
                      <p className="text-xs text-muted-foreground">
                        Auto-generate relevant hashtags
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label>Optimize for Engagement</Label>
                      <p className="text-xs text-muted-foreground">
                        Create attention-grabbing hooks
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                {/* Generate Button */}
                <Button 
                  onClick={handleGenerateContent}
                  disabled={isGenerating}
                  className="w-full btn-ai-primary"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Generate Content
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Repurpose Content */}
        <TabsContent value="repurpose" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <RefreshCw className="w-5 h-5 text-primary" />
                <span>Repurpose Existing Content</span>
              </CardTitle>
              <CardDescription>
                Transform your existing content for different platforms
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="repurpose-input">Original Content</Label>
                <Textarea
                  id="repurpose-input"
                  placeholder="Paste your existing blog post, video transcript, or social media post..."
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  rows={8}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Platform Selection */}
                <div className="space-y-3">
                  <Label>Transform for Platforms</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {platforms.map((platform) => {
                      const Icon = platform.icon;
                      const isSelected = selectedPlatforms.includes(platform.id);
                      return (
                        <Button
                          key={platform.id}
                          variant={isSelected ? "default" : "outline"}
                          onClick={() => handlePlatformToggle(platform.id)}
                          className="flex items-center space-x-2 justify-start"
                        >
                          <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : platform.color}`} />
                          <span>{platform.name}</span>
                        </Button>
                      );
                    })}
                  </div>
                </div>

                {/* Brand Voice */}
                <div className="space-y-2">
                  <Label htmlFor="repurpose-brand-voice">Brand Voice</Label>
                  <Select value={selectedBrandVoice} onValueChange={setSelectedBrandVoice}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select brand voice" />
                    </SelectTrigger>
                    <SelectContent>
                      {brandVoices.map((voice) => (
                        <SelectItem key={voice} value={voice}>
                          {voice}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                onClick={handleRepurposeContent}
                disabled={isRepurposing}
                className="w-full btn-ai-primary"
              >
                {isRepurposing ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Repurposing...
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Repurpose Content
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Review & Edit */}
        <TabsContent value="review" className="space-y-6">
          {generatedContent.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Eye className="w-12 h-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Content to Review</h3>
                <p className="text-muted-foreground text-center mb-4">
                  Generate or repurpose content to see it here for review and editing.
                </p>
                <Button onClick={() => setActiveTab("create")} className="btn-ai-primary">
                  Create Content
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {/* Hashtag Suggestions */}
              {hashtagSuggestions.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Hash className="w-5 h-5 text-accent" />
                      <span>Suggested Hashtags</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {hashtagSuggestions.map((hashtag, index) => (
                        <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary/10">
                          {hashtag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Generated Content */}
              <div className="grid gap-6">
                {generatedContent.map((content, index) => {
                  const PlatformIcon = getPlatformIcon(content.platform);
                  return (
                    <Card key={content.id}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg bg-muted/50 ${getPlatformColor(content.platform)}`}>
                              <PlatformIcon className="w-5 h-5" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{content.platform}</CardTitle>
                              <CardDescription>AI-optimized content</CardDescription>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => copyToClipboard(content.caption, content.id)}
                            >
                              {copiedId === content.id ? (
                                <Check className="w-4 h-4" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </Button>
                            <Button size="sm" className="btn-ai-secondary">
                              <Calendar className="w-4 h-4 mr-2" />
                              Schedule
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label>Caption</Label>
                          <Textarea
                            value={content.caption}
                            onChange={(e) => {
                              const updated = [...generatedContent];
                              updated[index].caption = e.target.value;
                              setGeneratedContent(updated);
                            }}
                            rows={6}
                          />
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {content.hashtags.map((hashtag: string, hashIndex: number) => (
                            <Badge key={hashIndex} variant="secondary">
                              {hashtag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentStudio;