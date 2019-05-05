import React from 'react';
import { NavLink } from 'react-router-dom';
import './SignedInLinks.css';

const SignedInLinks = () => {
    return(
        <ul className='links-list'>
            <li><NavLink to='/add'>New Entry</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/'>RU</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;