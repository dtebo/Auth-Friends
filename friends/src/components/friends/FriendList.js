import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

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

        //Remove the authorization token
        localStorage.removeItem('authToken');

        //Return to the login page
        this.props.history.push('/login');
    }

    getFriends = () => {
        //Get our friends list
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
                    id='menu-button'
                    aria-controls='account-menu'
                    aria-haspopup='true'
                    size='large'
                    onClick={this.handleClick}
                >
                    <MUI.Icon >menu</MUI.Icon>
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
                <div className='title'>
                    <h1>My Friends</h1>
                </div>
                {this.state.isLoading ? (
                    <div className='loading'>
                        <h3>Loading...</h3>
                    </div>
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

export default withRouter(FriendList);