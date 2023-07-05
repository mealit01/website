import React, { useState, useEffect } from 'react';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Card from './Card';
const Cards = ({ recipes }) => {

    const [visibleSlides, setvisibleSlides] = useState();


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
                                        <Card item={item} />
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
