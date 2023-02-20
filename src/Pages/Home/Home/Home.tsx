import Services from "../../Services/Services"
import WorkingEnvironment from "../WorkingEnvironment/WorkingEnvironment"
import Banner from "./Banner/Banner"
import Brand from "./BrandSection/Brand"
// import BrandSection from './BrandSection/BrandSection';
import CustomerReviews from "./CustomerReviews/CustomerReviews"
import DiscountSection from "./DiscountSection/DiscountSection"
import EngineExperties from "./EnginrExperties/EngineExperties"
import GetInTouch from "./GetInTouch/GetInTouch"
import PopularService from "./PopularService/PopularService"
import Video from "./Video/Video"

const Home = () => {
  return (
    <main>
      <Banner></Banner>
      <DiscountSection></DiscountSection>
      <PopularService></PopularService>
      <Services></Services>
      <Video></Video>
      <WorkingEnvironment></WorkingEnvironment>
      <EngineExperties></EngineExperties>
      <GetInTouch></GetInTouch>
      <CustomerReviews></CustomerReviews>
      <Brand></Brand>
    </main>
  )
}

export default Home
