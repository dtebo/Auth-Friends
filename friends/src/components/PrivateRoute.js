import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...props}) => {
    const token = localStorage.getItem('authToken');

    return(
        token ? (
            <Route path='/protected' {...props} />
        ) : (
            <Redirect to='/login' />
        )
    );
};

export default PrivateRoute;