import { useEffect, useRef } from 'react'
import './index.css'
import NeuralBackground from './components/NeuralBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Thoughts from './components/Thoughts'
import Contact from './components/Contact'

function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`
        glowRef.current.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return <div ref={glowRef} className="glow-cursor" />
}

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#030712' }}>
      <CursorGlow />
      <NeuralBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Thoughts />
          <Contact />
        </main>
      </div>
    </div>
  )
}

export default App
