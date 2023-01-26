import { FaPhone, FaRegEdit, FaRegPaperPlane } from "react-icons/fa"

const GetInTouch = () => {
  return (
    <section>
      <div className="getInTouchWrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="leftTouch flex flex-col justify-center items-center gap-4">
          <div className="bg-amber-700 rounded-full w-16 h-16">
            <FaRegEdit className="text-2xl left-6 top-5 relative"></FaRegEdit>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Service Help ?</h2>
            <p>
              We provide all engine service <br />
              Please Chat the down box
            </p>
          </div>
          <div>
            <button className="btn bg-[#E81C2E] px-8 py-1 rounded-lg mt-2 text-white">
              Chat Now
            </button>
          </div>
        </div>
        <div className="middleTouch flex flex-col justify-center items-center gap-4">
          <div className="bg-amber-700 rounded-full w-16 h-16">
            <FaPhone className="text-2xl left-4 top-5 relative"></FaPhone>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Get In Touch</h2>
            <p>
              We provide all engine service <br />
              Please Chat the down box
            </p>
          </div>
          <div>
            <h5 className='ftext-xl text-amber-300 font-bold'>
              <a href="tel:+8801863901163">+8801863901163</a>
            </h5>
          </div>
        </div>
        <div className="rightTouch flex flex-col justify-center items-center gap-4">
          <div className="bg-amber-700 rounded-full w-16 h-16">
            <FaRegPaperPlane className="text-2xl left-4 top-5 relative"></FaRegPaperPlane>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Subscribe Us</h2>
            <p>
              We provide all engine service <br />
              Please Chat the down box
            </p>
          </div>
          <div className="flex">
            <div className="w-48">
              <input className="" type="email" placeholder="Enter Your Email" />
            </div>
            <div className="mt-2">
              <button className=" bg-amber-600 px-4 py-3">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
