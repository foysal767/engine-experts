import React from 'react';
import Banner from './Banner/Banner';
import BrandSection from './BrandSection/BrandSection';
import CustomerReviews from './CustomerReviews/CustomerReviews';
import DiscountSection from './DiscountSection/DiscountSection';
import Gallery from './Gallery/Gallery';
import GetService from './GetService/GetService';
import OurTeam from './OurTeam/OurTeam';
import PopularService from './PopularService/PopularService';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <DiscountSection></DiscountSection>
            <PopularService></PopularService>
            <Gallery></Gallery>
            <OurTeam></OurTeam>
            <GetService></GetService>
            <CustomerReviews></CustomerReviews>
            <BrandSection></BrandSection>
        </main>
    );
};

export default Home;