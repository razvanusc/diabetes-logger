import React, { Component } from 'react';
import './CreateEntry.css';
import { createEntry } from '../../../store/actions/entryActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'react-datepicker/dist/react-datepicker.css';

class CreateEntry extends Component {
    state = {
        timeOfTheDay: '',
        bloodSugar: null,
        insulinType1: '',
        units1: null,
        insulinType2: '',
        units2: null,
        insulinType3: '',
        units3: '',
        startDate: new Date()
    }

    componentDidMount() {
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);

        console.log(elems)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleDate = (date) => {
        this.setState({
            startDate: date
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createEntry(this.state)
        this.props.history.push('/')
    }

    render() {
        const { auth } = this.props
        if (!auth.uid) return <Redirect to='/signin' />

        const insulinTypes = ['Apidra', 'Humalog', 'Injectables', 'Insulin NPH', 'Lantus', 'Levemir', 'Novolog', 'Acarbose (Precose)', 'Actoplus Met',
            'Actos', 'Amaryl', 'Diabeta', 'Duetact', 'Fortamet', 'Glucophage', 'Glucophage XR', 'Gluctrol', 'Glucotrol XL',
            'Glucovance', 'Glumetza', 'Glynase', 'Glyset', 'Janumet', 'Kombiglyze', 'Metaglip', 'Metformin', 'Micronase',
            'Onglyza', 'Prandimet', 'Prandin', 'Riomet', 'Starlix', 'Tradjenata', 'Welchol'];

        const timeOfDay = ['Before Breakfast', 'After Breakfast', 'Before Lunch', 'After Lunch', 'Before Dinner', 'After Dinner',
            'Before Bedtime', 'Random'];

        return (
            <div className="create-entry-container">
                <form className='entry-form' onSubmit={this.handleSubmit}>
                    <h5>New Entry</h5>
                    <div className='input-field'>
                        <select id="timeOfTheDay" onChange={this.handleChange}>
                            <option value="" disabled selected>Select time of the day</option>
                            {timeOfDay.map((time, i) =>
                                <option value={time} key={i}>{time}</option>
                            )}
                        </select>
                        <label>Time of the day</label>
                    </div>
                    <div className='input-field'>
                        <input type="text" id="bloodSugar" onChange={this.handleChange} />
                        <label htmlFor="bloodSugar">Blood Sugar</label>
                    </div >
                    <div className='date-picker-container input-field'>
                        <DatePicker
                            className="date-picker"
                            todayButton={"Today"}
                            selected={this.state.startDate}
                            onChange={this.handleDate}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={1}
                            dateFormat="MMMM d, yyyy h:mm aa"
                            timeCaption="time"
                        />
                    </div>
                    <div className="insulin-with-units-input">
                        <div className='input-field'>
                            <select id="insulinType1" onChange={this.handleChange}>
                                <option value="" disabled selected>Select insulin type</option>
                                {insulinTypes.map((type, i) =>
                                    <option value={type} key={i}>{type}</option>
                                )}
                            </select>
                            <label htmlFor="insulinType1">Medication 1</label>
                        </div>
                        <div className='input-field units-input'>
                            <input type="text" id="units1" onChange={this.handleChange} />
                            <label htmlFor="units1">Units</label>
                        </div>
                    </div>
                    <div className="insulin-with-units-input">
                        <div className='input-field'>
                            <select id="insulinType2" onChange={this.handleChange}>
                                <option value="" disabled selected>Select insulin type</option>
                                {insulinTypes.map((type, i) =>
                                    <option value={type} key={i}>{type}</option>
                                )}
                            </select>
                            <label htmlFor="insulinType2">Medication 2</label>
                        </div>
                        <div className='input-field units-input'>
                            <input type="text" id="units2" onChange={this.handleChange} />
                            <label htmlFor="units2">Units</label>
                        </div>
                    </div>
                    <div className="insulin-with-units-input">
                        <div className='input-field'>
                            <select id="insulinType3" onChange={this.handleChange}>
                                <option value="" disabled selected>Select insulin type</option>
                                {insulinTypes.map((type, i) =>
                                    <option value={type} key={i}>{type}</option>
                                )}
                            </select>
                            <label htmlFor="insulinType3">Medication 3</label>
                        </div>
                        <div className='input-field units-input'>
                            <input type="text" id="units3" onChange={this.handleChange} />
                            <label htmlFor="units3">Units</label>
                        </div>
                    </div>
                    <div>
                        <button className="entry-button" type="submit">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createEntry: (entry) => dispatch(createEntry(entry))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEntry);
