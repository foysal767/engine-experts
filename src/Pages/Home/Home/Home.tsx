import React from 'react';
import Services from '../../Services/Services';
import AllEngineServices from './AllEngineServices/AllEngineServices';
import Banner from './Banner/Banner';
import BrandSection from './BrandSection/BrandSection';
import CustomerReviews from './CustomerReviews/CustomerReviews';
import DiscountSection from './DiscountSection/DiscountSection';
// import GetService from './GetService/GetService';
import OurTeam from './OurTeam/OurTeam';
import PopularService from './PopularService/PopularService';
import Video from './Video/Video';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <DiscountSection></DiscountSection>
            <Services></Services>
            <AllEngineServices></AllEngineServices>
            <Video></Video>
<<<<<<< HEAD
            <PopularService></PopularService>
=======
            {/* <Gallery></Gallery> */}
>>>>>>> 8d652c9372d1031012412378664552c3f1b10361
            <OurTeam></OurTeam>
            {/* <GetService></GetService> */}
            <CustomerReviews></CustomerReviews>
            <BrandSection></BrandSection>
        </main>
    );
};

export default Home;