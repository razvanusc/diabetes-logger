import React, { Component } from 'react';
import './CreateEntry.css';
import { createEntry} from '../../../store/actions/entryActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class CreateEntry extends Component {
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
        this.props.createEntry(this.state)
        this.props.history.push('/')
    }

    render() {
        const { auth } = this.props
        if (!auth.uid) return <Redirect to='/signin' />

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
                    <select type="text" id="timeOfTheDay" onChange={this.handleChange}>
                         <option value="" disabled selected>Select the time of the day</option>
                         {timeOfDay.map((time, i) =>
                             <option value={time} key={i}>{time}</option>
                        )}
                      </select>

                    <label htmlFor="bloodSugar">Blood Sugar</label>
                    <input type="input" id="bloodSugar" onChange={this.handleChange} placeholder="Blood sugar (mg/dl)" />

                    <label htmlFor="insulinType1">Medication 1</label>
                    <select type="input" id="insulinType1" onChange={this.handleChange}>
                        <option value="" disabled selected>Select the type of insulin</option>
                        {insulinTypes.map((type, i) =>
                            <option value={type} key={i}>{type}</option>
                        )}
                    </select>

                    <label htmlFor="units1">Units</label>
                    <input type="input" id="units1" onChange={this.handleChange} placeholder="Units" />

                    <label htmlFor="insulinType2">Medication 2</label>
                    <select type="input" id="insulinType2" onChange={this.handleChange}>
                        <option value="" disabled selected>Select the type of insulin</option>
                        {insulinTypes.map((type, i) =>
                            <option value={type} key={i}>{type}</option>
                        )}
                    </select>
                
                    <label htmlFor="units2">Units</label>
                    <input type="input" id="units2" onChange={this.handleChange} placeholder="Units"></input>

                    <label htmlFor="insulinType3">Medication 3</label>
                    <select type="input" id="insulinType3" onChange={this.handleChange}>
                        <option value="" disabled selected>Select the type of insulin</option>
                        {insulinTypes.map((type, i) =>
                            <option value={type} key={i}>{type}</option>
                        )}
                    </select>
                
                    <label htmlFor="units3">Units</label>
                    <input type="input" id="units3" onChange={this.handleChange} placeholder="Units"></input>

                    <button type="submit">Submit</button>
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
