import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppLogo from '@/components/AppLogo';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Mail, CheckCircle, ArrowLeft } from 'lucide-react';

const PasswordRecoveryPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  console.log('PasswordRecoveryPage loaded');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    console.log('Password recovery requested for:', email);

    // Simulate API call to send recovery email
    if (email) {
      setMessage(`If an account exists for ${email}, a password reset link has been sent.`);
      setEmail(''); // Clear the input field
    } else {
       setMessage("Please enter your email address.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <div className="mb-8">
        <AppLogo src="/placeholder.svg" alt="Application Logo" width={150} height={40} />
      </div>
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Forgot Your Password?</CardTitle>
          <CardDescription>Enter your email address and we'll send you a link to reset it.</CardDescription>
        </CardHeader>
        <CardContent>
          {message && (
            <Alert variant="default" className="mb-4 bg-blue-50 border-blue-200 text-blue-700">
              <CheckCircle className="h-4 w-4 text-blue-700" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10"
                />
              </div>
            </div>
            <Button type="submit" className="w-full">
              Send Reset Link
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="link" asChild>
            <Link to="/login">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Sign In
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PasswordRecoveryPage;