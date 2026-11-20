"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="border-b border-border bg-background">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image
              src="/design-logos/logo.jpg"
              alt="Logo"
              fill
              sizes="48px"
              className="rounded-xl object-cover"
            />
          </div>
          <span className="text-xl font-bold tracking-tight">
            AI Interviewer
          </span>
        </Link>
      </div>
    </nav>
  );
}
