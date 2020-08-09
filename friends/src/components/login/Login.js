import React, { Component } from 'react';

import { axiosWithAuth } from '../../utils/axiosWithAuth';

import './Login.css';

class Login extends Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    }

    handleLogin = e => {
        e.preventDefault();

        axiosWithAuth()
            .post('/login', this.state.credentials)
            .then(res => {
                localStorage.setItem('authToken', res.payload);
                this.props.history.push('/protected');
            })
            .catch(err => {
                localStorage.removeItem('authToken');
            });
    }

    render(){
        return(
            <>
                <div className='form-container'>
                    <form onSubmit={this.handleLogin}>
                        <h1>Login</h1>
                        <section className='group'>
                            <input
                                type='text'
                                id='username'
                                name='username'
                                required
                                onChange={this.handleChange}
                                value={this.state.credentials.username}
                            />
                            <label htmlFor='username'>Username</label>
                        </section>
                        <section className='group'>
                            <input
                                type='password'
                                id='password'
                                name='password'
                                required
                                value={this.state.credentials.password}
                                onChange={this.handleChange}
                            />
                            <label htmlFor='password'>Password</label>
                        </section>
                        <button
                            type='submit'
                        >
                            Login
                        </button>
                    </form>
                </div>
            </>
        );
    }
};

export default Login;