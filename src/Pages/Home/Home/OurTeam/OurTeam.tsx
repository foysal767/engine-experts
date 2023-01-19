import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./OurTeam.css";

const OurTeam = () => {
  return (
    <section className="font-poppins w-full lg:px-20 md:px-8 px-4 mt-36">
      <h1 className="font-poppins text-center text-3xl font-bold mb-12">
        Our Team
      </h1>
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-3">
        {/* first card start */}
        <div className="w-full h-[440px] p-1 shadow-xl image_wrapper">
          <div className="w-full h-[80%] relative">
            <img src="assets/team/arif.jpg" alt="" className="w-full h-full" />
            <div className="w-full h-full absolute top-0 bg-[#a46c70] overlay_5  opacity-50"></div>
            <div className="w-full h-full absolute top-0 flex justify-center items-center gap-3 text-3xl overlay_5">
              <FaFacebook></FaFacebook>
              <FaGithub></FaGithub>
              <FaLinkedinIn></FaLinkedinIn>
              <FaTwitter></FaTwitter>
            </div>
          </div>
          <div className="text-start px-4 mt-4">
            <h1 className="text-2xl font-semibold">Ariful islam</h1>
            <h2>Engine Experts</h2>
          </div>
        </div>

        {/* first card start */}
        <div className="w-full h-[440px] p-1 shadow-xl image_wrapper">
          <div className="w-full h-[80%] relative">
            <img
              src="assets/team/faysal.png"
              alt=""
              className="w-full h-full"
            />
            <div className="w-full h-full absolute top-0 bg-gray-700 overlay_5  opacity-30"></div>
            <div className="w-full h-full absolute top-0 flex justify-center items-center gap-3 text-3xl overlay_5 text-[#E81C2E]">
              <FaFacebook></FaFacebook>
              <FaGithub></FaGithub>
              <FaLinkedinIn></FaLinkedinIn>
              <FaTwitter></FaTwitter>
            </div>
          </div>
          <div className="text-start px-4 mt-4">
            <h1 className="text-2xl font-semibold">Faysal Uddin</h1>
            <h2>Team Leder</h2>
          </div>
        </div>

        {/* first card start */}
        <div className="w-full h-[440px] p-1 shadow-xl image_wrapper">
          <div className="w-full h-[80%] relative">
            <img src="assets/team/arif.jpg" alt="" className="w-full h-full" />
            <div className="w-full h-full absolute top-0 bg-gray-700 overlay_5  opacity-30"></div>
            <div className="w-full h-full absolute top-0 flex justify-center items-center gap-3 text-3xl overlay_5">
              <FaFacebook></FaFacebook>
              <FaGithub></FaGithub>
              <FaLinkedinIn></FaLinkedinIn>
              <FaTwitter></FaTwitter>
            </div>
          </div>
          <div className="text-start px-4 mt-4">
            <h1 className="text-2xl font-semibold">Ariful islam</h1>
            <h2>Engine Experts</h2>
          </div>
        </div>

        {/* first card start */}
        <div className="w-full h-[440px] p-1 shadow-xl image_wrapper">
          <div className="w-full h-[80%] relative">
            <img src="assets/team/arif.jpg" alt="" className="w-full h-full" />
            <div className="w-full h-full absolute top-0 bg-gray-700 overlay_5  opacity-30"></div>
            <div className="w-full h-full absolute top-0 flex justify-center items-center gap-3 text-3xl overlay_5">
              <FaFacebook></FaFacebook>
              <FaGithub></FaGithub>
              <FaLinkedinIn></FaLinkedinIn>
              <FaTwitter></FaTwitter>
            </div>
          </div>
          <div className="text-start px-4 mt-4">
            <h1 className="text-2xl font-semibold">Ariful islam</h1>
            <h2>Engine Experts</h2>
          </div>
        </div>

        {/* first card start */}
        <div className="w-full h-[440px] p-1 shadow-xl image_wrapper">
          <div className="w-full h-[80%] relative">
            <img src="assets/team/arif.jpg" alt="" className="w-full h-full" />
            <div className="w-full h-full absolute top-0 bg-gray-700 overlay_5  opacity-30"></div>
            <div className="w-full h-full absolute top-0 flex justify-center items-center gap-3 text-3xl overlay_5">
              <FaFacebook></FaFacebook>
              <FaGithub></FaGithub>
              <FaLinkedinIn></FaLinkedinIn>
              <FaTwitter></FaTwitter>
            </div>
          </div>
          <div className="text-start px-4 mt-4">
            <h1 className="text-2xl font-semibold">Ariful islam</h1>
            <h2>Engine Experts</h2>
          </div>
        </div>

        {/* first card start */}
        <div className="w-full h-[440px] p-1 shadow-xl image_wrapper">
          <div className="w-full h-[80%] relative">
            <img src="assets/team/arif.jpg" alt="" className="w-full h-full" />
            <div className="w-full h-full absolute top-0 bg-gray-700 overlay_5  opacity-30"></div>
            <div className="w-full h-full absolute top-0 flex justify-center items-center gap-3 text-3xl overlay_5">
              <FaFacebook></FaFacebook>
              <FaGithub></FaGithub>
              <FaLinkedinIn></FaLinkedinIn>
              <FaTwitter></FaTwitter>
            </div>
          </div>
          <div className="text-start px-4 mt-4">
            <h1 className="text-2xl font-semibold">Ariful islam</h1>
            <h2>Engine Experts</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
