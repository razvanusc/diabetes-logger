import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './SignedOutLinks.css';
import Logo from '../../assets/img/wideLogo.png';

const SignedOutLinks = () => {
    return(
        <div className='links-list'>
            <div className='empty-links'>
                <div className='signedout-links'>Sign up</div>
                <div className='signedout-links'>Log In</div>
            </div>
            <div className='links-list-logo'>
                <Link to='/' className="nav-left"><img src={Logo} alt='logo' /></Link>
            </div>
            <div className='links-list-links'>
                <NavLink to='/signup' className='signedout-links'>Sign Up</NavLink>
                <NavLink to='/signin' className='signedout-links'>Log In</NavLink>
            </div>
        </div>
    )
}

export default SignedOutLinks;