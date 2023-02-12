import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorCar from "./errorCar.json";
import Lottie from "lottie-react";
import "./ErrorPage.css"

const ErrorPage = () => {
  const error = useRouteError();
  return (
    //@ts-ignore
    <div className="w-1/2 mx-auto">
      <h1 className="text-black text-4xl lg:font-extrabold font-bold pt-4">Ops! An Error Ocurred!</h1>
      <br />
      {error && (
        <div className=" text-center">
           {/* @ts-ignore */}
          <p className="text-red-500 text-5xl font-extrabold">{error.status}</p>
          <p className="text-2xl font-bold text-red-500 mt-3">
            {/* @ts-ignore */}
            {error.statusText || error.message}
          </p>
          <p className="lg:text-xl font-poppins mt-10 flex justify-center"><Link to={'/'}><span className="px-3 py-2 errBtn">Go to Home</span></Link></p>
        </div>
      )}
      <Lottie className="" animationData={errorCar} />
      
    </div>
  );
};

export default ErrorPage;
