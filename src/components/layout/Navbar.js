import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return(
        <nav className="nav">
            <div>
                <Link to='/' className="nav-left">Diabetes Logger</Link>
            </div>

            <div className="nav-right">
                <SignedInLinks className="links"/>
                <SignedOutLinks className="links"/>
            </div>
        </nav>
    )
}

export default Navbar;