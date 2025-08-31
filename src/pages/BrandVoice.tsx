import { useState } from "react";
import { 
  Mic, 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  Sparkles, 
  MessageSquare, 
  TestTube,
  Copy,
  Check,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { mockBrandVoices, mockApiService } from "@/services/mockData";
import { useToast } from "@/hooks/use-toast";

const BrandVoice = () => {
  const [selectedVoice, setSelectedVoice] = useState(mockBrandVoices[0]);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [testText, setTestText] = useState("");
  const [generatedSample, setGeneratedSample] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  const [newVoice, setNewVoice] = useState({
    name: "",
    tone: "friendly" as const,
    formality: "neutral" as const,
    vocabulary: "moderate" as const,
    emoji_usage: "moderate" as const,
    sample_text: "",
    keywords: [] as string[]
  });

  const { toast } = useToast();

  const toneOptions = [
    { value: "professional", label: "Professional", description: "Formal and business-oriented" },
    { value: "casual", label: "Casual", description: "Relaxed and conversational" },
    { value: "friendly", label: "Friendly", description: "Warm and approachable" },
    { value: "authoritative", label: "Authoritative", description: "Expert and confident" },
    { value: "playful", label: "Playful", description: "Fun and energetic" }
  ];

  const formalityOptions = [
    { value: "very-formal", label: "Very Formal" },
    { value: "formal", label: "Formal" },
    { value: "neutral", label: "Neutral" },
    { value: "informal", label: "Informal" },
    { value: "very-informal", label: "Very Informal" }
  ];

  const vocabularyOptions = [
    { value: "simple", label: "Simple", description: "Easy to understand words" },
    { value: "moderate", label: "Moderate", description: "Mix of simple and advanced" },
    { value: "advanced", label: "Advanced", description: "Sophisticated vocabulary" },
    { value: "technical", label: "Technical", description: "Industry-specific terms" }
  ];

  const emojiOptions = [
    { value: "none", label: "None" },
    { value: "minimal", label: "Minimal" },
    { value: "moderate", label: "Moderate" },
    { value: "frequent", label: "Frequent" }
  ];

  const handleSaveVoice = async () => {
    try {
      if (isCreating) {
        await mockApiService.saveBrandVoice(newVoice);
        toast({
          title: "Brand Voice Created! ✨",
          description: `"${newVoice.name}" has been added to your brand voices.`,
        });
        setIsCreating(false);
        setNewVoice({
          name: "",
          tone: "friendly",
          formality: "neutral",
          vocabulary: "moderate",
          emoji_usage: "moderate",
          sample_text: "",
          keywords: []
        });
      } else {
        toast({
          title: "Brand Voice Updated!",
          description: `"${selectedVoice.name}" has been updated successfully.`,
        });
        setIsEditing(false);
      }
    } catch (error) {
      toast({
        title: "Save Failed",
        description: "Failed to save brand voice. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleTestVoice = async () => {
    if (!testText.trim()) {
      toast({
        title: "Test Text Required",
        description: "Please enter some text to test the brand voice.",
        variant: "destructive",
      });
      return;
    }

    setIsTesting(true);
    try {
      // Simulate AI processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const voice = isCreating ? newVoice : selectedVoice;
      let sample = testText;
      
      // Apply transformations based on voice settings
      if (voice.tone === 'playful') {
        sample = sample + " ✨🎉";
      } else if (voice.tone === 'professional') {
        sample = sample + "\n\nBest regards,";
      }
      
      if (voice.emoji_usage === 'frequent') {
        sample = "🤖 " + sample + " 🚀";
      }
      
      setGeneratedSample(sample);
      
      toast({
        title: "Voice Test Complete!",
        description: "See how your content sounds with this brand voice.",
      });
    } catch (error) {
      toast({
        title: "Test Failed",
        description: "Failed to test brand voice. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsTesting(false);
    }
  };

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
      
      toast({
        title: "Copied!",
        description: "Text copied to clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy text to clipboard.",
        variant: "destructive",
      });
    }
  };

  const addKeyword = (keyword: string) => {
    if (keyword.trim() && !newVoice.keywords.includes(keyword.trim())) {
      setNewVoice(prev => ({
        ...prev,
        keywords: [...prev.keywords, keyword.trim()]
      }));
    }
  };

  const removeKeyword = (keyword: string) => {
    setNewVoice(prev => ({
      ...prev,
      keywords: prev.keywords.filter(k => k !== keyword)
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Brand Voice</h1>
          <p className="text-muted-foreground text-lg">
            Define and manage your unique brand voices for consistent content creation
          </p>
        </div>
        <Button 
          onClick={() => setIsCreating(true)}
          className="btn-ai-primary"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Brand Voice
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Brand Voice List */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Your Brand Voices</CardTitle>
              <CardDescription>Select a voice to view or edit</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {mockBrandVoices.map((voice) => (
                <div
                  key={voice.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedVoice.id === voice.id 
                      ? 'border-primary bg-primary/5' 
                      : 'border-border hover:bg-muted/50'
                  }`}
                  onClick={() => setSelectedVoice(voice)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{voice.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {voice.tone}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {voice.sample_text}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Voice Tester */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TestTube className="w-5 h-5" />
                <span>Voice Tester</span>
              </CardTitle>
              <CardDescription>Test how content sounds with your brand voice</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="test-text">Test Content</Label>
                <Textarea
                  id="test-text"
                  placeholder="Enter some text to test with your brand voice..."
                  value={testText}
                  onChange={(e) => setTestText(e.target.value)}
                  rows={3}
                />
              </div>
              
              <Button 
                onClick={handleTestVoice}
                disabled={isTesting}
                className="w-full btn-ai-secondary"
              >
                {isTesting ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Testing...
                  </>
                ) : (
                  <>
                    <TestTube className="w-4 h-4 mr-2" />
                    Test Voice
                  </>
                )}
              </Button>

              {generatedSample && (
                <div className="space-y-2">
                  <Label>Generated Sample</Label>
                  <div className="p-3 rounded-lg bg-muted/30 relative">
                    <p className="text-sm">{generatedSample}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(generatedSample, 'sample')}
                    >
                      {copiedId === 'sample' ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Voice Details/Editor */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <Mic className="w-5 h-5" />
                    <span>
                      {isCreating ? "Create New Brand Voice" : selectedVoice.name}
                    </span>
                  </CardTitle>
                  <CardDescription>
                    {isCreating ? "Define a new brand voice" : "Configure your brand voice settings"}
                  </CardDescription>
                </div>
                {!isCreating && !isEditing && (
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {(isEditing || isCreating) ? (
                <>
                  {/* Voice Name */}
                  <div className="space-y-2">
                    <Label htmlFor="voice-name">Voice Name</Label>
                    <Input
                      id="voice-name"
                      placeholder="e.g., Tech Enthusiast, Professional Expert"
                      value={isCreating ? newVoice.name : selectedVoice.name}
                      onChange={(e) => {
                        if (isCreating) {
                          setNewVoice(prev => ({ ...prev, name: e.target.value }));
                        }
                      }}
                    />
                  </div>

                  {/* Tone */}
                  <div className="space-y-3">
                    <Label>Tone</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {toneOptions.map((option) => (
                        <div
                          key={option.value}
                          className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                            (isCreating ? newVoice.tone : selectedVoice.tone) === option.value
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:bg-muted/50'
                          }`}
                          onClick={() => {
                            if (isCreating) {
                              setNewVoice(prev => ({ ...prev, tone: option.value as any }));
                            }
                          }}
                        >
                          <div className="font-medium text-sm">{option.label}</div>
                          <div className="text-xs text-muted-foreground">{option.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Formality */}
                  <div className="space-y-2">
                    <Label htmlFor="formality">Formality Level</Label>
                    <Select 
                      value={isCreating ? newVoice.formality : selectedVoice.formality}
                      onValueChange={(value) => {
                        if (isCreating) {
                          setNewVoice(prev => ({ ...prev, formality: value as any }));
                        }
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {formalityOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Vocabulary */}
                  <div className="space-y-2">
                    <Label htmlFor="vocabulary">Vocabulary Level</Label>
                    <Select 
                      value={isCreating ? newVoice.vocabulary : selectedVoice.vocabulary}
                      onValueChange={(value) => {
                        if (isCreating) {
                          setNewVoice(prev => ({ ...prev, vocabulary: value as any }));
                        }
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {vocabularyOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            <div>
                              <div className="font-medium">{option.label}</div>
                              <div className="text-xs text-muted-foreground">{option.description}</div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Emoji Usage */}
                  <div className="space-y-2">
                    <Label htmlFor="emoji-usage">Emoji Usage</Label>
                    <Select 
                      value={isCreating ? newVoice.emoji_usage : selectedVoice.emoji_usage}
                      onValueChange={(value) => {
                        if (isCreating) {
                          setNewVoice(prev => ({ ...prev, emoji_usage: value as any }));
                        }
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {emojiOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Sample Text */}
                  <div className="space-y-2">
                    <Label htmlFor="sample-text">Sample Text</Label>
                    <Textarea
                      id="sample-text"
                      placeholder="Write a sample text in your brand voice..."
                      value={isCreating ? newVoice.sample_text : selectedVoice.sample_text}
                      onChange={(e) => {
                        if (isCreating) {
                          setNewVoice(prev => ({ ...prev, sample_text: e.target.value }));
                        }
                      }}
                      rows={3}
                    />
                  </div>

                  {/* Keywords */}
                  {isCreating && (
                    <div className="space-y-2">
                      <Label>Brand Keywords</Label>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {newVoice.keywords.map((keyword) => (
                          <Badge 
                            key={keyword} 
                            variant="secondary" 
                            className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                            onClick={() => removeKeyword(keyword)}
                          >
                            {keyword} ×
                          </Badge>
                        ))}
                      </div>
                      <Input
                        placeholder="Add keywords that represent your brand (press Enter)"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            addKeyword((e.target as HTMLInputElement).value);
                            (e.target as HTMLInputElement).value = '';
                          }
                        }}
                      />
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex justify-end space-x-3">
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setIsEditing(false);
                        setIsCreating(false);
                      }}
                    >
                      Cancel
                    </Button>
                    <Button onClick={handleSaveVoice} className="btn-ai-primary">
                      <Save className="w-4 h-4 mr-2" />
                      {isCreating ? "Create Voice" : "Save Changes"}
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  {/* Voice Preview */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-3 rounded-lg bg-muted/30">
                        <p className="text-sm text-muted-foreground">Tone</p>
                        <p className="font-medium capitalize">{selectedVoice.tone}</p>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-muted/30">
                        <p className="text-sm text-muted-foreground">Formality</p>
                        <p className="font-medium capitalize">{selectedVoice.formality.replace('-', ' ')}</p>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-muted/30">
                        <p className="text-sm text-muted-foreground">Vocabulary</p>
                        <p className="font-medium capitalize">{selectedVoice.vocabulary}</p>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-muted/30">
                        <p className="text-sm text-muted-foreground">Emojis</p>
                        <p className="font-medium capitalize">{selectedVoice.emoji_usage.replace('_', ' ')}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Sample Text</Label>
                      <div className="p-4 rounded-lg bg-muted/30">
                        <p className="text-sm">{selectedVoice.sample_text}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Brand Keywords</Label>
                      <div className="flex flex-wrap gap-2">
                        {selectedVoice.keywords.map((keyword) => (
                          <Badge key={keyword} variant="outline">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BrandVoice;