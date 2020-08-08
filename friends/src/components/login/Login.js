import React, { Component } from 'react';

import './Login.css';

class Login extends Component {
    handleChange(e){

    }

    handleSubmit(e){

    }

    render(){
        return(
            <div className='wrapper'>
                <div className='form-container'>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor='username'>
                            Username:
                            <input
                                type='text'
                                onChange={this.handleChange}
                            />
                        </label>
                        <label htmlFor='password'>
                            Password:
                            <input
                                type='text'
                                onChange={this.handleChange}
                            />
                        </label>
                        <button
                            type='submit'
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }
};

export default Login;