import React from 'react';
import Banner from './Banner/Banner';
import BrandSection from './BrandSection/BrandSection';
import CustomerReviews from './CustomerReviews/CustomerReviews';
import DiscountSection from './DiscountSection/DiscountSection';
import GetService from './GetService/GetService';
import PopularService from './PopularService/PopularService';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <DiscountSection></DiscountSection>
            <PopularService></PopularService>
            <GetService></GetService>
            <CustomerReviews></CustomerReviews>
            <BrandSection></BrandSection>
        </main>
    );
};

export default Home;