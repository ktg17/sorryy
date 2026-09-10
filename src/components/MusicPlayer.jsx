import { useEffect, useRef, useState } from 'react'

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const audio = new Audio('/song.mp3')
    audio.loop = true
    audio.volume = 0
    audioRef.current = audio

    const tryStart = () => {
      audio.play().then(() => { fadeTo(audio, 0.35); setPlaying(true) }).catch(() => {})
    }
    window.addEventListener('pointerdown', tryStart, { once: true })

    return () => {
      window.removeEventListener('pointerdown', tryStart)
      audio.pause()
    }
  }, [])

  const fadeTo = (audio, target) => {
    clearInterval(audio._fade)
    audio._fade = setInterval(() => {
      const step = target > audio.volume ? 0.02 : -0.02
      audio.volume = Math.min(1, Math.max(0, +(audio.volume + step).toFixed(2)))
      if (Math.abs(audio.volume - target) < 0.02) { audio.volume = target; clearInterval(audio._fade) }
    }, 40)
  }

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      fadeTo(audio, 0)
      setTimeout(() => audio.pause(), 500)
      setPlaying(false)
    } else {
      audio.play().then(() => { fadeTo(audio, 0.35); setPlaying(true) }).catch(() => {})
    }
  }

  return (
    <button onClick={toggle} aria-label="toggle music"
      style={{
        position: 'fixed', bottom: 20, right: 20, zIndex: 60,
        width: 48, height: 48, borderRadius: '50%',
        border: '1px solid var(--border)',
        background: 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(10px)', color: 'var(--accent)',
        fontSize: 18, cursor: 'pointer',
        display: 'grid', placeItems: 'center',
        boxShadow: '0 4px 16px rgba(214,51,108,0.2)',
      }}>
      {playing ? '♪' : '♫'}
    </button>
  )
}
