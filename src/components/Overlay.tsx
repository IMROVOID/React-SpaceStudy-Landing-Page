import { useState, useEffect } from 'react'
import { Sling as Hamburger } from 'hamburger-react'

export default function Overlay() {
  const [isOpen, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="overlay">
      {/* --- DESKTOP HEADER --- */}
      <header className="main-header">
        <a href="#" className="header-link">SpaceStudy Initiative</a>
        <span className="header-status">Status: Nominal</span>
      </header>

      {/* --- MOBILE HAMBURGER ICON --- */}
      <div className="hamburger-menu">
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} direction="left" color="#333" />
      </div>

      {/* --- SIDEBAR MENU (MOBILE) --- */}
      <div className={`sidebar-menu ${isOpen ? 'open' : ''}`}>
        <nav className="sidebar-content">
          <a href="#">MISSIONS</a>
          <a href="#">ARCHIVES</a>
          <a href="#">TELEMETRY</a>
          <a href="#">CONTACT</a>
          <a href="#">SpaceStudy Initiative</a>
        </nav>
      </div>


      {/* --- HERO CONTENT (TOP LEFT) --- */}
      <div className="hero-section">
        <div className="hero-content">
          {/* Title now renders conditionally based on viewport size */}
          <h1>
            {isMobile ? <>Orbital Unit <br /> 734</> : 'Orbital Unit 734'}
          </h1>
          <p className="hero-description">
            Real-time telemetry and mission data from the outer sectors. Monitoring atmospheric and geological shifts on exoplanets.
          </p>
        </div>
      </div>

      {/* --- VERTICAL NAV (RIGHT CENTER - DESKTOP) --- */}
      <nav className="vertical-nav">
        <a href="#">MISSIONS</a>
        <a href="#">ARCHIVES</a>
        <a href="#">TELEMETRY</a>
        <a href="#">CONTACT</a>
      </nav>

      {/* --- FOOTER (BOTTOM LEFT) --- */}
      <footer className="main-footer">
        <span>NASA Public Archives // 2025</span>
      </footer>
    </div>
  )
}