import React from 'react';
import { Link } from 'react-router-dom';

import * as MUI from '../../materialUI/index';

const Friend = props => {
    const { friend } = props;

    return (
        <>
            <div className='friend-card'>
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

export default Friend;