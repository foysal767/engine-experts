import { useEffect, useState } from "react";
import { RiServiceFill } from "react-icons/ri";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {

  const { id } = useParams();
  const [details, setDetails] = useState({});
  // const {name, image, details, price} = details;

  useEffect(()=>{

    fetch(`http://localhost:5000/servicedetails?id=${id}`)
    .then(res=> res.json())
    .then(data=>{
      if(data.success){
        setDetails(data.data);
        console.log(data.data.name);
      }
    });
  },[id]);
  console.log('inside details',details);


  const giveFeedBack = (event: any) => {
    event.preventDefault();
    const feedback = event.target.feedback.value;
    const rating = event.target.rating.value;
    console.log(feedback, rating);
    event.target.reset();
  };

  return (
    <section className="">
      {/* banner for service */}
      <div className="relative overflow-hidden">
        <img
          className="opacity-40"
          src="assets/services-bg.jpg"
          alt="service-bg"
        />
        <div className="">
          <h2 className="flex font-poppins text-5xl mt-20 ml-10 font-bold absolute top-0 left-0">
            name___
            <RiServiceFill className="text-[#E81C2E]"></RiServiceFill>
          </h2>
        </div>
      </div>
      {/* end there */}

      <div className="flex gap-10 w-full px-4 md:px-8 lg:px-12">
        <div className="border w-full flex flex-col gap-8 lg:w-[30%] p-2 bg-[#212121]">
          <div className="flex flex-col gap-3 bg-[#272935]">
            <h1 className="text-center text-4xl mb-5">All Services</h1>
            <button className="w-full p-2 text-2xl border">Service 1</button>
            <button className="w-full p-2 text-2xl border">Service 1</button>
            <button className="w-full p-2 text-2xl border">Service 1</button>
            <button className="w-full p-2 text-2xl border">Service 1</button>
            <button className="w-full p-2 text-2xl border">Service 1</button>
            <button className="w-full p-2 text-2xl border">Service 1</button>
          </div>

          {/* -------------Get Service---------- */}
          <div className="border py-8 px-10 text-start flex flex-col gap-3">
            <h1 className="text-3xl">GET SERVICE</h1>
            <div>
              <h2 className="text-xl">
                With quality parts to meet every budget and friendly staff
                trained to make your visit informative and hassle free.
              </h2>
            </div>
            <button className="text-2xl font-semibold bg-yellow-900 py-2">
              Get Service
            </button>
          </div>

          {/* ------------Conact us Section------------ */}
          <div className="border py-8 px-10 text-start flex flex-col gap-3">
            <h1 className="text-3xl">Contact US</h1>
            <div>
              <h2 className="text-2xl">+880-15467389</h2>
              <h2 className="text-2xl">+880-15467389</h2>
            </div>
            <h1>engine-experts@gmail.com</h1>
          </div>

          {/* -----------------Adress Section------------------- */}
          <div className="border py-8 px-10 text-start flex flex-col gap-3">
            <h1 className="text-3xl">Address</h1>
            <div>
              <h2 className="text-xl">19 Frisk Drive, Middletown,nj,</h2>
              <h2 className="text-xl">3348 United States</h2>
            </div>
            <h1>31 S Division Street, Montour,ia,</h1>
            <h1>50133 United States</h1>
          </div>
        </div>

        {/* -----------------Secvice Image-------------------- */}
        <div className="border flex-1 flex flex-col gap-5 text-xl">
          <div className="w-full h-[400px] overflow-hidden">
            <img
              src=""
              alt=""
              className="w-full h-full hover:scale-110 transition-all duration-700"
            />
          </div>
          <h1 className="text-start px-2">
            details
          </h1>

          {/* --------------Ul Li section-------------------- */}
          <div className="flex justify-between gap-3 w-full px-8">
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
          </div>

          {/* ----------------Table starts from here------------ */}
          <div className="w-full px-3">
            <h1 className="text-4xl text-start mb-4">
              Detailing Services Price list
            </h1>
            <div className="flex w-full">
              <table className="border w-full bg-[#121212] border-gray-500">
                <tr>
                  <th className="h-[100px] border">Service Name</th>
                  <th className="h-[100px] border">Price Starts From</th>
                </tr>
                <tr className="">
                  <td className="border">
                    <div className="w-full flex flex-col gap-3">
                      <h1>Service 1</h1>
                      <h1>Service 1</h1>
                      <h1>Service 1</h1>
                      <h1>Service 1</h1>
                    </div>
                  </td>
                  <td className="border">
                    <div className="w-full flex flex-col gap-3">
                      <h1>Service 1</h1>
                      <h1>Service 1</h1>
                      <h1>Service 1</h1>
                      <h1>Service 1</h1>
                    </div>
                  </td>
                </tr>
              </table>
              <table className="border w-full bg-[#121212] border-gray-500">
                <tr>
                  <th className="h-[100px] border">Service Name</th>
                  <th className="h-[100px] border">Price Starts From</th>
                </tr>
                <tr className="">
                  <td className="border">
                    <div className="w-full flex flex-col gap-3">
                      <h1>Service 1</h1>
                      <h1>Service 1</h1>
                      <h1>Service 1</h1>
                      <h1>Service 1</h1>
                    </div>
                  </td>
                  <td className="border">
                    <div className="w-full flex flex-col gap-3">
                      <h1>Service 1</h1>
                      <h1>Service 1</h1>
                      <h1>Service 1</h1>
                      <h1>Service 1</h1>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <h1 className="text-start mt-4">
              Vulputate eu scelerisque felis imperdiet proin fermentum leo vel
              orci. Eget velit aliquet sagittis id consectetur purus ut. Rutrum
              quisque non tellus orci ac auctor augue. Imperdiet massa tincidunt
              nunc pulvinar sapien et ligula ullamcorper malesuada. Congue
              mauris rhoncus aenean vel elit scelerisque. Volutpat est velit
              egestas dui id ornare. Tellus mauris a diam maecenas sed enim ut.
              Egestas tellus rutrum tellus pellentesque eu.
            </h1>
            {/* ------Feedback section starts here---------------------- */}
            <div className="w-full mt-4">
              <h1 className="text-4xl font-semibold text-start mb-4">
                Give Your feedback here
              </h1>
              <form
                onSubmit={giveFeedBack}
                className="w-full p-3 text-start rounded-md"
              >
                <div className="w-full flex  items-center gap-3">
                  <textarea
                    name="feedback"
                    cols={12}
                    rows={1}
                    placeholder="Comment Your feedback here"
                    className=" p-3 h-[60px] m-0"
                  ></textarea>
                  <select name="rating" className="h-[60px] text-xl rounded">
                    <option value="Good">Good</option>
                    <option value="Excellent">Excellent</option>
                    <option value="As Well">As Well</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="px-3 py-2 bg-rose-500 rounded mt-4"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 text-start px-12">
        <h1 className="text-5xl font-semibold">Recent Review and Rating</h1>
        <div className="grid sm:grid-cols-3 gap-7 mx-12 mt-10 font-poppins">
          <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-600 dark:text-gray-100">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://source.unsplash.com/100x100/?portrait"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Leroy Jenkins</h4>
                  <span className="text-xs dark:text-gray-400">2 days ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 dark:text-yellow-500">
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
            <div className="p-4 space-y-2 text-sm dark:text-gray-400">
              <p>
                Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
                dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
                finibus.
              </p>
              <p>
                Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu
                mauris cursus venenatis. Maecenas gravida urna vitae accumsan
                feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
              </p>
            </div>
          </div>
          <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-600 dark:text-gray-100">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://source.unsplash.com/100x100/?portrait"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Leroy Jenkins</h4>
                  <span className="text-xs dark:text-gray-400">2 days ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 dark:text-yellow-500">
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
            <div className="p-4 space-y-2 text-sm dark:text-gray-400">
              <p>
                Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
                dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
                finibus.
              </p>
              <p>
                Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu
                mauris cursus venenatis. Maecenas gravida urna vitae accumsan
                feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
              </p>
            </div>
          </div>
          <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-600 dark:text-gray-100">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://source.unsplash.com/100x100/?portrait"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Leroy Jenkins</h4>
                  <span className="text-xs dark:text-gray-400">2 days ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 dark:text-yellow-500">
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
            <div className="p-4 space-y-2 text-sm dark:text-gray-400">
              <p>
                Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
                dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
                finibus.
              </p>
              <p>
                Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu
                mauris cursus venenatis. Maecenas gravida urna vitae accumsan
                feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
