import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function VideoPage() {
  useEffect(() => {
    window._bgSuppressed = true
    return () => { window._bgSuppressed = false }
  }, [])

  return (
    <div className="page" style={{ display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', minHeight: '90vh', textAlign: 'center' }}>

      <p style={{ fontSize: 15, color: 'var(--muted)', marginBottom: 18 }}>
        this is basically me right now
      </p>

      <div style={{ width: 'min(92vw, 420px)' }}>
        <video
          src="/sorry-video.mp4"
          controls
          autoPlay
          playsInline
          style={{
            width: '100%', borderRadius: 20,
            boxShadow: '0 12px 40px rgba(199,21,88,0.25)',
            background: '#000',
          }}
        />
      </div>

      <p style={{ fontSize: 15, color: 'var(--accent)', fontWeight: 600, marginTop: 18, maxWidth: 420 }}>
        please don't stay upset with me for too long 🥺
      </p>

      <Link to="/closing" className="btn" style={{ marginTop: 26 }}>
        one more thing →
      </Link>

      <div style={{ marginTop: 16 }}>
        <Link to="/sorry-3" style={{ color: 'var(--muted)', fontSize: 13 }}>← back</Link>
      </div>
    </div>
  )
}
