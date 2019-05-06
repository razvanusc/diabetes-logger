import React from 'react';
import EntrySummary from '../EntrySummary/EntrySummary';
import { Link } from 'react-router-dom';

const EntryList = ({entries}) => {
    console.log(entries)
    return (
        <div className="entry-list">
            { entries && entries.map((entry, i) => 
                <Link to={'/entry/' + entry.id}>
                    <EntrySummary entry={entry} key={i} />
                </Link>
            )}
        </div>

    )
}

export default EntryList;