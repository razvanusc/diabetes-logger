import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './SignedOutLinks.css';
import Logo from '../../assets/img/wideLogo.png';
import M from 'materialize-css';
import { Dropdown } from 'react-bootstrap';

class SignedOutLinks extends Component {
    componentDidMount() {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, { inDuration: 300, outDuration: 225, alignment: 'bottom' });
    }

    render() {
        return (
            <div className='links-list'>
                <div className='empty-links hidden-xs hidden-sm'>
                    <div className='signedout-links'>Sign upss</div>
                    <div className='signedout-links'>Sign In</div>
                </div>
                <div className='links-list-logo'>
                    <Link to='/' className="nav-left"><img src={Logo} alt='logo' /></Link>
                </div>
                <div className='links-list-links hidden-xs hidden-sm'>
                    <NavLink to='/signup' className='signedout-links'>Sign Up</NavLink>
                    <NavLink to='/signin' className='signedout-links'>Sign In</NavLink>
                </div>

                <div className='signedout-dropwdown hidden-md hidden-lg'>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <i class="fas fa-bars"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item className='dropdown-link' href="/signup">Sign Up</Dropdown.Item>
                            <Dropdown.Item className='dropdown-link' href="/signin">Sign In</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        )
    }
}

export default SignedOutLinks;