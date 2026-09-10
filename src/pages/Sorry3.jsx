import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import FloatingHearts from '../components/FloatingHearts.jsx'

const LIST = [
  "for every time I messed up and didn't say it clearly enough.",
  "for the times I got defensive instead of just listening.",
  "for not checking in on how you were actually feeling.",
  "for letting small things pile up instead of talking about them sooner.",
  "for every text that hurt you more than I realized in the moment.",
]

export default function Sorry3() {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    LIST.forEach((_, i) => setTimeout(() => setVisible(v => v + 1), i * 1000))
  }, [])

  return (
    <div className="page" style={{ position: 'relative', display: 'flex', flexDirection: 'column',
      alignItems: 'center', minHeight: '90vh', justifyContent: 'center' }}>

      <FloatingHearts count={6} />

      <h1 className="h1" style={{ marginBottom: 8, textAlign: 'center', position: 'relative', zIndex: 1 }}>
        sorry for
      </h1>
      <p className="lead" style={{ marginBottom: 26, textAlign: 'center', position: 'relative', zIndex: 1 }}>
        every time I messed up
      </p>

      <div style={{ maxWidth: 520, width: '100%', display: 'flex', flexDirection: 'column',
        gap: 12, position: 'relative', zIndex: 1 }}>
        {LIST.map((text, i) => (
          <div key={i} className="card" style={{
            fontSize: 15, lineHeight: 1.7, textAlign: 'left',
            display: 'flex', gap: 10, alignItems: 'flex-start',
            opacity: visible > i ? 1 : 0,
            transform: visible > i ? 'translateX(0)' : 'translateX(-14px)',
            transition: 'opacity .5s ease, transform .5s ease',
          }}>
            <span style={{ color: 'var(--accent)', flexShrink: 0 }}>♥</span>
            <span>{text}</span>
          </div>
        ))}
      </div>

      {visible >= LIST.length && (
        <Link to="/video" className="btn" style={{ marginTop: 30, animation: 'fadeUp .5s ease both',
          position: 'relative', zIndex: 1 }}>
          continue →
        </Link>
      )}
    </div>
  )
}
