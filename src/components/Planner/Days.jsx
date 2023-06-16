import React, { useState, useEffect, useRef } from 'react';


const setTemp = () => {
    const tempDays = [];
    for (let i = -10; i < 10; i++) {
        let day = new Date();
        day.setDate(day.getDate() + i);
        tempDays.push(day);
    }
    return tempDays;
}

function Days() {
    const [days, setDays] = useState(setTemp());
    const [selectedDay, setSelectedDay] = useState(days.length / 2);
    const daysRef = useRef(null);

    useEffect(() => {
        setDays(setTemp());
    }, []);

    useEffect(() => {
        const dayWidth = daysRef.current.children[0].getBoundingClientRect().width;
        daysRef.current.scrollLeft = selectedDay * dayWidth;
    }, [selectedDay]);

    const changeDay = (index) => {
        setSelectedDay(index);
    };

    return (
        <>
            <div className="days" ref={daysRef}>
                {days.map((day, index) => (
                    <div
                        key={index}
                        className={`day ${selectedDay === index ? 'active' : ''}`}
                        onClick={() => changeDay(index)}
                    >
                        <span className="day-name">
                            {day.toLocaleString('default', { weekday: 'short' })}
                        </span>
                        <span className="day-number">{day.getDate()}</span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Days;