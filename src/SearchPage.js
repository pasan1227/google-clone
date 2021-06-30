import React from 'react';
import './SearchPage.css';
import { useStateValue } from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
import Response from './response';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();

    // LIVE API CALL
    // const { data } = useGoogleSearch(term); LIVE API

    const data = Response;

    console.log(data) 

    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <h1>{term}</h1>
            </div>
            <div className="searchPage__results">

            </div>
        </div>
    )
}

export default SearchPage
