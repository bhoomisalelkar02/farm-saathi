import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Smartphone, 
  Users, 
  Camera, 
  Cloud, 
  MessageCircle,
  Wheat,
  TrendingUp,
  Shield,
  ArrowRight
} from "lucide-react";
import agriculturalHero from "@/assets/agricultural-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-gentle sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Wheat className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">कृषक मित्र</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-primary text-white hover:bg-primary-hover">
                Join Now
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-earth/5 to-sky/5"></div>
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          <div className="space-y-8">
            <div>
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                <TrendingUp className="w-3 h-3 mr-1" />
                Smart Farming Revolution
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Your Digital
                <span className="text-transparent bg-gradient-primary bg-clip-text block">
                  Farming Assistant
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Empowering Indian farmers with AI-powered disease detection, 
                weather insights, and expert agricultural guidance - accessible 
                to everyone, even without smartphones.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-gradient-harvest text-white hover:bg-primary font-medium px-8 py-4">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 px-8 py-4">
                  Farmer Login
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Active Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-earth">95%</div>
                <div className="text-sm text-muted-foreground">Disease Detection</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-sky">24/7</div>
                <div className="text-sm text-muted-foreground">AI Support</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-crop">
              <img 
                src={agriculturalHero} 
                alt="Indian farmers using modern technology" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Comprehensive Farming Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced technology made simple for every farmer across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-gentle hover:shadow-crop transition-all duration-300 border-0">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Disease Detection</CardTitle>
                <CardDescription>
                  Upload crop photos to instantly identify diseases and get treatment recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• AI-powered image analysis</li>
                  <li>• 95%+ accuracy rate</li>
                  <li>• Instant treatment advice</li>
                  <li>• Works offline</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-gentle hover:shadow-earth transition-all duration-300 border-0">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-earth-sky rounded-xl flex items-center justify-center mb-4">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Weather Intelligence</CardTitle>
                <CardDescription>
                  Get personalized farming recommendations based on real-time weather data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Hyperlocal weather forecasts</li>
                  <li>• Crop-specific advice</li>
                  <li>• Irrigation scheduling</li>
                  <li>• Harvest timing alerts</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-gentle hover:shadow-crop transition-all duration-300 border-0">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-harvest rounded-xl flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">AI Assistant</CardTitle>
                <CardDescription>
                  24/7 chatbot support for all your farming questions and guidance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Multilingual support</li>
                  <li>• Expert knowledge base</li>
                  <li>• Voice interaction</li>
                  <li>• Instant responses</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Access Methods */}
      <section className="py-20 bg-gradient-to-br from-accent/20 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Accessible to Every Farmer
            </h2>
            <p className="text-xl text-muted-foreground">
              Multiple ways to access our services - no farmer left behind
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-crop border-2 border-primary/10">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Direct Access</CardTitle>
                <CardDescription className="text-base">
                  For farmers with smartphones
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">What you get:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Personal dashboard</li>
                    <li>• Instant photo uploads</li>
                    <li>• Real-time notifications</li>
                    <li>• Complete farming history</li>
                  </ul>
                </div>
                <Link to="/signup">
                  <Button className="w-full bg-gradient-primary text-white">
                    Register Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-earth border-2 border-earth/10">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-earth-sky rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Assisted Access</CardTitle>
                <CardDescription className="text-base">
                  Through your local Gram Panchayat
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-earth/5 rounded-lg p-4">
                  <h4 className="font-semibold text-earth mb-2">How it works:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Visit your Gram Panchayat office</li>
                    <li>• Officials help with photo uploads</li>
                    <li>• Get printed recommendations</li>
                    <li>• No smartphone needed</li>
                  </ul>
                </div>
                <Link to="/login">
                  <Button className="w-full bg-gradient-earth-sky text-white">
                    Panchayat Login
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Trusted by Farmers Across India
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of farmers who have improved their crop yields and 
              reduced losses with our AI-powered agricultural assistance.
            </p>
            <div className="flex justify-center">
              <Link to="/signup">
                <Button size="lg" className="bg-gradient-harvest text-white hover:bg-primary font-medium px-12 py-4">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Wheat className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold">कृषक मित्र</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                Empowering Indian agriculture with technology
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Built for farmers, by technologists who care
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
