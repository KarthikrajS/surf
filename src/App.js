/* eslint-disable spaced-comment */
import React from 'react';
import HomePage from './components/pages/HomePage';
// import LoginPage from './components/pages/Login Page';
import DashboardPage from './components/pages/DashBoardPage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
import PropTypes from 'prop-types';

const App = () =>
    (<div className="ui container">
        <GuestRoute path="/" exact component={HomePage} />
        <UserRoute path="/dashboard" exact component={DashboardPage} />
    </div>)

App.propTypes ={
    location: PropTypes.shape({
        pathname:PropTypes.string.isRequired
    }).isRequired
}

export default App;
