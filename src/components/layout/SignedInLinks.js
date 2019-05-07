import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './SignedInLinks.css';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import Logo from '../../assets/img/wideLogo.png';

const SignedInLinks = (props) => {
    return(
        <div className='link-list'>
            <div className='link-list-item2'><NavLink to='/add'><i className="fas fa-plus fa-2x"></i></NavLink></div>
            <div className='link-list-item'><Link to='/' className="nav-left"><img src={Logo} alt='logo' /></Link></div>
            <div className='link-list-item1'><a onClick={props.signOut}>Log Out</a></div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);