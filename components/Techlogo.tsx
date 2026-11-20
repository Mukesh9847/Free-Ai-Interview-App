'use client';

import { getTechLogo } from "@/lib/languages-logos";

export function TechLogo({ tech }: { tech: string }) {
  const logoUrl = getTechLogo(tech);

  return (
    <span className="flex items-center gap-1.5 text-[10px] uppercase font-semibold bg-white/5 border border-white/10 text-neutral-300 px-2 py-1 rounded-md">
      <img
        src={logoUrl}
        alt={tech}
        className="w-3 h-3 object-contain"
        onError={(e) => (e.currentTarget.style.display = "none")}
      />
      {tech}
    </span>
  );
}