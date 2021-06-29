import { Mic, SearchTwoTone } from '@material-ui/icons';
import React from 'react';
import './Search.css';

function Search() {
    return (
        <div className="search">
            <div className="search__input">
                <SearchTwoTone className="search__inputIcon" />
                <input />
                <Mic />
            </div>
        </div>
    )
}

export default Search
