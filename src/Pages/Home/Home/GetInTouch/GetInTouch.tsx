import { FaPhone, FaRegEdit, FaRegPaperPlane } from "react-icons/fa";
import "./GetInTouch.css";

const GetInTouch = () => {
  return (
    <section className="mb-32">
      <div className="w-full text-left pl-8">
        <button className="getTouch mb-6">Get In Touch</button>
      </div>
      {/* <h1 className="text-[#383232] text-[4vw] font-bold font-poppins mb-12">
        Get In Touch Our Experts
      </h1> */}
      <div className="getInTouchWrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-[#19191B] bg-[url('/public/assets/image-gallery/carbon_BG-20.png')] py-12">
        <div className="leftTouch flex flex-col justify-center items-center gap-4">
          <div className="bg-[#E81C2E] p-5 rounded-full">
            <FaRegEdit className="text-2xl"></FaRegEdit>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Service Help ?</h2>
            <p>
              We provide all engine service <br />
              Please Chat the down box
            </p>
          </div>
          <div>
            <button className="getbtn">Chat Now</button>
          </div>
        </div>

        <div className="middleTouch flex flex-col justify-center items-center gap-4">
          <div className="bg-[#E81C2E] p-5 rounded-full">
            <FaPhone className="text-2xl"></FaPhone>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Get In Touch</h2>
            <p>
              We provide all engine service <br />
              Please Chat the down box
            </p>
          </div>
          <div>
            <h5 className="ftext-xl text-[#E81C2E] font-bold">
              <a href="tel:+8801863901163">+8801863901163</a>
            </h5>
          </div>
        </div>

        <div className="rightTouch flex flex-col justify-center items-center gap-4">
          <div className="bg-[#E81C2E] p-5 rounded-full">
            <FaRegPaperPlane className="text-2xl"></FaRegPaperPlane>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Subscribe Us</h2>
            <p>
              We provide all engine service <br />
              Please Chat the down box
            </p>
          </div>
          <div className="flex items-center">
            <div className="">
              <input
                className="w-full py-2 px-2"
                type="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="">
              <button className=" bg-[#E81C2E] px-4 py-2">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
