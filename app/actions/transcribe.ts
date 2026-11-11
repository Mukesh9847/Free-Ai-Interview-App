'use server'

export async function transcribeAudio(formData: FormData): Promise<string> {

    console.log("KEY CHECK:", process.env.GROQ_API_KEY) 
    
  const audio = formData.get('audio')
  if (!(audio instanceof File)) throw new Error('No audio file')

  const groqForm = new FormData()
  groqForm.append('file', audio)
  groqForm.append('model', 'whisper-large-v3')
  groqForm.append('response_format', 'json')

  const res = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.GROQ_API_KEY}` },
    body: groqForm,
  })

  if (!res.ok) throw new Error(`Groq STT failed: ${res.status} ${await res.text()}`)

  const data = await res.json()
  return data.text
}