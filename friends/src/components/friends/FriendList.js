import React, { Component } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import Friend from './Friend';

class FriendList extends Component {
    state = {
        friends: []
    };

    componentDidMount(){
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth()
            .get('/data')
            .then(res => {
                this.setState({
                    friends: res.data
                });
            })
            .catch(err => console.error('error: ', err.message));
    }

    render(){
        return(
            this.state.friends.length > 0 && this.state.friends.map(friend => {
                return <Friend key={friend.id} friend={friend} />
            })
        );
    }
};

export default FriendList;