import React, { useState, useEffect } from 'react';
import Card from '../Slider/SliderCard';

const Carousel = ({ cards, meal, handleFav }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(6);

  const goToNext = () => {
    const index = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    const index = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCardsToShow(Math.ceil(cards.length / 1.5));
      } else {
        setCardsToShow(6);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [cards]);

  const isBeginning = currentIndex === 0;
  const isEnd = currentIndex + cardsToShow >= cards.length;

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        <div className={`carousel-arrow ${isBeginning ? 'disabled' : ''}`} onClick={goToPrev}>
          <span className="icon-arrow-left"></span>
        </div>
        <div className="carousel-cards" style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}>
          {cards.slice(currentIndex, currentIndex + cardsToShow).map((card, index) => {
            if (card.meal === meal) {
              return <Card key={index} item={card} handleFav={handleFav} />
            } else {
              return null;
            }
          })}
        </div>
        <div className={`carousel-arrow ${isEnd ? 'disabled' : ''}`} onClick={goToNext}>
          <span className="icon-arrow-right"></span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
