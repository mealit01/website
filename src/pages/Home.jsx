import React from 'react'

import Navbar from '../components/Navbar';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Features />
    </div>
  )
}

export default Home
