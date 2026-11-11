'use server'

export async function generateSpeech(text: string): Promise<string> {

  const voiceId = 'bIHbv24MWmeRgasZH58o' 
  
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
    method: 'POST',
    headers: {
      'Accept': 'audio/mpeg',
      'xi-api-key': process.env.ELEVENLABS_API_KEY!,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: text,
      model_id: 'eleven_turbo_v2', 
    }),
  })

  if (!res.ok) throw new Error(`ElevenLabs TTS failed: ${res.status} ${await res.text()}`)

  // Convert the audio response to a Base64 string so we can pass it to the client
  const arrayBuffer = await res.arrayBuffer()
  const base64Audio = Buffer.from(arrayBuffer).toString('base64')
  
  return base64Audio
}