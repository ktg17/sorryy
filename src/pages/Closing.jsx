import FloatingHearts from '../components/FloatingHearts.jsx'

export default function Closing() {
  return (
    <div className="page" style={{ position: 'relative', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', minHeight: '90vh', textAlign: 'center' }}>

      <FloatingHearts count={8} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 40, marginBottom: 14 }}>💗</div>
        <h1 className="h1" style={{ marginBottom: 10 }}>that's everything</h1>
        <p className="lead" style={{ margin: '0 auto 10px' }}>
          I'm not expecting this to fix things instantly. just wanted you to know I'm genuinely sorry.
        </p>
      </div>
    </div>
  )
}
