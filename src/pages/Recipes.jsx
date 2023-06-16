import React, { PureComponent } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Home/Hero'
import SearchBar from '../components/Search/SearchBar'

export class Recipes extends PureComponent {
  render() {
    return (
      <div className="recipes">
        <Navbar />
        <Hero heading="What are we going to eat today?"  description="Save time with customize recipe and meal planner with our app's innovative features for enjoyable experience with customize recipe and meal planner.">
            <SearchBar />
        </Hero>
      </div>
    )
  }
}

export default Recipes
