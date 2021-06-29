import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { Apps } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

function Home() {
    return (
        <div>
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="/About">About</Link>
                    <Link to="/Store">Store</Link>
                </div>
                <div className="home__headerRight">
                    <Link to="/Gmail">Gmail</Link>
                    <Link to="/Images">Images</Link>
                    <Apps />
                    <Avatar />                   
                </div>
            </div>

            <div className="home__body">

            </div>
        </div>
    )
}

export default Home
