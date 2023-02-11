import React, { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import "./Login.css";

type Inputs = {
  email: string;
  password: string;
  navigate: any;
};

const Login = () => {
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const { signIn, googleSignIn, errorSignUp } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    signIn(data.email, data.password, navigate, from);
  };

  const googleLogin = () => {
    googleSignIn(navigate, from);
  };

  return (
    <section className="">
      <div className="mx-auto bg-[url('https://autohive-html.themetags.com/assets/img/shapes/texture-bg.png')] py-24 relative upper-section">
        <div className="grid grid-cols-2 absolute w-full top-0">
          <img src="/assets/tire-left.png" alt="" className="tyre" />
          <img src="/assets/tire-right.png" alt="" className="tyre" />
        </div>
        <div className="absolute top-0 grid place-items-center w-full h-full bg-black opacity-70">
          <h2 className="text-4xl font-bold text-center text-white ">Login</h2>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 mb-14 lg:h-screen px-4 md:px-8 lg:px-12">
        <div className="h-full w-full grid place-items-center">
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
                <span className="label-text text-black text-xl">Email</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name..."
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
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
              <label className="label">
                <span className="label-text text-black cursor-pointer">Forget Password?</span>
              </label>
            </div>
            <div className="w-full grid lg:grid-cols-2 gap-6 mt-3">
            <button className="loginBtn w-full font-semibold">Login</button>
              <button
                onClick={googleLogin}
                className="w-full hover:bg-black hover:text-white rounded border flex items-center text-black font-semibold"
              >
                <FcGoogle className="text-2xl mx-2"></FcGoogle> CONTINUE WITH GOOGLE
              </button>
            </div>
            {errorSignUp && <p className="text-red-600 mt-2">{errorSignUp}</p>}
            <p className="mt-3 text-black">
              New to Engine Experts?
              <Link className="text-orange-500 ml-2" to="/signup">Create new Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
