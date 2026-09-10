import { Link } from 'react-router-dom'
import FloatingHearts from '../components/FloatingHearts.jsx'

export default function Home() {
  const handleStart = () => {
    if (window._startSorryMusic) window._startSorryMusic()
  }

  return (
    <div className="page" style={{ position: 'relative', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', minHeight: '90vh', textAlign: 'center' }}>

      <FloatingHearts count={10} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 44, marginBottom: 16, animation: 'bob 3s ease-in-out infinite' }}>🥺</div>
        <h1 className="h1" style={{ marginBottom: 14 }}>I need to say something</h1>
        <p className="lead" style={{ margin: '0 auto 40px' }}>
          I know I hurt you. please just give me a minute.
        </p>
        <Link to="/sorry-1" className="btn" onClick={handleStart}>okay →</Link>
      </div>
    </div>
  )
}
