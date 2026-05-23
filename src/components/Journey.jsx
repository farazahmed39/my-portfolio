import React from 'react'
import { journeyData } from '../data/journey'

export default function Journey() {
  return (
    <section id="journey" className="journey">
      <div className="container">
        <h2>My Journey</h2>
        <div className="timeline">
          {journeyData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
