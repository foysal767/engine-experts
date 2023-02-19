const LatestBlog = () => {
  return (
    <section className="my-16">
      <div className="flex flex-col md:flex-row lg:flex-row">
        <div className="latestLeftBlog basis-1/12"></div>
        <div className="latestMiddleBlog basis-10/12">
          <div className="text-white bg-black bg-[url('/public/assets/image-gallery/carbon_BG-20.png')] p-4">
            <div className="flex flex-col md:flex-row justify-center md:justify-between text-2xl text-white font-bold">
              <div className="leftContent w-72">
                ENGINE OF THE WEEK LATEST POSTS
              </div>
              <div className="rightContent -ml-8">SEE ALL POSTS</div>
            </div>
            <hr className="text-2xl border-red-400 border-b-2 mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="hover:bg-red-400 w-72 rounded-md p-4">
                <img
                  className="w-72 rounded-lg cursor-pointer"
                  src="assets/image-gallery/Performance-upgrade.jpg"
                  alt=""
                />
                <h2 className="text-xl text-white mt-2 font-semibold text-left cursor-pointer">
                  Performance-upgrade <br /> Engine
                </h2>
                <p className="text-white bg-red-600 px-8 py-1 rounded-md w-48 mt-2">
                  Feb 10, 2023
                </p>
              </div>

              <div className="hover:bg-red-400 w-72 rounded-md p-4">
                <img
                  className="w-72 rounded-lg cursor-pointer"
                  src="assets/image-gallery/Denting-&-Painting.jpg"
                  alt=""
                />
                <h2 className="text-xl text-white mt-2 font-semibold text-left cursor-pointer">
                  Denting-&-Painting <br /> Engine
                </h2>
                <p className="text-white bg-red-600 px-8 py-1 rounded-md w-48 mt-2">
                  Feb 10, 2023
                </p>
              </div>

              <div className="hover:bg-red-400 w-72 rounded-md p-4">
                <img
                  className="w-72 rounded-lg cursor-pointer"
                  src="assets/image-gallery/Tyre-&-Wheels.jpg"
                  alt=""
                />
                <h2 className="text-xl mt-2 text-white font-semibold text-left cursor-pointer">
                  Tyre-&-Wheels - 8567 <br /> Engine
                </h2>
                <p className="text-white bg-red-600 px-8 py-1 rounded-md w-48 mt-2">
                  Feb 10, 2023
                </p>
              </div>

              <div className="hover:bg-red-400 w-72 rounded-md p-4">
                <img
                  className="w-72 rounded-lg cursor-pointer"
                  src="assets/image-gallery/Engine-Service-&-Repair.jpg"
                  alt=""
                />
                <h2 className="text-xl mt-2 text-white hover:text-white font-semibold text-left cursor-pointer">
                  Engine-Service - 8567 <br /> Engine
                </h2>
                <p className="text-white bg-red-600 px-8 py-1 rounded-md w-48 mt-2">
                  Feb 10, 2023
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="latestRightBlog basis-1/12"></div>
      </div>
    </section>
  )
}

export default LatestBlog
