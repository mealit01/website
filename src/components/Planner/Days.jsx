import React, { useState, useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useGetPlannerDaysQuery } from '../../state/features/planner/plannerService';
import { setDays } from '../../state/features/planner/plannerSlice';


function Days() {
    const days = useSelector(state => state.planner.days);
    const selectedDay = useSelector(state => state.planner.day);
    const daysRef = useRef(null);
    const dispatch = useDispatch();

    const { data, isLoading } = useGetPlannerDaysQuery('plannerDays');

    useEffect(() => {
        if (data) {
            dispatch(setDays(data));
        }
        console.log(data);
    }, [data, dispatch]);
  
    
    // useEffect(() => {
    //     const dayWidth = daysRef.current.children[0].getBoundingClientRect().width;
    //     daysRef.current.scrollLeft = selectedDay * dayWidth;
    // }, [selectedDay]);

    const changeDay = (index) => {
        
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="days" ref={daysRef}>
                {days?.map((day, index) => (
                    <div
                        key={index}
                        className={`day ${selectedDay === index ? 'active' : ''}`}
                        onClick={() => changeDay(index)}
                    >
                        <span className="day-name">
                            {day.toLocaleString('default', { weekday: 'short' })}
                        </span>
                        <span className="day-number">{day}</span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Days;