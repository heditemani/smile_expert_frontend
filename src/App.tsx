import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import HomePage from './Pages/Home/home'
import ContactPage from './Pages/contact/contact'
import About from './Pages/About/About'
import FinalCTA from './components/FinalCTA/FinalCTA'


function App() {
  return (
    <BrowserRouter>
      {/*  Navbar  */}
      <Navbar />

      <Routes>
        {/*  Les pages */}
        <Route path='/' element={<HomePage />} /> {/* Remplace par <Home /> */}
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactPage />} />
        
        {/* Page 404 */}
        <Route path='*' element={<div>Page non trouvée (404)</div>} />
      </Routes>

      {/* <Footer /> */}
      <FinalCTA />
      <Footer />

    </BrowserRouter>
  )
}

export default App