import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './index.css'

// les components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import FinalCTA from './components/FinalCTA/FinalCTA'
import ScrollToTop from './components/ScrollToTop'

// les pages
import HomePage from './Pages/Home/home'
import ContactPage from './Pages/contact/contact'
import About from './Pages/About/About'
import Service from './Pages/Services/services'
import Beforeafter from './Pages/Before&After/Before&After'
import LaserDiode from './Pages/LaserDiode/LaserDiode'
import ScannerIntraoral from './Pages/ScannerIntraoral/ScannerIntraoral'
import ScannerFacial from './Pages/ScannerFacial/ScannerFacial'
import BuccoDentaire from './Pages/buccoDentaire/BuccoDentaire'
import SoinsBuccoDentaires from './Pages/SoinsBuccoDentaires/SoinsBuccoDentaire'
import Therapeutique from './Pages/Therapeutique/Therapeutique'
import Prothesesdentaires from './Pages/Prothesesdentaires/Prothesesdentaires'
import NotFound from './Pages/NotFound/NotFound'

function SiteMotion() {
  const location = useLocation()

  useEffect(() => {
    let frame = 0
    let observer: IntersectionObserver | null = null

    const scheduleReveal = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        observer?.disconnect()

        const reveals = document.querySelectorAll<HTMLElement>(
          '[data-reveal], section:not(.motion-reveal), [class*="grid"] > *, [class*="Grid"] > *, [class*="list"] > *, [class*="List"] > *, [class*="steps"] > *, [class*="Steps"] > *',
        )

        if (!('IntersectionObserver' in window)) {
          reveals.forEach((element) => {
            element.classList.add('motion-reveal', 'is-visible')
          })
          return
        }

        const currentObserver = new IntersectionObserver(
          (entries, currentObserver) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return
              entry.target.classList.add('is-visible')
              currentObserver.unobserve(entry.target)
            })
          },
          { threshold: 0.12, rootMargin: '0px 0px -36px' },
        )
        observer = currentObserver

        reveals.forEach((element, index) => {
          if (element.classList.contains('motion-reveal') || element.classList.contains('reveal')) return

          element.classList.add('motion-reveal')
          element.style.setProperty('--motion-delay', `${Math.min(index % 6, 5) * 80}ms`)
          currentObserver.observe(element)
        })
      })
    }

    scheduleReveal()
    window.addEventListener('resize', scheduleReveal)

    return () => {
      cancelAnimationFrame(frame)
      observer?.disconnect()
      window.removeEventListener('resize', scheduleReveal)
    }
  }, [location.pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <SiteMotion />
      <ScrollToTop />
      {/* Navbar  */}
      <Navbar />
      <div style={{ height: '72px' }} /> 

      <Routes>
        {/* Les pages principales */}
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/services' element={<Service/>} />
        <Route path='/Before&After' element={<Beforeafter />} />
        <Route path='/before-and-after' element={<Beforeafter />} />
        <Route path='/before&after' element={<Beforeafter />} />
        <Route path='/laser' element={<LaserDiode />} />
        <Route path='/scanner.intraoral' element={<ScannerIntraoral />} />
        <Route path='/scanner.facial' element={<ScannerFacial />} />
        
        {/* Les sous-pages services */}
        <Route path='/services/bucco-dentaire' element={<BuccoDentaire />} />
        <Route path='/services/soins-bucco-dentaires' element={<SoinsBuccoDentaires />} />
        <Route path='/services/therapeutique' element={<Therapeutique />} />
        <Route path='/services/protheses-dentaires' element={<Prothesesdentaires />} />
        
        {/* Page 404  */}
        <Route path='*' element={<NotFound />} />
      </Routes>

      <FinalCTA />
      <Footer />
    </BrowserRouter>
  )
}

export default App