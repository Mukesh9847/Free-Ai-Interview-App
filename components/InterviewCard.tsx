import dayjs from "dayjs";
import { Interview } from "@/lib/data";
import Image from "next/image";
import { companyLogos } from "@/lib/Companylogos";
import { Trophy } from "lucide-react";
import { TechLogo } from "./Techlogo";

export function InterviewCard({
  company,
  role,
  level,
  type,
  score,
  questions,
  techstack,
  finalAssessment,
  createdAt,
}: Interview) {
  const logoPath = company ? companyLogos[company.toLowerCase()] : null;
  const firstLetter = role.charAt(0).toUpperCase();

  const isTechnical = type.toLowerCase().includes("tech");
  const isSystemDesign = type.toLowerCase().includes("system");
  const isMixed = type.toLowerCase().includes("mix");

  const hasScore = score !== undefined;
  const safeScore = score ?? 0;

  const scoreText = hasScore ? `${score}/100` : "--/100";
  const scoreColor = !hasScore
    ? "text-neutral-500"
    : safeScore >= 80
      ? "text-green-400"
      : safeScore >= 50
        ? "text-yellow-400"
        : "text-red-400";

  const badgeColor = isTechnical
    ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
    : isSystemDesign
      ? "bg-orange-500/10 text-orange-400 border-orange-500/20"
      : isMixed
        ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
        : "bg-green-500/10 text-green-400 border-green-500/20";

  return (
    <article className="p-6 border border-white/10 rounded-2xl bg-[#0a0f1d] hover:border-white/30 transition-colors flex flex-col gap-4">
      <header className="flex justify-between items-start">
        <div className="flex items-center gap-4">
          {/* Company Logo */}
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg flex-shrink-0 overflow-hidden">
            {logoPath ? (
              <Image
                src={logoPath}
                alt={`${company} logo`}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-black font-bold text-xl">
                {firstLetter}
              </span>
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">{role}</h3>
            <p className="text-sm text-neutral-400 mt-1">{level}</p>
          </div>
        </div>

        {/* Right Side: Score, Badge, Date */}
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-1.5">
            <Trophy className={`w-4 h-4 ${scoreColor}`} />
            <span className={`text-sm font-bold ${scoreColor}`}>
              {scoreText}
            </span>
          </div>

          <span
            className={`text-[10px] uppercase font-bold px-2.5 py-1 rounded-full border ${badgeColor}`}
          >
            {type}
          </span>

          <div className="flex items-center gap-1.5 text-xs text-neutral-400 whitespace-nowrap">
            <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
              <Image
                src="/design-logos/calendar.webp"
                alt="Calendar"
                width={10}
                height={10}
                className="object-contain w-auto h-auto opacity-70"
              />
            </div>
            <time>{dayjs(createdAt).format("MMM D, YYYY")}</time>
          </div>
        </div>
      </header>

      {/* Questions Preview */}
      <section className="space-y-2">
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
          Questions Asked
        </p>
        <ul className="text-sm text-neutral-300 space-y-1 line-clamp-2">
          {questions.map((q, i) => (
            <li key={i} className="truncate">
              • {q}
            </li>
          ))}
        </ul>
      </section>

      <div className="space-y-1">
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
          Feedback
        </p>
        <p className="text-sm text-neutral-300 line-clamp-2 italic">
          {finalAssessment ||
            "You haven't taken the interview yet. Take it now to improve your skills."}
        </p>
      </div>

      <footer className="flex flex-wrap gap-2 mt-auto pt-2">
        {techstack.map((tech) => (
          <TechLogo key={tech} tech={tech} />
        ))}
      </footer>
    </article>
  );
}
