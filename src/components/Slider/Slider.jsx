import React, { useState, useEffect } from 'react';

import img from '../../assets/images/meal.png';
import { CarouselProvider, Slider as SliderComponent, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Card from '../Slider/SliderCard';
const Slider = () => {
    const temp = [
        {
            id: 1,
            title: 'Pancakes',
            img: img,
            rating: 4.5,
            fav: false,
            meal: 'breakfast'
        },
        {
            id: 2,
            title: 'Pancakes',
            img: img,
            rating: 4.5,
            fav: false,
            meal: 'breakfast'
        },
        {
            id: 3,
            title: 'Pancakes',
            img: img,
            rating: 4.5,
            fav: false,
            meal: 'breakfast'
        },
        {
            id: 4,
            title: 'Pancakes',
            img: img,
            rating: 4.5,
            fav: false,
            meal: 'breakfast'
        },
        {
            id: 5,
            title: 'Pancakes',
            img: img,
            rating: 4.5,
            fav: false,
            meal: 'breakfast'
        },
        {
            id: 6,
            title: 'Pancakes',
            img: img,
            rating: 4.5,
            fav: false,
            meal: 'breakfast'
        },
        {
            id: 7,
            title: 'Pancakes',
            img: img,
            rating: 4.5,
            fav: false,
            meal: 'breakfast'
        },
        {
            id: 8,
            title: 'Pancakes',
            img: img,
            rating: 4.5,
            fav: false,
            meal: 'breakfast'
        }, {
            id: 9,
            title: 'Pancakes',
            img: img,
            rating: 4.5,
            fav: false,
            meal: 'lunch'
        }, {
            id: 10,
            title: 'Pancakes',
            img: img,
            rating: 4.5,
            fav: false,
            meal: 'lunch'
        }, {
            id: 11,
            title: 'Pancakes',
            img: img,
            rating: 4.5,
            fav: false,
            meal: 'lunch'
        }, {
            id: 12,
            title: 'Pancakes',
            img: img,
            rating: 4.5,
            fav: false,
            meal: 'dinner'
        }, {
            id: 13,
            title: 'Pancakes',
            img: img,
            rating: 4.5,
            fav: false,
            meal: 'dinner'
        }
    ]
    const [tempData, setTempData] = useState(temp);
    const [meal, setmeal] = useState('breakfast');
    const [visibleSlides, setvisibleSlides] = useState(6);

    const handleMealChange = (e) => {
        setmeal(e.target.getAttribute('value'));
    }

    const handleFav = (id) => {
        const temp = tempData.map((item) => {
            if (item.id === id) {
                item.fav = !item.fav;
            }
            return item;
        });
        setTempData(temp);
    }

    useEffect(() => {
        if (window.innerWidth < 320) {
            setvisibleSlides(1.25);
        } else if (window.innerWidth < 480) {
            setvisibleSlides(1.75);
        } else if (window.innerWidth < 768) {
            setvisibleSlides(2.25);
        } else if (window.innerWidth < 1024) {
            setvisibleSlides(3.5);
        } else if (window.innerWidth < 1200) {
            setvisibleSlides(4.5);
        } else if (window.innerWidth < 1400) {
            setvisibleSlides(5.5);
        } else {
            setvisibleSlides(6);
        }
    }, []);

    return (
        <div className="slider">
            <div className='slider__header meals'>
                <div className={meal === 'breakfast' ? 'breakfast active' : 'breakfast'} onClick={handleMealChange} value='breakfast'>Breakfast</div>
                <div className={meal === 'lunch' ? 'lunch active' : 'lunch'} onClick={handleMealChange} value='lunch'>Lunch</div>
                <div className={meal === 'dinner' ? 'dinner active' : 'dinner'} onClick={handleMealChange} value='dinner'>Dinner</div>
            </div>

            <div className="slider__content">
                <CarouselProvider
                    naturalSlideWidth={10}
                    naturalSlideHeight={15}
                    totalSlides={tempData.filter((item) => item.meal === meal).length}
                    visibleSlides={visibleSlides}
                >
                    <SliderComponent>
                        {
                            tempData.map((item) => {
                                if (item.meal === meal) {
                                    return (
                                        <Slide key={item.id} index={item.id - 1}>
                                            <Card item={item} handleFav={handleFav} />
                                        </Slide>
                                    )
                                }
                                return null;
                            })
                        }
                    </SliderComponent>
                    <ButtonBack className='slider__btn slider__btn--back'></ButtonBack>
                    <ButtonNext className='slider__btn slider__btn--next'></ButtonNext>
                </CarouselProvider>
            </div>
        </div>
    );
};


export default Slider;
