import {
  FaEnvelope,
  FaLinkedinIn,
  FaPhoneVolume,
  FaWhatsapp,
} from "react-icons/fa"
const ElectricCar = () => {
  return (
    <section>
      <div className="my-20 flex flex-col md:flex-row gap-8 px-10">
        <div className="sideBar text-black border-2 basis-3/12 bg-green-100 p-4 scroll-my-16 sticky">
          <img className="rounded-lg" src="assets/team/javed.jpg" alt="" />
          <div className="flex justify-around text-2xl text-gray-700 font-bold mb-2">
            <h1>Name:</h1>
            <span>Sheik Jabed</span>
          </div>
          <hr className="border border-red-500 mb-2" />
          <p className="text-xl text-gray-600">
            Hi! I am Sheik Jabed. I am a Motor Expertise. I am in
            Air-Conditioning-&-Evac Spacialist. And also I am in senior excutive
            of engine expertise team.
          </p>
          <div className="contactInfo mt-8">
            <span className="text-3xl text-gray-600 font-bold">
              Contact Info
            </span>
            <hr className="border border-red-500 mb-4" />
            <div className=" flex flex-col md:flex-row text-justify md:justify-around">
              <div className="flex gap-1 items-center">
                <FaEnvelope className="text-amber-400"></FaEnvelope>
                <span className="text-xl text-gray-600">Email:</span>
              </div>
              <span className="text-xl text-gray-600">
                sheikjabedali24@gmail.com
              </span>
            </div>
            <div className=" flex flex-col md:flex-row text-justify md:justify-around">
              <div className="flex gap-1 items-center">
                <FaLinkedinIn className="text-blue-800"></FaLinkedinIn>
                <span className="text-xl text-gray-600">Linkedin:</span>
              </div>
              <span className="text-xl text-gray-600">
                Go to Linekdin Profile
              </span>
            </div>
            <div className="flex flex-col md:flex-row text-justify md:justify-around">
              <div className="flex gap-1 items-center">
                <FaPhoneVolume className="text-green-600"></FaPhoneVolume>
                <span className="text-xl text-gray-600">Phone:</span>
              </div>
              <span className="text-xl text-gray-600">
                +88 017 22 262041/42/43
              </span>
            </div>
            <div className="flex flex-col md:flex-row text-justify md:justify-around">
              <div className="flex gap-1 items-center">
                <FaWhatsapp className="text-blue-900"></FaWhatsapp>
                <span className="text-xl text-gray-600">Whats App:</span>
              </div>
              <span className="text-xl text-gray-600">Foysaluddin9867</span>
            </div>
            <div className="mt-8">
              <span className="text-3xl text-gray-600 font-bold">
                Home Address
              </span>
            </div>
            <hr className="border border-red-500 mb-4" />
            <div className="text-xl text-gray-600 mb-8">
              <p>MD. Sheik Jabed</p>
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
        <div className="rightBar basis-9/12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 scroll-my-8">
            <div className="bg-red-50 p-4 rounded-md shadow-md">
              <img
                className="rounded-lg"
                src="assets/image-gallery/Break-Repair-&-Service.jpg"
                alt=""
              />
              <p className="text-gray-700 text-justify font-semibold mt-2">
                All electric cars have some form of regenerative braking, which
                uses the electric motor to slow the vehicle whilst putting some
                electricity back into the battery. Braking becomes more
                efficient, placing less wear and tear on the brakes. Brake disks
                and pads still need maintaining but this needs to be done less
                often, saving you money
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded-md shadow-md">
              <img
                className="rounded-lg"
                src="assets/image-gallery/Engine-Service-&-Repair.jpg"
                alt=""
              />
              <p className="text-gray-700 text-justify font-semibold mt-2">
                Performed electronic scan of the cars eletronic system
                monitoring including report on status of hybrid battery cell by
                cell. Performed high performance test drive for detecting fault
                with suspension, gearbox, engine and breakes. Performed thorough
                visual inspection of car body including edges and weilding of
                body panels plus undercar visual inspection to detect accident
                history. I'm satisfied with the service.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded-md shadow-md">
              <img
                className="rounded-lg"
                src="assets/image-gallery/HovenHorn.jpg"
                alt=""
              />
              <p className="text-gray-700 text-justify font-semibold mt-2">
                Performed electronic scan of the cars eletronic system
                monitoring including report on status of hybrid battery cell by
                cell. Performed high performance test drive for detecting fault
                with suspension, gearbox, engine and breakes. Performed thorough
                visual inspection of car body including edges and weilding of
                body panels plus undercar visual inspection to detect accident
                history. I'm satisfied with the service.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded-md shadow-md">
              <img
                className="rounded-lg"
                src="assets/image-gallery/Transmission-Service-&-Repair.jpg"
                alt=""
              />
              <p className="text-gray-700 text-justify font-semibold mt-2">
                Performed electronic scan of the cars eletronic system
                monitoring including report on status of hybrid battery cell by
                cell. Performed high performance test drive for detecting fault
                with suspension, gearbox, engine and breakes. Performed thorough
                visual inspection of car body including edges and weilding of
                body panels plus undercar visual inspection to detect accident
                history. I'm satisfied with the service.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded-md shadow-md">
              <img
                className="rounded-lg"
                src="assets/image-gallery/Ring-Piston.jpg"
                alt=""
              />
              <p className="text-gray-700 text-justify font-semibold mt-2">
                Performed electronic scan of the cars eletronic system
                monitoring including report on status of hybrid battery cell by
                cell. Performed high performance test drive for detecting fault
                with suspension, gearbox, engine and breakes. Performed thorough
                visual inspection of car body including edges and weilding of
                body panels plus undercar visual inspection to detect accident
                history. I'm satisfied with the service.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded-md shadow-md">
              <img
                className="rounded-lg"
                src="assets/image-gallery/Air-Conditioning-&-Evac.jpg"
                alt=""
              />
              <p className="text-gray-700 text-justify font-semibold mt-2">
                Performed electronic scan of the cars eletronic system
                monitoring including report on status of hybrid battery cell by
                cell. Performed high performance test drive for detecting fault
                with suspension, gearbox, engine and breakes. Performed thorough
                visual inspection of car body including edges and weilding of
                body panels plus undercar visual inspection to detect accident
                history. I'm satisfied with the service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ElectricCar
