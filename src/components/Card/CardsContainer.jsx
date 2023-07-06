import React from 'react'
import Card from './Card'

function CardsContainer({ cards }) {
    
    return (
        <div className="cards-list list-container">
            <div className="list-container__content">
                {
                    cards?.map((card, index) => {
                        return (
                            <Card item={card} key={index}  />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CardsContainer