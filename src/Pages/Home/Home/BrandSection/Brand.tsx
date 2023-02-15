const Brand = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 mb-12 lg:mb-28">
      <div className="lg:flex lg:hover:border-l-4 transition-all duration-100 lg:hover:border-red-600">
        <div className="bg-[#19191B] bg-[url('/public/assets/image-gallery/carbon_BG-20.png')] lg:w-1/2 h-[250px] text-left">
          <div className="lg:ml-20 lg:pt-14 ml-5 pt-5">
            <h2 className="text-2xl font-bold">Brand We Trust</h2>
            <p className="text-sm text-gray-400">
              We carry over 100 of the world's highest quality aumotive parts.
            </p>
            <p className="my-4 text-red-600 font-bold">Our Brands</p>
            <div className="flex space-x-5">
              <img
                className="w-1/12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300"
                src="/assets/brand-1.png"
                alt=""
              />
              <img
                className="w-1/12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300"
                src="/assets/brand-2.png"
                alt=""
              />
              <img
                className="w-1/12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300"
                src="/assets/brand-3.png"
                alt=""
              />
              <img
                className="w-1/12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300"
                src="/assets/brand-4.png"
                alt=""
              />
              <img
                className="w-1/12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300"
                src="/assets/brand-7.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="bg-red-600 lg:w-1/2 h-[250px] text-left">
          <div className="lg:pl-10 lg:pt-10 pl-3 pt-3">
            <p>Subscrive Our Engine Experts</p>
            <h2 className="text-2xl font-bold">
              Get The Latest News &<br /> Amazing Offers
            </h2>
            <input
              type="text"
              placeholder="Type here"
              className="input rounded-none input-bordered w-full max-w-xs bg-white text-black font-bold"
            />
            <button className="btn bg-black rounded-none border-none">
              Subscribe
            </button>
            <p className="text-sm">We don't send spam message</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brand
