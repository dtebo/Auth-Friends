import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import Friend from './Friend';

import './Friend.css';

class FriendList extends Component {
    state = {
        isLoading: true,
        friends: []
    };

    componentDidMount(){
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                this.setState({
                    isLoading: false,
                    friends: res.data
                });
            })
            .catch(err => console.error('error: ', err.message));
    }

    render(){
        return(
            <>
                <h1>My Friends</h1>
                {this.state.isLoading ? (
                    <h3>Loading...</h3>
                ) : (
                    <>
                        <div className='friend-list'>
                            {this.state.friends.length > 0 && this.state.friends.map(friend => {
                                return <Friend key={friend.id} friend={friend} />
                            })}
                        </div>
                        <button><Link to='/friends/form'>Edit Friends</Link></button>
                    </>
                )}
            </>
        );
    }
};

export default FriendList;