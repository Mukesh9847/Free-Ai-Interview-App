'use server'

export async function generateAIResponse(transcript: string): Promise<string> {
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'openai/gpt-oss-120b',
      messages: [
        {
          role: 'system',
          content: 'You are a technical interviewer. Ask a short follow-up question based on the user\'s answer. Keep it under two sentences.'
        },
        {
          role: 'user',
          content: transcript
        }
      ],
      temperature: 0.7,
    }),
  })

  if (!res.ok) throw new Error(`Groq LLM failed: ${res.status} ${await res.text()}`)

  const data = await res.json()
  return data.choices[0].message.content
}