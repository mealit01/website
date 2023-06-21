import React from 'react'

function Steps({ steps }) {
    return (
        <div className="steps">
            <h2 className="steps__title">
                Instructions
            </h2>
            <ol className="steps__list">
                {
                    steps.map((step, index) => {
                        return (
                            <li key={index}>{step.description}</li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default Steps