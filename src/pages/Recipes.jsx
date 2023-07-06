import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Home/Hero'
import SearchBar from '../components/Search/SearchBar'
import Cards from '../components/Card/Cards'

import { useSelector, useDispatch } from 'react-redux'
import { useFetchAllRecipesQuery, useFetchForYouRecipesQuery } from '../state/features/recipes/recipesService'
import { setRecipes, setForYouRecipes } from '../state/features/recipes/recipesSlice'
import Spinner from '../components/Loader/Spinner'


//functional component
function Recipes() {
  // const recentSearches = useSelector(state => state.user.recentSearches);
  const { recipes, forYouRecipes } = useSelector(state => state.recipes);
  const dispatch = useDispatch();

  const { data, isLoading } = useFetchAllRecipesQuery('recipes');
  const { data: dataForYou, isLoading: isLoadingForYou } = useFetchForYouRecipesQuery('recipes');
 
  React.useEffect(() => {
    if (data) {
      dispatch(setRecipes(data));
    }

  }, [data, dispatch]);

  React.useEffect(() => {
    //scroll to top
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    if (dataForYou) {
      dispatch(setForYouRecipes(dataForYou));
    }
  } , [dataForYou, dispatch]);

  
  return (
    <div className="recipes">
      <Navbar />
      <Hero heading="What are we going to eat today?" description="Save time with customize recipe and meal planner with our app's innovative features for enjoyable experience with customize recipe and meal planner.">
        <SearchBar />
      </Hero>

      <div className="recipes__content">
        <div className="recipes__content--recent">
          <div className="recipes__content--header">
            <h3>Recent Searches</h3>
          </div>
          { isLoading ? <Spinner /> : <Cards recipes={recipes} />}
        </div>
      </div>

    
      <div className="recipes__content">
        <div className="recipes__content--recent">
          <div className="recipes__content--header">
            <h3>For you</h3>
          </div>
          { isLoadingForYou ? <Spinner /> : <Cards recipes={forYouRecipes} />}
        </div>
      </div>
    </div>
  )
}

export default Recipes