import React from 'react';
import './EntrySummary.css'

const EntrySummary = ({ entry }) => {
    const kMgdlHighLimit = 180.0
    const kMgdlLowLimit = 70.0

    const kMgdlMidHighLimit = 140.0
    const kMgdlMidLowLimit = 80.0

    // const kMmollHighLimit = 10.0
    // const kMmollLowLimit = 4.0

    // const kMmollMidHighLimit = 8.0
    // const kMmollMidLowLimit = 5.0

    let bloodSugarClassName = "card-blood-sugar-summary "

    if (entry.bloodSugar > kMgdlMidLowLimit && entry.bloodSugar < kMgdlMidHighLimit) {
        bloodSugarClassName = bloodSugarClassName + "border-green"
    } else if (entry.bloodSugar > kMgdlMidHighLimit && entry.bloodSugar < kMgdlHighLimit) {
        bloodSugarClassName = bloodSugarClassName + "border-orange"
    } else if (entry.bloodSugar > kMgdlLowLimit && entry.bloodSugar < kMgdlMidLowLimit) {
        bloodSugarClassName = bloodSugarClassName + "border-orange"
    } else if (entry.bloodSugar < kMgdlLowLimit) {
        bloodSugarClassName = bloodSugarClassName + "border-red"
    } else if (entry.bloodSugar > kMgdlHighLimit) {
        bloodSugarClassName = bloodSugarClassName + "border-red"
    }

    return (
        <div className="summary-container">
            <div className="card-summary">
                <div className={bloodSugarClassName}>
                    <div>{entry.bloodSugar}</div>
                    <div>{entry.unit}</div>
                </div>
                <div className="card-time-insulin">
                    <div className="card-time-summary">{entry.timeOfTheDay}</div>
                    <div className="card-insulin-summary">
                        <p>{entry.units1} {entry.insulinType1}</p>
                        <p>{entry.units2} {entry.insulinType2}</p>
                        <p>{entry.units3} {entry.insulinType3}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EntrySummary;