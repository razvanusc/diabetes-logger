import React, { Component } from 'react';
import EntryList from '../entries/EntryList/EntryList'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import './Dashboard.css'

class Dashboard extends Component {
    render() {
        const { auth, entries } = this.props
        if (!auth.uid) return <Redirect to='/' />

        console.log(entries)

        return (
            <div className="container-dashboard">
                <div className="row">
                    <div className="col-xs-12 col-sm-12">
                        <EntryList entries={entries} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        entries: state.firestore.ordered.entries,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => [
        {
            where: ['creatorId', '==', props.auth.uid],
            orderBy: ['startDate', 'desc'],
            collection: 'entries',
        }
    ])
)(Dashboard);