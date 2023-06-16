import React, {useState} from 'react'

function CardNav({ options}) {
    const [active, setActive] = useState(options[0]);

    
    const handleCardChange = (option) => {
        setActive(option);
    }

    return (
        <div className="cards__header meals">
            {options.map((option, index) => (
                <div className={
                    active === option ? 'card-nav__option active' : 'card-nav__option'}
                    key={option}
                    onClick={() => handleCardChange(option)}
                >
                    {option}
                </div>
            ))}
        </div>
    )
}

export default CardNav