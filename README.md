# 🎙️ AI Voice Interviewer

An AI-powered technical interview platform built with Next.js 16 and TypeScript. (Work in Progress 🚧)

## 🚀 Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, shadcn/ui
- **AI Infrastructure (Zero-SDK Native `fetch` Pipeline):**
  - **STT (Speech-to-Text):** Groq Whisper (`whisper-large-v3`)
  - **LLM (Brain):** Groq (`openai/gpt-oss-120b`)
  - **TTS (Text-to-Speech):** ElevenLabs (`eleven_turbo_v2`)
- **Form Validation:** React Hook Form + Zod

## ✅ What's Built So Far
- [x] Secure authentication UI (Sign In / Sign Up) with Zod validation.
- [x] Dashboard layout with recent interview cards & scoring metrics.
- [x] Secure Next.js Server Actions (`'use server'`) for STT, LLM, and TTS orchestration.
- [x] Native `FormData` handling for low-latency audio transmission to STT.
- [x] Base64 audio streaming for zero-s3-dependency browser speech playback.
- [x] Dynamic UI with company logos, tech stack CDN icons, and score badges.

## 🏗️ Architecture Decisions
- **Zero-SDK Native `fetch` Pipeline:** Used standard REST APIs inside Server Actions rather than heavy client/server SDKs to keep bundle sizes minimal and reduce server cold starts.
- **Route Groups:** Organized routes into `(auth)` and `(main)` groups for isolated layout structures.
- **Strict Server/Client Boundaries:** Extracted image fallbacks (`onError`) into a micro `<TechLogo />` Client Component so `InterviewCard` and `dashboard/page.tsx` remain 100% Server Components.
- **CDN Data Normalization Layer:** Built a hybrid string normalization + dictionary mapping utility (`getTechLogo`) to map database strings (e.g., `"Next.js"`, `"Tailwind CSS"`) directly to Devicon CDN paths without 404 errors.

## 🛠️ Getting Started
1. Install dependencies:
   ```bash
   npm install