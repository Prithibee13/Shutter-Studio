import React from 'react';
import Banner from '../Banner/Banner';
import OtherServices from '../OtherServices/OtherServices';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <OtherServices></OtherServices>
        </div>
    );
};

export default Home;