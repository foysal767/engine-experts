import { FaPhoneVolume, FaRegEnvelope } from "react-icons/fa"
import "./ContactForm.css"

const ContactForm = () => {
  return (
    <section className="my-20 px-10">
      <div className="contactForm flex space-x-8 justify-center">
        <div className="leftContactForm bg-white p-4 rounded-lg px-20 py-10">
          <div className="headText text-left">
            <h2 className="text-4xl font-semibold text-gray-900">
              Need Services ? Send Message
            </h2>
            <p className="text-xl text-gray-800 mb-4">
              We provide all engine services
            </p>
          </div>
          <div className="contactFormInput">
            <div className="nameEmail flex space-x-24">
              <div className="inputName">
                <div className="text-gray-900 font-bold text-left">
                  <label className="" htmlFor="name">
                    Name
                  </label>
                </div>
                <input
                  className="bg-gray-100 w-full"
                  type="text"
                  placeholder="Type your Name"
                />
              </div>
              <div className="inputEmail">
                <div className="text-gray-900 font-bold text-left">
                  <label className="" htmlFor="email">
                    Email
                  </label>
                </div>
                <input
                  className="bg-gray-100 w-full"
                  type="email"
                  placeholder="Type your Email"
                />
              </div>
            </div>
            <div className="phoneService flex space-x-24 my-4">
              <div className="inputPhone">
                <div className="text-gray-900 font-bold text-left">
                  <label className="" htmlFor="phone">
                    Phone
                  </label>
                </div>
                <input
                  className="bg-gray-100 w-full"
                  type="text"
                  placeholder="Type your Phone"
                />
              </div>
              <div className="inputService">
                <div className="text-gray-900 font-bold text-left">
                  <label className="" htmlFor="service">
                    Service
                  </label>
                </div>
                <input
                  className="bg-gray-100 w-full"
                  type="text"
                  placeholder="Type your service"
                />
              </div>
            </div>
            <div>
              <div className="text-gray-900 font-bold text-left">
                <label className="" htmlFor="message">
                  Message
                </label>
              </div>
              <textarea
                className="bg-gray-100 mb-4 w-full"
                placeholder="Your Message"
                name="message"
                id=""
              ></textarea>
            </div>
          </div>
          <div>
            <button className="btn btn-block btn-outline bg-gray-100 text-gray-600 font-bold">
              Submit
            </button>
          </div>
        </div>
        <div className="rightContactDetails bg-white p-4 rounded-lg py-10 px-8">
          <div className="contactDetails text-left mb-8">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">
              Contact Details
            </h2>
            <p className="text-gray-700">
              <span className="font-bold text-gray-800">
                Office Address -1:{" "}
              </span>{" "}
              Engine Experts Agency <br />
              (Chottogram Baskhali) Co. Ltd Bridge 8. Room <br /> 9201
            </p>
            <br />
            <p className="text-gray-700">
              <span className="font-bold text-gray-800">
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
              <h2 className="text-sm text-gray-700 text-left">
                Emargency Call
              </h2>
              <span className="font-bold text-gray-800">+88 017 22 262041</span>
            </div>
          </div>
          <div className="generalEmail flex items-center space-x-4">
            <div className="text-red-500">
              <FaRegEnvelope />
            </div>
            <div>
              <h2 className="text-sm text-gray-700 text-left">
                General Communication
              </h2>
              <span className="font-bold text-gray-800">
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
