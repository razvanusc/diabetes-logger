import React from 'react';
import './AuthForm.css'

const AuthForm = (props) => {
    return (
        <div className='auth-container'>
        <form className='auth-form' onSubmit={props.handleSubmit} >
            <h5>{props.title}</h5>
            <div className='input-field'>
                <input type="email" id="email" onChange={props.handleChange} className='validate' />
                <label htmlFor="email">Email</label>
            </div>
            <div className='input-field'>
                <input type="password" id="password" onChange={props.handleChange} className='validate' />
                <label htmlFor="password">Password</label>
            </div>
            <div className='auth-button-error'>
                <button className='auth-button'>{props.title}</button>
                <div className='auth-error'>
                    { props.authError ? <p>{props.authError}</p> : null }
                </div>
            </div>
        </form>
     </div>
    )
}

export default AuthForm;