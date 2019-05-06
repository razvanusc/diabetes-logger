import React from 'react';
import './EntrySummary.css'

const EntrySummary = ({entry}) => {
    return(
        <div className="card-summary">
            <div className="card-description-summary">
                <div className="blood-sugar">
                    <p>Blood sugar: {entry.bloodSugar} mg/dl</p>
                </div>
                <div>
                    <p>Time of day: {entry.timeOfTheDay}</p>
                    <p>Medication 1: {entry.insulinType1}</p>
                    <p>Units: {entry.units1}</p>
                    <p>Medication 2: {entry.insulinType2}</p>
                    <p>Units: {entry.units2}</p>
                    <p>Medication 3: {entry.insulinType3}</p>
                    <p>Units: {entry.units3}</p>
                </div>
            </div>
        </div>
    )
}

export default EntrySummary;