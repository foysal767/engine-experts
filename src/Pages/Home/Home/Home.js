import React from 'react';
import Banner from './Banner/Banner';
import CustomerReviews from './CustomerReviews/CustomerReviews';
import DiscountSection from './DiscountSection/DiscountSection';
import PopularService from './PopularService/PopularService';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <DiscountSection></DiscountSection>
            <PopularService></PopularService>
            <CustomerReviews></CustomerReviews>
        </main>
    );
};

export default Home;