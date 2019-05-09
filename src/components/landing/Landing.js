import React from 'react';
import './Landing.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Landing = (props) => {
    if (props.auth.uid) return <Redirect to='/' />

    return (
        <div className="banner">
            <div className="banner-content">
                <h1>Diabetes Logger</h1>
                <p>Easily track your blood sugar levels and insulin</p>
                <Link to='/signup' className="banner-button">Sign Up</Link>
                <Link to='/signin' className="banner-button1">Log In</Link>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Landing);