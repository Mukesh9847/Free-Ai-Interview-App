import Image from "next/image";
import Link from "next/link"; 
import { AuthForm } from "@/components/AuthForm";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignInPage() {
  return (
    <Card className="w-full max-w-sm bg-background border-border shadow-xl">
      <CardHeader className="space-y-2 text-center pb-6">
        <div className="flex justify-center mb-2">
          <Image src="/Auth.jpg" alt="Logo" width={64} height={64} className="rounded-xl object-cover shadow-lg" />
        </div>
        <CardTitle className="text-2xl font-bold tracking-tight">Welcome back</CardTitle>
        <CardDescription>Enter your credentials to access your dashboard</CardDescription>
      </CardHeader>
      
      <CardContent>
        <AuthForm /> 
      </CardContent>

      <CardFooter className="flex justify-center text-sm text-muted-foreground mt-2">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" className="text-primary hover:underline ml-1">
          Sign up
        </Link>
      </CardFooter>
    </Card>
  );
}