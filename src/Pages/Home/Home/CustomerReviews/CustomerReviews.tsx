import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CustomerReviews = () => {
  const [dWidth, setDWidth] = useState<number>(0);
  useEffect(() => {
    setDWidth(window.innerWidth);
  }, []);
  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await fetch(
        "https://engine-experts-server-phi.vercel.app/reviews"
      );
      const data = await res.json();
      return data.data;
    },
  });
  if (isLoading) {
    return (
      <div className="grid place-items-center w-full h-screen">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div className="lg:mb-28 px-4 md:px-8 lg:px-12 mt-12 mb-12">
      <h3 className="font-poppins font-bold text-2xl md:text-3xl  lg:text-5xl lg:mb-12 mb-10 text-[#383232]">
        Customer Reviews
      </h3>
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
            <div className="w-full flex items-center gap-2">
              <img className="w-[40px] h-[40px] rounded-full" src={review?.image} alt="" />
              <h1 className="text-start w-[60%] break-words">
                {review?.email}
              </h1>
            </div>
            <div className="flex justify-between">
              <div className="">
                <span className="text-xs dark:text-gray-400">
                  {review?.date}
                </span>
              </div>
              <div className="flex items-center  space-x-2 dark:text-yellow-500"></div>
            </div>
            <div className="text-start space-y-2 text-lg dark:text-gray-400">
              <h3>{review?.service}</h3>
            </div>
            <div className="text-start space-y-2 text-sm dark:text-gray-400">
              <p>{review?.feedback}</p>
            </div>
            <span className="text-xl flex gap-1">
                {[...Array(review?.rating)].map((star, i) => <AiFillStar className="text-orange-500"></AiFillStar>)}
              </span>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerReviews;
