/* eslint-disable linebreak-style */
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// import {Button} from 'semantic-ui-react';

const HomePage =({isAuthenticated}) =>(
<div>
    <h1>HomePage</h1>
    {console.log(isAuthenticated)}
    {isAuthenticated ?<button>Logout</button>:<Link  to="/login">Login</Link>}
</div>
);

HomePage.propTypes ={
    isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state){
    return{
        isAuthenticated : !!state.user.token
    }
}

export default connect(mapStateToProps)(HomePage);
