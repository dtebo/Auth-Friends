import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as MUI from '../../materialUI/index';

import { axiosWithAuth } from '../../utils/axiosWithAuth';

import Friend from './Friend';

import './Friend.css';

class FriendList extends Component {
    state = {
        anchorEl: null,
        isLoading: true,
        friends: []
    };

    componentDidMount(){
        this.getFriends();
    }

    handleClick = e => {
        this.setState({
            ...this.state,
            anchorEl: e.currentTarget
        });
    }

    handleClose = e => {
        this.setState({
            ...this.state,
            anchorEl: null
        });
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
                <MUI.Button
                    aria-control='account-menu'
                    aria-haspopup='true'
                    onClick={this.handleClick}
                >
                    Open Menu
                </MUI.Button>
                <MUI.Menu
                    id='account-menu'
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                >
                    <MUI.MenuItem
                        onClick={this.handleClose}
                    >
                        Logout
                    </MUI.MenuItem>
                </MUI.Menu>
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
                        <MUI.Button
                            className='app-button'
                            component={Link}
                            to='/friends/form'
                        >
                            Edit Friends
                        </MUI.Button>
                    </>
                )}
            </>
        );
    }
};

export default FriendList;