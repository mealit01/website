import React, { useState, useEffect } from 'react';
import CardNav from '../Card/CardNav';

import img from '../../assets/images/meal-rec.png';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Card from './Card';
const Cards = ({ nav = true }) => {
    const temp = [
        {
            id: 1,
            name: 'Pasta Margaretta with soup and butterfly',
            rating: 4.5,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            img: img,
            time: 30,
            ingredients: ['Chicken', 'Tomato', 'Onion', 'Garlic', 'Paprika', 'Salt', 'Pepper'],
            difficulty: 'Easy',
            calories: 300,
            fav: false,
            meal: 'breakfast'
        },
        {
            id: 2,
            name: 'Pasta Margaretta with soup and butterfly',
            rating: 4.5,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            img: img,
            time: 30,
            ingredients: ['Chicken', 'Tomato', 'Onion', 'Garlic', 'Paprika', 'Salt', 'Pepper'],
            difficulty: 'Easy',
            calories: 300,
            fav: false,
            meal: 'breakfast'
        },
        {
            id: 3,
            name: 'Pasta Margaretta with soup and butterfly',
            rating: 4.5,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            img: img,
            time: 30,
            ingredients: ['Chicken', 'Tomato', 'Onion', 'Garlic', 'Paprika', 'Salt', 'Pepper'],
            difficulty: 'Easy',
            calories: 300,
            fav: false,
            meal: 'breakfast'
        }, {
            id: 4,
            name: 'Pasta Margaretta with soup and butterfly',
            rating: 4.5,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            img: img,
            time: 30,
            ingredients: ['Chicken', 'Tomato', 'Onion', 'Garlic', 'Paprika', 'Salt', 'Pepper'],
            difficulty: 'Easy',
            calories: 300,
            fav: false,
            meal: 'breakfast'
        }, {
            id: 5,
            name: 'Pasta Margaretta with soup and butterfly',
            rating: 4.5,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            img: img,
            time: 30,
            ingredients: ['Chicken', 'Tomato', 'Onion', 'Garlic', 'Paprika', 'Salt', 'Pepper'],
            difficulty: 'Easy',
            calories: 300,
            fav: false,
            meal: 'breakfast'
        }
    ]
    const [tempData, setTempData] = useState(temp);

    const [visibleSlides, setvisibleSlides] = useState();


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
        // console.log(cardsPerentWidth);
        const handleResize = () => {
            const cardsPerentWidth = document.querySelector('.cards').offsetWidth;
            console.log(cardsPerentWidth);
            if (cardsPerentWidth < 400) 
                setvisibleSlides(1);
            else if (cardsPerentWidth < 450)
                setvisibleSlides(1.25);
            else if (cardsPerentWidth < 500)
                setvisibleSlides(1.5);
            else if (cardsPerentWidth < 768)
                setvisibleSlides(2.25);
            else if (cardsPerentWidth < 900)
                setvisibleSlides(2.5);
            else if (cardsPerentWidth < 1000)
                setvisibleSlides(3);
            else if (cardsPerentWidth < 1200)
                setvisibleSlides(3.5);
            else if (cardsPerentWidth < 1400)
                setvisibleSlides(4);
            else if (cardsPerentWidth < 1500)
                setvisibleSlides(4.5);
            else
                setvisibleSlides(5);
        }
       
        //add event listener 
        window.addEventListener('resize', handleResize);
        //call the function
        handleResize();
    
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div className="cards">
            {nav && <CardNav options={['breakfast', 'lunch', 'dinner']} />}

            <div className="cards__content">
                <CarouselProvider
                    naturalSlideWidth={10}
                    naturalSlideHeight={15}
                    totalSlides={tempData.length}
                    visibleSlides={visibleSlides}
                    className='carousel'
                >
                    <Slider>
                        {
                            tempData.map((item) => {
                                return (
                                    <Slide key={item.id} index={item.id - 1}>
                                        <Card item={item} handleFav={handleFav} />
                                    </Slide>
                                )
                            })
                        }
                    </Slider>
                    <ButtonBack className='cards__btn cards__btn--back'></ButtonBack>
                    <ButtonNext className='cards__btn cards__btn--next'></ButtonNext>
                </CarouselProvider>
            </div>
        </div>
    );
};


export default Cards;
