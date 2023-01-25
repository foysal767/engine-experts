import React from 'react';
import Services from '../../Services/Services';
import WorkingEnvironment from '../WorkingEnvironment/WorkingEnvironment';
import Banner from './Banner/Banner';
import Brand from './BrandSection/Brand';
import BrandSection from './BrandSection/BrandSection';
import CustomerReviews from './CustomerReviews/CustomerReviews';
import DiscountSection from './DiscountSection/DiscountSection';
import Gallery from './Gallery/Gallery';
import GetService from './GetService/GetService';
import OurTeam from './OurTeam/OurTeam';
import PopularService from './PopularService/PopularService';
import Video from './Video/Video';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <DiscountSection></DiscountSection>
            <PopularService></PopularService>
            <Services></Services>
            <Video></Video>
            <WorkingEnvironment></WorkingEnvironment>
            {/* <Gallery></Gallery> */}
            <OurTeam></OurTeam>
            {/* <GetService></GetService> */}
            <CustomerReviews></CustomerReviews>
            <Brand></Brand>
            {/* <BrandSection></BrandSection> */}
        </main>
    );
};

export default Home;