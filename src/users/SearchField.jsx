import React, {useState} from 'react';
import {connect} from "react-redux";
import * as usersActions from './users.actions'
import './searchField.scss'
import PropTypes from "prop-types";

const SearchField = ({ getUserData }) => {
    const [inputText, setInputText] = useState('')

    const onChange = (event) => {
        setInputText(event.target.value)
    }

    const handleUserSearch = () => {
        getUserData(inputText)
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
    getUserData: PropTypes.func.isRequired
}

const mapDispatch = {
    getUserData: usersActions.getUserData,
}

export default connect(null, mapDispatch)(SearchField);
