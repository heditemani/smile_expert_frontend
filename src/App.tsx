import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import HomePage from './Pages/Home/home'
import ContactPage from './Pages/contact/contact'


function App() {
  return (
    <BrowserRouter>
      {/*  Navbar  */}
      <Navbar />

      <Routes>
        {/*  Les pages */}
        <Route path='/' element={<HomePage />} /> {/* Remplace par <Home /> */}
        <Route path='/about' element={<div>À propos</div>} /> {/* Remplace par <About /> */}
        <Route path='/contact' element={<ContactPage />} />
        
        {/* Page 404 */}
        <Route path='*' element={<div>Page non trouvée (404)</div>} />
      </Routes>

      {/* <Footer /> */}
      <Footer />

    </BrowserRouter>
  )
}

export default App