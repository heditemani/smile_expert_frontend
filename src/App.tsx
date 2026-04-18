import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'


function App() {
  return (
    <BrowserRouter>
      {/*  Navbar  */}
      <Navbar />

      <Routes>
        {/*  Les pages */}
        <Route path='/' element={<div>Page d'accueil</div>} /> {/* Remplace par <Home /> */}
        <Route path='/about' element={<div>À propos</div>} /> {/* Remplace par <About /> */}
        <Route path='/contact' element={<div>Contact</div>} />
        
        {/* Page 404 */}
        <Route path='*' element={<div>Page non trouvée (404)</div>} />
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App