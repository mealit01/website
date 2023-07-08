import React, { useState, useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useGetPlannerDaysQuery } from '../../state/features/planner/plannerService';
import { setDays } from '../../state/features/planner/plannerSlice';
import { getDayRecipes } from '../../state/features/planner/plannerActions';

function Days() {
    const days = useSelector(state => state.planner.days);
    const { day, activeDay } = useSelector(state => state.planner);
    const daysRef = useRef(null);
    const dispatch = useDispatch();

    const { data, isLoading } = useGetPlannerDaysQuery('plannerDays');

    useEffect(() => {
        if (data) {
            dispatch(setDays(data));
        }
    }, [data, dispatch, day]);

    

    useEffect(() => {
        if (daysRef.current) {
            daysRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            });
        }
    }, [activeDay, days]);

   
    const changeDay = (day) => {
        dispatch(getDayRecipes(day));
        // console.log(day);
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {days && (
                <div className="days">
                    {days?.map((day, index) => (
                        <div
                            ref={activeDay === day.day ? daysRef : null}
                            key={index}
                            className={`day ${day.day === activeDay ? 'active' : ''}`}
                            onClick={() => changeDay(day.day)}
                        >
                            <span className="day-name">
                                {day.dayOfWeek}
                            </span>
                            <span className="day-number">{day.day}</span>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default Days;