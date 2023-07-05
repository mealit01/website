import React from 'react'
import Card from './Card'
function CardsList({ cards }) {
    return (
        <div className="cards-list">
            <div className="cards-list__content">
                {
                    cards?.map((card, index) => {
                        return (
                            <Card item={card} key={index} onClick={() => console.log('clicked')} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CardsList