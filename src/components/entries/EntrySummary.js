import React from 'react';

const EntrySummary = ({entry}) => {
    return(
        <div className="card">
            <div className="card-description">
                <p>Time of day: {entry.timeOfTheDay}</p>
                <p>Blood sugar: {entry.bloodSugar} mg/dl</p>
                <p>Medication 1: {entry.insulinType1}</p>
                <p>Units: {entry.units1}</p>
                <p>Medication 2: {entry.insulinType2}</p>
                <p>Units: {entry.units2}</p>
                <p>Medication 3: {entry.insulinType3}</p>
                <p>Units: {entry.units3}</p>
            </div>
        </div>
    )
}

export default EntrySummary;