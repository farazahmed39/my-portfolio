import React from 'react'

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/logo.png" alt="Faraz Ahmed Logo" className="logo-image" style={{ height: '40px', marginRight: '10px' }} />
          Faraz Ahmed
        </div>
        <ul className="navbar-links">
          <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('journey')}>Journey</a></li>
          <li><a onClick={() => scrollToSection('resume')}>Resume</a></li>
          <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
        </ul>
      </div>
    </nav>
  )
}
