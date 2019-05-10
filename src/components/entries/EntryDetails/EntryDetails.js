import React, { Component } from 'react';
import { updateEntry } from '../../../store/actions/entryActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import DatePicker from 'react-datepicker';
import M from 'materialize-css';
import './EntryDetails.css'
import 'materialize-css/dist/css/materialize.min.css';
import 'react-datepicker/dist/react-datepicker.css';

class EntryDetails extends Component {
    state = {}

    componentDidMount() {
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleDate = (date) => {
        console.log(date)
        this.setState({
            startDate: date
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id
        this.props.updateEntry(this.state, id)
        this.props.history.push('/')
        console.log(this.state)
    }

    render() {
        const { auth, entry } = this.props
        if (!auth.uid) return <Redirect to='/signin' />
        if (!entry) {
            return <div />
        }

        console.log(this.state)

        const insulinTypes = ['Apidra', 'Humalog', 'Injectables', 'Insulin NPH', 'Lantus', 'Levemir', 'Novolog', 'Acarbose (Precose)', 'Actoplus Met',
            'Actos', 'Amaryl', 'Diabeta', 'Duetact', 'Fortamet', 'Glucophage', 'Glucophage XR', 'Gluctrol', 'Glucotrol XL',
            'Glucovance', 'Glumetza', 'Glynase', 'Glyset', 'Janumet', 'Kombiglyze', 'Metaglip', 'Metformin', 'Micronase',
            'Onglyza', 'Prandimet', 'Prandin', 'Riomet', 'Starlix', 'Tradjenata', 'Welchol'];

        const timeOfDay = ['Before Breakfast', 'After Breakfast', 'Before Lunch', 'After Lunch', 'Before Dinner', 'After Dinner',
            'Before Bedtime', 'Random'];

        return (
            <div className="edit-entry-container">
                <form className='edit-entry-form' onSubmit={this.handleSubmit}>
                    <h5>Edit Entry</h5>
                    <div className='input-field'>
                        <select defaultValue={entry.timeOfTheDay} id="timeOfTheDay" onChange={this.handleChange}>
                            <option value="" disabled selected>Select time of the day</option>
                            {timeOfDay.map((time, i) =>
                                <option value={time} key={i}>{time}</option>
                            )}
                        </select>
                        <label>Time of the day</label>
                    </div>
                    <div className='input-field'>
                        <input defaultValue={entry.bloodSugar} type="text" id="bloodSugar" onChange={this.handleChange} />
                        <label htmlFor="bloodSugar">Blood Sugar</label>
                    </div >
                    <div className='date-picker-container input-field'>
                        <DatePicker
                            className="date-picker"
                            todayButton={"Today"}
                            selected={entry.startDate.toDate()}
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
                            <select defaultValue={entry.insulinType1} id="insulinType1" onChange={this.handleChange}>
                                <option value="" disabled selected>Select insulin type</option>
                                {insulinTypes.map((type, i) =>
                                    <option value={type} key={i}>{type}</option>
                                )}
                            </select>
                            <label htmlFor="insulinType1">Medication 1</label>
                        </div>
                        <div className='input-field units-input'>
                            <input defaultValue={entry.units1} type="text" id="units1" onChange={this.handleChange} />
                            <label htmlFor="units1">Units</label>
                        </div>
                    </div>
                    <div className="insulin-with-units-input">
                        <div className='input-field'>
                            <select defaultValue={entry.insulinType2} id="insulinType2" onChange={this.handleChange}>
                                <option value="" disabled selected>Select insulin type</option>
                                {insulinTypes.map((type, i) =>
                                    <option value={type} key={i}>{type}</option>
                                )}
                            </select>
                            <label htmlFor="insulinType2">Medication 2</label>
                        </div>
                        <div className='input-field units-input'>
                            <input defaultValue={entry.units2} type="text" id="units2" onChange={this.handleChange} />
                            <label htmlFor="units2">Units</label>
                        </div>
                    </div>
                    <div className="insulin-with-units-input">
                        <div className='input-field'>
                            <select defaultValue={entry.insulinType3} id="insulinType3" onChange={this.handleChange}>
                                <option value="" disabled selected>Select insulin type</option>
                                {insulinTypes.map((type, i) =>
                                    <option value={type} key={i}>{type}</option>
                                )}
                            </select>
                            <label htmlFor="insulinType3">Medication 3</label>
                        </div>
                        <div className='input-field units-input'>
                            <input defaultValue={entry.units3} type="text" id="units3" onChange={this.handleChange} />
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

const mapStateToProps = (state, ownParams) => {
    const id = ownParams.match.params.id
    const entries = state.firestore.data.entries;
    const entry = entries ? entries[id] : null
    return {
        entry: entry,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateEntry: (entry, uid) => dispatch(updateEntry(entry, uid))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'entries' }
    ])
)(EntryDetails);