import React, {useState} from 'react';
import {connect} from "react-redux";
import * as usersActions from './users.actions'
import './searchField.scss'
import PropTypes from "prop-types";
import {fetchUserData} from "./users.gateway";

const SearchField = ({ showSpinner, userDataReceived }) => {
    const [inputText, setInputText] = useState('')

    const onChange = (event) => {
        setInputText(event.target.value)
    }

    const handleUserSearch = () => {
        showSpinner()
        fetchUserData(inputText)
            .then(userData => {
                userDataReceived(userData)
            })
        setInputText('')
    }

    const _handleInputKeyDown = e => {
        if (e.key === 'Enter') {
            handleUserSearch()
        }
    }

    return (
        <div className="search-field">
            <input
                className="search-field__input"
                type="text"
                value={inputText}
                onChange={onChange}
                onKeyDown={_handleInputKeyDown}
            />
            <button
                className="search-field__btn"
                onClick={handleUserSearch}
            >
                Show
            </button>
        </div>
    );
};

SearchField.propTypes = {
    showSpinner: PropTypes.func.isRequired,
    userDataReceived: PropTypes.func.isRequired,
}

const mapDispatch = {
    showSpinner: usersActions.showSpinner,
    userDataReceived: usersActions.userDataReceived,
}

export default connect(null, mapDispatch)(SearchField);
