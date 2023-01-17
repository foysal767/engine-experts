import { BsFillHeartFill } from "react-icons/bs";
import "./PopularService.css";

const PopularService = () => {
  return (
    <section className="w-full lg:h-[85vh] p-5 bg-[#161616] mt-10">
      <h1 className="text-4xl font-semibold mb-5">Popular service section</h1>
      <div className="lg:h-[88%] w-full grid lg:grid-cols-4 gap-3  items-center">
        {/* Card one start form here */}

        <div className=" h-[440px] text-start relative overflow-hidden shadow-2xl  mb-3 lg:mb-0 maincard">
          <div className="h-[65%] w-full bg-[#121212] grid place-items-center">
            <img src="assets/product.png" alt="" className="w-[70%] h-[70%]" />
            <div className="w-full h-[65%] absolute left-[102%] top-0 p-5 py-12 text-4xl flex flex-col gap-3 items-end overlay">
              <BsFillHeartFill className="bg-[#D16527] p-2 text-center"></BsFillHeartFill>
              <BsFillHeartFill className="bg-[#D16527] p-2 text-center"></BsFillHeartFill>
              <BsFillHeartFill className="bg-[#D16527] p-2 text-center"></BsFillHeartFill>
            </div>
          </div>

          <div className="mx-2 mt-5 text-2xl flex flex-col gap-3">
            <h1>Silent Block 10-75mm</h1>
            <h2>HSP</h2>
            <h1 className="w-full flex justify-between">
              <span>$20.00</span>
              <span>ADD TO CART</span>
            </h1>
          </div>
        </div>

        {/* Card two start form here */}
        <div className=" h-[440px] text-start relative overflow-hidden shadow-2xl mb-3 lg:mb-0 maincard">
          <div className="h-[65%] w-full bg-[#121212] grid place-items-center">
            <img src="assets/product.png" alt="" className="w-[70%] h-[70%]" />
            <div className="w-full h-[65%] absolute left-[102%] top-0 p-5 py-12 text-4xl flex flex-col gap-3 items-end overlay">
              <BsFillHeartFill className="bg-[#D16527] p-2 text-center"></BsFillHeartFill>
              <BsFillHeartFill className="bg-[#D16527] p-2 text-center"></BsFillHeartFill>
              <BsFillHeartFill className="bg-[#D16527] p-2 text-center"></BsFillHeartFill>
            </div>
          </div>

          <div className="mx-2 mt-5 text-2xl flex flex-col gap-3">
            <h1>Silent Block 10-75mm</h1>
            <h2>HSP</h2>
            <h1 className="w-full flex justify-between">
              <span>$20.00</span>
              <span>ADD TO CART</span>
            </h1>
          </div>
        </div>

        {/* Card three start form here */}
        <div className=" h-[440px] text-start relative overflow-hidden shadow-2xl mb-3 lg:mb-0 maincard">
          <div className="h-[65%] w-full bg-[#121212] grid place-items-center">
            <img src="assets/product.png" alt="" className="w-[70%] h-[70%]" />
            <div className="w-full h-[65%] absolute left-[102%] top-0 p-5 py-12 text-4xl flex flex-col gap-3 items-end overlay">
              <BsFillHeartFill className="bg-[#D16527] p-2 text-center"></BsFillHeartFill>
              <BsFillHeartFill className="bg-[#D16527] p-2 text-center"></BsFillHeartFill>
              <BsFillHeartFill className="bg-[#D16527] p-2 text-center"></BsFillHeartFill>
            </div>
          </div>

          <div className="mx-2 mt-5 text-2xl flex flex-col gap-3">
            <h1>Silent Block 10-75mm</h1>
            <h2>HSP</h2>
            <h1 className="w-full flex justify-between">
              <span>$20.00</span>
              <span>ADD TO CART</span>
            </h1>
          </div>
        </div>

        {/* Card three start form here */}
        <div className=" h-[440px] text-start relative overflow-hidden shadow-2xl mb-3 lg:mb-0 maincard">
          <div className="h-[65%] w-full bg-[#121212] grid place-items-center">
            <img src="assets/product.png" alt="" className="w-[70%] h-[70%]" />
            <div className="w-full h-[65%] absolute left-[102%] top-0 p-5 py-12 text-4xl flex flex-col gap-3 items-end overlay">
              <BsFillHeartFill className="bg-[#D16527] p-2 text-center"></BsFillHeartFill>
              <BsFillHeartFill className="bg-[#D16527] p-2 text-center"></BsFillHeartFill>
              <BsFillHeartFill className="bg-[#D16527] p-2 text-center"></BsFillHeartFill>
            </div>
          </div>

          <div className="mx-2 mt-5 text-2xl flex flex-col gap-3">
            <h1>Silent Block 10-75mm</h1>
            <h2>HSP</h2>
            <h1 className="w-full flex justify-between">
              <span>$20.00</span>
              <span>ADD TO CART</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularService;
