import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import NotFound from './NotFound';
import { useSelector, useDispatch } from 'react-redux'
import { useFetchFilterOptionsQuery } from '../state/features/search/searchService';
import { setSearchFilters } from '../state/features/search/searchSlice';
import CardsContainer from '../components/Card/CardsContainer';


function SearchResults() {
    const filters = useSelector(state => state.search.searchFilters);
    const results = useSelector(state => state.search.searchResults);
    const searchQuery = useSelector(state => state.search.searchQuery);

    const { data } = useFetchFilterOptionsQuery();
    const dispatch = useDispatch();

    useEffect(() => {
        if (data) {
            dispatch(setSearchFilters(data));
        }
    }, [data]);

    React.useEffect(() => {
        //scroll to top
        window.scrollTo(0, 0);
      }, []);

    if (!results) {
        return <NotFound />
    }

    return (
        <div className="search-results">
            <Navbar />
            <article className="filter">
                <div className="filter__title">
                    <h3>Filter</h3>
                </div>
                <div className="filter__content">
                    {
                        Object.keys(filters)?.map((type, index) => (
                            <>
                                <h5 key={index} className="filter__content--title">{type.split('_').join(' ')}</h5>
                                <div key={type} className="filter__content--checkbox">
                                    {
                                        filters[type].map((item, index) => (item === '' ? '' :
                                            (
                                                <div key={item} className="filter__content--checkbox-item">
                                                    <input type="checkbox" name={item} id={item} />
                                                    <label htmlFor={item}>{item}</label>
                                                </div>
                                            )
                                        ))
                                    }
                                </div>
                            </>
                        ))
                    }
                </div>
            </article>


            {
                results.length === 0 ? <NotFound /> : (
                    <section className="results">
                        <div className="results__title">
                            <h3>Results about:</h3>
                            <h2>{searchQuery}</h2>
                        </div>
                        <CardsContainer cards={results} />
                    </section>
                )
            }

        </div>
    )
}

export default SearchResults;