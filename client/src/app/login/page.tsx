'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';


import { Mail, Lock } from 'lucide-react';
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { addLoginDetails } from '@/redux/reduxslices/userSlice';
import { Checkbox } from '@radix-ui/react-checkbox';
import { useEffect
  
 } from 'react';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .required('Password is required'),
 
});

const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isLoggedIn } = useSelector((state: any) => state.user);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=>{
    if(isLoggedIn) router.push('/')
  },[])


  const initialValues = {
    email: '',
    password: '',
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch()
  const handleSubmit = async(values: typeof initialValues, { setSubmitting }: any) => {
    const {data}= await  axios.post(process.env.NEXT_PUBLIC_API_URL+'/login', values)
    if(data?.isLoggedIn) {
  if(data.user.role === 'admin') {
  router.push('/manager/dashboard') 
        }else if(data.user.role === 'donor') {
  router.push('/donor/dashboard')
      }
      else{
        router.back()
      }
    }
    
    toast(data?.message)
    if(data) {
      debugger;
      dispatch(addLoginDetails(data))
    }
    
  };

  
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center space-x-2 mb-4">
          
          </div>
          <h2 className="text-2xl font-bold text-foreground">Sign In</h2>
        </div>

        {/* Registration Form */}
        <Card className="shadow-xl  h-80  w-100 border-0 bg-card/80 backdrop-blur-sm">
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
                  <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={FormData.rememberMe}
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


           
                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gray-500 hover:bg-gray-700 text-primary-foreground font-semibold py-3 transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    {isSubmitting ? 'Creating Account...' : 'Sign In'}
                    
                  </Button>
                </Form>
              )}
            </Formik>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Dont have an accoutn yet?{' '}
                <Link href="/login" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  Sign up here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        
      </div>
    </div>
  );
};

export default login;