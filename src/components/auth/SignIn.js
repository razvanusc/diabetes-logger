import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import './SignIn.css';
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
            <div className='signin-container'>
                <form className='signin-form' onSubmit={this.handleSubmit} >
                    <h5>Sign In</h5>
                    <div className='input-field'>
                        <input type="email" id="email" onChange={this.handleChange} className='validate' />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className='input-field'>
                        <input type="password" id="password" onChange={this.handleChange} className='validate' />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div>
                        <button className='signin-button'>Sign In</button>
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
    console.log(state)
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
