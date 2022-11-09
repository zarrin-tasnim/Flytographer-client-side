import React from 'react';
import Destinations from '../../Destinations/Destinations';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import useTitle from './../../../hook/useTitle';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Destinations></Destinations>
            <br/>
            <Services></Services>
        </div>
    );
};

export default Home;