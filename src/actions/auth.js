/* eslint-disable import/extensions,linebreak-style */
import {USER_LOGGED_IN,USER_LOGGED_OUT} from '../types';
import api from '../api';

export const userLoggedIn = (user) =>({
    type:USER_LOGGED_IN,
    user
});

export const login = (credentials) => (dispatch) => api.user.login(credentials).then(user => {
   localStorage.surfJWT = user.token;
    dispatch(userLoggedIn(user));
});
export const userLoggedOut = () =>({
    type:USER_LOGGED_OUT
});
export const logout = () => (dispatch) =>  {
    localStorage.removeItem("surfJWT");
    dispatch(userLoggedOut());
};

export const signup = data => dispatch =>api.user.signup(data).then(user=> {
    localStorage.midoJWT= user.token;
    dispatch(userLoggedIn(user));
});
