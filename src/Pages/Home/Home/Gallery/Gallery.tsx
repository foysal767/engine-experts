import React from "react";

const Gallery = () => {
  return (
    <section>
        <h1 className="font-poppins text-center text-5xl font-bold my-14">Service Gallery</h1>
      <div
        className="grid lg:grid-cols-2 md:grid-cols-1 gap-3 place-items-center my-10 bg-gray-400 p-10"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <div>
          <img
            className="w-96 lg:ml-56"
            src="https://images.unsplash.com/photo-1606577924006-27d39b132ae2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyJTIwcGFydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          ></img>
        </div>
        <div className="lg:mr-56">
          <img
            className="w-96 mb-5"
            src="https://plus.unsplash.com/premium_photo-1658526934242-aa541776ca49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyJTIwc2VydmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          ></img>
          <img
            className="w-96"
            src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyJTIwc2VydmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
