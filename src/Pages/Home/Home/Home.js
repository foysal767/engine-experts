import React from 'react';
import Banner from './Banner/Banner';
import DiscountSection from './DiscountSection/DiscountSection';
import PopularService from './PopularService/PopularService';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <DiscountSection></DiscountSection>
            <PopularService></PopularService>
        </main>
    );
};

export default Home;