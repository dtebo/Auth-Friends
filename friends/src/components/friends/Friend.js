import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { axiosWithAuth } from '../../utils/axiosWithAuth';

import * as MUI from '../../materialUI/index';

const Friend = props => {
    const { friend } = props;

    const handleDelete = e => {
        e.preventDefault();

        axiosWithAuth()
            .delete(`/friends/${friend.id}`)
            .then(res => {
                console.log(res.data);

                props.history.push('/login');
            })
            .catch(err => {
                console.error('error: ', err.message);
            });
    };

    return (
        <>
            <div className='friend-card'>
                <MUI.Button
                    className='delete-button small-button'
                    onClick={handleDelete}
                >
                    <MUI.Icon>
                        delete
                    </MUI.Icon>
                </MUI.Button>
                <h3>{friend.name}</h3>
                <p>Age: {friend.age}</p>
                <p>Email: {friend.email}</p>
            </div>
            <MUI.Button
                className='app-button'
                component={Link}
                to={`/friends/form/${friend.id}`}
            >
                Edit
            </MUI.Button>
        </>
    );
};

export default withRouter(Friend);