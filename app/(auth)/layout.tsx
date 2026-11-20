import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm flex flex-col items-center gap-6">
        <Image
          src="/design-logos/logo.jpg"
          alt="Logo"
          width={64}
          height={64}
          style={{ width: "64px", height: "64px" }}
          className="rounded-xl object-cover"
        />

        {children}
      </div>
    </div>
  );
}
