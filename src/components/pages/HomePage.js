/* eslint-disable linebreak-style */
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login,logout,signup} from "../../actions/auth";
import LoginForm from "../forms/LoginForm";
import SignupForm from '../forms/SignupForm';


class HomePage extends React.Component {

    loginSubmit = (data) => this.props.login(data).then(() => this.props.history.push("/dashboard"));
    signupSubmit = (data) => this.props.signup(data).then(() => this.props.history.push("/dashboard"));
    render() {
        const {isAuthenticated,logout} = this.props;
        return (<div>
            <h1>HomePage</h1>
            {isAuthenticated ?<button onClick={()=>logout()}>Logout</button>:<div><LoginForm submit={this.loginSubmit}/>
                <Link to="forgot_password">Forgot Password</Link>
            <SignupForm submit={this.signupSubmit}/></div>}
        </div>)
    }
}

HomePage.propTypes ={
    isAuthenticated: PropTypes.bool.isRequired,
    logout:PropTypes.func.isRequired,
    signup:PropTypes.func.isRequired,
    login:PropTypes.func.isRequired,
            history: PropTypes.shape({
        push:PropTypes.func.isRequired
    }).isRequired
};

function mapStateToProps(state){
    return{
        isAuthenticated : !!state.user.token
    }
}

export default connect(mapStateToProps,{login,logout,signup})(HomePage);
