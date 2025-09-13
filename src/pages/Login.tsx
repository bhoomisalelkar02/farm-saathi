import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Users, User, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import agriculturalHero from "@/assets/agricultural-hero.jpg";

const Login = () => {
  const [farmerLogin, setFarmerLogin] = useState({ phone: "", password: "" });
  const [panchayatLogin, setPanchayatLogin] = useState({ 
    panchayatId: "", 
    password: "",
    farmerPhone: "",
    farmerName: ""
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/30 to-primary/10">
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={agriculturalHero} 
          alt="Indian farmers with modern technology" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">कृषक मित्र</h1>
          <p className="text-muted-foreground">Your Agricultural Companion</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Tabs defaultValue="farmer" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="farmer" className="flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              किसान लॉगिन | Farmer Login
            </TabsTrigger>
            <TabsTrigger value="panchayat" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              ग्राम पंचायत | Gram Panchayat
            </TabsTrigger>
          </TabsList>

          <TabsContent value="farmer">
            <Card className="shadow-crop">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">किसान प्रत्यक्ष लॉगिन | Farmer Direct Login</CardTitle>
                <CardDescription>
                  अपने पंजीकृत मोबाइल नंबर से लॉगिन करें | Login with your registered mobile number
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="farmer-phone">मोबाइल नंबर | Mobile Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="farmer-phone"
                      type="tel"
                      placeholder="अपना मोबाइल नंबर दर्ज करें | Enter mobile number"
                      className="pl-10"
                      value={farmerLogin.phone}
                      onChange={(e) => setFarmerLogin(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="farmer-password">पासवर्ड | Password</Label>
                  <Input
                    id="farmer-password"
                    type="password"
                    placeholder="अपना पासवर्ड दर्ज करें | Enter password"
                    value={farmerLogin.password}
                    onChange={(e) => setFarmerLogin(prev => ({ ...prev, password: e.target.value }))}
                  />
                </div>
                <Button className="w-full bg-gradient-primary hover:bg-primary-hover text-white font-medium py-3">
                  डैशबोर्ड में लॉगिन करें | Login to Dashboard
                </Button>
                <div className="text-center pt-4">
                  <p className="text-sm text-muted-foreground">
                    खाता नहीं है? | Don&apos;t have an account?{" "}
                    <Link to="/signup" className="text-primary hover:underline font-medium">
                      यहाँ रजिस्टर करें | Register here
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="panchayat">
            <Card className="shadow-earth">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-gradient-earth-sky rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">ग्राम पंचायत लॉगिन | Gram Panchayat Login</CardTitle>
                <CardDescription>
                  बिना मोबाइल वाले किसानों की सेवा में मदद करें | Help farmers without mobile devices access services
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="panchayat-id">Panchayat ID</Label>
                    <Input
                      id="panchayat-id"
                      placeholder="Enter Panchayat ID"
                      value={panchayatLogin.panchayatId}
                      onChange={(e) => setPanchayatLogin(prev => ({ ...prev, panchayatId: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="panchayat-password">Password</Label>
                    <Input
                      id="panchayat-password"
                      type="password"
                      placeholder="Enter password"
                      value={panchayatLogin.password}
                      onChange={(e) => setPanchayatLogin(prev => ({ ...prev, password: e.target.value }))}
                    />
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-4 text-earth">Farmer Details (to assist)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="farmer-name">Farmer Name</Label>
                      <Input
                        id="farmer-name"
                        placeholder="Enter farmer's name"
                        value={panchayatLogin.farmerName}
                        onChange={(e) => setPanchayatLogin(prev => ({ ...prev, farmerName: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="farmer-phone-assist">Farmer's Mobile (if available)</Label>
                      <Input
                        id="farmer-phone-assist"
                        type="tel"
                        placeholder="Mobile number"
                        value={panchayatLogin.farmerPhone}
                        onChange={(e) => setPanchayatLogin(prev => ({ ...prev, farmerPhone: e.target.value }))}
                      />
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-earth-sky hover:bg-earth text-white font-medium py-3">
                  Login & Assist Farmer
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;