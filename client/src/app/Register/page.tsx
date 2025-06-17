
'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
// eslint-disable-next-line @typescript-eslint/no-unused-vars


import { Mail, Phone, MapPin, Lock } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';
import axios from 'axios';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  
  phoneNumber: Yup.string()
    .matches(/^[+]?[\d\s-()]+$/, 'Invalid phone number format')
    .min(10, 'Phone number must be at least 10 digits')
    .required('Phone number is required'),
  location: Yup.string()
    .min(3, 'Location must be at least 3 characters')
    .required('Location is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password')
});

const Register = () => {


  const initialValues = {
    email: '',
    role: '',
    phoneNumber: '',
    location: '',
    password: '',
    confirmPassword: ''
  };

  const handleSubmit = async(values: typeof initialValues, { setSubmitting }: unknown) => {
     
  const {data}= await  axios.post('http://localhost:8080/register', values)
    toast(data)
    // Simulate API call
    setTimeout(() => {
      toast("registration success");
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center space-x-2 mb-4">
    
          </div>
          <h2 className="text-2xl font-bold text-foreground">Create Account</h2>
          <p className="text-muted-foreground">Join our  community today</p>
        </div>

        {/* Registration Form */}
        <Card className="shadow-xl border-0 bg-card/80 backdrop-blur-sm">
          <CardContent>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, setFieldValue, values }) => (
                <Form className="space-y-4">
                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>Email</span>
                    </Label>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="transition-all focus:ring-2 focus:ring-primary"
                    />
                    <ErrorMessage name="email" component="div" className="text-destructive text-sm" />
                  </div>

                  
                  {/* Phone Number */}
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber" className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>Phone Number</span>
                    </Label>
                    <Field
                      as={Input}
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="transition-all focus:ring-2 focus:ring-primary"
                    />
                    <ErrorMessage name="phoneNumber" component="div" className="text-destructive text-sm" />
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Label htmlFor="location" className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Location</span>
                    </Label>
                    <Field
                      as={Input}
                      id="location"
                      name="location"
                      placeholder="Enter your location"
                      className="transition-all focus:ring-2 focus:ring-primary"
                    />
                    <ErrorMessage name="location" component="div" className="text-destructive text-sm" />
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <Label htmlFor="password" className="flex items-center space-x-2">
                      <Lock className="h-4 w-4 text-primary" />
                      <span>Password</span>
                    </Label>
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Create a strong password"
                      className="transition-all focus:ring-2 focus:ring-primary"
                    />
                    <ErrorMessage name="password" component="div" className="text-destructive text-sm" />
                  </div>

                  {/* Confirm Password */}
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="flex items-center space-x-2">
                      <Lock className="h-4 w-4 text-primary" />
                      <span>Confirm Password</span>
                    </Label>
                    <Field
                      as={Input}
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      className="transition-all focus:ring-2 focus:ring-primary"
                    />
                    <ErrorMessage name="confirmPassword" component="div" className="text-destructive text-sm" />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gray-700 hover:bg-gray-700 text-primary-foreground font-semibold py-3 transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    {isSubmitting ? 'Creating Account...' : 'Create Account'}
                  </Button>
                </Form>
              )}
            </Formik>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link href="/login" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            By creating an account, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;