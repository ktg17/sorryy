import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import FloatingHearts from '../components/FloatingHearts.jsx'

const PARTS = [
  "I'm sorry. for real, not the kind of sorry I say just to end an argument.",
  "I keep replaying what I said, and I hate how it must have felt on your end.",
  "I didn't think before I spoke, and that's exactly the problem. you deserved better than that from me.",
  "I'm not writing this to defend myself. I just needed you to know I actually feel bad about this.",
]

export default function Sorry1() {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    PARTS.forEach((_, i) => setTimeout(() => setVisible(v => v + 1), i * 1500))
  }, [])

  return (
    <div className="page" style={{ position: 'relative', display: 'flex', flexDirection: 'column',
      alignItems: 'center', minHeight: '90vh', justifyContent: 'center' }}>

      <FloatingHearts count={6} />

      <h1 className="h1" style={{ marginBottom: 26, textAlign: 'center', position: 'relative', zIndex: 1 }}>
        I'm sorry.
      </h1>

      <div style={{ maxWidth: 560, width: '100%', display: 'flex', flexDirection: 'column',
        gap: 14, position: 'relative', zIndex: 1 }}>
        {PARTS.map((text, i) => (
          <div key={i} className="card" style={{
            fontSize: 15.5, lineHeight: 1.8, textAlign: 'left',
            opacity: visible > i ? 1 : 0,
            transform: visible > i ? 'translateY(0)' : 'translateY(14px)',
            transition: 'opacity .7s ease, transform .7s ease',
          }}>
            {text}
          </div>
        ))}
      </div>

      {visible >= PARTS.length && (
        <Link to="/sorry-2" className="btn" style={{ marginTop: 30, animation: 'fadeUp .5s ease both',
          position: 'relative', zIndex: 1 }}>
          continue →
        </Link>
      )}
    </div>
  )
}
