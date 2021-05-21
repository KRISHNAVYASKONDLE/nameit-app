import React from 'react';
import './SearchBox.css';
const SearchBox = () => {
    return (
        <div className="search-container">
            <input
                onChange={(event) => console.log(event.target.value)}
                placeholder="Enter keys to search"
                className="search-input"
            />
        </div>
    );
};

export default SearchBox;
