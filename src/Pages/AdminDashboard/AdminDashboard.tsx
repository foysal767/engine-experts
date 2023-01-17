import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminDashboard = () => {
    return (
      <main>
        <div className="w-full h-[20vh] relative">
          <img
            src="/assets/dashboard.png"
            alt=""
            className="w-full h-full"
          />
          <div className="h-full w-full absolute top-0 grid place-items-center">
            <h1 className="text-6xl text-white font-semibold">
              Admin Dashboard
            </h1>
          </div>
        </div>
        <section className="lg:flex gap-5">
          <div className="lg:w-[25%] border flex flex-col gap-4 p-5">
            <Link to={"/dashboard/addservice"}>
              <button className="p-2 border text-2xl w-full">Add Service</button>
            </Link>

            <Link to={"/dashboard/allorders"}>
              <button className="p-2 border text-2xl w-full">All Orders</button>
            </Link>

            <Link to={"/dashboard/addcampaign"}>
              <button className="p-2 border text-2xl w-full">Add Campaign</button>
            </Link>

            <Link to={"/dashboard/alluser"}>
              <button className="p-2 border text-2xl w-full">All Users</button>
            </Link>

            <Link to={"/dashboard/allservice"}>
              <button className="p-2 border text-2xl w-full">All Service</button>
            </Link>
          </div>
          <Outlet></Outlet>
        </section>
      </main>
    );
};

export default AdminDashboard;