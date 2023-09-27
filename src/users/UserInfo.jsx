import React from 'react';
import './userInfo.scss'

const UserInfo = ( {userData} ) => {
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

export default UserInfo;
