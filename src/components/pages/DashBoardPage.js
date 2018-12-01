/* eslint-disable linebreak-style */
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ConfirmEmailMessage from '../messages/confirmEmailMessage';



class DashBoardPage extends React.Component {

    render() {
        const {isConfirmed} = this.props;
        return (<div>
            {console.log(isConfirmed)}
            {!isConfirmed && <ConfirmEmailMessage />}
        </div>)
    }
}
DashBoardPage.propTypes = {
    isConfirmed : PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        isConfirmed: !!state.user.confirmed
    }
}

export default connect(mapStateToProps)(DashBoardPage);