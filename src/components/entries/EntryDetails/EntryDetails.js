import React, { Component } from 'react';
import { updateEntry} from '../../../store/actions/entryActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

class EntryDetails extends Component {
    state = {
        timeOfTheDay: '',
        bloodSugar: null,
        insulinType1: '',
        units1: null,
        insulinType2: '',
        units2: null,
        insulinType3: '',
        units3: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateEntry(this.state)
        this.props.history.push('/')
    }

    render() {
        const { auth, entry } = this.props
        if (!auth.uid) return <Redirect to='/signin' />
        if (!entry) {
            return <div />
        }

        const insulinTypes = [ 'Apidra', 'Humalog', 'Injectables', 'Insulin NPH', 'Lantus', 'Levemir', 'Novolog', 'Acarbose (Precose)', 'Actoplus Met',
        'Actos', 'Amaryl', 'Diabeta', 'Duetact', 'Fortamet', 'Glucophage', 'Glucophage XR', 'Gluctrol', 'Glucotrol XL',
        'Glucovance', 'Glumetza', 'Glynase', 'Glyset', 'Janumet', 'Kombiglyze', 'Metaglip', 'Metformin', 'Micronase',
        'Onglyza', 'Prandimet', 'Prandin', 'Riomet', 'Starlix', 'Tradjenata', 'Welchol'];

        const timeOfDay = ['Before Breakfast', 'After Breakfast', 'Before Lunch', 'After Lunch', 'Before Dinner', 'After Dinner',
        'Before Bedtime', 'Random'];

        return (
            <div className="create-entry-div">
                <form className='entry-form' onSubmit={this.handleSubmit}>
                    <label htmlFor="timeOfTheDay">Time of the day</label>
                    <select value={entry.timeOfTheDay} type="text" id="timeOfTheDay" onChange={this.handleChange}>
                         <option value="" disabled selected>Select the time of the day</option>
                         {timeOfDay.map((time, i) =>
                             <option value={time} key={i}>{time}</option>
                        )}
                      </select>

                    <label htmlFor="bloodSugar">Blood Sugar</label>
                    <input value={entry.bloodSugar} type="input" id="bloodSugar" onChange={this.handleChange} placeholder="0" />

                    <label htmlFor="insulinType1">Medication 1</label>
                    <select value={entry.insulinType1} type="input" id="insulinType1" onChange={this.handleChange}>
                        <option value="" disabled selected>Select the type of insulin</option>
                        {insulinTypes.map((type, i) =>
                            <option value={type} key={i}>{type}</option>
                        )}
                    </select>

                    <label htmlFor="units1">Units</label>
                    <input value={entry.units1} type="input" id="units1" onChange={this.handleChange} placeholder="0" />

                    <label htmlFor="insulinType2">Medication 2</label>
                    <select value={entry.insulinType2} type="input" id="insulinType2" onChange={this.handleChange}>
                        <option value="" disabled selected>Select the type of insulin</option>
                        {insulinTypes.map((type, i) =>
                            <option value={type} key={i}>{type}</option>
                        )}
                    </select>
                
                    <label htmlFor="units2">Units</label>
                    <input value={entry.units2} type="input" id="units2" onChange={this.handleChange} placeholder="0"></input>

                    <label htmlFor="insulinType3">Medication 3</label>
                    <select value={entry.insulinType3} type="input" id="insulinType3" onChange={this.handleChange}>
                        <option value="" disabled selected>Select the type of insulin</option>
                        {insulinTypes.map((type, i) =>
                            <option value={type} key={i}>{type}</option>
                        )}
                    </select>
                
                    <label htmlFor="units3">Units</label>
                    <input value={entry.units3} type="input" id="units3" onChange={this.handleChange} placeholder="0"></input>

                    <button type="submit">Submit</button>
                    </form>
             </div>
        )
    }
}

const mapStateToProps = (state, ownParams) => {
    console.log(state)
    console.log(ownParams)
    const id = ownParams.match.params.id
    const entries = state.firestore.data.entries;
    const entry = entries ? entries[id] : null
    console.log(entry)
    return {
        entry: entry,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateEntry: (entry) => dispatch(updateEntry(entry))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'entries' }
    ])
)(EntryDetails);