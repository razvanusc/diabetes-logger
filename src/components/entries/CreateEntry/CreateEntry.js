import React, { Component } from 'react';
import { createEntry } from '../../../store/actions/entryActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import M from 'materialize-css';
import EntryForm from '../EntryForm/EntryForm'
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
        var el = document.querySelectorAll('ul.tabs');
        M.Tabs.init(el);
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
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
        this.props.createEntry(this.state, this.props.auth.uid)
            this.props.history.push('/dashboard')
    }

    render() {
        const { auth } = this.props
        if (!auth.uid) return <Redirect to='/signin' />

        return(
            <EntryForm 
                handleChange={this.handleChange} 
                handleSubmit={this.handleSubmit} 
                handleDate={this.handleDate} 
                startDate={this.state.startDate}
            />
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
        createEntry: (entry, uid) => dispatch(createEntry(entry, uid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEntry);