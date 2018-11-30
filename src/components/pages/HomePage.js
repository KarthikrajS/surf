/* eslint-disable linebreak-style */
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login,logout} from "../../actions/auth";
import LoginForm from "../forms/LoginForm";

class HomePage extends React.Component {

    submit = (data) => this.props.login(data).then(() => this.props.history.push("/dashboard"));
    render() {
        const {isAuthenticated,logout} = this.props;
        return (<div>
            <h1>HomePage</h1>
            {isAuthenticated ?<button onClick={()=>logout()}>Logout</button>:<div><LoginForm submit={this.submit}/></div>}
        </div>)
    }
}

HomePage.propTypes ={
    isAuthenticated: PropTypes.bool.isRequired,
    logout:PropTypes.func.isRequired,
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

export default connect(mapStateToProps,{login,logout})(HomePage);
