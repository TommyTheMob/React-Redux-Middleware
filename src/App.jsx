import React from "react";
import UserInfo from './users/UserInfo.jsx'
import SearchField from './users/SearchField.jsx'

const App = () => {
    return (
        <div className="page">
            <UserInfo />
            <SearchField />
        </div>
    )
}

export default App