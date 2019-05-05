import React from 'react';

const EntrySummary = ({entry}) => {
    return(
        <div className="card">
            <div className="card-description">
                <p>Time of day: {entry.timeOfTheDay}</p>
                <p>Blood sugar: {entry.timeOfTheDay} mg/dl</p>
                <p>Medication 1: {entry.medication1}</p>
                <p>Units: {entry.medication1Units}</p>
                <p>Medication 2: {entry.medication2}</p>
                <p>Units: {entry.medication2Units}</p>
            </div>
        </div>
    )
}

export default EntrySummary;