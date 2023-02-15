import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Lottie from "lottie-react";
import org from "./org.json";

type Inputs = {
  email: string;
  password: string;
  name: string;
  photoURL: string;
  service: string;
  navigate: any;
  phone: number;
  nid: number;
  nationality: string;
  address: any;
};

const Organizer = () => {
  const { createSeller, errorSignUp } = useContext(AuthContext);
  const [selectedService, setSelectedService] = useState("");

  const { data: services = [] } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch(
        "https://engine-experts-server-phi.vercel.app/services"
      );
      const data = await res.json();
      return data.data;
    },
  });

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
          createSeller(
            data.email,
            data.password,
            data.name,
            imgUrl,
            data.service,
            navigate,
            data.phone,
            data.nid,
            data.nationality,
            data.address
          );
        }
      });
  };

  return (
    <section>
      <div className="mx-auto bg-[url('https://autohive-html.themetags.com/assets/img/shapes/texture-bg.png')] py-24 relative upper-section">
        <div className="grid grid-cols-2 absolute w-full top-0">
          <img src="/assets/tire-left.png" alt="" className="tyre" />
          <img src="/assets/tire-right.png" alt="" className="tyre" />
        </div>
        <div className="absolute top-0 grid place-items-center w-full h-full bg-black opacity-70">
          <h2 className="text-4xl font-bold text-center ">
            Sign Up as a Organizer
          </h2>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 mb-14 lg:h-screen px-4 md:px-8 lg:px-12">
        <div className="h-full w-full grid place-items-center ">
          <Lottie
            className="lg:w-full md:w-full sm:w-3/4"
            animationData={org}
          />
        </div>
        <div className="grid place-items-center h-full w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:w-[80%] mx-auto"
          >
            <div className="w-full">
              <label className="label">
                <span className="label-text text-black text-lg">Name</span>
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
            <div className="flex items-center gap-3">
              <div className="w-full">
                <label className="label">
                  <span className="label-text text-black text-lg">Email</span>
                </label>
                <input
                  type="email"
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
                  <span className="label-text text-black text-lg">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your address..."
                  {...register("address", {
                    required: "Address is required",
                  })}
                  className="w-full h-[50px] rounded bg-white px-2 text-black"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-full">
                <label className="label">
                  <span className="label-text text-black text-lg">
                    Select your expertise service
                  </span>
                </label>
                {/* <input
                  type="text"
                  defaultValue="Seller"
                  readOnly
                  {...register("role", {
                    required: "Role is required",
                  })}
                  className="w-full h-[50px] font-bold text-center rounded bg-white px-2 text-black"
                />
                {errors.role && (
                  <p className="text-red-600">{errors.role?.message}</p>
                )} */}
                <select
                  className="h-[50px] w-[168%] lg:w-full rounded px-3 bg-white text-black"
                  {...register("service", {
                    required: "Service Name is required",
                  })}
                  placeholder="Select Service"
                  onBlur={(e: any) => setSelectedService(e.target.value)}
                >
                  {services?.map((service: any, i: any) => (
                    <option key={i} value={service?.name}>{service?.name}</option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-red-600">{errors.service?.message}</p>
                )}
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="label-text text-black text-lg">
                    Phone Number
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your valid Phone number"
                  {...register("phone", {
                    required: "phone number is required",
                  })}
                  className="w-full h-[50px] rounded bg-white px-2 text-black"
                />
                {errors.phone && (
                  <p className="text-red-600">{errors.phone?.message}</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-full">
                <label className="label">
                  <span className="label-text text-black text-lg">
                    Nationality
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Nationality"
                  {...register("nationality", {
                    required: "nationality is required",
                  })}
                  className="w-full h-[50px] rounded bg-white px-2 text-black"
                />
                {errors.nationality && (
                  <p className="text-red-600">{errors.nationality?.message}</p>
                )}
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="label-text text-black text-lg">
                    NID Number
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your valid National Id no."
                  {...register("nid", {
                    required: "nid is required",
                  })}
                  className="w-full h-[50px] rounded bg-white px-2 text-black"
                />
                {errors.nid && (
                  <p className="text-red-600">{errors.nid?.message}</p>
                )}
              </div>
            </div>

            <div className="w-full">
              <label className="label">
                <span className="label-text text-black text-lg">
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
                <span className="label-text text-black text-lg">Password</span>
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
            <div className="mt-4">
              <button className="signupBtn w-full font-semibold">
                Sign Up
              </button>
            </div>
            {errorSignUp && <p className="text-red-600 mt-2">{errorSignUp}</p>}
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

export default Organizer;
