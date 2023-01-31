import { Link, Outlet } from "react-router-dom";
import "./AdminDeshboard.css";

const AdminDeshboard1 = () => {
  return (
    <main className="bg-[#EBF2F4] text-black w-full">
      <section className="w-full h-[80vh] relative mb-8 lg:mb-28">
        <div className="w-full h-[80vh] adminbanner absolute top-0"></div>
        <div className="absolute top-0 w-full h-[7vh] lg:h-[13vh] border-b-2 border-slate-400 px-4 md:px-8 lg:px-12 flex justify-between items-center">
          <Link to={"/"}>
            <h1 className="text-2xl lg:text-4xl font-semibold text-white">
              Engine Experts
            </h1>
          </Link>
          <h2 className="text-2xl text-white">LogOut</h2>
        </div>
        <div className="w-full absolute top-24 lg:top-28">
          <div className="w-full lg:w-[80%] mx-auto flex justify-between items-center gap-4 lg:mt-8 px-3 lg:px-0">
            <h1 className="text-start text-sm font-poppins text-slate-300">
              Total Revenue <br />
              <span className="text-2xl lg:text-3xl">2100$</span>
            </h1>
            <h1 className="text-start text-sm font-poppins text-slate-300">
              Total Revenue <br />
              <span className="text-2xl lg:text-3xl">210$</span>
            </h1>
            <h1 className="text-start text-sm font-poppins text-slate-300">
              Total Revenue <br />
              <span className="text-2xl lg:text-3xl">1500$</span>
            </h1>
            <h1 className="text-start text-sm font-poppins text-slate-300">
              Total Revenue <br />
              <span className="text-2xl lg:text-3xl">900$</span>
            </h1>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-[80%] mx-auto mt-16 lg:mt-28">
            {/* Card one start from here */}
            <div className="maincard bg-[#DFF6E5] h-[180px] rounded-lg hover:-skew-y-12 relative transition duration-700">
              <Link to={"/dashboard1"}>
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
                    <h1 className="text-2xl text-start font-poppins">15</h1>
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
                    <h1 className="text-2xl text-start font-poppins">190</h1>
                  </div>
                </div>
              </Link>
              <div className="droping w-full h-full absolute bg-[#7E9EAE] rounded-lg items-end justify-center p-1 transition duration-700">
                <h1 className="text-sm font-poppins text-center">All Users</h1>
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
                    <h1 className="text-2xl text-start font-poppins">01</h1>
                  </div>
                </div>
              </Link>
              <div className="droping w-full h-full absolute bg-[#7E9EAE] rounded-lg items-end justify-center p-1 transition duration-700">
                <h1 className="text-sm font-poppins text-center">
                  Add Campaign
                </h1>
              </div>
            </div>
            {/* Card one start from here */}
            <div className="maincard bg-[#DFF6E5] h-[180px] rounded-lg hover:-skew-y-12 relative transition duration-700">
              <Link to={"/dashboard1/allorders1"}>
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
                      All Orders
                    </h2>
                    <h1 className="text-2xl text-start font-poppins">130</h1>
                  </div>
                </div>
              </Link>
              <div className="droping w-full h-full absolute bg-[#7E9EAE] rounded-lg items-end justify-center p-1 transition duration-700">
                <h1 className="text-sm font-poppins text-center">All Orders</h1>
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
