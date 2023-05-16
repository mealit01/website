import React from 'react'

import Navbar from '../components/Navbar';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import Search from '../components/Search/Search';
import Idea from '../components/Home/Idea';
import FavRecipes from '../components/Home/FavRecipes';
import WhatPeopleThink from '../components/Home/Reviwes/WhatPeopleThink';
import Poster from '../components/Home/Poster';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Features />
      <Search />
      <Idea />
      <FavRecipes />
      <WhatPeopleThink />
      <Poster />
    </div>
  )
}

export default Home
