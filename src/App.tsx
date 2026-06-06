import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import HomePage from './Pages/Home/home'
import ContactPage from './Pages/contact/contact'
import About from './Pages/About/About'
import Service from './Pages/Services/services'
import FinalCTA from './components/FinalCTA/FinalCTA'
import Beforeafter from './Pages/Before&After/Before&After'
import LaserDiode from './Pages/LaserDiode/LaserDiode'
import ScannerIntraoral from './Pages/ScannerIntraoral/ScannerIntraoral'
import ScannerFacial from './Pages/ScannerFacial/ScannerFacial'
import BuccoDentaire from './Pages/buccoDentaire/BuccoDentaire'
import SoinsBuccoDentaires from './Pages/SoinsBuccoDentaires/BuccoDentaire'
import Therapeutique from './Pages/Therapeutique/Therapeutique'
import Prothesesdentaires from './Pages/Prothesesdentaires/Prothesesdentaires'
import NotFound from './Pages/NotFound/NotFound'

function App() {
  return (
    <BrowserRouter>
      {/*  Navbar  */}
      <Navbar />
      <div style={{ height: '80px' }} /> 

      <Routes>
        {/*  Les pages */}
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/services' element={<Service/>} />
        <Route path='/Before&After' element={<Beforeafter />} />
        <Route path='/laser' element={<LaserDiode />} />
        <Route path='/scanner.intraoral' element={<ScannerIntraoral />} />
        <Route path='/scanner.facial' element={<ScannerFacial />} />
        <Route path='/bucco-dentaire' element={<BuccoDentaire />} />
        <Route path='/soins-bucco-dentaires' element={<SoinsBuccoDentaires />} />
        <Route path='/therapeutique' element={<Therapeutique />} />
        <Route path='/protheses-dentaires' element={<Prothesesdentaires />} />
        
        {/* Page 404 fully styled w multilingue */}
        <Route path='*' element={<NotFound />} />
      </Routes>

      {/* <Footer /> */}
      <FinalCTA />
      <Footer />

    </BrowserRouter>
  )
}

export default App