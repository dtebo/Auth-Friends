import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import FriendList from './components/friends/FriendList';
import Login from './components/login/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute path='/protected' component={FriendList} />
        <Route path='/login' component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
