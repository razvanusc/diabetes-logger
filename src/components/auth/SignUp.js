import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authActions';
import './SignUp.css'

class SignUp extends Component {
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
        this.props.signUp(this.state)
    }

    render() {
        const { auth, authError } = this.props
        if (auth.uid) return <Redirect to='/' />

        return (
            <div className='signup-container'>
                <form className='signup-form' onSubmit={this.handleSubmit} >
                    <h5>Sign Up</h5>
                    <div className='input-field'>
                        <input type="email" id="email" onChange={this.handleChange} className='validate' />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className='input-field'>
                        <input type="password" id="password" onChange={this.handleChange} className='validate' />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className='input-field'>
                        <input type="text" id="firstName" onChange={this.handleChange} className='validate' />
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className='input-field'>
                        <input type="text" id="lastName" onChange={this.handleChange} className='validate' />
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                    <div>
                        <button className='signup-button'>Sign Up</button>
                        <div>
                            { authError ? <p>{authError}</p> : null }
                        </div>
                    </div>
                </form>
             </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
