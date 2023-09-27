import React from 'react';
import './searchField.scss'

const SearchField = () => {
    return (
        <div className="search-field">
            <input className="search-field__input" type="text"/>
            <button className="search-field__btn">Show</button>
        </div>
    );
};

export default SearchField;
