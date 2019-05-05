import React from 'react';
import { NavLink } from 'react-router-dom';
// import './SignedOutLinks.css';

const SignedOutLinks = () => {
    return(
        <ul className='links-list flex'>
            <li><NavLink to='/signup'>Sign Up</NavLink></li>
            <li><NavLink to='/signin'>Log In</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks;