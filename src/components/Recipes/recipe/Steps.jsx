import React, { useState } from 'react'

import ExpandMoreIcon from '../../../assets/images/expand-open.svg'
import Modal from '../../Modal/Modal'
import expandLess from '../../../assets/images/expand-close.svg'

function Steps({ steps }) {
    const [show, setShow] = useState(false)


    return (
        <div className="steps">
            <div className="steps__title">
                <h2>
                    Instructions
                </h2>
                <button className="steps__title__button expand" aria-label="expand instructions" onClick={() => setShow(!show)}>
                    <img src={ExpandMoreIcon} alt="expand instructions" />
                </button>
            </div>

            {show && (
                <Modal onClose={() => setShow(false)} show={show} closeIcon={true} closIcon={expandLess}>
                    <ol className="steps__list">
                        {
                            steps.map((step, index) => {
                                return (
                                    <li key={index}>{step.description}</li>
                                )
                            })
                        }
                    </ol>
                </Modal>
            )}

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