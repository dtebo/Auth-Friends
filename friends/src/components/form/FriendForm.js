import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import { axiosWithAuth } from '../../utils/axiosWithAuth';

class FriendForm extends Component{
    state = {
        isEditing: false,
        values: {
            id: null,
            name: '',
            age: 0,
            email: ''
        },
        error: ''
    };

    componentDidMount(){
        const { id } = this.props.match.params;
        
        if(id){
            //We are attempting to edit, set the isEditing flag
            this.setState({
                ...this.state,
                isEditing: true
            });

            axiosWithAuth()
                .get(`/friends/${id}`)
                .then(res => {
                    console.log('from friend form: ', res.data);

                    this.setState({
                        ...this.state,
                        values: {
                            ...res.data
                        }
                    })
                })
                .catch(err => {
                    console.error('error: ', err.message);
                });
        }
    }

    handleChange = e => {
        this.setState({
            values: {
                ...this.state.values,
                id: Date.now(),
                [e.target.name]: e.target.name === 'age' ? parseInt(e.target.value) : e.target.value
            }
        });
    }

    handleSubmit = e => {
        e.preventDefault();

        if(this.state.isEditing){
            axiosWithAuth()
                .put(`/friends/${this.state.values.id}`, this.state.values)
                .then(res => {
                    console.log('from friend form handleSubmit: ', res.data);
                })
                .catch(err => {
                    console.error('error: ', err.message);
                });
        }
        else{
            axiosWithAuth()
                .post('/friends', this.state.values)
                .then(res => {
                    console.log(res.data);

                    this.props.history.push('/protected');
                })
                .catch(err => {
                    console.error('error: ', err.message);
                });
        }
    }

    render(){
        return(
            <div className='form-container'>
                <form onSubmit={this.handleSubmit}>
                    <section className='group'>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            required
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
                            required
                            value={this.state.values.age}
                            onChange={this.handleChange}
                        />
                        <label htmlFor='age'>Age</label>
                    </section>
                    <section className='group'>
                        <input
                            type='text'
                            id='email'
                            name='email'
                            required
                            value={this.state.values.email}
                            onChange={this.handleChange}
                        />
                        <label htmlFor='email'>Email</label>
                    </section>
                    <button
                        className='app-button'
                        type='submit'
                    >
                        {this.state.isEditing ? 'Update' : 'Add'}
                    </button>
                </form>
            </div>
        )
    }
}

export default withRouter(FriendForm)