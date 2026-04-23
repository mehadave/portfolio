import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import V1Brutalist from './variants/V1Brutalist'
import V2Swiss from './variants/V2Swiss'
import V3Editorial from './variants/V3Editorial'
import V4Terminal from './variants/V4Terminal'
import V5Bold from './variants/V5Bold'

function Home() {
  return (
    <div className="min-h-screen bg-app">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/v1" element={<V1Brutalist />} />
      <Route path="/v2" element={<V2Swiss />} />
      <Route path="/v3" element={<V3Editorial />} />
      <Route path="/v4" element={<V4Terminal />} />
      <Route path="/v5" element={<V5Bold />} />
    </Routes>
  )
}
