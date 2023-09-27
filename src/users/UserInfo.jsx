import React from 'react';
import './userInfo.scss'
import {connect} from "react-redux";
import {isFetchingSelector, userDataSelector} from "./users.selectors";
import Spinner from './Spinner.jsx'
import PropTypes from "prop-types";


const UserInfo = ({ userData, isFetching }) => {
    if (isFetching) {
        return <Spinner />
    }

    if (!userData) {
        return null
    }

    const { avatar_url, name, location } = userData
    return (
        <div className="user-info">
            <img className="user-info__avatar" src={avatar_url} alt="user avatar"/>
            <div className="user-info__description">
                <span className="user-info__name">{name}</span>
                <span className="user-info__location">{location}</span>
            </div>
        </div>
    );
};

UserInfo.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    userData: PropTypes.shape()
}

UserInfo.defaultValue = {
    userData: null
}

const mapState = (state) => {
    return {
        isFetching: isFetchingSelector(state),
        userData: userDataSelector(state)
    }
}

export default connect(mapState)(UserInfo);
