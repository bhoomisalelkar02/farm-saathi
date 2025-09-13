import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { User, Phone, MapPin, Wheat, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    village: "",
    district: "",
    state: "",
    landSize: "",
    primaryCrop: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false
  });

  const indianStates = [
    "Andhra Pradesh", "Bihar", "Gujarat", "Haryana", "Karnataka", 
    "Kerala", "Madhya Pradesh", "Maharashtra", "Punjab", "Rajasthan",
    "Tamil Nadu", "Uttar Pradesh", "West Bengal"
  ];

  const cropTypes = [
    "Rice", "Wheat", "Cotton", "Sugarcane", "Soybean", 
    "Maize", "Pulses", "Vegetables", "Fruits", "Spices"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-earth/10 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-harvest rounded-full flex items-center justify-center mb-4">
            <UserPlus className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">कृषक मित्र में शामिल हों | Join कृषक मित्र</h1>
          <p className="text-muted-foreground">कृषि सेवाओं का लाभ उठाने के लिए रजिस्टर करें | Register to access agricultural services</p>
        </div>

        <Card className="shadow-crop">
          <CardHeader>
            <CardTitle className="text-2xl text-center">किसान पंजीकरण | Farmer Registration</CardTitle>
            <CardDescription className="text-center">
              व्यक्तिगत कृषि सहायता प्राप्त करने के लिए अपना खाता बनाएं | Create your account to get personalized farming assistance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-primary flex items-center gap-2">
                <User className="w-4 h-4" />
                व्यक्तिगत जानकारी | Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">पूरा नाम | Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="अपना पूरा नाम दर्ज करें | Enter full name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">मोबाइल नंबर | Mobile Number *</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="मोबाइल नंबर दर्ज करें | Enter mobile number"
                      className="pl-10"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">ईमेल (वैकल्पिक) | Email (Optional)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
            </div>

            {/* Location Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-primary flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                स्थान विवरण | Location Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="village">गाँव | Village *</Label>
                  <Input
                    id="village"
                    placeholder="गाँव का नाम | Village name"
                    value={formData.village}
                    onChange={(e) => setFormData(prev => ({ ...prev, village: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="district">जिला | District *</Label>
                  <Input
                    id="district"
                    placeholder="जिले का नाम | District name"
                    value={formData.district}
                    onChange={(e) => setFormData(prev => ({ ...prev, district: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">राज्य | State *</Label>
                  <Select value={formData.state} onValueChange={(value) => setFormData(prev => ({ ...prev, state: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="राज्य चुनें | Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      {indianStates.map(state => (
                        <SelectItem key={state} value={state}>{state}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Farming Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-primary flex items-center gap-2">
                <Wheat className="w-4 h-4" />
                Farming Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="landSize">Land Size (in acres)</Label>
                  <Input
                    id="landSize"
                    type="number"
                    placeholder="e.g., 5.5"
                    value={formData.landSize}
                    onChange={(e) => setFormData(prev => ({ ...prev, landSize: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="primaryCrop">Primary Crop</Label>
                  <Select value={formData.primaryCrop} onValueChange={(value) => setFormData(prev => ({ ...prev, primaryCrop: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select primary crop" />
                    </SelectTrigger>
                    <SelectContent>
                      {cropTypes.map(crop => (
                        <SelectItem key={crop} value={crop}>{crop}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="space-y-4">
              <h3 className="font-semibold text-primary">Create Password</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password *</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create password"
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password *</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  />
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="terms" 
                checked={formData.acceptTerms}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, acceptTerms: checked as boolean }))}
              />
              <Label htmlFor="terms" className="text-sm">
                I agree to the <span className="text-primary underline cursor-pointer">Terms of Service</span> and <span className="text-primary underline cursor-pointer">Privacy Policy</span>
              </Label>
            </div>

            <Button 
              className="w-full bg-gradient-harvest hover:bg-primary text-white font-medium py-3"
              disabled={!formData.acceptTerms}
            >
              Create Account
            </Button>

            <div className="text-center pt-4">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline font-medium">
                  Login here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;