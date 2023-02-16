import "./Blog.css"
const Blog = () => {
  return (
    <section className="my-8 px-10">
      <div className="flex flex-col md:flex-row text-gray-400 gap-8">
        <div className="sideBar basis-3/12">
          <h1 className="text-2xl text-center text-gray-800 font-bold mb-4">
            Popular Servicing
          </h1>

          <div className="animation mb-10 border border-gray-500 p-4 rounded-lg cursor-pointer">
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

          <div className="animation mb-10 border border-gray-500 p-4 rounded-lg cursor-pointer">
            <h1 className="text-gray-600">Expansion Valve System?</h1>
            <img
              src="assets/engine-blog/air-engine/airEngine-6.jpg"
              className="w-full my-4 rounded-lg"
              alt=""
            />
            <p className="text-gray-600 mb-4">
              Expansion valves are devices used to control the refrigerant flow
              in a refrigeration system. They help to facilitate....
            </p>
          </div>

          <div className="animation mb-10 border border-gray-500 p-4 rounded-lg cursor-pointer">
            <h1 className="text-gray-600">Orifice Tube system</h1>
            <img
              src="assets/engine-blog/air-engine/airEngine-7.jpg"
              className="w-full my-4 rounded-lg"
              alt=""
            />
            <p className="text-gray-600 mb-4">
              An orifice tube is similar to an expansion valve, with both
              performing an important function in a vehicle’s A/C system....
            </p>
          </div>

          <div className="animation mb-10 border border-gray-500 p-4 rounded-lg cursor-pointer">
            <h1 className="text-gray-600">A/C Components Description</h1>
            <img
              src="assets/engine-blog/air-engine/airEngine-8.jpg"
              className="w-full my-4 rounded-lg"
              alt=""
            />
            <p className="text-gray-600 mb-4">
              To keep our environment to our desired temperature, the air
              conditioning system is the device that helps us achieve that....
            </p>
          </div>

          <div className="animation mb-10 border border-gray-500 p-4 rounded-lg cursor-pointer">
            <h1 className="text-gray-600">Breke inspections</h1>
            <img
              src="assets/engine-blog/air-engine/airEngine-9.jpg"
              className="w-full my-4 rounded-lg"
              alt=""
            />
            <p className="text-gray-600 mb-4">
              During a brake inspection the entire brake system is checked; this
              includes the following: the brake pedal, brake fluid....
            </p>
          </div>

          <div className="animation mb-10 border border-gray-500 p-4 rounded-lg cursor-pointer">
            <h1 className="text-gray-600">Coolant flush</h1>
            <img
              src="assets/engine-blog/air-engine/airEngine-10.jpg"
              className="w-full my-4 rounded-lg"
              alt=""
            />
            <p className="text-gray-600 mb-4">
              An engine repair or replacement can cost thousands, but a coolant
              flush preserves your car's health and can restore function to your
              engine's tempering agents....
            </p>
          </div>

          <div className="animation mb-10 border border-gray-500 p-4 rounded-lg cursor-pointer">
            <h1 className="text-gray-600">Oil change</h1>
            <img
              src="assets/engine-blog/air-engine/airEngine-11.jpg"
              className="w-full my-4 rounded-lg"
              alt=""
            />
            <p className="text-gray-600 mb-4">
              It is recommended to get your oil changed at least twice a year,
              even if you haven't driven those thousands of miles....
            </p>
          </div>

          <div className="animation mb-10 border border-gray-500 p-4 rounded-lg cursor-pointer">
            <h1 className="text-gray-600">Filter replacement</h1>
            <img
              src="assets/engine-blog/air-engine/airEngine-12.jpg"
              className="w-full my-4 rounded-lg"
              alt=""
            />
            <p className="text-gray-600 mb-4">
              You should change the air filters at least once a year or every
              12,000-15,000 miles, whichever comes first....
            </p>
          </div>

          <div className="animation mb-10 border border-gray-500 p-4 rounded-lg cursor-pointer">
            <h1 className="text-gray-600">Spark plug</h1>
            <img
              src="assets/engine-blog/air-engine/airEngine-13.jpg"
              className="w-full my-4 rounded-lg"
              alt=""
            />
            <p className="text-gray-600 mb-4">
              As the name implies, a spark plug supplies a small electrical
              spark. It ignites the fuel inside the combustion....
            </p>
          </div>
        </div>
        <div className="middleBar basis-9/12">
          <div className="mb-10">
            <h1 className="text-2xl text-center text-gray-800 font-bold ">
              How Automotive Air Conditioning Works
            </h1>
            <p className="text-xl text-gray-600 text-justify mt-4">
              When asked how car air conditioning systems work, most people
              would respond, “I don’t care how they work, I just want them to
              work!” While that may be a common response, it does not answer the
              question. If you are someone who has always been curious about how
              car AC works, continue reading below for a deeper look into
              air-conditioner theory, system components and system operation.{" "}
              <br />
              The air-conditioning system in a car works by manipulating
              refrigerant between a liquid and a gaseous state. As the
              refrigerant changes states, it absorbs heat and humidity from the
              vehicle and allows the system to give off cool, dry air. <br />
              To change the refrigerant between a liquid and a gaseous state,
              the air-conditioning system works to control pressure and
              temperature.
            </p>
            <img
              src="assets/engine-blog/air-engine/airEngine-1.jpg"
              className="w-full my-4"
              alt=""
            />
            <p className="text-xl text-gray-600 text-justify mt-4">
              In the past, automotive air condition systems used R-12 as the
              refrigerant. R-12 (aka Freon) is a very effective CFC-based
              (chlorofluorocarbon) refrigerant that is not flammable and not
              poisonous to humans. During the late 1980s, scientists discovered
              that widespread usage of R-12 was damaging the earth’s ozone
              layer. <br />
            </p>
          </div>

          <div className="mb-10">
            <h1 className="text-2xl text-center text-gray-800 font-bold ">
              Expansion Valve System
            </h1>
            <p className="text-xl text-gray-600 text-justify mt-4">
              Expansion valves are devices used to control the refrigerant flow
              in a refrigeration system. They help to facilitate the change of
              higher pressure of liquid refrigerant in the condensing unit to
              lower pressure gas refrigerant in the evaporator.
              <br />
              The term "low side" is used to indicate the part of the system
              that operates under low pressure, in this case the evaporator. The
              "high side" is used to indicate the part of the system that
              operates under high pressure, in this case the condenser.
            </p>
            <img
              src="assets/engine-blog/air-engine/airEngine-2.jpg"
              className="w-full my-4"
              alt=""
            />
            <p className="text-xl text-gray-600 text-justify mt-4">
              Automatic Expansion Valve regulates the flow of refrigerant from
              the liquid line to the evaporator by using a pressure-actuated
              diaphragm. It maintains a constant pressure in the evaporator.{" "}
              <br />
            </p>
          </div>

          <div className="mb-10">
            <h1 className="text-2xl text-center text-gray-800 font-bold ">
              Orifice Tube system
            </h1>
            <p className="text-xl text-gray-600 text-justify mt-4">
              An orifice tube is similar to an expansion valve, with both
              performing an important function in a vehicle’s A/C system. The
              valve helps control the flow of refrigerant through the
              evaporator, which is the main cooling component of the system. An
              expansion valve controls this flow directly through a modulating
              rod, which opens and closes to various levels depending on cooling
              demand. It also contains a sensing bulb which detects temperature
              within the evaporator. An orifice tube has no moving parts and
              contains a permanent restriction within the system. The orifice
              tube systems control the refrigerant flow through other means,
              such as cycling the compressor on and off, or the use of a
              refrigerant regulating valve within the compressor itself.
              <br />
              The orifice tube allows for a higher flow of R-134 refrigerant
              during times when more cooling is needed, and a smaller flow of
              refrigerant when less cooling is needed. This balance of cooling
              flow is critical for the A/C to operate effectively.
            </p>
            <img
              src="assets/engine-blog/air-engine/airEngine-3.jpg"
              className="w-full my-4"
              alt=""
            />
            <p className="text-xl text-gray-600 text-justify mt-4">
              Too much refrigerant flow results in the evaporator running too
              cold, which causes moisture to freeze on the evaporator coils.
              This freezing restricts airflow through the coils and eventually
              results in a loss of cooling for the vehicle. The evaporator and
              refrigerant lines should be cold to the touch when running
              properly, but they should not be frozen. If freezing does occur,
              it may indicate a problem with the orifice tube, or even too much
              refrigerant in the system. Many vehicles come with a “sight glass”
              which can be used to see if there are air bubbles present in the
              refrigerant stream. A sight glass can help determine whether the
              problem is within the orifice tube, or the refrigerant itself.
              <br />
            </p>
          </div>

          <div className="mb-10">
            <h1 className="text-2xl text-center text-gray-800 font-bold ">
              A/C Components Description
            </h1>
            <p className="text-xl text-gray-600 text-justify mt-4">
              To keep our environment to our desired temperature, the air
              conditioning system is the device that helps us achieve that. The
              system is so common that one can experience its effect anywhere we
              enter. It can be installed in our house, office, cars, even a
              modern religious centre now have it. in short, it can be used in
              both domestic and commercial environments
              <br />
              Air conditioning is often referred to as aircon, AC or A/C. it
              features a fan that distributes the conditioned air to the
              enclosed space. The enclosed space is often building and car.
            </p>
            <img
              src="assets/engine-blog/air-engine/airEngine-4.jpg"
              className="w-full my-4"
              alt=""
            />
            <p className="text-xl text-gray-600 text-justify mt-4">
              Today we’ll be looking at the definition, functions, components,
              diagram, classification, types, and working principle of an air
              conditioning system.
              <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog