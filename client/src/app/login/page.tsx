'use client'
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, LogIn } from 'lucide-react';
// Assuming these are correctly configured components from your UI library (shadcn/ui or similar)
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner'; // Good choice for toasts!
import axios from 'axios';
import { useRouter } from 'next/navigation';

// Define interfaces for better type safety, which is excellent practice in TypeScript
interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface FormErrors {
  email?: string; // Optional properties as errors might not always exist for every field
  password?: string;
}

const Login = () => {
  // State for form data, initialized with empty values
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    rememberMe: false
  });
  // State for validation errors
  const [errors, setErrors] = useState<FormErrors>({});
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  // State for loading indicator during form submission
  const [isLoading, setIsLoading] = useState(false);

  // Validation logic encapsulated in a function, returning boolean for validity
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}; // Create a temporary object for new errors

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) { // Basic regex for email format
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) { // Minimum length check
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors); // Update the state with any new errors
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const router = useRouter()
  const handleSubmit = async(values: typeof initialValues, { setSubmitting }: any) => {
    const {data}= await  axios.post('http://localhost:8080/login', values)
    if(data?.isLoggedIn) router.back();
    toast(data?.message)

 


  };

  // Generic input change handler
  const handleInputChange = async (field: keyof FormData, value: string | boolean) => {

    
    setFormData(prev => ({ ...prev, [field]: value }));

    // Clear specific error message as the user types/interacts with the field
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8">
        {/* Header */}
        <div className="text-center mb-8">
          {/* Icon with gradient background - nice touch! */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4">
            <LogIn className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-gray-600 mt-2">Sign in to your account to continue</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                // Dynamic styling for error state - clear visual feedback
                className={`pl-10 h-12 ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'}`}
                aria-invalid={!!errors.email} // Important for accessibility (screen readers)
                aria-describedby={errors.email ? 'email-error' : undefined} // Link error message to input
              />
            </div>
            {errors.email && (
              // Error message with ID for accessibility linking
              <p id="email-error" className="text-red-500 text-sm animate-fade-in">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'} // Dynamically change input type
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className={`pl-10 pr-10 h-12 ${errors.password ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'}`}
                aria-invalid={!!errors.password}
                aria-describedby={errors.password ? 'password-error' : undefined}
              />
              <button
                type="button" // Important: type="button" to prevent accidental form submission
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label={showPassword ? 'Hide password' : 'Show password'} // Accessibility for the toggle button
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.password && (
              <p id="password-error" className="text-red-500 text-sm animate-fade-in">{errors.password}</p>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={formData.rememberMe}
                // onCheckedChange provides the checked state directly for Checkbox components
                onCheckedChange={(checked) => handleInputChange('rememberMe', checked as boolean)}
              />
              <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
                Remember me
              </label>
            </div>
            <button
              type="button" // Prevents form submission
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors font-medium"
              onClick={() => toast.info("Forgot Password", { description: "Password reset functionality coming soon!" })}
            >
              Forgot password?
            </button>
          </div>

          {/* Login Button */}
          <Button
            type="submit" // Essential for form submission
            disabled={isLoading} // Disable button when loading to prevent multiple submissions
            className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? (
              // Loading spinner and text
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Signing in...</span>
              </div>
            ) : (
              // Normal button text and icon
              <div className="flex items-center space-x-2">
                <LogIn className="w-5 h-5" />
                <span>Sign In</span>
              </div>
            )}
          </Button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <button
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              onClick={() => toast.info("Sign Up", { description: "Registration functionality coming soon!" })}
            >
              Sign up here <link href="/register"></link>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;