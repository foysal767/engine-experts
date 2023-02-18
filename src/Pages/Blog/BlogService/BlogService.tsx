import "./BlogService.css"
const BlogService = () => {
  return (
    <section className="my-16 px-10">
      <div className="flex flex-col md:flex-row text-gray-400 gap-8">
        <div className="sideBar basis-3/12">
          <h1 className="text-2xl text-center text-gray-800 font-bold mb-4">
            Popular Servicing
          </h1>

          <div className="mb-10 border border-gray-500 p-4 rounded-lg cursor-pointer">
            <h1 className="text-gray-600">
              How Automotive Air Conditioning Works?
            </h1>
            <img
              src="assets/engine-blog/air-engine/airEngine-5.jpg"
              className="animated w-full my-4 rounded-lg"
              alt=""
            />
            <p className="text-gray-600 mb-4">
              The air-conditioning system in a car works by manipulating
              refrigerant between a liquid and a gaseous state....
            </p>
          </div>

          <div className="mb-10 border border-gray-500 p-4 rounded-lg cursor-pointer">
            <h1 className="text-gray-600">Expansion Valve System?</h1>
            <img
              src="assets/engine-blog/air-engine/airEngine-6.jpg"
              className="animated w-full my-4 rounded-lg"
              alt=""
            />
            <p className="text-gray-600 mb-4">
              Expansion valves are devices used to control the refrigerant flow
              in a refrigeration system. They help to facilitate....
            </p>
          </div>

          <div className="mb-10 border border-gray-500 p-4 rounded-lg cursor-pointer">
            <h1 className="text-gray-600">Orifice Tube system</h1>
            <img
              src="assets/engine-blog/air-engine/airEngine-7.jpg"
              className="animated w-full my-4 rounded-lg"
              alt=""
            />
            <p className="text-gray-600 mb-4">
              An orifice tube is similar to an expansion valve, with both
              performing an important function in a vehicle’s A/C system....
            </p>
          </div>

          <div className="mb-10 border border-gray-500 p-4 rounded-lg cursor-pointer">
            <h1 className="text-gray-600">A/C Components Description</h1>
            <img
              src="assets/engine-blog/air-engine/airEngine-8.jpg"
              className="animated w-full my-4 rounded-lg"
              alt=""
            />
            <p className="text-gray-600 mb-4">
              To keep our environment to our desired temperature, the air
              conditioning system is the device that helps us achieve that....
            </p>
          </div>
        </div>
        <div className="middleBar basis-9/12">
          <div className="mb-10 flex flex-col-reverse md:flex-row lg:flex-row gap-4 justify-center items-center cursor-pointer hover:bg-black hover:bg-[url('/public/assets/image-gallery/carbon_BG-20.png')] text-gray-600 hover:text-white p-4">
            <div className="">
              <h1 className="text-2xl text-center font-bold ">
                Blog Of How Automotive Air Conditioning Works ?
              </h1>
              <p className="text-xl text-justify mt-4">
                When asked how car air conditioning systems work, most people
                would respond, “I don’t care how they work, I just want them to
                work!” While that may be a common response
              </p>
            </div>
            <img
              src="assets/engine-blog/air-engine/airEngine-1.jpg"
              className="w-full md:w-1/2 mt-4 mb-2 hover:border-2 border-red-600 rounded-lg"
              alt=""
            />
          </div>
          <hr className="text-2xl border-red-400 border-b-2 mb-12" />

          <div className="mb-10 flex flex-col-reverse md:flex-row lg:flex-row gap-4 justify-center items-center cursor-pointer hover:bg-black hover:bg-[url('/public/assets/image-gallery/carbon_BG-20.png')] text-gray-600 hover:text-white p-4">
            <div>
              <h1 className="text-2xl text-center font-bold ">
                Blog Expansion Valve System
              </h1>
              <p className="text-xl text-justify mt-4">
                Expansion valves are devices used to control the refrigerant
                flow in a refrigeration system. They help to facilitate the
                change of higher pressure of liquid refrigerant in the
                condensing unit
              </p>
            </div>
            <img
              src="assets/engine-blog/air-engine/airEngine-2.jpg"
              className="w-full md:w-1/2 mt-4 mb-2 hover:border-2 border-red-600 rounded-lg"
              alt=""
            />
          </div>
          <hr className="text-2xl border-red-400 border-b-2 mb-12" />

          <div className="mb-10 flex flex-col-reverse md:flex-row lg:flex-row gap-4 justify-center items-center cursor-pointer hover:bg-black hover:bg-[url('/public/assets/image-gallery/carbon_BG-20.png')] text-gray-600 hover:text-white p-4">
            <div>
              <h1 className="text-2xl text-center font-bold ">
                Blog Orifice Tube system
              </h1>
              <p className="text-xl text-justify mt-4">
                An orifice tube is similar to an expansion valve, with both
                performing an important function in a vehicle’s A/C system. The
                valve helps control the flow of refrigerant through the
                evaporator
              </p>
            </div>
            <img
              src="assets/engine-blog/air-engine/airEngine-3.jpg"
              className="w-full md:w-1/2 mt-4 mb-2 hover:border-2 border-red-600 rounded-lg"
              alt=""
            />
          </div>
          <hr className="text-2xl border-red-400 border-b-2 mb-12" />

          <div className="mb-10 flex flex-col-reverse md:flex-row lg:flex-row gap-4 justify-center items-center cursor-pointer hover:bg-black hover:bg-[url('/public/assets/image-gallery/carbon_BG-20.png')] text-gray-600 hover:text-white p-4">
            <div>
              <h1 className="text-2xl text-center font-bold ">
                Blog A/C Components Description
              </h1>
              <p className="text-xl text-justify mt-4">
                To keep our environment to our desired temperature, the air
                conditioning system is the device that helps us achieve that.
                The system is so common
              </p>
            </div>
            <img
              src="assets/engine-blog/air-engine/airEngine-4.jpg"
              className="w-full md:w-1/2 mt-4 mb-2 hover:border-2 border-red-600 rounded-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogService
