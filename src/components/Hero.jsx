import React from 'react'

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="container">
        <h1>Welcome to My Portfolio</h1>
        <p>Full Stack Developer | Problem Solver | Tech Enthusiast</p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={scrollToProjects}>
            View My Work
          </button>
          <button className="btn-primary" onClick={scrollToAbout}>
            Learn About Me
          </button>
        </div>
      </div>
    </section>
  )
}
