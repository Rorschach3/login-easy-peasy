
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Twitter, Linkedin, Google } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
          <CardDescription>Sign in to your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center gap-2 hover:bg-blue-50"
            onClick={() => console.log("Facebook login")}
          >
            <Facebook className="h-5 w-5 text-blue-600" />
            Continue with Facebook
          </Button>

          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center gap-2 hover:bg-sky-50"
            onClick={() => console.log("Twitter login")}
          >
            <Twitter className="h-5 w-5 text-sky-500" />
            Continue with Twitter
          </Button>

          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center gap-2 hover:bg-blue-50"
            onClick={() => console.log("LinkedIn login")}
          >
            <Linkedin className="h-5 w-5 text-blue-700" />
            Continue with LinkedIn
          </Button>

          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center gap-2 hover:bg-red-50"
            onClick={() => console.log("Google login")}
          >
            <Google className="h-5 w-5 text-red-500" />
            Continue with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
