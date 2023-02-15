import { toast } from "react-hot-toast"
import { FaPhoneVolume, FaRegEnvelope } from "react-icons/fa"
import "./ContactForm.css"

const ContactForm = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault()
    const name = event.target.name.value
    const email = event.target.email.value
    const phone = event.target.phone.value
    const service = event.target.service.value
    const message = event.target.message.value
    const user = { name, email, phone, service, message }
    event.target.reset()
    console.log(user)

    fetch("https://engine-experts-server-phi.vercel.app/contactform", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        toast.success(data.message)
      })
      .catch(err => console.error(err))
  }

  return (
    <section className="py-20 px-4">
      <div className="contactForm grid lg:grid-cols-3 md:grid-cols-1 gap-6 justify-center">
        <div className="leftContactForm lg:col-span-2 p-4 rounded-lg lg:px-16 py-10 bg-[#19191B] bg-[url('/public/assets/image-gallery/carbon_BG-20.png')]">
          <div className="headText text-left">
            <h2 className="text-4xl font-semibold font-poppins">
              Need Help ? Send Message
            </h2>
            <p className="text-xl mb-4 font-poppins">
              We provide all engine services related help!
            </p>
          </div>
          <div className="contactFormInput">
            <form onSubmit={handleSubmit}>
              <div className="nameEmail grid lg:grid-cols-2 md:grid-cols-1 gap-4">
                <div className="inputName">
                  <div className="font-bold text-left">
                    <label className="font-poppins" htmlFor="name">
                      Name
                    </label>
                  </div>
                  <input
                    className="bg-gray-100 input input-bordered text-black w-full font-poppins"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Type your Name"
                    required
                  />
                </div>
                <div className="inputEmail">
                  <div className="font-bold text-left">
                    <label className="font-poppins" htmlFor="email">
                      Email
                    </label>
                  </div>
                  <input
                    className="bg-gray-100 input input-bordered text-black w-full font-poppins"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Type your Email"
                    required
                  />
                </div>
              </div>
              <div className="phoneService grid lg:grid-cols-2 md:grid-cols-1 gap-4 my-4">
                <div className="inputPhone">
                  <div className="font-bold text-left">
                    <label className="font-poppins" htmlFor="phone">
                      Phone
                    </label>
                  </div>
                  <input
                    className="bg-gray-100 input input-bordered text-black w-full font-poppins"
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Type your Phone"
                    required
                  />
                </div>
                <div className="inputService">
                  <div className="font-bold text-left">
                    <label className="font-poppins" htmlFor="service">
                      Service
                    </label>
                  </div>
                  <input
                    className="bg-gray-100 input input-bordered text-black w-full font-poppins"
                    type="text"
                    name="service"
                    id="service"
                    placeholder="Type your service"
                    required
                  />
                </div>
              </div>
              <div>
                <div className="font-bold text-left">
                  <label className="font-poppins" htmlFor="message">
                    Message
                  </label>
                </div>
                <textarea
                  className="textarea textarea-bordered text-black bg-gray-100 mb-4 w-full font-poppins"
                  placeholder="Your Message"
                  required
                  name="message"
                  id="massage"
                ></textarea>
              </div>

              <div>
                <button className="contactBtn font-bold font-poppins">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="rightContactDetails p-4 rounded-lg py-10 px-8 lg:mr-4 md:mr-1 bg-[#19191B] bg-[url('/public/assets/image-gallery/carbon_BG-20.png')]">
          <div className="contactDetails text-left mb-8">
            <h2 className="text-4xl font-semibold  mb-4 font-poppins">
              Contact Details
            </h2>
            <p className="font-poppins">
              <span className="font-bold font-poppins">
                Office Address -1:{" "}
              </span>{" "}
              Engine Experts Agency <br />
              (Chottogram Baskhali) Co. Ltd Bridge 8. Room Chottgram Bangladesh
              - 9201
            </p>
            <br />
            <p className="font-poppins">
              <span className="font-bold font-poppins">Office Address-2: </span>{" "}
              Engine Expertice Agency <br />
              (Kamranggir Chor Vuter Goli) Co. Ltd Sheik Jamal Road- Dhaka,
              Bangladesh - 9876
            </p>
          </div>
          <div className="emergencyCall flex items-center space-x-4 mb-4">
            <div className="text-red-500">
              <FaPhoneVolume />
            </div>
            <div>
              <h2 className="text-sm  text-left font-poppins">
                Emargency Call
              </h2>
              <span className="font-bold font-poppins">+88 017 22 262041</span>
            </div>
          </div>
          <div className="generalEmail flex items-center space-x-4">
            <div className="text-red-500">
              <FaRegEnvelope />
            </div>
            <div>
              <h2 className="text-sm  text-left font-poppins">
                General Communication
              </h2>
              <span className="font-bold font-poppins">
                engineexpertise24@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
