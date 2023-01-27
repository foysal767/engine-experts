import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorCar from "./errorCar.json";
import Lottie from "lottie-react";
import { AiFillHome } from 'react-icons/ai';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    //@ts-ignore
    <div className="w-1/2 mx-auto mt-20">
      <h1 className="text-black text-4xl font-extrabold">Ops! An Error Ocurred!</h1>
      <br />
      {error && (
        <div className=" text-center">
           {/* @ts-ignore */}
          <p className="text-red-500 text-5xl font-extrabold">{error.status}</p>
          <p className="text-2xl font-bold text-red-500 mt-3">
            {/* @ts-ignore */}
            {error.statusText || error.message}
          </p>
          <p className="text-3xl font-poppins mt-10 flex justify-center"><Link to={'/'}><span className="getbtn">Go to Home</span></Link></p>
        </div>
      )}
      <Lottie className="" animationData={errorCar} />
      
    </div>
  );
};

export default ErrorPage;
