import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { RiServiceFill } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import "./ServiceDetails.css"

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
          className="opacity-70"
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
              className="w-full h-full hover:scale-110 transition-all duration-700 rounded"
            />
          </div>
          <h1 className="text-start text-black px-2">{details?.details}</h1>
          <div className="w-full mt-4">
            <h1 className="text-4xl text-black font-semibold  text-start">Give Your FeedBack Here</h1>
            
            {/* form/feedback */}
            <form onSubmit={giveFeedBack} className="w-full p-3 text-start rounded-md outline-none mt-4 ">
              <div className="w-full flex  items-center gap-3">
                <textarea name="feedback"  cols={12} rows={1} placeholder="Comment your feedback here..." className="bg-black p-3 h-[60px] m-0 w-full rounded-md outline-none" required></textarea>
                <select name="rating" id="" className="bg-black h-[60px] text-xl rounded outline-none">
                  <option value="Good">Good</option>
                  <option value="Excellent">Excellent</option>
                  <option value="As Well">As Well</option>
                </select>
              </div>
              <button type="submit" className="btn border-none text-white bg-red-500 rounded-sm mt-4">Submit</button>
            </form>
          </div>


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
          <div className="shadow-2xl rounded py-8 px-10 text-start bg-[black] flex flex-col gap-3">

            <h1 className="text-3xl">GET SERVICE</h1>
            <div>
              <h2 className="text-xl">
                With quality parts to meet every budget and friendly staff
                trained to make your visit informative and hassle free.
              </h2>
            </div>
            <span className=" font-bold text-2xl">Price: {details?.price}</span>
            <button className="getbtn text-2xl font-semibold text-white">
              Get Service
            </button>
          </div>

          {/* ------------Conact us Section------------ */}
          <div className="shadow-2xl py-8 px-10 text-start flex flex-col gap-3 bg-[black] rounded">
            <h1 className="text-3xl">Contact Us</h1>
            <div>
              <a href="tel:+8801863901163" className=" text-2xl">+8801863901163</a>

            </div>
            <a href="mailto:engine-experts@gmail.com" className="text-lg">engine-experts@gmail.com</a>
          </div>

          {/* -----------------Adress Section------------------- */}
          <div className="shadow-2xl py-8 px-10 text-start flex flex-col gap-3 bg-[black] rounded">
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

      <div className="mt-24 text-start lg:px-12 md:px-8 px-4">
        <h1 className="text-4xl text-black font-semibold">Recent Review and Rating</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 font-poppins w-full">

          {/* @ts-ignore */}
          {reviews?.map((review, i) => {
            return (
              <div
                key={i}
                className="container flex flex-col gap-3 w-full p-6 rounded divide-gray-700 bg-[black] dark:text-gray-100"
              >
                <div className="w-full flex justify-between items-center gap-5">
                  <h1 className="text-start w-[60%] break-words">{review?.email}</h1>
                  <span className="text-xl">{review?.rating}</span>
                </div>

                <div className="flex justify-between">
                  <div className="">
                    <span className="text-xs dark:text-gray-400">
                      2 days ago
                    </span>
                  </div>
                  <div className="flex items-center  space-x-2 dark:text-yellow-500"></div>
                </div>

                <div className="space-y-2 text-sm dark:text-gray-400">
                  <p>{review?.feedback}</p>
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
