import React, { Component } from 'react';
import EntryList from '../entries/EntryList'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
    render() {
        const { entries } = this.props

        return (
            <div className="container">
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
        entries: state.firestore.ordered.entries
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'entries' }
    ])
)(Dashboard);