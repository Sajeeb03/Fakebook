import React from 'react';
import Post from '../../Media/Post';
import Posts from '../Posts/Posts';
import Status from '../Status/Status';

const Home = () => {
    return (
        <div>
            <Status />
            <Posts />
        </div>
    );
};

export default Home;