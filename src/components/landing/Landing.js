import React from 'react';
import './Landing.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Landing = (props) => {
    if (props.auth.uid) return <Redirect to='/dashboard' />

    return (
        <div className="banner">
            <div className="banner-content">
                <h1>Diabetes Logs</h1>
                <p>Track easily your blood sugar levels and insulin</p>
                <Link to='/signup' className="banner-button-signup">Sign Up</Link>
                <Link to='/signin' className="banner-button-login">Log In</Link>
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