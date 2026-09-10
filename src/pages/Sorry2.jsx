import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import FloatingHearts from '../components/FloatingHearts.jsx'

const PARTS = [
  "I'm sorry for that message. reading it back, I can see exactly why it hurt.",
  "the words came out sharper than what I actually meant, and I let that happen without thinking about you on the other end reading it.",
  "text doesn't carry tone, and I know that, but I still should've been more careful. you didn't deserve to feel small over a message.",
  "if the roles were reversed, that would've hurt me too. I get it now.",
]

export default function Sorry2() {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    PARTS.forEach((_, i) => setTimeout(() => setVisible(v => v + 1), i * 1500))
  }, [])

  return (
    <div className="page" style={{ position: 'relative', display: 'flex', flexDirection: 'column',
      alignItems: 'center', minHeight: '90vh', justifyContent: 'center' }}>

      <FloatingHearts count={6} />

      <h1 className="h1" style={{ marginBottom: 26, textAlign: 'center', position: 'relative', zIndex: 1 }}>
        about that message
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
        <Link to="/sorry-3" className="btn" style={{ marginTop: 30, animation: 'fadeUp .5s ease both',
          position: 'relative', zIndex: 1 }}>
          continue →
        </Link>
      )}
    </div>
  )
}
