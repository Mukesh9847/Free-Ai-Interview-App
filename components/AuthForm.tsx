"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { CustomInput } from "@/components/CustomInput";
import { toast } from "sonner";
import { useRouter } from "next/navigation"; 

const fullSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." }),
  age: z.coerce
    .number()
    .min(13, { message: "Age must be atleast 13 years old" }),
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

const signInSchema = fullSchema.pick({ email: true, password: true });

type AuthFormValues = z.infer<typeof fullSchema>;

export function AuthForm({ isSignUp = false }: { isSignUp?: boolean }) {
  const currentSchema = isSignUp ? fullSchema : signInSchema;

  const form = useForm<AuthFormValues>({
    resolver: zodResolver(currentSchema as any),
    defaultValues: {
      fullName: "",
      age: undefined,
      email: "",
      password: "",
    },
  });

    const router = useRouter();

  function onSubmit(values: AuthFormValues) {
    console.log(isSignUp ? "Sign Up Data:" : "Sign In Data:", values);
    
    if (isSignUp) {
      toast.success("Account created successfully! Please sign in.");
      
      router.push("/sign-in"); 
    } else {
      toast.success("Welcome back!");
      
      router.push("/dashboard")
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        {/* Only show if it's Sign Up */}
        {isSignUp && (
          <>
            <CustomInput
              control={form.control}
              name="fullName"
              label="Full Name"
              placeholder="John Cena"
            />

            <CustomInput
              control={form.control}
              name="age"
              label="Age"
              placeholder="25"
              type="number"
            />
          </>
        )}

        <CustomInput
          control={form.control}
          name="email"
          label="Email"
          placeholder="m@example.com"
          type="email"
        />

        <CustomInput
          control={form.control}
          name="password"
          label="Password"
          placeholder="********"
          type="password"
        />

        <Button className="h-9 w-full mt-2" type="submit">
          {isSignUp ? "Create Account" : "Sign In"}
        </Button>
      </form>
    </Form>
  );
}
