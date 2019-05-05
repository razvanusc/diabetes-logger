import React, { Component } from 'react';

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
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <h5>Sign In</h5>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} placeholder="Email" />
                    </div>
                    <div>
                        <label htmlFor="password">Email</label>
                        <input type="password" id="password" onChange={this.handleChange} placeholder="Password" />
                    </div>
                    <div>
                        <button>Log In</button>
                    </div>
                </form>
             </div>
        )
    }
}

export default SignIn;
