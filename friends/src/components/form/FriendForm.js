import React, { Component } from 'react';

class FriendForm extends Component{
    state = {
        isEditing: false,
        values: {
            id: 0,
            name: '',
            age: 0,
            email: ''
        },
        error: ''
    };

    handleChange = e => {
        this.setState({
            ...this.state.values,
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
    }

    render(){
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <section className='group'>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={this.state.values.name}
                            onChange={this.handleChange}
                        />
                        <label htmlFor='name'>Name</label>
                    </section>
                    <section className='group'>
                        <input
                            type='text'
                            id='age'
                            name='age'
                            value={this.state.values.age}
                            onChange={this.handleChange}
                        />
                        <lable htmlFor='age'>Age</lable>
                    </section>
                    <section className='group'>
                        <input
                            type='text'
                            id='email'
                            name='email'
                            value={this.state.values.email}
                            onChange={this.handleChange}
                        />
                        <lable htmlFor='email'>Email</lable>
                    </section>
                    <button
                        type='submit'
                    >
                        {this.state.isEditing ? 'Update' : 'Add'}
                    </button>
                </form>
            </>
        )
    }
}

export default FriendForm