import { Link, Outlet } from "react-router-dom";
import "./AdminDeshboard.css";

const AdminDeshboard1 = () => {
  return (
    <main className="bg-[#EBF2F4] text-black">
      <section className="w-full h-[80vh] relative mb-36">
        <div className="w-full h-[80vh] adminbanner absolute top-0"></div>
        <div className="absolute top-0 w-full h-[13vh] border-b-2 border-slate-400 px-4 md:px-8 lg:px-12 flex justify-between items-center">
          <h1 className="text-4xl font-semibold text-white">Engine Experts</h1>
          <h2 className="text-2xl text-white">LogOut</h2>
        </div>
        <div className="w-full absolute top-28">
          <div className="w-[80%] mx-auto flex justify-between items-center gap-4 mt-8">
            <h1 className="text-start text-sm font-poppins text-slate-300">
              Total Revenue <br /> <span className="text-3xl">2100$</span>
            </h1>
            <h1 className="text-start text-sm font-poppins text-slate-300">
              Total Revenue <br /> <span className="text-3xl">2100$</span>
            </h1>
            <h1 className="text-start text-sm font-poppins text-slate-300">
              Total Revenue <br /> <span className="text-3xl">2100$</span>
            </h1>
            <h1 className="text-start text-sm font-poppins text-slate-300">
              Total Revenue <br /> <span className="text-3xl">2100$</span>
            </h1>
          </div>
          <div className="grid lg:grid-cols-4 gap-4 w-[80%] mx-auto mt-28">
            {/* Card one start from here */}
            <div className="maincard bg-[#DFF6E5] h-[180px] rounded-lg hover:-skew-y-12 relative transition duration-700">
              <Link to={"/dashboard1/allservice1"}>
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
                      All Service
                    </h2>
                    <h1 className="text-2xl text-start font-poppins">1500</h1>
                  </div>
                </div>
              </Link>
              <div className="droping w-full h-full absolute bg-[#7E9EAE] rounded-lg items-end justify-center p-1 transition duration-700">
                <h1 className="text-sm font-poppins text-center">
                  All Service
                </h1>
              </div>
            </div>
            {/* Card one start from here */}
            <div className="maincard bg-[#DFF6E5] h-[180px] rounded-lg hover:-skew-y-12 relative transition duration-700">
              <Link to={"/dashboard1/addservice1"}>
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
                      Add Service
                    </h2>
                    <h1 className="text-2xl text-start font-poppins">1500</h1>
                  </div>
                </div>
              </Link>
              <div className="droping w-full h-full absolute bg-[#7E9EAE] rounded-lg items-end justify-center p-1 transition duration-700">
                <h1 className="text-sm font-poppins text-center">
                  Add Service
                </h1>
              </div>
            </div>
            {/* Card one start from here */}
            <div className="maincard bg-[#DFF6E5] h-[180px] rounded-lg hover:-skew-y-12 relative transition duration-700">
              <Link to={"/dashboard1/allusers1"}>
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
                      All Users
                    </h2>
                    <h1 className="text-2xl text-start font-poppins">1500</h1>
                  </div>
                </div>
              </Link>
              <div className="droping w-full h-full absolute bg-[#7E9EAE] rounded-lg items-end justify-center p-1 transition duration-700">
                <h1 className="text-sm font-poppins text-center">All users</h1>
              </div>
            </div>
            {/* Card one start from here */}
            <div className="maincard bg-[#DFF6E5] h-[180px] rounded-lg hover:-skew-y-12 relative transition duration-700">
              <Link to={"/dashboard1/addcampaign1"}>
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
                      Add Campaign
                    </h2>
                    <h1 className="text-2xl text-start font-poppins">1500</h1>
                  </div>
                </div>
              </Link>
              <div className="droping w-full h-full absolute bg-[#7E9EAE] rounded-lg items-end justify-center p-1 transition duration-700">
                <h1 className="text-sm font-poppins text-center">
                  Add Campaign
                </h1>
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
