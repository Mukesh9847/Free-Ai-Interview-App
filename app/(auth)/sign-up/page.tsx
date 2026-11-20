import Image from "next/image";
import Link from "next/link";
import { AuthForm } from "@/components/AuthForm";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignUpPage() {
  return (
    <Card className="w-full max-w-sm bg-background border-border shadow-xl">
      <CardHeader className="space-y-2 text-center pb-6">
        <CardTitle className="text-2xl font-bold tracking-tight">Create an account</CardTitle>
        <CardDescription>Enter your details to start interviewing</CardDescription>
      </CardHeader>
      
      <CardContent>
        <AuthForm isSignUp={true} /> 
      </CardContent>

      <CardFooter className="flex justify-center text-sm text-muted-foreground mt-2">
        Already have an account?{" "}
        <Link href="/sign-in" className="text-primary hover:underline ml-1">
          Sign in
        </Link>
      </CardFooter>
    </Card>
  );
}