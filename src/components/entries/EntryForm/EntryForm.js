import React from 'react';
import DatePicker from 'react-datepicker';
import './EntryForm.css'

const EntryForm = (props) => {
    const insulinTypes = ['Apidra', 'Humalog', 'Injectables', 'Insulin NPH', 'Lantus', 'Levemir', 'Novolog', 'Acarbose (Precose)', 'Actoplus Met',
        'Actos', 'Amaryl', 'Diabeta', 'Duetact', 'Fortamet', 'Glucophage', 'Glucophage XR', 'Gluctrol', 'Glucotrol XL',
        'Glucovance', 'Glumetza', 'Glynase', 'Glyset', 'Janumet', 'Kombiglyze', 'Metaglip', 'Metformin', 'Micronase',
        'Onglyza', 'Prandimet', 'Prandin', 'Riomet', 'Starlix', 'Tradjenata', 'Welchol'];

    const timeOfDay = ['Before Breakfast', 'After Breakfast', 'Before Lunch', 'After Lunch', 'Before Dinner', 'After Dinner',
        'Before Bedtime', 'Random'];

    let type1 = (<div className="insulin-with-units-input">
        <div className='input-field'>
            <select defaultValue={props.entry ? props.entry.insulinType1 : null} id="insulinType1" onChange={props.handleChange}>
                <option value="" disabled selected>Select insulin type</option>
                {insulinTypes.map((type, i) =>
                    <option value={type} key={i}>{type}</option>
                )}
            </select>
            <label htmlFor="insulinType1">Medication 1</label>
        </div>
        <div className='input-field units-input'>
            <input defaultValue={props.entry ? props.entry.units1 : null} type="number" id="units1" onChange={props.handleChange} />
            <label htmlFor="units1">Units</label>
        </div>
    </div>)

    let type2 = (<div className="insulin-with-units-input">
        <div className='input-field'>
            <select defaultValue={props.entry ? props.entry.insulinType2 : null} id="insulinType2" onChange={props.handleChange}>
                <option value="" disabled selected>Select insulin type</option>
                {insulinTypes.map((type, i) =>
                    <option value={type} key={i}>{type}</option>
                )}
            </select>
            <label htmlFor="insulinType2">Medication 2</label>
        </div>
        <div className='input-field units-input'>
            <input defaultValue={props.entry ? props.entry.units2 : null} type="number" id="units2" onChange={props.handleChange} />
            <label htmlFor="units2">Units</label>
        </div>
    </div>)

    let type3 = (<div className="insulin-with-units-input">
        <div className='input-field'>
            <select defaultValue={props.entry ? props.entry.insulinType3 : null} id="insulinType3" onChange={props.handleChange}>
                <option value="" disabled selected>Select insulin type</option>
                {insulinTypes.map((type, i) =>
                    <option value={type} key={i}>{type}</option>
                )}
            </select>
            <label htmlFor="insulinType3">Medication 3</label>
        </div>
        <div className='input-field units-input'>
            <input defaultValue={props.entry ? props.entry.units3 : null} type="number" id="units3" onChange={props.handleChange} />
            <label htmlFor="units3">Units</label>
        </div>
    </div>)

    return (
        <div className="entry-form-container">
            <form className='entry-form' onSubmit={props.handleSubmit}>
                {props.entry ? <h5>Edit entry</h5> : <h5>Create entry</h5>}
                <div className='input-field'>
                    <select defaultValue={props.entry ? props.entry.timeOfTheDay : null} id="timeOfTheDay" onChange={props.handleChange}>
                        <option value="" disabled selected>Select time of the day</option>
                        {timeOfDay.map((time, i) =>
                            <option value={time} key={i}>{time}</option>
                        )}
                    </select>
                    <label>Time of the day</label>
                </div>
                <div className='input-field'>
                    <input required={true} defaultValue={props.entry ? props.entry.bloodSugar : null} type="number" id="bloodSugar" onChange={props.handleChange} />
                    <label htmlFor="bloodSugar">Blood Sugar</label>
                </div >
                <div className='date-picker-container input-field'>
                    <DatePicker
                        className="date-picker"
                        todayButton={"Today"}
                        selected={props.entry ? props.entry.startDate.toDate() : props.startDate}
                        onChange={props.handleDate}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={1}
                        dateFormat="MMMM d, yyyy h:mm aa"
                        timeCaption="time"
                    />
                </div>
                <h6>Medication</h6>
                <div className="row">
                    <ul className="tabs">
                        <li className="tab">
                            <a className={props.entry && !props.entry.insulinType1 && !props.entry.units1 ? "active" : null} href="#none">None</a>
                        </li>
                        <li className="tab">
                            <a className={props.entry && props.entry.insulinType1 && props.entry.units1 && !props.entry.insulinType2 && !props.entry.units2 && !props.entry.insulinType3 && !props.entry.units3 ? "active" : null} href="#type1">1 type</a>
                        </li>
                        <li className="tab">
                            <a className={props.entry && props.entry.insulinType2 && props.entry.units2 && !props.entry.insulinType3 && !props.entry.units3 ? "active" : null} href="#type2">2 types</a>
                        </li>
                        <li className="tab">
                            <a className={props.entry && props.entry.insulinType3 && props.entry.units3 ? "active" : null} href="#type3">3 types</a>
                        </li>
                    </ul>
                </div>
                <div className='insulin-types-container'>
                    <div id="none" className="col s12"></div>
                    <div id="type1" className="col s12">{type1}</div>
                    <div id="type2" className="col s12">{type1} {type2}</div>
                    <div id="type3" className="col s12">{type1} {type2} {type3}</div>
                </div>
                <div>
                    <button className="entry-button" type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}

export default EntryForm;