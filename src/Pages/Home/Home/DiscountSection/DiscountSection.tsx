import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillStar } from "react-icons/ai";

const DiscountSection = () => {
  const [discount, setDiscount] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [deadline, setdeadLine] = useState("");
  const [campaignName, setCampignName] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("https://engine-experts-server-phi.vercel.app/campaign")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log(data?.data, "discount data fetch");
          setDiscount(data?.data?.services);
          setdeadLine(data.data?.endDate);
          setCampignName(data.data?.campaignName);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      });
  }, []);
  console.log(discount, "discount");
  // CountDown timer added by jabed from here

  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [mins, setMinutes] = useState<number>(0);
  const [secs, setSeconds] = useState<number>(0);

  // const deadline = "February, 13, 2023"
  // const deadline = "2023-02-15"

  const stopCampaign = () => {
    fetch("https://engine-experts-server-phi.vercel.app/stopCampaign", {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Successfully stop");
        }
      });
  };

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now() - 6 * 60 * 60 * 1000;
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    return () => clearInterval(interval);
  }, [deadline]);

  if (isLoading) {
    return (
      <div className="grid place-items-center w-full h-screen">
        <span className="loader"></span>
      </div>
    );
  }

  console.log(deadline, "deadline");
  if (!deadline) {
    return <></>;
  }
  if (days === 0 && hours === 0 && mins === 0 && secs === 10) {
    stopCampaign();
  }
  return (
    <section className="w-full mb-12 lg:mb-28">
      <h1 className="lg:text-5xl my-5 lg:my-5 md:my-6 md:text-3xl text-2xl font-bold text-[#383232] px-4 md:px-8 lg:px-12 text-center md:text-start lg:text-start">
        {campaignName} Campaign
      </h1>
      <div className="w-full bg-[#19191B] bg-[url('/public/assets/image-gallery/carbon_BG-20.png')] py-24 h-[200px] relative upper-section mt-2">
        <div className="hidden lg:grid grid-cols-2 absolute w-full h-full top-0">
          <img src="/assets/tire-left.png" alt="" className="tyre" />
          <img src="/assets/tire-right.png" alt="" className="tyre" />
        </div>
        <div className="absolute top-0 grid place-items-center w-full h-full">
          <div className="flex gap-x-5 justify-center">
            <span className="bg-red-600 px-5 py-1 rounded-md">
              <h2 className="text-2xl font-bold">
                {days < 10 ? "0" + days : days}
              </h2>
              <p className="text-sm">Day</p>
            </span>
            <span className="bg-red-600 px-4 py-1 rounded-md">
              <h2 className="text-2xl font-bold">
                {hours < 10 ? "0" + hours : hours}
              </h2>
              <p className="text-sm">Hours</p>
            </span>
            <span className="bg-red-600 px-5 py-1 rounded-md">
              <h2 className="text-2xl font-bold">
                {mins < 10 ? "0" + mins : mins}
              </h2>
              <p className="text-sm">Min</p>
            </span>
            <span className="bg-red-600 px-5 py-1 rounded-md">
              <h2 className="text-2xl font-bold">
                {secs < 10 ? "0" + secs : secs}
              </h2>
              <p className="text-sm">Sec</p>
            </span>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-auto px-4 md:px-12 lg:px-12">
        {discount?.map((service: any, i: any) => (
          <div
            key={i}
            className="hover:scale-105 transition-all duration-700 card w-full bg-white rounded-sm shadow-xl pb-2"
          >
            <figure className="pt-6 w-full h-[200px]">
              <img
                src={service?.image}
                alt="Shoes"
                className="rounded-sm px-5 w-full h-full"
              />
            </figure>
            <div className="text-yellow-500 flex gap-x-0.5 ml-5 mt-3">
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
            </div>
            <div>
              <h2 className="text-xl text-left ml-5 font-medium text-black">
                {service?.name}
              </h2>
            </div>
            <div className="flex gap-2 ml-5 font-medium text-sm">
              <p className="text-black line-through">{service?.price}</p>
              <p className="text-red-600">{service?.discountPrice}$</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscountSection;
