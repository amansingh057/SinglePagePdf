import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Trips from './pages/Trips/index.jsx'


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Router>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/trips">Trips</Link>
      </nav>
      
      <Routes>
      <Route path="/" element={<App />} />
        <Route path="/trips" element={<Trips />} />
      </Routes>
    </Router>
  </StrictMode>,
)
