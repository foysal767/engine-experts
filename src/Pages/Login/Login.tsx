import React, { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
// import swal from "sweetalert";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import "./Login";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    signIn(data.email, data.password, navigate);
  };

  const googleLogin = () => {
    googleSignIn(navigate);
  };

  return (
    <section className="">
      <div className="mx-auto bg-[url('https://autohive-html.themetags.com/assets/img/shapes/texture-bg.png')] py-24 relative upper-section">
        <div className="grid grid-cols-2 absolute w-full top-0">
          <img
            src="https://autohive-html.themetags.com/assets/img/shapes/tire-print-left.png"
            alt=""
            className="tyre"
          />
          <img
            src="https://autohive-html.themetags.com/assets/img/shapes/tire-print-right.png"
            alt=""
            className="tyre"
          />
        </div>
        <div className="absolute top-0 grid place-items-center w-full h-full">
          <h2 className="text-2xl font-bold text-center ">Login</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-14 h-screen px-4 md:px-8 lg:px-12">
        <div className="text-center mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters or longer",
                  },
                })}
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {" "}
                <span className="label-text">Forget Password?</span>
              </label>
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>
            <div>
              <input className="btn btn-primary" value="Login" type="submit" />
              {loginError && <p className="text-red-600">{loginError}</p>}
            </div>
          </form>
          <button onClick={googleLogin} className="btn btn-outline w-full mt-6">
            <FcGoogle className="text-2xl mx-2"></FcGoogle> CONTINUE WITH GOOGLE
          </button>
          <p className="mt-3">
            New to Engine Experts?{" "}
            <Link className="text-orange-500" to="/signup">
              Create new Account
            </Link>
          </p>
        </div>
        <div>
          <img
            src="https://autohive-html.themetags.com/assets/img/login-illustration.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
