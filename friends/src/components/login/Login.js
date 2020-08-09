import React, { Component } from 'react';

import './Login.css';

class Login extends Component {
    handleChange(e){

    }

    handleSubmit(e){

    }

    render(){
        return(
            <>
                <div className='form-container'>
                    <form onSubmit={this.handleSubmit}>
                        <h1>Login</h1>
                        <section className='group'>
                            <input
                                type='text'
                                id='username'
                                name='username'
                                required
                                onChange={this.handleChange}
                            />
                            <label htmlFor='username'>Username</label>
                        </section>
                        <section className='group'>
                            <input
                                type='password'
                                id='password'
                                required
                                password='password'
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