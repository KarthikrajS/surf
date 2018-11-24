/* eslint-disable linebreak-style */
import React from 'react';
import LoginForm from '../forms/LoginForm';

class LoginPage extends React.Component {

    submit = (data) =>
        console.log(data);
        // this.props.login(data).then(() =>
        // this.props.history.push("/dashboard"));

    render() {
        return (<div>
            <h1>Login Page</h1>
            <LoginForm submit={this.submit}/>
        </div>)
    }
}

export default LoginPage;
