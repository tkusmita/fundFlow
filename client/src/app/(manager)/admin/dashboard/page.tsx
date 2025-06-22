'use client'
import React from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Shield } from 'lucide-react';

const AdminDashboard = () => {


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl flex items-center justify-center">
              <Heart className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Charity Management System
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connecting generous hearts with meaningful causes. Manage donations, track impact, and build a better world together.
          </p>
        </div>

        <div className=" container grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl align-items:center place-content: center   mx-auto">
          <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group" onClick={() => ("/approve-user")}>
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-2xl text-gray-900">Admin Dashboard</CardTitle>
              <CardDescription className="text-gray-600">
                Manage charity operations, approve donations, and oversee all activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Approve donation requests
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Monitor charity analytics
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Manage donor relationships
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => ("/approve-user")}>
                Access Admin Panel
              </Button>
            </CardContent>
          </Card>

         
           
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500">
            Together, we can make a difference in the world 💝
          </p>
        </div>
      </div>
    </div>
  );
};


export default AdminDashboard;