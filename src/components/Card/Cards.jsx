import React, { useState, useEffect } from 'react';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useRemoveBreakfastMutation,  useRemoveLunchMutation, useRemoveDinnerMutation } from '../../state/features/planner/plannerService';
import { useDispatch } from 'react-redux';
import Card from './Card';


const Cards = ({ recipes, day, meal }) => {

    const [visibleSlides, setvisibleSlides] = useState();
    const [removeBreakfast] = useRemoveBreakfastMutation();
    const [removeLunch] = useRemoveLunchMutation();
    const [removeDinner] = useRemoveDinnerMutation();

    const handleRemove = async (recipeId) => {
        console.log(recipeId, day, meal);
        if (meal === 'breakfast') {
            await removeBreakfast({ recipeId, day });
        }
        if (meal === 'lunch') {
            await removeLunch({ recipeId, day });
        }
        if (meal === 'dinner') {
            await removeDinner({ recipeId, day });
        }
    }



    useEffect(() => {
        const handleResize = () => {
            const cardsPerentWidth = document.querySelector('.cards__content').offsetWidth;
            const cardWidth = 230;
            const addedMargin = 50;
            const visibleSlides = cardsPerentWidth / (cardWidth + addedMargin);
            setvisibleSlides(visibleSlides);
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div className="cards">
            <div className="cards__content">
                <CarouselProvider
                    naturalSlideWidth={10}
                    naturalSlideHeight={15}
                    totalSlides={recipes?.length}
                    visibleSlides={visibleSlides}
                    className='carousel'
                >
                    <Slider>
                        {
                            recipes?.map((item) => {
                                return (
                                    <Slide index={item._id} key={item._id}>
                                        {meal  && <Card item={item} remove={handleRemove} />}
                                        { !meal && <Card item={item} /> }
                                    </Slide>
                                )
                            })
                        }
                    </Slider>
                    {
                        recipes?.length > visibleSlides && (
                            <>
                                <ButtonBack className='cards__btn cards__btn--back'></ButtonBack>
                                <ButtonNext className='cards__btn cards__btn--next'></ButtonNext>
                            </>
                        )
                    }
                </CarouselProvider>
            </div>
        </div>
    );
};


export default Cards;
