import { Link } from "react-router-dom"

const LatestBlog = () => {
  return (
    <section className="my-16 md:px-16">
      <div className="flex flex-col md:flex-row lg:flex-row">
        <div className="leftBar basis-0"></div>
        <div className="latestMiddleBlog basis-12/12">
          <div className="text-white bg-black bg-[url('/public/assets/image-gallery/carbon_BG-20.png')] p-4 rounded-lg">
            <div className="flex flex-col md:flex-row justify-center md:justify-between text-2xl text-white font-bold">
              <div className="leftContent w-72">
                ENGINE OF THE WEEK LATEST POSTS
              </div>
              <div className="rightContent -ml-8 lg:mr-8">SEE ALL POSTS</div>
            </div>
            <hr className="text-2xl border-[#E92E3D] border-b-2 mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to="/performance">
                <div className="hover:bg-[#E92E3D] w-full md:w-72 rounded-md p-2">
                  <img
                    className="w-full md:w-72 rounded-lg cursor-pointer"
                    src="/assets/image-gallery/Performance-upgrade.jpg"
                    alt=""
                  />
                  <h2 className="text-xl text-white mt-2 font-semibold text-left cursor-pointer">
                    Performance-upgrade <br /> Engine
                  </h2>
                  <p className="text-white border border-white px-8 py-1 rounded-md w-48 mt-2">
                    Feb 10, 2023
                  </p>
                </div>
              </Link>

              <Link to="/paintingblog">
                <div className="hover:bg-[#E92E3D] w-full md:w-72 rounded-md p-2">
                  <img
                    className="w-full md:w-72 rounded-lg cursor-pointer"
                    src="/assets/image-gallery/Denting-&-Painting.jpg"
                    alt=""
                  />
                  <h2 className="text-xl text-white mt-2 font-semibold text-left cursor-pointer">
                    Denting-&-Painting <br /> Engine
                  </h2>
                  <p className="text-white border border-white px-8 py-1 rounded-md w-48 mt-2">
                    Feb 10, 2023
                  </p>
                </div>
              </Link>

              <Link to="/tyre">
                <div className="hover:bg-[#E92E3D] w-full md:w-72 rounded-md p-2">
                  <img
                    className="w-full md:w-72 rounded-lg cursor-pointer"
                    src="/assets/image-gallery/Tyre-&-Wheels.jpg"
                    alt=""
                  />
                  <h2 className="text-xl mt-2 text-white font-semibold text-left cursor-pointer">
                    Tyre-&-Wheels - 8567 <br /> Engine
                  </h2>
                  <p className="text-white border border-white px-8 py-1 rounded-md w-48 mt-2">
                    Feb 10, 2023
                  </p>
                </div>
              </Link>

              <Link to="/engineserviceblog">
                <div className="hover:bg-[#E92E3D] w-full md:w-72 rounded-md p-2">
                  <img
                    className="w-full md:w-72 rounded-lg cursor-pointer"
                    src="/assets/image-gallery/Engine-Service-&-Repair.jpg"
                    alt=""
                  />
                  <h2 className="text-xl mt-2 text-white hover:text-white font-semibold text-left cursor-pointer">
                    Engine-Service - 8567 <br /> Engine
                  </h2>
                  <p className="text-white border border-white px-8 py-1 rounded-md w-48 mt-2">
                    Feb 10, 2023
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="rightBar basis-0"></div>
      </div>
    </section>
  )
}

export default LatestBlog
