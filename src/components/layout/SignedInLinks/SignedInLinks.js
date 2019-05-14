import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './SignedInLinks.css';
import { connect } from 'react-redux';
import { signOut } from '../../../store/actions/authActions';
import Logo from '../../../assets/img/wideLogo.png';

const SignedInLinks = (props) => {
    return(
        <div className='signedin-links-list'>
            <div className='link-add'><NavLink to='/add'><i className="fas fa-plus fa-2x"></i></NavLink></div>
            <div className='link-dashboard'><Link to='/dashboard' className="nav-left"><img src={Logo} alt='logo' /></Link></div>
            <div className='link-signout'><a onClick={props.signOut} href='/'>Log Out</a></div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);