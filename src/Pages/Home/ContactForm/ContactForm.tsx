import { FaPhoneVolume, FaRegEnvelope } from "react-icons/fa"
import "./ContactForm.css"

const ContactForm = () => {
  return (
    <section className="py-20 px-4">
      <div className="contactForm grid lg:grid-cols-3 md:grid-cols-2 gap-6 justify-center">
        <div className="leftContactForm lg:col-span-2 p-4 rounded-lg lg:px-20 py-10 bg-[#19191B] bg-[url('/public/assets/image-gallery/carbon_BG-20.png')]">
          <div className="headText text-left">
            <h2 className="text-4xl font-semibold">
              Need Services ? Send Message
            </h2>
            <p className="text-xl mb-4">
              We provide all engine services
            </p>
          </div>
          <div className="contactFormInput">
            <div className="nameEmail grid lg:grid-cols-2 md:grid-cols-1 gap-4">
              <div className="inputName">
                <div className="font-bold text-left">
                  <label className="" htmlFor="name">
                    Name
                  </label>
                </div>
                <input
                  className="bg-gray-100 input input-bordered text-black w-full"
                  type="text"
                  placeholder="Type your Name"
                />
              </div>
              <div className="inputEmail">
                <div className="font-bold text-left">
                  <label className="" htmlFor="email">
                    Email
                  </label>
                </div>
                <input
                  className="bg-gray-100 input input-bordered text-black w-full"
                  type="email"
                  placeholder="Type your Email"
                />
              </div>
            </div>
            <div className="phoneService grid lg:grid-cols-2 md:grid-cols-1 gap-4 my-4">
              <div className="inputPhone">
                <div className="font-bold text-left">
                  <label className="" htmlFor="phone">
                    Phone
                  </label>
                </div>
                <input
                  className="bg-gray-100 input input-bordered text-black w-full"
                  type="text"
                  placeholder="Type your Phone"
                />
              </div>
              <div className="inputService">
                <div className="font-bold text-left">
                  <label className="" htmlFor="service">
                    Service
                  </label>
                </div>
                <input
                  className="bg-gray-100 input input-bordered text-black w-full"
                  type="text"
                  placeholder="Type your service"
                />
              </div>
            </div>
            <div>
              <div className="font-bold text-left">
                <label className="" htmlFor="message">
                  Message
                </label>
              </div>
              <textarea
                className="textarea textarea-bordered text-black bg-gray-100 mb-4 w-full"
                placeholder="Your Message"
                name="message"
                id=""
              ></textarea>
            </div>
          </div>
          <div>
            <button className="contactBtn font-bold">
              Submit
            </button>
          </div>
        </div>
        <div className="rightContactDetails p-4 rounded-lg py-10 px-8 bg-[#19191B] bg-[url('/public/assets/image-gallery/carbon_BG-20.png')]">
          <div className="contactDetails text-left mb-8">
            <h2 className="text-4xl font-semibold  mb-4">
              Contact Details
            </h2>
            <p className="">
              <span className="font-bold ">
                Office Address -1:{" "}
              </span>{" "}
              Engine Experts Agency <br />
              (Chottogram Baskhali) Co. Ltd Bridge 8. Room <br /> 9201
            </p>
            <br />
            <p className="">
              <span className="font-bold ">
                Office Address-2:{" "}
              </span>{" "}
              Engine Expertice Agency <br />
              (Kamranggir Chor Vuter Goli) Co. Ltd Sheik Jamal Road- <br /> 9876
            </p>
          </div>
          <div className="emergencyCall flex items-center space-x-4 mb-4">
            <div className="text-red-500">
              <FaPhoneVolume />
            </div>
            <div>
              <h2 className="text-sm  text-left">
                Emargency Call
              </h2>
              <span className="font-bold ">+88 017 22 262041</span>
            </div>
          </div>
          <div className="generalEmail flex items-center space-x-4">
            <div className="text-red-500">
              <FaRegEnvelope />
            </div>
            <div>
              <h2 className="text-sm  text-left">
                General Communication
              </h2>
              <span className="font-bold ">
                nazrulislamrongon@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
