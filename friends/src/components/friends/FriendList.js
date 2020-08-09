import React, { Component } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import Friend from './Friend';

import './Friend.css';

class FriendList extends Component {
    state = {
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
                    friends: res.data
                });
            })
            .catch(err => console.error('error: ', err.message));
    }

    render(){
        return(
            <>
                <h1>My Friends</h1>
                <div className='friend-list'>
                    {this.state.friends.length > 0 && this.state.friends.map(friend => {
                        return <Friend key={friend.id} friend={friend} />
                    })}
                </div>
            </>
        );
    }
};

export default FriendList;