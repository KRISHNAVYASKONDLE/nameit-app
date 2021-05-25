import React, { useState } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import Header from '../Header/Header';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

const App = () => {
    const [headerText, setHeaderText] = useState('Search Domains!');
    const [headerExpanded, setHeaderExpanded] = useState(true);
    const [suggestedNames, setsuggestedNames] = useState([]);

    const handleInputChange = (inputText) => {
        setHeaderExpanded(!inputText);
        setsuggestedNames(inputText ? name(inputText) : []);
    };

    return (
        <div>
            <Header headerExpanded={headerExpanded} headTitle={headerText} />
            <SearchBox onInputChange={handleInputChange} />
            <ResultsContainer suggestedNames={suggestedNames} />
        </div>
    );
};
export default App;
