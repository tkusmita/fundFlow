"use client"

import * as React from "react"
import { ArrowRight, Award, CheckCircle, DollarSign, Globe, Heart, Shield, Target, TrendingUp, Users } from "lucide-react"


import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation Header */}
      <header className="border-b bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Heart className="h-8 w-8 text-red-500 animate-pulse" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-400 to-red-400 rounded-full"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CharityHub
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 font-medium">Features</a>
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 font-medium">About</a>
                            <a href="#contact " className="text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 font-medium">Contact</a>

              <Button variant="outline" size="sm" className="hover:scale-105 transition-transform" asChild>
  <Link href="/login">
    Login
  </Link>
</Button>

<Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 shadow-lg" asChild>
  <Link href="/Register">
    Register
  </Link>
</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200/30 rounded-full blur-xl"></div>
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <div className="mb-6 inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 shadow-lg">
            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
            <span className="text-sm font-medium text-slate-700">Trusted by 500+ charities worldwide</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Empowering Charities
            </span>
            <br />
            <span className="text-slate-800">to Make a Difference</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Streamline your charity operations with our comprehensive management system. 
            Track donations, manage volunteers, and measure your impact all in one beautiful platform.
          </p>
          
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 bg-white relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">500+</div>
              <div className="text-slate-600 font-medium">Active Charities</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">$2.5M</div>
              <div className="text-slate-600 font-medium">Donations Managed</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3">10K+</div>
              <div className="text-slate-600 font-medium">Volunteers</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">50+</div>
              <div className="text-slate-600 font-medium">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-gradient-to-br from-slate-50 to-blue-50 relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <span className="text-blue-700 font-semibold text-sm">FEATURES</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 text-slate-800">Everything You Need to Manage Your Charity</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive platform provides all the tools you need to run your charity efficiently and transparently.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/70 backdrop-blur-sm group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">Donation Management</CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Track and manage donations with automated receipts, recurring donations, and detailed reporting.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/70 backdrop-blur-sm group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">Volunteer Coordination</CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Organize volunteers, schedule events, and track volunteer hours with our intuitive system.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/70 backdrop-blur-sm group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">Impact Tracking</CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Measure and visualize your charity's impact with comprehensive analytics and reporting tools.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/70 backdrop-blur-sm group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">Financial Reporting</CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Generate detailed financial reports and maintain transparency with automated compliance tools.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/70 backdrop-blur-sm group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">Secure & Compliant</CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Bank-level security with compliance tools to meet regulatory requirements and build donor trust.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/70 backdrop-blur-sm group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">Global Reach</CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Multi-currency support and international payment processing to expand your charity's reach.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
            <Award className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Charity?</h2>
          <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of charities already using CharityHub to streamline their operations and maximize their impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-10 py-7 bg-white text-blue-600 hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-slate-900 text-slate-300">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="h-6 w-6 text-red-500" />
                <span className="text-xl font-semibold text-white">CharityHub</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Empowering charities worldwide with modern management tools and beautiful interfaces.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-white text-lg">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Features</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Security</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-white text-lg">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Training</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Resources</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-white text-lg">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">About</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-400">&copy; 2024 CharityHub. All rights reserved. Made with ❤️ for charities worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
