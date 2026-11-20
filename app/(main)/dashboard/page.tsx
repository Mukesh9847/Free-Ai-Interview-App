import Image from "next/image";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/lib/data";
import { InterviewCard } from "@/components/InterviewCard";

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center min-h-[70vh] pt-9 md:pt-8 px-4 gap-12">
      {/* First Section: Hero */}
      <section className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8 p-10 md:p-14 rounded-3xl border border-white/10 bg-black shadow-2xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/Interviewlogo.png"
            alt="AI Interviewer Logo"
            width={110}
            height={110}
            className="object-cover flex-shrink-0"
          />
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Make yourself ready for your{" "}
              <span className="text-white">AI Interview</span>
            </h1>
            <p className="text-neutral-400 text-base max-w-lg">
              Practice real-world technical interviews with our AI interviewer.
            </p>
          </div>
        </div>
        <Button
          size="lg"
          className="w-full md:w-auto flex-shrink-0 px-8 py-6 text-lg rounded-full bg-white text-black hover:bg-neutral-200 transition-all hover:scale-105"
        >
          Start Interview
        </Button>
      </section>

      <section className="w-full max-w-4xl space-y-4">
        <h2 className="text-2xl font-bold text-white">Recent Interviews</h2>

        <div className="grid gap-4 md:grid-cols-2">
          {dummyInterviews.map((interview) => (
            <InterviewCard key={interview.id} {...interview} />
          ))}
        </div>
      </section>
    </div>
  );
}
