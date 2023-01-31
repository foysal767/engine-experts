import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { RiServiceFill } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import "./ServiceDetails.css"
import DatePicker from 'react-date-picker';

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
  const [value, onChange] = useState(new Date());

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

      <div className="relative lg:h-[200px] h-[100px] w-full">
        <img
          className="opacity-70 w-full h-full"
          src="/assets/services-bg.jpg"
          alt="service-bg"
        />
        <div className="h-full w-full flex items-end absolute top-0 p-4 lg:p-10">
          <h2 className="flex items-center font-poppins text-2xl lg:text-5xl font-bold ">
            {details?.name}___
            <RiServiceFill className="text-[#E81C2E]"></RiServiceFill>
          </h2>
        </div>
      </div>
      {/* end there */}

      <div className="lg:flex gap-10 w-full px-4 md:px-8 lg:px-12 lg:mt-20 mt-10">

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
            <form onSubmit={giveFeedBack} className="w-full text-start rounded-md outline-none mt-4 ">
              <div className="w-full lg:flex items-center gap-3">
                <textarea name="feedback" cols={12} rows={1} placeholder="Comment your feedback here..." className="bg-black p-3 h-[60px] m-0 w-full rounded-md outline-none" required></textarea>
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

        <div className=" w-full flex flex-col gap-8 lg:w-[30%] px-2 mt-7 lg:mt-0">

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
            <label
              htmlFor="payment-modal"
              className="pt-2 pb-3 text-2xl font-semibold btn bg-[#E81C2E] text-white"
            >
              Get Service
            </label>
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
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="payment-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-white text-black">
          <label
            htmlFor="payment-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl font-bold text-black">Bookings For {details?.name}</h3>
          <p className="text-black text-left">Full Name</p>
          <input
            type="text"
            placeholder="Full name"
            className="input input-bordered w-full bg-white border border-black"
          />
          <p className="text-black text-left">Price</p>
          <input
            type="text"
            defaultValue={details?.price}
            className="input-bordered w-full rounded-md px-2 py-3 text-black bg-white border border-black"
            disabled
          />
          <p className="text-black text-left">Phone Number</p>
          <input
            type="text"
            placeholder="Mobile Number"
            className="input input-bordered w-full text-black bg-white border border-black"

          />
          <p className="text-black text-left">Model</p>
          <input
            type="text"
            placeholder="Enter Your Car Model"
            className="input input-bordered w-full text-black bg-white border border-black"

          />
          <p className="text-black text-left">Location</p>
          <input
            type="text"
            placeholder="Your Location"
            className="input input-bordered w-full text-black bg-white border border-black"

          />
          <p className="text-black text-left">Select Booking Date</p>
          {/* <input className=" input-bordered w-full text-black px-2 py-3 rounded-md bg-white border border-black" type="date" placeholder="Booking Date" name="" id="dated" /> */}
          <div className='w-full h-[53px] rounded-md px-2 py-3 border'>
            <DatePicker className='w-full h-full border-0' onChange={onChange} value={value} />
          </div>
          <form>
            <button className="btn bg-[#E81C2E] text-white border-none w-full mt-3 rounded-full">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
