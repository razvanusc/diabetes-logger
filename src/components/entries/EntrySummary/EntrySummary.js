import React from 'react';
import './EntrySummary.css';
import { removeEntry } from '../../../store/actions/entryActions';
import { connect } from 'react-redux';
import moment from 'moment';

const EntrySummary = (props) => {
    const kMgdlHighLimit = 180.0
    const kMgdlLowLimit = 70.0

    const kMgdlMidHighLimit = 140.0
    const kMgdlMidLowLimit = 80.0

    // const kMmollHighLimit = 10.0
    // const kMmollLowLimit = 4.0

    // const kMmollMidHighLimit = 8.0
    // const kMmollMidLowLimit = 5.0

    const { entry, arr, i } = props

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

    const handleClick = (entry) => {
        const id = entry.id
        props.removeEntry(id)
    }

    let date;
    if (i === 0) {
        if (moment(entry.startDate.toDate()).format('LL') === moment(new Date()).format('LL')) {
            date = <div>Today</div>
        } else {
            date = <div>{moment(entry.startDate.toDate()).format('LL')}</div>
        }
    } else if (i > 0) {
        let previousItem = arr[i - 1];
        if (moment(entry.startDate.toDate()).format('LL') !== moment(previousItem.startDate.toDate()).format('LL')) {
            if (moment(entry.startDate.toDate()).format('LL') === moment(new Date()).format('LL')) {
                date = <div>Today</div>
            } else {
                date = <div>{moment(entry.startDate.toDate()).format('LL')}</div>
            }
        } else {
            date = null
        }
    } else {
        date = null
    }

    return (
        <div className="summary-container">
            <div className="card-date">
                {date}
            </div>
            <div className="card-summary">
                <a href={'/entry/' + entry.id} >
                    <div className={bloodSugarClassName}>
                        <div>{entry.bloodSugar}</div>
                        <div>{entry.unit}</div>
                    </div>
                </a>
                <a href={'/entry/' + entry.id} >
                    <div className="card-time-insulin">
                        <div className="card-day-time-summary">{moment(entry.startDate.toDate()).format('LT')}</div>
                        <div className="card-time-summary">{entry.timeOfTheDay}</div>
                        <div className="card-insulin-summary">
                            {entry.units1 && entry.insulinType1 ? <p>{entry.units1} {entry.insulinType1}</p> : null}
                            {entry.units2 && entry.insulinType2 ? <p>{entry.units2} {entry.insulinType2}</p> : null}
                            {entry.units3 && entry.insulinType3 ? <p>{entry.units3} {entry.insulinType3}</p> : null}
                        </div>
                    </div>
                </a>
                <div className='delete-btn'>
                    <button onClick={() => handleClick(entry)}><i className="fas fa-trash-alt"></i></button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeEntry: (uid) => dispatch(removeEntry(uid))
    }
}

export default connect(null, mapDispatchToProps)(EntrySummary);