import React from 'react'

export default function Hero({heading, subheading = '', description, children}) {
  return (
    <section className="hero">
      <div className="hero-text">
        <div className="hero-text__title">
          <h1>
            {heading}
          </h1>
          <span>
            {subheading}
          </span>
        </div>

        <p> {description} </p>
        
        {children}
      </div>
      
    </section>
  )
}
