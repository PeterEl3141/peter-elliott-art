import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Works from './pages/Works/Works.jsx'
import WorkDetails from './pages/WorkDetails/WorkDetails.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Navbar from './components/Navbar/Navbar.jsx'

function App() {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <div key={location.pathname} className="page-shell">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:slug" element={<WorkDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App