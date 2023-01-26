import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { RiServiceFill } from "react-icons/ri";
import {  useParams } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

interface usedata {
  name: string;
  image: any;
  details: string;
  price: string;
  _id: string;
  Totalreviews: string;
  reviews: [];
}
interface reviewtype {
  email: string;
  feedback: string;
  map: any;
}
const ServiceDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState<usedata>();
  const [loading, setLoading] = useState<boolean>(true);
  const [reviews, setReviews] = useState<reviewtype>();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    const getDetail = async () => {
      const res = await fetch(
        `https://engine-experts-server-phi.vercel.app/servicedetails?id=${id}`
      );
      const data = await res.json();
      setDetails(data.data);
      setReviews(data.data.reviews);
      setLoading(false);
    };
    getDetail();
  }, [id, loading]);

  const giveFeedBack = (event: any) => {
    event.preventDefault();
    const feedback = event.target.feedback.value;
    const rating = event.target.rating.value;
    // console.log(feedback, rating, user.email, details?.name, details?._id);
    const feedbackObject = {
      email: user?.email || "User not found",
      feedback,
      rating,
    };
    fetch(
      `https://engine-experts-server-phi.vercel.app/servicedetails?id=${details?._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(feedbackObject),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Thanks for your feedback");
          setLoading(!loading);
          event.target.reset();
        }
      });
  };

  return (
    <section className="">

      {/* banner for service */}

      <div className="relative overflow-hidden">
        <img
          className="opacity-40"
          src="/assets/services-bg.jpg"
          alt="service-bg"
        />
        <div className="">
          <h2 className="flex font-poppins text-5xl mt-20 ml-10 font-bold absolute top-0 left-0">
            {details?.name}___
            <RiServiceFill className="text-[#E81C2E]"></RiServiceFill>            
          </h2>

          

        </div>
      </div>
      {/* end there */}

      <div className="lg:flex gap-10 w-full px-4 md:px-8 lg:px-12 mt-32">

        {/* -----------------Secvice Image-------------------- */}
        <div className=" flex-1 flex flex-col gap-5 text-xl mt-">
          <div className="w-full h-[400px] overflow-hidden">
            <img
              src={details?.image}
              alt=""
              className="w-full h-full hover:scale-110 transition-all duration-700"
            />
          </div>
          <h1 className="text-start px-2">{details?.details}</h1>

          {/* --------------Ul Li section-------------------- */}
          {/* <div className="flex justify-between gap-3 w-full px-8">
            <ul className="flex flex-col gap-3">
              <li>This is the Service 1</li>
              <li>This is the Service 1</li>
              <li>This is the Service 1</li>
              <li>This is the Service 1</li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li>This is the Service 1</li>
              <li>This is the Service 1</li>
              <li>This is the Service 1</li>
              <li>This is the Service 1</li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li>This is the Service 1</li>
              <li>This is the Service 1</li>
              <li>This is the Service 1</li>
              <li>This is the Service 1</li>
            </ul>
          </div> */}

          {/* ----------------Table starts from here------------ */}

        </div>

        <div className=" w-full flex flex-col gap-8 lg:w-[30%] p-2 ">

          {/* -------------Get Service---------- */}
          <div className="shadow-2xl py-8 px-10 text-start flex flex-col gap-3">

            <h1 className="text-3xl">GET SERVICE</h1>
            <div>
              <h2 className="text-xl">
                With quality parts to meet every budget and friendly staff
                trained to make your visit informative and hassle free.
              </h2>
            </div>
            <span className=" font-bold text-2xl">Price: {details?.price}</span>
            <button className="text-2xl font-semibold btn bg-[#E81C2E] text-white py-2">
              Get Service
            </button>
          </div>

          {/* ------------Conact us Section------------ */}
          <div className="shadow-2xl py-8 px-10 text-start flex flex-col gap-3">
            <h1 className="text-3xl">Contact Us</h1>
            <div>
              <a href="tel:+8801863901163" className=" text-2xl">+8801863901163</a>

            </div>
            <a href="mailto:engine-experts@gmail.com" className="text-lg">engine-experts@gmail.com</a>
          </div>

          {/* -----------------Adress Section------------------- */}
          <div className="shadow-2xl py-8 px-10 text-start flex flex-col gap-3">
            <h1 className="text-3xl">Address</h1>
            <div>
              <h2 className="text-xl">19 Frisk Drive, Middletown,nj,</h2>
              <h2 className="text-xl">3348 United States</h2>
            </div>
            <h1>31 S Division Street, Montour,ia,</h1>
            <h1>50133 United States</h1>
          </div>
        </div>
      </div>

      <div className="mt-24 text-start px-12">
        <h1 className="text-5xl font-semibold">Recent Review and Rating</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around sm:grid-cols-3 gap-7 mx-12 mt-10 font-poppins">

          {/* @ts-ignore */}
          {reviews?.map((review, i) => {
            return (
              <div
                key={i}
                className="container flex flex-col w-full max-w-lg p-6 mx-auto  rounded-md divide-gray-700 bg-gray-600 dark:text-gray-100"
              >
                <div className="flex justify-around p-4">
                  <div className="flex space-x-4">
                    <div>
                      <img
                        src="https://source.unsplash.com/100x100/?portrait"
                        alt=""
                        className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                      />
                    </div>
                    <div>
                      <h1 className="">{review?.email}</h1>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between" >
                  <div className="pl-4">
                    <span className="text-xs dark:text-gray-400">
                      2 days ago
                    </span>
                  </div>
                  <div className="flex items-center  space-x-2 dark:text-yellow-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                    </svg>
                    <span className="text-xl font-bold">4.5</span>
                  </div>

                </div>


                <div className="p-4   space-y-2 text-sm dark:text-gray-400">
                  <p>
                    {review?.feedback}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
