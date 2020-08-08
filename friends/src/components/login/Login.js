import React, { Component } from 'react';

class Login extends Component {
    handleChange(e){

    }

    handleSubmit(e){

    }

    render(){
        return(
            <>
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
            </>
        );
    }
};

export default Login;