import React, { Component } from 'react';
import EntryList from '../entries/EntryList'

class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12" key={i}>
                        <EntryList />
                    </div>
                </div>
            </div>
        )
    }
}