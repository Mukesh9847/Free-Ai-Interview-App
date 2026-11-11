'use client'

import { useState } from 'react'
import { generateSpeech } from "@/app/actions/speak"

export default function TestTTS() {
  const [text, setText] = useState('Hello, I am your AI interviewer today.')
  const [isPlaying, setIsPlaying] = useState(false)

  async function handlePlay() {
    setIsPlaying(true)
    try {
      const base64Audio = await generateSpeech(text)
      
      // Convert base64 back to audio and play it
      const audioUrl = `data:audio/mpeg;base64,${base64Audio}`
      const audio = new Audio(audioUrl)
      
      audio.onended = () => setIsPlaying(false)
      await audio.play()
      
    } catch (err) {
      alert((err as Error).message)
      setIsPlaying(false)
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <textarea 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        rows={3} 
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <button onClick={handlePlay} disabled={isPlaying}>
        {isPlaying ? 'Playing...' : 'Speak Text'}
      </button>
    </div>
  )
}