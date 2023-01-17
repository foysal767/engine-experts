import { BsFillHeartFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import "./PopularService.css";

const PopularService = () => {
  return (
    <section>
      <h2 className="font-poppins text-center text-5xl font-bold my-14">
        Popular Services
      </h2>
      <div className="w-full lg:h-[85vh] p-5 bg-[#161616] mt-10">
        <div className="lg:h-[88%] w-full grid lg:grid-cols-4 md:grid-cols-2 gap-3 items-center">
          {/* Card one start form here */}

          <div className=" h-[440px] text-start relative overflow-hidden shadow-2xl  mb-3 lg:mb-0 maincard">
            <div className="h-[65%] w-full bg-[#121212] grid place-items-center">
              <img
                src="assets/product.png"
                alt=""
                className="w-[70%] h-[70%]"
              />
              <div className="w-full h-[65%] absolute left-[102%] top-0 p-5 py-12 text-4xl flex flex-col gap-3 items-end overlay">
                <BsFillHeartFill className="bg-[#D16527] p-2 text-center cursor-pointer"></BsFillHeartFill>
                <label htmlFor="my-modal-3">
                  <AiFillEye className="bg-[#D16527] p-2 text-center cursor-pointer"></AiFillEye>
                </label>

                {/* <BsFillHeartFill className="bg-[#D16527] p-2 text-center"></BsFillHeartFill> */}
              </div>
            </div>

            <div className="mx-2 mt-5 text-2xl flex flex-col gap-3">
              <h1>Silent Block 10-75mm</h1>
              <h2>HSP</h2>
              <h1 className="w-full">
                <span>$20.00</span>
              </h1>
            </div>
          </div>

          {/* Card two start form here */}
          <div className=" h-[440px] text-start relative overflow-hidden shadow-2xl mb-3 lg:mb-0 maincard">
            <div className="h-[65%] w-full bg-[#121212] grid place-items-center">
              <img
                src="assets/product.png"
                alt=""
                className="w-[70%] h-[70%]"
              />
              <div className="w-full h-[65%] absolute left-[102%] top-0 p-5 py-12 text-4xl flex flex-col gap-3 items-end overlay">
                <BsFillHeartFill className="bg-[#D16527] p-2 text-center"></BsFillHeartFill>
                <AiFillEye className="bg-[#D16527] p-2 text-center"></AiFillEye>
                {/* <BsFillHeartFill className="bg-[#D16527] p-2 text-center"></BsFillHeartFill> */}
              </div>
            </div>

            <div className="mx-2 mt-5 text-2xl flex flex-col gap-3">
              <h1>Silent Block 10-75mm</h1>
              <h2>HSP</h2>
              <h1 className="w-full">
                <span>$20.00</span>
              </h1>
            </div>
          </div>

          {/* Card three start form here */}
          <div className=" h-[440px] text-start relative overflow-hidden shadow-2xl mb-3 lg:mb-0 maincard">
            <div className="h-[65%] w-full bg-[#121212] grid place-items-center">
              <img
                src="assets/product.png"
                alt=""
                className="w-[70%] h-[70%]"
              />
              <div className="w-full h-[65%] absolute left-[102%] top-0 p-5 py-12 text-4xl flex flex-col gap-3 items-end overlay">
                <BsFillHeartFill className="bg-[#D16527] p-2 text-center"></BsFillHeartFill>
                <AiFillEye className="bg-[#D16527] p-2 text-center"></AiFillEye>
                {/* <BsFillHeartFill className="bg-[#D16527] p-2 text-center"></BsFillHeartFill> */}
              </div>
            </div>

            <div className="mx-2 mt-5 text-2xl flex flex-col gap-3">
              <h1>Silent Block 10-75mm</h1>
              <h2>HSP</h2>
              <h1 className="w-full">
                <span>$20.00</span>
              </h1>
            </div>
          </div>

          {/* Card three start form here */}
          <div className=" h-[440px] text-start relative overflow-hidden shadow-2xl mb-3 lg:mb-0 maincard">
            <div className="h-[65%] w-full bg-[#121212] grid place-items-center">
              <img
                src="assets/product.png"
                alt=""
                className="w-[70%] h-[70%]"
              />
              <div className="w-full h-[65%] absolute left-[102%] top-0 p-5 py-12 text-4xl flex flex-col gap-3 items-end overlay">
                <BsFillHeartFill className="bg-[#D16527] p-2 text-center"></BsFillHeartFill>
                <AiFillEye className="bg-[#D16527] p-2 text-center"></AiFillEye>
                {/* <BsFillHeartFill className="bg-[#D16527] p-2 text-center"></BsFillHeartFill> */}
              </div>
            </div>

            <div className="mx-2 mt-5 text-2xl flex flex-col gap-3">
              <h1>Silent Block 10-75mm</h1>
              <h2>HSP</h2>
              <h1 className="w-full">
                <span>$20.00</span>
              </h1>
            </div>
          </div>
        </div>
        {/* details modal */}

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative max-w-5xl">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div className="grid lg:grid-cols-2 md:grid-cols-2">
              <img
                src="assets/product.png"
                alt=""
                className="lg:w-3/4 mx-auto md:w-full md:my-auto"
              />
              <div className="text-left">
                <h2 className="text-4xl font-extrabold mt-5 mb-3">
                  Silent Block 10-75mm
                </h2>
                <h2 className="text-4xl font-extrabold mb-5">HSP</h2>
                <div className="flex mb-5 text-primary">
                  <BsFillStarFill className=""></BsFillStarFill>
                  <BsFillStarFill className="ml-2"></BsFillStarFill>
                  <BsFillStarFill className="ml-2"></BsFillStarFill>
                  <BsFillStarFill className="ml-2"></BsFillStarFill>
                  <BsFillStarFill className="ml-2"></BsFillStarFill>
                </div>
                <h2 className="text-xl font-bold">
                  Price: $<span>20.00</span>
                </h2>
                <p className="py-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi ducimus minima, ratione labore nam tempore animi
                  doloremque id sapiente aliquid.
                </p>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularService;
