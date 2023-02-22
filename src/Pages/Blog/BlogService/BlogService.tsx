import "./BlogService.css"
const BlogService = () => {
  return (
    <section className="my-16 px-16">
      <div className="flex flex-col md:flex-row text-gray-400 gap-8">
        <div className="background sideBar basis-3/12 p-4 rounded-lg">
          <h1 className="text-2xl text-center text-white font-bold mb-4">
            Popular Servicing
          </h1>

          <div className="animated flex flex-col md:flex-row lg:flex-row gap-2 justify-center items-center mb-10 p-2 cursor-pointer rounded-lg hover:border-2 hover:border-red-200 text-white hover:font-bold">
            <h1 className="w-full md:w-8/12">
              How Evac Air Conditioning Works?
            </h1>
            <img
              src="assets/engine-blog/air-engine/airEngine-5.jpg"
              className="w-full md:w-4/12 my-2 rounded-lg"
              alt=""
            />
          </div>

          <div className="animated flex flex-col md:flex-row lg:flex-row gap-2 justify-center items-center mb-10 p-2 cursor-pointer rounded-lg hover:border-2 hover:border-red-200 text-white hover:font-bold">
            <h1 className="w-full md:w-8/12">Expansion Valve System</h1>
            <img
              src="assets/engine-blog/air-engine/airEngine-6.jpg"
              className="w-full md:w-4/12 my-2 rounded-lg"
              alt=""
            />
          </div>

          <div className="animated flex flex-col md:flex-row lg:flex-row gap-2 justify-center items-center mb-10 p-2 cursor-pointer rounded-lg hover:border-2 hover:border-red-200 text-white hover:font-bold ">
            <h1 className="w-full md:w-8/12">Orifice Tube system</h1>
            <img
              src="assets/engine-blog/air-engine/airEngine-7.jpg"
              className="w-full md:w-4/12 my-2 rounded-lg"
              alt=""
            />
          </div>

          <div className="animated flex flex-col md:flex-row lg:flex-row gap-2 justify-center items-center mb-10 p-2 cursor-pointer rounded-lg hover:border-2 hover:border-red-200 text-white hover:font-bold ">
            <h1 className="w-full md:w-8/12">A/C Components Description</h1>
            <img
              src="assets/engine-blog/air-engine/airEngine-8.jpg"
              className="w-full md:w-4/12 my-2 rounded-lg"
              alt=""
            />
          </div>
        </div>

        <div className="middleBar basis-7/12">
          <div className="mb-10 flex flex-col text-gray-600">
            <h1 className="text-2xl text-center md:text-left font-bold ">
              Blog Of How To Automotive Air Conditioning Works ?
            </h1>

            <img
              src="assets/engine-blog/air-engine/airEngine-1.jpg"
              className="w-full my-2"
              alt=""
            />
            <p className="text-xl md:text-justify mt-2">
              When asked how car air conditioning systems work, most people
              would respond, “I don’t care how they work, I just want them to
              work!” While that may be a common response The air-conditioning
              system in a car works by manipulating refrigerant between a liquid
              and a gaseous state. As the refrigerant changes states, it absorbs
              heat and humidity from the vehicle and allows the system to give
              off cool, dry <br />
            </p>
            <div className="justify-end items-end">
              <button className="border border-[#E92E3E] px-4 my-1 rounded-lg">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="rightBar basis-2/12"></div>
      </div>
    </section>
  )
}

export default BlogService
