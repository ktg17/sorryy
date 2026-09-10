import { Link } from 'react-router-dom'
import { useState } from 'react'
import FloatingHearts from '../components/FloatingHearts.jsx'

export default function Closing() {
  const [msg, setMsg] = useState('')
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const submit = async () => {
    if (!msg.trim()) return
    setSending(true)
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '9beae33d-a04b-4e1e-aefb-18824ca67f83',
          subject: '💌 she replied on sorryy site',
          from_name: 'sorryy site',
          message: msg,
        }),
      })
    } catch {}
    setSent(true)
    setSending(false)
  }

  const field = {
    width: '100%', fontFamily: 'inherit', fontSize: 15,
    padding: '13px 16px', borderRadius: 14,
    border: '1.5px solid var(--border)', background: '#fff',
    color: 'var(--text)', outline: 'none', resize: 'none',
    boxSizing: 'border-box',
  }

  return (
    <div className="page" style={{ position: 'relative', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', minHeight: '90vh', textAlign: 'center' }}>

      <FloatingHearts count={8} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 40, marginBottom: 14 }}>💗</div>
        <h1 className="h1" style={{ marginBottom: 10 }}>that's everything</h1>
        <p className="lead" style={{ margin: '0 auto 30px' }}>
          I'm not expecting this to fix things instantly. just wanted you to know I'm genuinely sorry.
        </p>

        <div className="card" style={{ width: 'min(92vw, 460px)', textAlign: 'left', margin: '0 auto' }}>
          {!sent ? (
            <>
              <textarea value={msg} onChange={e => setMsg(e.target.value)}
                placeholder="say whatever you want, or nothing at all…" rows={4}
                style={{ ...field, marginBottom: 10 }} />
              <button className="btn" onClick={submit}
                disabled={!msg.trim() || sending}
                style={{ width: '100%' }}>
                {sending ? 'sending…' : 'send'}
              </button>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '6px 0' }}>
              <p style={{ fontWeight: 700, marginBottom: 4 }}>sent.</p>
              <p style={{ color: 'var(--muted)', fontSize: 14 }}>thank you for reading all of this. 💗</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
