import React from 'react'
import feature1 from '../../assets/images/features-icon1.svg'
import feature2 from '../../assets/images/features-icon2.svg'
import feature3 from '../../assets/images/features-icon3.svg'
import feature4 from '../../assets/images/features-icon4.svg'

export default function Features() {
  return (
    <section className="features container">
      <h2>How it works</h2>
      <div className="features-container">
        <div className="feature">
          <div className="feature-img">
            <img src={feature1} alt="" />
          </div>
          <div className="feature-text">
            <h3>Enter ingredients</h3>
            <p>Enter the ingredients you have in your pantry and fridge.</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-img">
            <img src={feature2} alt="" />
          </div>
          <div className="feature-text">
            <h3>Find best recipe match</h3>
            <p>Find your favorite recipe with what you already have.</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-img">
            <img src={feature3} alt="" />
          </div>
          <div className="feature-text">
            <h3>Add to shopping list</h3>
            <p>Save time and effort with customize recipe and meal planner.</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-img">
            <img src={feature4} alt="" />
          </div>
          <div className="feature-text">
            <h3>Buy online</h3>
            <p>Save time and effort with customize recipe and meal planner.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
