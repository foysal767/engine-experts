import "./BlogService.css"
import BlogServiceDetails from "./BlogServiceDetails"
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

        <div className="middleBar basis-9/12">
          <BlogServiceDetails></BlogServiceDetails>
        </div>
        <div className="rightBar basis-0"></div>
      </div>
    </section>
  )
}

export default BlogService
