import React from 'react'

import Navbar from '../components/Navbar';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import Search from '../components/Search/Search';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Features />
      <Search />
    </div>
  )
}

export default Home
