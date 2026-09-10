export default function FloatingHearts({ count = 8 }) {
  const hearts = Array.from({ length: count }, (_, i) => ({
    left: `${5 + Math.random() * 90}%`,
    delay: Math.random() * 4,
    dur: 5 + Math.random() * 4,
    size: 12 + Math.random() * 14,
  }))
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {hearts.map((h, i) => (
        <span key={i} style={{
          position: 'absolute', left: h.left, bottom: '-20px', fontSize: h.size,
          animation: `heartFloat ${h.dur}s ${h.delay}s ease-in infinite`,
          color: '#ff8fab', opacity: 0.5,
        }}>♥</span>
      ))}
    </div>
  )
}
