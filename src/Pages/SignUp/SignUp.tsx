import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css"
// import swal from "sweetalert";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

type Inputs = {
  email: string;
  password: string;
  name: string;
};

const SignUp = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();

  
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    createUser(data.email, data.password, navigate);
  };

  

  const googleLogin = () => {
    googleSignIn(navigate);
  };

  //onSubmit={handleSubmit(onSubmit)}

  return (
    <section className="">
      <div className="mx-auto bg-[url('https://autohive-html.themetags.com/assets/img/shapes/texture-bg.png')] py-24 relative upper-section">
        <div className="grid grid-cols-2 absolute w-full top-0">
          <img src="/assets/tire-left.png" alt="" className="tyre" />
          <img src="/assets/tire-right.png" alt="" className="tyre" />
        </div>
        <div className="absolute top-0 grid place-items-center w-full h-full bg-black opacity-70">
          <h2 className="text-4xl font-bold text-center ">Sign Up</h2>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 mb-14 lg:h-screen px-4 md:px-8 lg:px-12">
        <div className="h-full w-full grid place-items-center ">
          <img
            src="/assets/login image.png"
            alt=""
            className="h-[80%] w-[80%]"
          />
        </div>
        
        <div className="grid place-items-center h-full w-full">
          
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:w-[80%] mx-auto"
          >
            <div className="w-full">
              <label className="label">
                <span className="label-text text-black text-xl">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name..."
                {...register("name", {
                  required: "Name is required",
                })}
                className="w-full h-[50px] rounded bg-white px-2 text-black"
                required
              />
              {errors.name && (
                <p className="text-red-600">{errors.name?.message}</p>
              )}
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text text-black text-xl">Email</span>
              </label>
              <input
                type="text"
                placeholder="Enter your email..."
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="w-full h-[50px] rounded bg-white px-2 text-black"
                required
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text text-black text-xl">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password..."
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters or longer",
                  },
                })}
                className="w-full h-[50px] bg-white rounded text-black px-2"
                required
              />
              <label className="label">
                <span className="label-text text-black">Forget Password?</span>
              </label>
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>
            <div className="w-full grid lg:grid-cols-2 gap-3">
              <input
                className="bg-red-500 rounded w-full h-[50px] cursor-pointer font-semibold"
                value="Sign Up"
                type="submit"
              />
              <button
                onClick={googleLogin}
                className="w-full h-[50px] hover:bg-black hover:text-white rounded border flex items-center font-semibold text-black"
              >
                <FcGoogle className="text-2xl mx-2 "></FcGoogle> CONTINUE WITH
                GOOGLE
              </button>
            </div>
            <p className="mt-3 text-black">
              Already have an account?
              <Link className="text-orange-500 ml-2" to="/login">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
