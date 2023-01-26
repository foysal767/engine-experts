import { FaRegUser, FaServicestack } from "react-icons/fa"
import "./EngineExperties.css"

const EngineExperties = () => {
  return (
    <section className="px-10 my-20 bg-red-700">
      <div className="mx-36">
        <h2 className="text-4xl text-left font-bold">Our Engine Experties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20 justify-evenly">
          <div className="engineWrapper flex">
            <div className="leftEngine flex flex-col">
              <img
                className="w-72 h-84 absolute"
                src="/assets/service-1.1.jpg"
                alt=""
              />
              <div className="bg-white text-black relative top-44 ml-3 hover:bg-red-300">
                <div className="my-4">
                  <div className="flex gap-20">
                    <div className="byAdmin flex gap-2 items-center">
                      <FaRegUser className="text-red-500"></FaRegUser>
                      <span>by Admin</span>
                    </div>
                    <div className="service flex gap-2 items-center">
                      <FaServicestack className="text-red-500"></FaServicestack>
                      <span>Service</span>
                    </div>
                  </div>
                </div>
                <div className="text-xl text-gray-800 font-bold mb-4">
                  Common Engine Oil <br />
                  Problems and Solutions
                </div>
              </div>
            </div>
          </div>

          <div className="engineWrapper flex">
            <div className="leftEngine flex flex-col">
              <img
                className="w-72 h-84 absolute"
                src="/assets/image-gallery/Performance-upgrade.jpg"
                alt=""
              />
              <div className="bg-white text-black relative top-44 ml-3 hover:bg-red-300">
                <div className="my-4">
                  <div className="flex gap-20">
                    <div className="byAdmin flex gap-2 items-center">
                      <FaRegUser className="text-red-500"></FaRegUser>
                      <span>by Admin</span>
                    </div>
                    <div className="service flex gap-2 items-center">
                      <FaServicestack className="text-red-500"></FaServicestack>
                      <span>Service</span>
                    </div>
                  </div>
                </div>
                <div className="text-xl text-gray-800 font-bold mb-4">
                  Common Engine Oil <br />
                  Problems and Solutions
                </div>
              </div>
            </div>
          </div>

          <div className="engineWrapper flex">
            <div className="leftEngine flex flex-col">
              <img
                className="w-72 h-84 absolute"
                src="/assets/contact/contact3.jpg"
                alt=""
              />
              <div className="bg-white text-black relative top-44 ml-3 hover:bg-red-300">
                <div className="my-4">
                  <div className="flex gap-20">
                    <div className="byAdmin flex gap-2 items-center">
                      <FaRegUser className="text-red-500"></FaRegUser>
                      <span>by Admin</span>
                    </div>
                    <div className="service flex gap-2 items-center">
                      <FaServicestack className="text-red-500"></FaServicestack>
                      <span>Service</span>
                    </div>
                  </div>
                </div>
                <div className="text-xl text-gray-800 font-bold mb-4">
                  Common Engine Oil <br />
                  Problems and Solutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EngineExperties
