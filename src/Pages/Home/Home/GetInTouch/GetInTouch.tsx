import { FaPhone, FaRegEdit, FaRegPaperPlane } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 mb-32">
      <h1 className="text-[#383232] text-[4vw] font-bold font-poppins mb-12">
        Get In Touch Our Experts
      </h1>
      <div className="getInTouchWrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  bg-[#000000] py-12">
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
            <button className="btn bg-red-400 px-8 py-1 rounded-lg text-white">
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
            <h5 className="ftext-xl text-amber-300 font-bold">
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
          <div className="flex items-center">
            <div className="w-48 h-[40px]">
              <input
                className="w-full h-full"
                type="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="">
              <button className=" bg-amber-600 px-4 py-2">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
