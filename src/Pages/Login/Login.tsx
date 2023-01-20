
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import React, { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
// import swal from "sweetalert";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

type Inputs = {
  email: string,
  password: string,
};


const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  
  const onSubmit: SubmitHandler<Inputs> = data => {
    signIn(data.email, data.password, navigate)
  }

  const googleLogin  = () =>{
    googleSignIn(navigate)
  }

  return (
    <div className="h-[800px] flex justify-center">
      <div className="w-96 p-7">
        <h2 className="text-2xl font-bold text-center">Login</h2>
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
          <input
            className="btn btn-primary w-full"
            value="Login"
            type="submit"
          />
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>
        <p className="mt-3">
          New to Engine Experts?{" "}
          <Link className="text-orange-500" to="/signup">
            Create new Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={googleLogin} className="btn btn-outline w-full"><FcGoogle className="text-2xl mx-2"></FcGoogle> CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
