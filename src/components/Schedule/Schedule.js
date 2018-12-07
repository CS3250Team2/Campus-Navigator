import React from 'react';

import classes from './Schedule.css';

const formatClasses = classes => {
    if (classes.length > 0) {
        return (
            <ul>
                {classes.map((aClass, idx) => (
                    <li className={classes.Class1} key={`${aClass.days}${idx}`}>
                        <h4>Class {idx + 1}</h4>
                        <span>
                            <strong>Building:</strong> {aClass.building}
                        </span>
                        <br />
                        <span>
                            <strong>Time:</strong> {aClass.startTime} - {aClass.endTime}
                        </span>
                    </li>
                ))}
            </ul>
        );
    } else {
        return <p>No classes today!</p>;
    }
};

const Schedule = props => {
    let day = '';
    switch (props.day) {
        case 'MW':
            day = 'Monday/Wednesday';
            break;
        case 'TR':
            day = 'Tuesday/Thursday';
            break;
        case 'WK':
            day = 'Weekend';
            break;
        default:
            day = '';
    }

    let formattedClasses = null;
    if (props.schedule.length > 0) {
        formattedClasses = formatClasses(props.schedule);
    } else {
        formattedClasses = <span>No classes today!</span>;
    }

    return (
        <div className={classes.Schedule}>
            <h2>Your {day} Schedule</h2>
            {formattedClasses}
        </div>
    );
};

export default Schedule;
