const BlogServiceDetails = () => {
  return (
    <div>
      <div className="mb-10 flex flex-col text-gray-600">
        <h1 className="text-2xl text-center font-bold ">
          Blog Of How To Automotive Air Conditioning Works ?
        </h1>

        <img
          src="assets/engine-blog/air-engine/airEngine-1.jpg"
          className="w-full my-4 lg:w-1/2 mx-auto"
          alt=""
        />
        <p className="text-xl md:text-justify mt-2">
          When asked how car air conditioning systems work, most people would
          respond, “I don’t care how they work, I just want them to work!” While
          that may be a common response The air-conditioning system in a car
          works by manipulating refrigerant between a liquid and a gaseous
          state. As the refrigerant changes states, it absorbs heat and humidity
          from the vehicle and allows the system to give off cool, dry <br />
        </p>
        <div className="mt-2">
          <button className="border border-[#E92E3E] hover:bg-[#E92E3D] hover:text-white px-4 my-1 rounded-lg">
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlogServiceDetails
