import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Home, User, DollarSign, MapPin } from "lucide-react";

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <div className="flex items-center space-x-2">
                <Home className="h-6 w-6 text-blue-600" />
                <span className="text-lg font-bold text-gray-900">AHA</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Find Your Housing Programs
          </h1>
          <p className="text-lg text-gray-600">
            Tell us about your situation and we'll match you with relevant housing assistance programs
          </p>
        </div>

        {/* Application Form Preview */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2 text-blue-600" />
                Personal Information
              </CardTitle>
              <CardDescription>
                Basic information about you and your household
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <Input placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <Input type="tel" placeholder="(555) 123-4567" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                Location
              </CardTitle>
              <CardDescription>
                Where are you looking for housing assistance?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Address
                </label>
                <Input placeholder="123 Main St" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <Input placeholder="City" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State
                  </label>
                  <Input placeholder="State" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ZIP Code
                </label>
                <Input placeholder="12345" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-blue-600" />
                Income Information
              </CardTitle>
              <CardDescription>
                Help us determine program eligibility
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Annual Household Income
                </label>
                <Input type="number" placeholder="50000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Household Size
                </label>
                <Input type="number" placeholder="4" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Employment Status
                </label>
                <select className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm">
                  <option>Select employment status</option>
                  <option>Employed full-time</option>
                  <option>Employed part-time</option>
                  <option>Self-employed</option>
                  <option>Unemployed</option>
                  <option>Retired</option>
                  <option>Student</option>
                  <option>Disabled</option>
                </select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Home className="h-5 w-5 mr-2 text-blue-600" />
                Housing Needs
              </CardTitle>
              <CardDescription>
                What type of housing assistance do you need?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Housing Situation
                </label>
                <select className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm">
                  <option>Select current situation</option>
                  <option>Renting</option>
                  <option>Own home</option>
                  <option>Staying with family/friends</option>
                  <option>Homeless</option>
                  <option>Temporary housing</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type of Assistance Needed
                </label>
                <select className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm">
                  <option>Select assistance type</option>
                  <option>Rental assistance</option>
                  <option>Public housing</option>
                  <option>Home purchase assistance</option>
                  <option>Emergency housing</option>
                  <option>Utilities assistance</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Number of Bedrooms
                </label>
                <select className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm">
                  <option>Select bedrooms</option>
                  <option>Studio</option>
                  <option>1 bedroom</option>
                  <option>2 bedrooms</option>
                  <option>3 bedrooms</option>
                  <option>4+ bedrooms</option>
                </select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Ready to find your programs?
            </h3>
            <p className="text-gray-600 mb-4">
              Complete the form above to get personalized housing program matches
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Find My Programs
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/">Save and Continue Later</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
