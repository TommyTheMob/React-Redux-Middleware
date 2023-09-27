import React from 'react';
import './spinner.scss'

const Spinner = () => {
    return (
        <>
            <div className="spinner-container">
                <div className="lds-dual-ring"></div>
            </div>
        </>
    );
};

export default Spinner;
