import React, { Component } from 'react';
import './Logs.css'

class Logs extends Component {
    constructor() {
        super();
        this.state = {
            entries: [
                {
                    bloodSugar: 70,
                    medication1: "Apidra",
                    medication1Units: 10,
                    medication2: "Lantus",
                    medication2Units: 26,
                    timeOfTheDay: "Before Breakfast"
                },
                {
                    bloodSugar: 200,
                    medication1: "Apidra",
                    medication1Units: 20,
                    medication2: "Lantus",
                    medication2Units: 40,
                    timeOfTheDay: "Before Lunch"
                },
                {
                    bloodSugar: 270,
                    medication1: "Apidra",
                    medication1Units: 5,
                    medication2: "Lantus",
                    medication2Units: 50,
                    timeOfTheDay: "Before Breakfast"
                }
            ],
            insulinTypes: [ 'Apidra', 'Humalog', 'Injectables', 'Insulin NPH', 'Lantus', 'Levemir', 'Novolog', 'Acarbose (Precose)', 'Actoplus Met',
                        'Actos', 'Amaryl', 'Diabeta', 'Duetact', 'Fortamet', 'Glucophage', 'Glucophage XR', 'Gluctrol', 'Glucotrol XL',
                        'Glucovance', 'Glumetza', 'Glynase', 'Glyset', 'Janumet', 'Kombiglyze', 'Metaglip', 'Metformin', 'Micronase',
                        'Onglyza', 'Prandimet', 'Prandin', 'Riomet', 'Starlix', 'Tradjenata', 'Welchol'],
            timeOfDay: ['Before Breakfast', 'After Breakfast', 'Before Lunch', 'After Lunch', 'Before Dinner', 'After Dinner',
                        'Before Bedtime', 'Random']
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { entries } = this.state,
            time = this.refs.time.value,
            blood = this.refs.blood.value,
            med1 = this.refs.med1.value,
            units1 = this.refs.units1.value,
            med2 = this.refs.med2.value,
            units2 = this.refs.units2.value;
        this.setState({
            entries: [...entries, {
                bloodSugar: blood,
                medication1: med1,
                medication1Units:units1,
                medication2: med2,
                medication2Units: units2,
                timeOfTheDay: time
            }]
        }, () => {
            this.refs.blood.value = '';
            this.refs.med1.value = '';
            this.refs.units1.value = '';
            this.refs.med2.value = '';
            this.refs.units2.value = '';
        });
    }

    removeEntry = (e) => {
        console.log(e)
        this.setState(prevState => ({ entries: this.state.entries.filter(entry => entry !== e) }));
      }

    render() {
        const { entries, insulinTypes, timeOfDay } = this.state;

        return (
            <div className="logs" >
                <div className="container">
                    <div className="row">
                        {entries.map((entry, i) =>
                            <div className="col-xs-12 col-sm-4" key={i}>
                                <div className="card">
                                    <div className="card-description">
                                        <p>Time of day: {entry.timeOfTheDay}</p>
                                        <p>Blood sugar: {entry.bloodSugar} mg/dl</p>
                                        <p>Medication 1: {entry.medication1}</p>
                                        <p>Units: {entry.medication1Units}</p>
                                        <p>Medication 2: {entry.medication2}</p>
                                        <p>Units: {entry.medication2Units}</p>
                                        <button onClick={() => this.removeEntry(i)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    <form className="logs-form" onSubmit={this.handleSubmit}>
                        <select ref="time" placeholder="Time of the day">
                            <option value="" disabled selected>Select the time of the day</option>
                            {timeOfDay.map((time) =>
                                <option>{time}</option>
                            )}
                        </select>
                        <input type="input" ref="blood" placeholder="Blood sugar (mg/dl)"></input>
                        <select ref="med1" placeholder="Time of the day">
                            <option value="" disabled selected>Select the type of insulin</option>
                            {insulinTypes.map(type =>
                                <option>{type}</option>
                            )}
                        </select>
                        <input type="input" ref="units1" placeholder="Units"></input>
                        <select ref="med2" placeholder="Time of the day">
                            <option value="" disabled selected>Select the type of insulin</option>
                            {insulinTypes.map(type =>
                                <option>{type}</option>
                            )}
                        </select>
                        <input type="input" ref="units2" placeholder="Units"></input>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Logs;