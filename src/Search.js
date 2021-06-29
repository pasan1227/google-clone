import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { Mic, SearchTwoTone } from '@material-ui/icons';
import './Search.css';
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


function Search({ hideButtons = false }) {
    const [{}, dispatch] = useStateValue("");

    const [input, setInput] = useState("");
    const history = useHistory();

    const search = e => {
        e.preventDefault();

        console.log('You hit search button >>> ', input);

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push('/search')
    };

    return (
        <form className="search">
            <div className="search__input">
                <SearchTwoTone className="search__inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <Mic />
            </div>

            {!hideButtons ? (
                <div className="search__buttons">
                    <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ): (
                <div className="search__buttons">
                    <Button className="search__buttonsHidden" type="submit" onClick={search} variant="outlined">Google Search</Button>
                    <Button className="search__buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
                </div>
            )}
            
        </form>
    )
}

export default Search
