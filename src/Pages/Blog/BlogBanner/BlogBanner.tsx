import { Link } from "react-router-dom"
import "./BlogBanner.css"

const BlogBanner = () => {
  return (
    <section className="banner md:h-[40vh]  w-[100%] lg:px-14 md:px-8 px-4 h-[70vh] lg:h-screen relative overflow-hidden text-start bg-[#19191B] bg-[url('/public/assets/image-gallery/carbon_BG-20.png')] mb-12 lg:mb-28">
      <div className="w-full h-full flex flex-col md:flex-row lg:flex-row justify-around">
        <div className="h-full w-full lg:w-[40%] flex flex-col items-center justify-center md:text-center lg:text-left">
          <h1 className="text-4xl lg:text-[3vw] lg:leading-[50px] font-semibold mb-6 text-[#FFFFFF] md:text-4xl ">
            Latest Blog Of Engine Expertise
          </h1>
          <p className="md:text-2xl text-lg">
            Blogs and Forums Don't forget to check out our forums for Lowrider
            Magazine and Lowrider Arte.
          </p>
          <div className="flex flex-col md:flex-row lg:flex-row gap-4">
            <div className="w-full flex items-start md:items-center md:ml-[550px] lg:ml-0">
              <Link to="/home">
                <button className="bannerBtn mt-6">Home</button>
              </Link>
            </div>
            <div className="w-full flex items-start md:items-center md:ml-[550px] lg:ml-0">
              <Link to="/home">
                <button className="bannerBtn mt-6">Blog</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[40%] lg:grid place-items-center justify-end h-full bannerCar">
          <div>
            <img className="" src="assets/blog/bannarBlog6.png" alt="" />
          </div>
          <div>
            <img
              className="absolute top-[41.6%] right-[25.7%] rotation  z-10 hidden lg:block"
              src="assets/circle4[90].png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogBanner
