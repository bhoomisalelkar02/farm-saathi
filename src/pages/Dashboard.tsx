import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Camera, 
  Cloud, 
  MessageCircle, 
  Thermometer, 
  Droplets, 
  Wind,
  Sun,
  Upload,
  Activity,
  TrendingUp,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

const Dashboard = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [diseaseResult, setDiseaseResult] = useState(null);

  // Mock weather data
  const weatherData = {
    temperature: 28,
    humidity: 65,
    windSpeed: 12,
    condition: "Partly Cloudy",
    forecast: "Good conditions for crop growth"
  };

  // Mock disease analysis result
  const mockDisease = {
    name: "Leaf Blight",
    confidence: 87,
    severity: "Moderate",
    precautions: [
      "Apply copper-based fungicide spray",
      "Ensure proper drainage in fields",
      "Remove affected leaves immediately",
      "Increase spacing between plants"
    ]
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      // Simulate disease detection
      setTimeout(() => {
        setDiseaseResult(mockDisease);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="bg-white shadow-gentle border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">कृषक मित्र डैशबोर्ड | कृषक मित्र Dashboard</h1>
              <p className="text-muted-foreground">वापस स्वागत है, किसान! | Welcome back, Farmer!</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                <Activity className="w-3 h-3 mr-1" />
                Active
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="disease" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="disease" className="flex items-center gap-2">
              <Camera className="w-4 h-4" />
              रोग पहचान | Disease Detection
            </TabsTrigger>
            <TabsTrigger value="weather" className="flex items-center gap-2">
              <Cloud className="w-4 h-4" />
              मौसम और सुझाव | Weather & Tips
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              AI सहायक | AI Assistant
            </TabsTrigger>
          </TabsList>

          {/* Disease Detection Tab */}
          <TabsContent value="disease">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="shadow-crop">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="w-5 h-5 text-primary" />
                    फसल की तस्वीर अपलोड करें | Upload Crop Image
                  </CardTitle>
                  <CardDescription>
                    रोगों की पहचान के लिए प्रभावित फसलों की तस्वीर लें | Take a photo of affected crops to identify diseases
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">
                      अपलोड करने के लिए क्लिक करें या फसल की तस्वीर खींचकर छोड़ें | Click to upload or drag and drop crop image
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <Button asChild className="bg-gradient-primary">
                      <label htmlFor="image-upload" className="cursor-pointer">
                        तस्वीर चुनें | Choose Image
                      </label>
                    </Button>
                  </div>
                  {selectedImage && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Selected: {selectedImage.name}</p>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full w-full animate-pulse"></div>
                      </div>
                      <p className="text-xs text-muted-foreground">तस्वीर का विश्लेषण हो रहा है... | Analyzing image...</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {diseaseResult && (
                <Card className="shadow-earth">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-destructive" />
                      रोग पाया गया | Disease Detected
                    </CardTitle>
                    <CardDescription>
                      विश्लेषण परिणाम और सिफारिशें | Analysis results and recommendations
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{diseaseResult.name}</h3>
                      <Badge variant={diseaseResult.severity === 'High' ? 'destructive' : 'secondary'}>
                        {diseaseResult.severity}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">विश्वसनीयता: | Confidence:</span>
                      <div className="flex-1 bg-secondary rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${diseaseResult.confidence}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{diseaseResult.confidence}%</span>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-earth">सुझावित कार्य: | Recommended Actions:</h4>
                      <ul className="space-y-2">
                        {diseaseResult.precautions.map((precaution, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            {precaution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* Weather Tab */}
          <TabsContent value="weather">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Current Weather */}
              <Card className="shadow-gentle">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sun className="w-5 h-5 text-sky" />
                    वर्तमान मौसम | Current Weather
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold text-sky">{weatherData.temperature}°C</div>
                    <p className="text-muted-foreground">{weatherData.condition}</p>
                    
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      <div className="text-center">
                        <Droplets className="w-4 h-4 text-sky mx-auto mb-1" />
                        <div className="text-sm font-medium">{weatherData.humidity}%</div>
                        <div className="text-xs text-muted-foreground">Humidity</div>
                      </div>
                      <div className="text-center">
                        <Wind className="w-4 h-4 text-sky mx-auto mb-1" />
                        <div className="text-sm font-medium">{weatherData.windSpeed} km/h</div>
                        <div className="text-xs text-muted-foreground">Wind</div>
                      </div>
                      <div className="text-center">
                        <Thermometer className="w-4 h-4 text-sky mx-auto mb-1" />
                        <div className="text-sm font-medium">Normal</div>
                        <div className="text-xs text-muted-foreground">Range</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Farming Recommendations */}
              <Card className="lg:col-span-2 shadow-crop">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Farming Recommendations
                  </CardTitle>
                  <CardDescription>
                    Based on current weather and crop conditions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-primary/5 rounded-lg p-4">
                    <h4 className="font-semibold text-primary mb-2">Today's Advice</h4>
                    <p className="text-sm text-muted-foreground mb-3">{weatherData.forecast}</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium text-sm">Irrigation Schedule</p>
                          <p className="text-xs text-muted-foreground">Current humidity is {weatherData.humidity}% - reduce watering frequency</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-earth rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium text-sm">Pest Management</p>
                          <p className="text-xs text-muted-foreground">Good conditions for pest activity - monitor crops closely</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-sky rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium text-sm">Harvest Timing</p>
                          <p className="text-xs text-muted-foreground">Weather suitable for harvesting activities this week</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Chat Tab */}
          <TabsContent value="chat">
            <Card className="shadow-gentle">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  AI Farming Assistant
                </CardTitle>
                <CardDescription>
                  Get instant answers to your farming questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="h-96 bg-secondary/20 rounded-lg p-4 overflow-y-auto">
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-3 ml-12">
                        <p className="text-sm">Hello! How can I help you with your farming today?</p>
                      </div>
                      <div className="bg-primary/10 rounded-lg p-3 mr-12">
                        <p className="text-sm">What's the best time to plant rice in Karnataka?</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 ml-12">
                        <p className="text-sm">For rice cultivation in Karnataka, the best planting time depends on the season:</p>
                        <ul className="text-sm mt-2 space-y-1">
                          <li>• Kharif season: June-July (with monsoon)</li>
                          <li>• Rabi season: November-December</li>
                          <li>• Summer season: February-March (with irrigation)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Input placeholder="Ask your farming question..." className="flex-1" />
                    <Button className="bg-gradient-primary">Send</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;