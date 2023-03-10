import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

type Inputs = {
  email: string;
  password: string;
  name: string;
  photoURL: string;
  // role: string;
};

const SignUp = () => {
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const { createUser, googleSignIn, errorSignUp } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();

  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const image = data.photoURL[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const imgUrl = imgData.data.url;
          createUser(data.email, data.password, data.name, imgUrl, navigate);
        }
      });
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
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>

            <div className="w-full">
              <label className="label">
                <span className="label-text text-black text-xl">
                  Upload Image
                </span>
              </label>
              <input
                type="file"
                {...register("photoURL", {
                  required: "photoURL is required",
                })}
                className="file-input file-input-bordered w-full bg-white text-black"
              />
              {errors.photoURL && (
                <p className="text-red-600">{errors.photoURL?.message}</p>
              )}
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text text-black text-xl">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password (a-z A-Z 0-9)"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^[a-zA-Z0-9]{8,}$/,
                    message:
                      "provide ( small, capital letter and number ) at least 8 digit. example( (a-z A-Z 0-9) )",
                  },
                })}
                className="w-full h-[50px] bg-white rounded text-black px-2"
                required
              />
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>
            <div className="w-full grid lg:grid-cols-2 gap-6 mt-4">
              <button className="signupBtn w-full font-semibold">
                Sign Up
              </button>
              <button
                onClick={googleLogin}
                className="w-full h-[50px] hover:bg-black hover:text-white rounded border flex items-center font-semibold text-black"
              >
                <FcGoogle className="text-2xl mx-2 "></FcGoogle> CONTINUE WITH
                GOOGLE
              </button>
            </div>
            {errorSignUp && <p className="text-red-600 mt-2">{errorSignUp}</p>}
            <p className="mt-3 text-black">
              Already have an account?
              <Link className="text-orange-500 ml-2" to="/login">
                Sign In
              </Link>
            </p>
            <p className="mt-3 font-bold text-lg text-black border py-3 bg-gray-200">
              Become a Seller?
              <Link className="text-orange-500 ml-2" to="/organizer">
                Click here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
