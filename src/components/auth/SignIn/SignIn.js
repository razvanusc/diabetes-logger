import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import 'materialize-css/dist/css/materialize.min.css';


class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }

    render() {
        const { authError, auth } = this.props
        if (auth.uid) return <Redirect to='/dashboard' />

        return (
            <AuthForm 
                title = "Sign In"
                handleChange = {this.handleChange}
                handleSubmit = {this.handleSubmit}
                authError = {authError}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
