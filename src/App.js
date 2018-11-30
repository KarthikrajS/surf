/* eslint-disable spaced-comment */
import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
// import LoginPage from './components/pages/Login Page';
import DashboardPage from './components/pages/DashBoardPage';



const App = () =>
    <div className="ui container">
        <Route path="/" exact component={HomePage} />
        {   /*<Route path ="/login" exact component={LoginPage}/>*/    }
        <Route path="/dashboard" exact component={DashboardPage} />
    </div>;

export default App;
