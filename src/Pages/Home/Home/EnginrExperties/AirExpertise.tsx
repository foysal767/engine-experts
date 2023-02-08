import "./AirExpertise.css"

import {
  FaEnvelope,
  FaLinkedinIn,
  FaPhoneVolume,
  FaWhatsapp,
} from "react-icons/fa"

const AirExpertise = () => {
  return (
    <section>
      <div className="my-20 flex flex-col md:flex-row gap-8 px-10">
        <div className="sideBar text-black border-2 basis-3/12 bg-green-100 p-4 scroll-my-16 sticky">
          <img className="rounded-lg" src="assets/team/arif.jpg" alt="" />
          <div className="flex justify-around text-2xl text-gray-700 font-bold mb-2">
            <h1>Name:</h1>
            <span>Ariful Islam</span>
          </div>
          <hr className="border border-red-500 mb-2" />
          <p className="text-xl text-gray-600">
            Hi! I am Ariful Islam. I am a Motor Expertise. I am in
            Air-Conditioning-&-Evac Spacialist. And also I am in senior excutive
            of engine expertise team.
          </p>
          <div className="contactInfo mt-8">
            <span className="text-3xl text-gray-600 font-bold">
              Contact Info
            </span>
            <hr className="border border-red-500 mb-4" />
            <div className=" flex justify-around">
              <div className="flex gap-1 items-center">
                <FaEnvelope className="text-amber-400"></FaEnvelope>
                <span className="text-xl text-gray-600">Email:</span>
              </div>
              <span className="text-xl text-gray-600">
                arifulislam24@gmail.com
              </span>
            </div>
            <div className=" flex justify-around">
              <div className="flex gap-1 items-center">
                <FaLinkedinIn className="text-blue-800"></FaLinkedinIn>
                <span className="text-xl text-gray-600">Linkedin:</span>
              </div>
              <span className="text-xl text-gray-600">
                Go to Linekdin Profile
              </span>
            </div>
            <div className=" flex justify-around">
              <div className="flex gap-1 items-center">
                <FaPhoneVolume className="text-green-600"></FaPhoneVolume>
                <span className="text-xl text-gray-600">Phone:</span>
              </div>
              <span className="text-xl text-gray-600">
                +88 017 22 262041/42/43
              </span>
            </div>
            <div className=" flex justify-around mb-8">
              <div className="flex gap-1 items-center">
                <FaWhatsapp className="text-blue-900"></FaWhatsapp>
                <span className="text-xl text-gray-600">Whats App:</span>
              </div>
              <span className="text-xl text-gray-600">
                Arifulislamarif 9867
              </span>
            </div>
            <span className="text-3xl text-gray-600 font-bold">
              Home Address
            </span>
            <hr className="border border-red-500 mb-4" />
            <div className="text-xl text-gray-600 mb-8">
              <p>MD. Ariful Islam</p>
              <p>123 Chottogram Potengga Street</p>
              <p>Solt Gola Rail Crossing/235</p>
              <p>South East Halishahar/NX 204</p>
            </div>

            <span className="text-3xl text-gray-600 font-bold">
              Education Details
            </span>
            <hr className="border border-red-500 mb-4" />
            <div className="text-xl text-gray-600">
              <p>Bachelor of Science, Tecnology</p>
              <p>Honors: Cum laude (GPA: 3.8/4.0)</p>
              <p>Dean's List 4 Semester</p>
              <p>Thesis: Oil Engine, Air Vocked</p>
              <p>Relevant: Tires Repair, Engine Repair</p>
            </div>
          </div>
        </div>
        <div className="rightBar text-black basis-9/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="assets/image-gallery/Air-Conditioning-&-Evac.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Air-Conditioning-&-Evac</h2>
              <p>
                Recovery is the process of taking the refrigerant out, not much
                or any oil is going to come with it, until the system pressure
                is 0. Vacuuming or evacuation is removing all gasses until the
                system
              </p>
            </div>
          </div>

          <div className="card shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="assets/image-gallery/Air-Conditioning-&-Evac.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Air-Conditioning-&-Evac</h2>
              <p>
                Recovery is the process of taking the refrigerant out, not much
                or any oil is going to come with it, until the system pressure
                is 0. Vacuuming or evacuation is removing all gasses until the
                system
              </p>
            </div>
          </div>

          <div className="card shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="assets/image-gallery/Air-Conditioning-&-Evac.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Air-Conditioning-&-Evac</h2>
              <p>
                Recovery is the process of taking the refrigerant out, not much
                or any oil is going to come with it, until the system pressure
                is 0. Vacuuming or evacuation is removing all gasses until the
                system
              </p>
            </div>
          </div>

          <div className="card shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="assets/image-gallery/Air-Conditioning-&-Evac.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Air-Conditioning-&-Evac</h2>
              <p>
                Recovery is the process of taking the refrigerant out, not much
                or any oil is going to come with it, until the system pressure
                is 0. Vacuuming or evacuation is removing all gasses until the
                system
              </p>
            </div>
          </div>

          <div className="card shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="assets/image-gallery/Air-Conditioning-&-Evac.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Air-Conditioning-&-Evac</h2>
              <p>
                Recovery is the process of taking the refrigerant out, not much
                or any oil is going to come with it, until the system pressure
                is 0. Vacuuming or evacuation is removing all gasses until the
                system
              </p>
            </div>
          </div>

          <div className="card shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="assets/image-gallery/Air-Conditioning-&-Evac.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Air-Conditioning-&-Evac</h2>
              <p>
                Recovery is the process of taking the refrigerant out, not much
                or any oil is going to come with it, until the system pressure
                is 0. Vacuuming or evacuation is removing all gasses until the
                system
              </p>
            </div>
          </div>

          <div className="card shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="assets/image-gallery/Air-Conditioning-&-Evac.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Air-Conditioning-&-Evac</h2>
              <p>
                Recovery is the process of taking the refrigerant out, not much
                or any oil is going to come with it, until the system pressure
                is 0. Vacuuming or evacuation is removing all gasses until the
                system
              </p>
            </div>
          </div>

          <div className="card shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="assets/image-gallery/Air-Conditioning-&-Evac.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Air-Conditioning-&-Evac</h2>
              <p>
                Recovery is the process of taking the refrigerant out, not much
                or any oil is going to come with it, until the system pressure
                is 0. Vacuuming or evacuation is removing all gasses until the
                system
              </p>
            </div>
          </div>

          <div className="card shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="assets/image-gallery/Air-Conditioning-&-Evac.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Air-Conditioning-&-Evac</h2>
              <p>
                Recovery is the process of taking the refrigerant out, not much
                or any oil is going to come with it, until the system pressure
                is 0. Vacuuming or evacuation is removing all gasses until the
                system
              </p>
            </div>
          </div>

          <div className="card shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="assets/image-gallery/Air-Conditioning-&-Evac.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Air-Conditioning-&-Evac</h2>
              <p>
                Recovery is the process of taking the refrigerant out, not much
                or any oil is going to come with it, until the system pressure
                is 0. Vacuuming or evacuation is removing all gasses until the
                system
              </p>
            </div>
          </div>

          <div className="card shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="assets/image-gallery/Air-Conditioning-&-Evac.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Air-Conditioning-&-Evac</h2>
              <p>
                Recovery is the process of taking the refrigerant out, not much
                or any oil is going to come with it, until the system pressure
                is 0. Vacuuming or evacuation is removing all gasses until the
                system
              </p>
            </div>
          </div>

          <div className="card shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="assets/image-gallery/Air-Conditioning-&-Evac.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Air-Conditioning-&-Evac</h2>
              <p>
                Recovery is the process of taking the refrigerant out, not much
                or any oil is going to come with it, until the system pressure
                is 0. Vacuuming or evacuation is removing all gasses until the
                system
              </p>
            </div>
          </div>

          <div className="card shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="assets/image-gallery/Air-Conditioning-&-Evac.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Air-Conditioning-&-Evac</h2>
              <p>
                Recovery is the process of taking the refrigerant out, not much
                or any oil is going to come with it, until the system pressure
                is 0. Vacuuming or evacuation is removing all gasses until the
                system
              </p>
            </div>
          </div>

          <div className="card shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="assets/image-gallery/Air-Conditioning-&-Evac.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Air-Conditioning-&-Evac</h2>
              <p>
                Recovery is the process of taking the refrigerant out, not much
                or any oil is going to come with it, until the system pressure
                is 0. Vacuuming or evacuation is removing all gasses until the
                system
              </p>
            </div>
          </div>

          <div className="card shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="assets/image-gallery/Air-Conditioning-&-Evac.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Air-Conditioning-&-Evac</h2>
              <p>
                Recovery is the process of taking the refrigerant out, not much
                or any oil is going to come with it, until the system pressure
                is 0. Vacuuming or evacuation is removing all gasses until the
                system
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AirExpertise
