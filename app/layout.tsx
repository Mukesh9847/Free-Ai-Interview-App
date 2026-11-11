import type { Metadata } from "next";
import { Geist } from "next/font/google"; 
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"; 

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AI Interviewer", 
  description: "Practice your technical interviews with AI",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.variable} font-sans antialiased min-h-screen`}>
        {children}
       
        <Toaster theme="dark" position="top-center" /> 
      </body>
    </html>
  );
}