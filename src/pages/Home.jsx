import React from 'react'

import Navbar from '../components/Navbar';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import Search from '../components/Search/Search';
import Idea from '../components/Home/Idea';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Features />
      <Search />
      <Idea />
    </div>
  )
}

export default Home
