import React from 'react'

function Review({ item }) {
  return (
    <div className={`review review-${item.id}`} key={item.id}>
        <div className="review__img">
            <img src={item.img} alt={item.name} />
        </div>
        <div className="review__content">
            <p>{item.content}</p>
        </div>
    </div>
  )
}

export default Review