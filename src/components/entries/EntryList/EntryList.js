import React from 'react';
import EntrySummary from '../EntrySummary/EntrySummary';
import { Link } from 'react-router-dom';
import './EntryList.css'

const EntryList = ({entries}) => {
    console.log(entries)
    return (
        <div className="entry-list">
            { entries && entries.map((entry, i) => 
                <Link to={'/entry/' + entry.id} key={i}>
                    <EntrySummary entry={entry} className='entry'/>
                </Link>
            )}
        </div>

    )
}

export default EntryList;