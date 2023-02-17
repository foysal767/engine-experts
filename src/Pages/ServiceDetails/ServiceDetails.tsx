import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { RiServiceFill } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import "./ServiceDetails.css";
import { AiFillStar } from 'react-icons/ai';

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface usedata {
  name: string;
  image: any;
  details: string;
  price: string;
  _id: string;
  Totalreviews: string;
  discountPrice: string;
}
interface reviewtype {
  email: string;
  feedback: string;
  map: any;
}

let userLocation = {
  lat: 0,
  long: 0,
};

const ServiceDetails = () => {
  const [dWidth, setDWidth] = useState<number>(0);
  useEffect(() => {
    setDWidth(window.innerWidth);
  }, []);
  const { id } = useParams();
  const [details, setDetails] = useState<usedata>();
  const [loading, setLoading] = useState<boolean>(true);
  const [reviews, setReviews] = useState<reviewtype>();
  const { user, isAdmin, accType } = useContext(AuthContext);
  const [checked, setChecked] = useState<boolean | undefined>();
  const [openModal, setOpenModal] = useState(false);
  const [errorStr, setErrorStr] = useState<string>("");
  // const [value, onChange] = useState(new Date());
  // const [location, setLocation] = useState<object>(userLocation);
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, handleError);
    } else {
      toast.error("Location is not supported");
    }
  };

  const showPosition = (position: any) => {
    userLocation.lat = position.coords.latitude;
    userLocation.long = position.coords.longitude;
  };

  const handleError = (error: any) => {
    let errorStr;
    switch (error.code) {
      case error.PERMISSION_DENIED:
        errorStr = "User denied the request for Geolocation.";
        setErrorStr("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        errorStr = "Location information is unavailable.";
        setErrorStr("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        errorStr = "The request to get user location timed out.";
        setErrorStr("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        errorStr = "An unknown error occurred.";
        setErrorStr("An unknown error occurred.");
        break;
      default:
        errorStr = "An unknown error occurred.";
        setErrorStr("An unknown error occurred.");
    }
    toast.error(errorStr);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleBooking = (event: any) => {
    event.preventDefault();

    const form = event.target;
    const price = form.price.value;
    const email = form.email.value;
    const number = form.number.value;
    const model = form.model.value;
    const date = form.date.value;
    const formValue = {
      serviceName: details?.name,
      userEmail: email,
      userImage: user?.photoURL,
      price,
      location: userLocation,
      model,
      number,
      date,
      payment: "unpaid",
      seller: "",
    };
    fetch("https://engine-experts-server-phi.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formValue),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          handleClose();
        } else {
          toast.error(data.message);
        }
      });
  };

  useEffect(() => {
    fetch(
      `https://engine-experts-server-phi.vercel.app/servicedetails?id=${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setDetails(data?.data);
          setReviews(data?.reviews);
        }
      });
  }, [id, loading]);

  const giveFeedBack = (event: any) => {
    event.preventDefault();
    const feedback = event.target.feedback.value;
    const rating = parseInt(event.target.rating.value);
    const feedbackObject = {
      email: user?.email || "User not found",
      feedback,
      image: user?.photoURL,
      date: new Date().toLocaleDateString(),
      rating,
      service: details?.name,
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
          className="opacity-80 w-full h-full"
          src="/assets/services-bg.jpg"
          alt="service-bg"
        />
        <div className="h-full w-full flex items-end absolute top-0 p-4 lg:p-10">
          <h2 className="flex items-center   text-2xl md:text-3xl lg:text-5xl font-bold ">
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
          {!isAdmin && (
            <div className="w-full mt-4">
              <h1 className="text-4xl text-black font-semibold  text-start">
                Give Your FeedBack Here
              </h1>

              {/* form/feedback */}
              <form
                onSubmit={giveFeedBack}
                className="w-full text-start rounded-md outline-none mt-4 "
              >
                <div className="w-full  items-center gap-3">
                  <textarea
                    name="feedback"
                    cols={12}
                    rows={1}
                    placeholder="Comment your feedback here..."
                    className="bg-black p-3 h-[60px] m-0 w-full rounded-md outline-none"
                    required
                  ></textarea>
                  <div className="flex gap-3 mt-2">
                    <h4 className="text-lg font-bold text-black">
                      Please Rate Us:
                    </h4>
                    <div className="rating gap-2">
                      <input
                        type="radio"
                        name="rating"
                        value="1"
                        className="mask mask-star-2 bg-orange-500"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating"
                        value="2"
                        className="mask mask-star-2 bg-orange-500"
                      />
                      <input
                        type="radio"
                        name="rating"
                        value="3"
                        className="mask mask-star-2 bg-orange-500"
                      />
                      <input
                        type="radio"
                        name="rating"
                        value="4"
                        className="mask mask-star-2 bg-orange-500"
                      />
                      <input
                        type="radio"
                        name="rating"
                        value="5"
                        className="mask mask-star-2 bg-orange-500"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn border-none text-white bg-red-500 rounded-sm mt-4"
                >
                  Submit
                </button>
              </form>
            </div>
          )}

          {/* ----------------Table starts from here------------ */}
        </div>

        <div className=" w-full flex flex-col gap-8 lg:w-[30%] lg:px-2 md:px-0  mt-7 lg:mt-0">
          {/* -------------Get Service---------- */}
          <div className="shadow-2xl rounded py-8 px-10 text-start bg-[black] flex flex-col gap-3">
            <h1 className="text-3xl">GET SERVICE</h1>
            <div>
              <h2 className="text-xl">
                With quality parts to meet every budget and friendly staff
                trained to make your visit informative and hassle free.
              </h2>
            </div>
            <div className="w-full flex gap-2">
              <span className={`font-bold text-2xl`}>
                Price:{" "}
                <span
                  className={`${
                    details?.discountPrice && "line-through text-red-500"
                  }`}
                >
                  {details?.price}
                </span>
              </span>
              {details?.discountPrice && (
                <span className={`font-bold text-2xl`}>
                  {details?.discountPrice}
                </span>
              )}
            </div>
            {!isAdmin && accType !== "Seller" && (
              <label
                htmlFor="payment-modal"
                onClick={() => setOpenModal(true)}
                className="pt-2 pb-3 text-2xl font-semibold getServiceBtn"
              >
                Get Service
              </label>
            )}
          </div>

          {/* ------------Conact us Section------------ */}
          <div className="shadow-2xl py-8 px-10 text-start flex flex-col gap-3 bg-[black] rounded">
            <h1 className="text-3xl">Contact Us</h1>
            <div>
              <a href="tel:+8801863901163" className=" text-2xl">
                +8801863901163
              </a>
            </div>
            <a href="mailto:engine-experts@gmail.com" className="text-lg">
              engine-experts@gmail.com
            </a>
          </div>

          {/* -----------------Address Section------------------- */}
          <div className="shadow-2xl py-8 px-10 text-start flex flex-col gap-3 bg-[black] rounded">
            <h1 className="text-3xl">Address</h1>
            <div>
              <h2 className="text-xl">Sector-11, Uttara,</h2>
              <h2 className="text-xl">Dhaka-1230, </h2>
              <h1 className="text-xl">Bangladesh</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 text-start lg:px-12 md:px-8 px-4">
        <h1 className="text-4xl text-black font-semibold">
          Recent Review and Rating
        </h1>
        <div className="lg:mb-32 px-4 md:px-8 lg:px-12 mt-12 mb-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={dWidth <= 576 ? 1 : dWidth >= 992 ? 3 : 2}
            loop={true}
            autoplay={{
              delay: 5000,
            }}
          >
            {reviews?.map((review: any, i: any) => (
              <SwiperSlide>
                <div
                  key={i}
                  className="container flex flex-col gap-3 w-full p-6 rounded divide-gray-700 bg-[#19191B] bg-[url('/public/assets/image-gallery/carbon_BG-20.png')] dark:text-gray-100 h-56"
                >
                  <div className="w-full flex items-center justify-between gap-2">
                    <div>
                      <img
                        className="w-[40px] h-[40px] rounded-full"
                        src={review?.image}
                        alt=""
                      />
                    </div>
                    <div>
                      <h1 className="text-start w-[60%] ">{review?.email}</h1>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center  space-x-2 dark:text-yellow-500"></div>
                  </div>
                  <div className="text-start space-y-2 mt-0 text-lg dark:text-gray-400">
                    <h3>{review?.service}</h3>
                  </div>
                  <div className="text-start space-y-2 text-sm dark:text-gray-400">
                    <p>{review?.feedback}</p>
                  </div>
                  <hr className="border-t-2 mt-3 " />
                  <div className="flex justify-between items-center">
                    <div className="">
                      <span className="text-xs dark:text-gray-400">
                        {review?.date}
                      </span>
                    </div>
                    <div>
                      <span className="text-xl flex gap-1">
                        {[...Array(review?.rating)].map((star, i) => (
                          <AiFillStar className="text-orange-500"></AiFillStar>
                        ))}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* booking modal */}
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="payment-modal" className="modal-toggle" />
      {openModal && (
        <div className="modal">
          <div className="modal-box relative bg-white text-black">
            <label
              htmlFor="payment-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <form onSubmit={handleBooking}>
              <h3 className="text-2xl font-bold text-black">
                Bookings For {details?.name}
              </h3>
              <p className="text-black text-left">Email</p>
              <input
                type="email"
                // placeholder="Full name"
                defaultValue={user?.email}
                name="email"
                disabled
                className="h-[51px] px-2 rounded-md input-bordered w-full bg-white border border-black"
              />
              <p className="text-black text-left">Price</p>
              <input
                type="text"
                defaultValue={
                  details?.discountPrice
                    ? details?.discountPrice
                    : details?.price
                }
                name="price"
                className="input-bordered w-full rounded-md px-2 py-3 text-black bg-white border border-black"
                disabled
              />
              <p className="text-black text-left">Phone Number</p>
              <input
                type="text"
                placeholder="Mobile Number"
                name="number"
                required
                className="input input-bordered w-full text-black bg-white border border-black"
              />
              <p className="text-black text-left">Model</p>
              <input
                type="text"
                placeholder="Enter Your Car Model"
                name="model"
                required
                className="input input-bordered w-full text-black bg-white border border-black"
              />

              <p className="text-black text-left">Select Booking Date</p>
              <input
                className=" input-bordered w-full text-black px-2 py-2 rounded-md bg-white border border-black"
                type="date"
                placeholder="Booking Date"
                name="date"
                required
                id="dated"
              />
              <div className="w-full text-start px-2">
                <input
                  onClick={(e: any) => {
                    setChecked(e.target.checked);
                    getLocation();
                  }}
                  type="checkbox"
                  id="locationAllow"
                  name="locationAllow"
                  value="true"
                  className="mr-2"
                />
                <label htmlFor="locationAllow">
                  Click 'Allow' for Successful order
                </label>
              </div>
              {errorStr ? (
                <p className="text-red-500">
                  You need allowed your location <br /> Refresh your browser and
                  try again.
                </p>
              ) : (
                <></>
              )}

              {!checked || errorStr ? (
                <button
                  type="submit"
                  disabled
                  className={`bg-red-300 text-white border-none w-full mt-3 rounded-full py-2 text-xl`}
                >
                  Book Now
                </button>
              ) : (
                <button
                  type="submit"
                  className={` bg-red-500 text-white border-none w-full mt-3 rounded-full py-2 text-xl`}
                >
                  Book Now
                </button>
              )}
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceDetails;
