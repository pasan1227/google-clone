import React from 'react';
import './SearchPage.css';
import { useStateValue } from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
import Response from './response';
import { Link } from 'react-router-dom';
import Search from './Search';
import { Description, Image, LocalOfferTwoTone, MoreVertTwoTone, Room, SearchTwoTone } from '@material-ui/icons';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();

    // LIVE API CALL
    // const { data } = useGoogleSearch(term); LIVE API

    const data = Response;

    console.log(data) 

    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                    <img
                        className="searchPage__logo"
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                        alt=""
                    />
                </Link>
                <div className="searchPage__headerBody">
                    <Search hideButtons />
                    <div className="searchPage__options">

                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <SearchTwoTone />
                                <Link to="/all">All</Link>
                            </div>

                            <div className="searchPage__option">
                                <Description />
                                <Link to="/news">News</Link>
                            </div>

                            <div className="searchPage__option">
                                <Image />
                                <Link to="/images">Images</Link>
                            </div>

                            <div className="searchPage__option">
                                <LocalOfferTwoTone />
                                <Link to="/shopping">shopping</Link>
                            </div>

                            <div className="searchPage__option">
                                <Room />
                                <Link to="/maps">maps</Link>
                            </div>

                            <div className="searchPage__option">
                                <MoreVertTwoTone />
                                <Link to="/more">more</Link>
                            </div>
                        </div>

                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option">
                                <Link to="/settings">Settings</Link>
                            </div>

                            <div className="searchPage__option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <div className="searchPage__results">

            </div>
        </div>
    )
}

export default SearchPage
