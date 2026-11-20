export function getTechLogo(tech: string) {
  // 1. Clean the string (e.g., "React.js" -> "react")
  const normalized = tech.toLowerCase().replace(".js", "").replace(".", "");

  // 2. Translate names to match the CDN folder structure
  const mapping: Record<string, string> = {
    node: "nodejs",
    react: "react",
    typescript: "typescript",
    javascript: "javascript",
    mongodb: "mongodb",
    postgresql: "postgresql",
    postgres: "postgresql",
    express: "express",
    java: "java",
    python: "python",
    go: "go",

    next: "nextjs",
    "tailwind css": "tailwindcss",
    tailwind: "tailwindcss",
  };

  const iconName = mapping[normalized] || normalized;

  // 3. Return the CDN URL
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${iconName}/${iconName}-original.svg`;
}
