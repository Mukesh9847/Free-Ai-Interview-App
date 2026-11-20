import { Navbar } from "@/components/Navbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">

      <Navbar />
      <main className="flex-1 container mx-auto p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}