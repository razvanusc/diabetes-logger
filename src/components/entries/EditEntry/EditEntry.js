import React, { Component } from 'react';
import { updateEntry } from '../../../store/actions/entryActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import M from 'materialize-css';
import EntryForm from '../EntryForm/EntryForm'
import 'materialize-css/dist/css/materialize.min.css';
import 'react-datepicker/dist/react-datepicker.css';

class EntryDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidUpdate() {
        const { entry } = this.props
        function isEmpty(obj) {
            for (let key in obj) {
                if (obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }

        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
        M.updateTextFields();
        var el = document.querySelectorAll('ul.tabs');
        M.Tabs.init(el);

        if (isEmpty(this.state)) {
            this.setState({ ...entry })
        } else {
            return this.state
        }
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
        const id = this.props.match.params.id
        this.props.updateEntry(this.state, id)
        this.props.history.push('/dashboard')
    }

    render() {
        const { auth, entry } = this.props
        if (!auth.uid) return <Redirect to='/signin' />
        if (!entry) {
            return <div />
        }

        return (
            <EntryForm 
                handleChange={this.handleChange} 
                handleSubmit={this.handleSubmit} 
                handleDate={this.handleDate} 
                entry={entry}
            />
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