
import React from 'react';
import NavBar from './NavBar.js';
import Logo from './Logo.js';
import Search from './Search.js';
import Products from './Product.js';
import Video from './Video.js';
import Map from './Map.js';
import Footer from './Footer.js';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Logo></Logo>
            <Search></Search>
            <Products></Products>
            <Video videoId='O-JXUhhIRHU'></Video>
            <Map></Map>
            <Footer></Footer>
        </div>
    );
}

export default Home;