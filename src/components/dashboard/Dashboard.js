import React, { Component } from 'react';
import EntryList from '../entries/EntryList'
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {

        const { entries } = this.props

        console.log("entries")

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
        entries: state.entry.entries
    }
}

export default connect(mapStateToProps)(Dashboard);