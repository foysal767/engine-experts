import { FaPhone, FaRegEdit } from "react-icons/fa"
import { VscWorkspaceTrusted } from "react-icons/vsc"
import { SiTrustpilot } from "react-icons/si"
import "./GetInTouch.css"

const GetInTouch = () => {
  return (
    <section className="my-32 md:my-20 lg:my-20">
      <div className="w-full text-left pl-8">
        <button className="getTouch mb-6">Get In Touch</button>
      </div>
      <div className="getInTouchWrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4 bg-[#19191B] bg-[url('/public/assets/image-gallery/carbon_BG-20.png')] py-12">
        <div className="leftTouch flex flex-col justify-center items-center gap-4">
          <div className="bg-[#E81C2E] p-5 rounded-full">
            <FaRegEdit className="text-2xl"></FaRegEdit>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Service Help ?</h2>
            <p>
              We provide all engine service <br />
              Please Contact us with clicking the email.
            </p>
          </div>
          <div>
          <h5 className="ftext-xl text-[#E81C2E] font-bold">
              <a href="mailto:engineexpertise24@gmail.com">engineexpertise24@gmail.com</a>
            </h5>
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
              Please Contact us with clicking the phone number.
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
            <VscWorkspaceTrusted className="text-2xl"></VscWorkspaceTrusted>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Trust</h2>
            <p>
            We give our best service to our customer <br/> and we are confident with our services.
            </p>
          </div>
          <div className="flex items-center text-[#E81C2E] gap-2 text-xl">
            <SiTrustpilot></SiTrustpilot>
            <SiTrustpilot></SiTrustpilot>
            <SiTrustpilot></SiTrustpilot>
            <SiTrustpilot></SiTrustpilot>
            <SiTrustpilot></SiTrustpilot>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
