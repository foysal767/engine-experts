import { Outlet } from "react-router-dom";
import "./AdminDeshboard.css";

const AdminDeshboard1 = () => {
  return (
    <main className="bg-[#EBF2F4] text-black">
      <section className="w-full h-[80vh] relative mb-32">
        <div className="w-full h-[80vh] adminbanner absolute top-0"></div>
        <div className="absolute top-0 w-full h-[13vh] border-b-2 border-slate-400"></div>
        <div className="w-full absolute top-36">
          <div className="w-[85%] mx-auto grid lg:grid-cols-4 gap-4 mt-8">
            <button className="px-3 py-4 bg-slate-300"> button1</button>
            <button className="px-3 py-4 bg-slate-300"> button1</button>
            <button className="px-3 py-4 bg-slate-300"> button1</button>
            <button className="px-3 py-4 bg-slate-300"> button1</button>
          </div>
          <div className="grid lg:grid-cols-4 gap-4 w-[80%] mx-auto mt-28">
            {/* Card one start from here */}
            <div className="maincard bg-[#DFF6E5] h-[180px] rounded-lg hover:-skew-y-12 relative transition duration-700">
              <div className="flex flex-col justify-between w-full h-full absolute top-0 left-0 z-10 bg-[#DFF6E5] rounded-lg p-8">
                <div className="flex justify-between items-center">
                  <button className="w-12 h-12 rounded-full bg-gray-200 text-center">
                    Xx
                  </button>
                  <button className="bg-gray-200 h-7 px-2 rounded-full">
                    growth
                  </button>
                </div>
                <div className="">
                  <h2 className="text-sm text-start font-poppins">
                    Total Users
                  </h2>
                  <h1 className="text-2xl text-start font-poppins">1500</h1>
                </div>
              </div>
              <div className="droping w-full h-full absolute bg-[#7E9EAE] rounded-lg items-end justify-center p-1 transition duration-700">
                <h1 className="text-sm font-poppins text-center">All users</h1>
              </div>
            </div>
            {/* Card one start from here */}
            <div className="maincard bg-[#DFF6E5] h-[180px] rounded-lg hover:-skew-y-12 relative transition duration-700">
              <div className="flex flex-col justify-between w-full h-full absolute top-0 left-0 z-10 bg-[#DFF6E5] rounded-lg p-8">
                <div className="flex justify-between items-center">
                  <button className="w-12 h-12 rounded-full bg-gray-200 text-center">
                    Xx
                  </button>
                  <button className="bg-gray-200 h-7 px-2 rounded-full">
                    growth
                  </button>
                </div>
                <div className="">
                  <h2 className="text-sm text-start font-poppins">
                    Total Users
                  </h2>
                  <h1 className="text-2xl text-start font-poppins">1500</h1>
                </div>
              </div>
              <div className="droping w-full h-full absolute bg-[#7E9EAE] rounded-lg items-end justify-center p-1 transition duration-700">
                <h1 className="text-sm font-poppins text-center">All users</h1>
              </div>
            </div>
            {/* Card one start from here */}
            <div className="maincard bg-[#DFF6E5] h-[180px] rounded-lg hover:-skew-y-12 relative transition duration-700">
              <div className="flex flex-col justify-between w-full h-full absolute top-0 left-0 z-10 bg-[#DFF6E5] rounded-lg p-8">
                <div className="flex justify-between items-center">
                  <button className="w-12 h-12 rounded-full bg-gray-200 text-center">
                    Xx
                  </button>
                  <button className="bg-gray-200 h-7 px-2 rounded-full">
                    growth
                  </button>
                </div>
                <div className="">
                  <h2 className="text-sm text-start font-poppins">
                    Total Users
                  </h2>
                  <h1 className="text-2xl text-start font-poppins">1500</h1>
                </div>
              </div>
              <div className="droping w-full h-full absolute bg-[#7E9EAE] rounded-lg items-end justify-center p-1 transition duration-700">
                <h1 className="text-sm font-poppins text-center">All users</h1>
              </div>
            </div>
            {/* Card one start from here */}
            <div className="maincard bg-[#DFF6E5] h-[180px] rounded-lg hover:-skew-y-12 relative transition duration-700">
              <div className="flex flex-col justify-between w-full h-full absolute top-0 left-0 z-10 bg-[#DFF6E5] rounded-lg p-8">
                <div className="flex justify-between items-center">
                  <button className="w-12 h-12 rounded-full bg-gray-200 text-center">
                    Xx
                  </button>
                  <button className="bg-gray-200 h-7 px-2 rounded-full">
                    growth
                  </button>
                </div>
                <div className="">
                  <h2 className="text-sm text-start font-poppins">
                    Total Users
                  </h2>
                  <h1 className="text-2xl text-start font-poppins">1500</h1>
                </div>
              </div>
              <div className="droping w-full h-full absolute bg-[#7E9EAE] rounded-lg items-end justify-center p-1 transition duration-700">
                <h1 className="text-sm font-poppins text-center">All users</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Outlet></Outlet>
    </main>
  );
};

export default AdminDeshboard1;
