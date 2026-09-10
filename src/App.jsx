import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home.jsx'
import Sorry1 from './pages/Sorry1.jsx'
import Sorry2 from './pages/Sorry2.jsx'
import Sorry3 from './pages/Sorry3.jsx'
import VideoPage from './pages/VideoPage.jsx'
import Closing from './pages/Closing.jsx'
import MusicPlayer from './components/MusicPlayer.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <MusicPlayer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sorry-1" element={<Sorry1 />} />
        <Route path="/sorry-2" element={<Sorry2 />} />
        <Route path="/sorry-3" element={<Sorry3 />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/closing" element={<Closing />} />
      </Routes>
    </>
  )
}
