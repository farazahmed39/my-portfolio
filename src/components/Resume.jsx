import React from 'react'

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'MyResume.pdf'
    link.click()
  }

  return (
    <section id="resume" className="resume">
      <div className="container">
        <h2>My Resume</h2>
        <div className="resume-description">
          <p>
            Download my comprehensive resume to see my complete work experience, 
            skills, education, and achievements. 
          </p>
        </div>
        <div className="resume-button">
          <button onClick={handleDownload}>
            📥 Download Resume
          </button>
        </div>
      </div>
    </section>
  )
}
