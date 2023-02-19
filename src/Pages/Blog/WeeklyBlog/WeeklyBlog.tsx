const WeeklyBlog = () => {
  return (
    <section className="my-16 px-10">
      <span className="text-6xl text-gray-800 font-bold">
        1,000 Horsepower LB7 Duramax Engine
      </span>
      <p className="text-xl text-gray-600 mt-2">
        Like many before him, Bryan Woitas got bit by the diesel bug after
        experimenting with some mild power-adders on his daily driver. Years
        later, he has a 1,000-horsepower LB7 Duramax to show off!
      </p>
      <div className="flex flex-col md:flex-row lg:flex-row mt-16 gap-8">
        <div className="leftWeeklyBlog flex flex-col md:flex-row lg:flex-row text-2xl text-black font-bold basis-8/12">
          <div className="weeklyCounterWrapper hover:bg-gray-300 cursor-pointer p-4 rounded-lg">
            <div className="flex justify-center items-center gap-4">
              <img
                className="w-28 h-28 rounded-full"
                src="assets/car-parts/car-parts-2.png"
                alt=""
              />
              <p className="text-lg text-gray-500 font-semibold text-center lg:text-justify">
                <span className="text-gray-700 font-bold">
                  Ring Piston Servicing
                </span>{" "}
                <br />
                Expansion valves are devices used to control the refrigerant
                flow in a refrigeration system. They help to facilitate the
                change of higher pressure
              </p>
            </div>
            <hr className="text-2xl border-yellow-400 border-b-1 mt-2 mb-8" />
          </div>

          <div className="weeklyCounterWrapper hover:bg-gray-300 cursor-pointer p-4 rounded-lg">
            <div className="flex justify-center items-center gap-4">
              <img
                className="w-28 h-28 rounded-full"
                src="assets/car-parts/car-parts-1.png"
                alt=""
              />
              <p className="text-lg text-gray-500 font-semibold text-center lg:text-justify">
                <span className="text-gray-700 font-bold">
                  Tube Line Servicing
                </span>{" "}
                <br />
                Expansion valves are devices used to control the refrigerant
                flow in a refrigeration system. They help to facilitate the
                change of higher pressure
              </p>
            </div>
            <hr className="text-2xl border-yellow-400 border-b-1 mt-2 mb-8" />
          </div>

          <div className="weeklyCounterWrapper hover:bg-gray-300 cursor-pointer p-4 rounded-lg">
            <div className="flex justify-center items-center gap-4">
              <img
                className="w-28 h-28 rounded-full"
                src="assets/car-parts/car-parts-3.png"
                alt=""
              />
              <p className="text-lg text-gray-500 font-semibold text-center lg:text-justify">
                <span className="text-gray-700 font-bold">
                  Engine Cube Servicing
                </span>{" "}
                <br />
                Expansion valves are devices used to control the refrigerant
                flow in a refrigeration system. They help to facilitate the
                change of higher pressure
              </p>
            </div>
            <hr className="text-2xl border-yellow-400 border-b-1 mt-2 mb-8" />
          </div>

          <div className="weeklyCounterWrapper hover:bg-gray-300 cursor-pointer p-4 rounded-lg">
            <div className="flex justify-center items-center gap-4">
              <img
                className="w-28 h-28 rounded-full"
                src="assets/car-parts/car-parts-4.png"
                alt=""
              />
              <p className="text-lg text-gray-500 font-semibold text-center lg:text-justify">
                <span className="text-gray-700 font-bold">
                  Mainfeast RAG Servicing
                </span>{" "}
                <br />
                Expansion valves are devices used to control the refrigerant
                flow in a refrigeration system. They help to facilitate the
                change of higher pressure
              </p>
            </div>
            <hr className="text-2xl border-yellow-400 border-b-1 mt-2 mb-8" />
          </div>

          <div className="weeklyCounterWrapper hover:bg-gray-300 cursor-pointer p-4 rounded-lg">
            <div className="flex justify-center items-center gap-4">
              <img
                className="w-28 h-28 rounded-full"
                src="assets/car-parts/car-parts-5.png"
                alt=""
              />
              <p className="text-lg text-gray-500 font-semibold text-center lg:text-justify">
                <span className="text-gray-700 font-bold">
                  Backward Geear Servicing
                </span>{" "}
                <br />
                Expansion valves are devices used to control the refrigerant
                flow in a refrigeration system. They help to facilitate the
                change of higher pressure
              </p>
            </div>
            <hr className="text-2xl border-yellow-400 border-b-1 mt-2 mb-8" />
          </div>
        </div>
        <div className="rightWeeklyBlog text-lg text-gray-600 text-justify p-12 basis-4/12">
          <img
            className="w-full rounded-lg"
            src="assets/image-gallery/Performance-upgrade.jpg"
            alt=""
          />
          <p className="mt-4">
            These formidable engines, our six Best Engines evaluators believe,
            are — or, for repeat winners, remain — benchmark executions of
            engine design,
            <br />
            <br />
            innovation, manufacturing. They excel in a business that holds their
            "contribution" to the overall product in the highest regard and
            stand proud of the conventional
            <br />
            <br />
            For 2001’s installment, nothing about the Best Engines contest has
            changed. Each engine nominated by our six editors must stand up to
            every other nominated engine in a battle unsullied by the
            marketing-happy "category competition" that so devalues other
            industry awards. We don’t "sell" the Best Engines to anybody. These
            engines have to sell themselves to us.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WeeklyBlog
