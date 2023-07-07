import React from 'react'

import Navbar from '../components/Navbar';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import Search from '../components/Search/Search';
import Idea from '../components/Home/Idea';
import FavRecipes from '../components/Home/FavRecipes';
import WhatPeopleThink from '../components/Home/Reviwes/WhatPeopleThink';
import Poster from '../components/Home/Poster';
import { Link } from 'react-router-dom';

function Home() {
  React.useEffect(() => {
    //scroll to top
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home">
      <Navbar />
      <Hero heading="Cooking" subheading="made easy" description="With MealIT, customize recipes and meal plans quickly and easily. Enjoy personalized cooking and efficient meal planning, saving you time and effort.">
        <Link to="/recipes" className="btn btn--primary">Get Started</Link>
      </Hero>
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
