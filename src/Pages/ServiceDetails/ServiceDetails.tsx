import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { RiServiceFill } from "react-icons/ri";
import { TfiHandPointRight } from "react-icons/tfi";

const ServiceDetails = () => {
  return (
    <section>
      {/* background for service */}
      <div className="relative overflow-hidden">
        <img
          className="opacity-40"
          src="assets/services-bg.jpg"
          alt="service-bg"
        />
        <div className="">
          <h2 className="flex font-poppins text-5xl mt-20 ml-10 font-bold absolute top-0 left-0">
            Service Center___
            <RiServiceFill className="text-[#E81C2E]"></RiServiceFill>
          </h2>
        </div>
      </div>
      {/* end there */}

      <div className="grid grid-cols-4">
        <div className="col-span-1 text-center hidden lg:block">
          <h2 className="text-3xl font-poppins font-bold mt-5 underline decoration-[#E81C2E] underline-offset-8">
            Service List
          </h2>
          <Sidebar></Sidebar>
        </div>

        {/* specific service details starts */}
        <div className="col-span-3 mx-auto my-20">
          <img className="mx-auto md:ml-24" src="assets/service-1.jpg" alt="" />
          <div className="lg:ml-16 md:ml-32">
            <div className="mb-6">
              <h2 className="text-4xl text-left font-poppins font-bold mt-10 mb-3">
                Service 1
              </h2>
              <p className="text-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
                deserunt distinctio, eligendi corrupti illum facilis dignissimos
                iure voluptas dolorum. Dolorem voluptate cumque laudantium ab
                porro! Odit cum rerum exercitationem. Odit, similique aut! Fugit
                quaerat doloribus eaque, magnam cupiditate sapiente, consequatur
                laborum, quisquam ratione odio quasi. Eos in repellat at
                doloribus odio cumque saepe reiciendis veniam eaque! Dolorum,
                consequatur itaque maiores voluptas, soluta quibusdam iusto
                nobis commodi blanditiis eius incidunt possimus amet odio rerum
                a? Tempore, optio. Ex enim quas quam, tempore inventore fuga
                voluptate temporibus unde error. Recusandae expedita sit non
                maxime cupiditate sapiente debitis. Laborum maiores ad, sunt
                quae odio maxime voluptas saepe, voluptate aliquid fugiat
                eligendi officia deleniti iste sequi tenetur quaerat culpa
                aperiam iusto dicta magni sapiente rerum eaque tempora enim!
                Quos, impedit corporis magnam quibusdam incidunt quam adipisci
                optio saepe veritatis libero rerum. Voluptatem omnis assumenda
                voluptatibus iure mollitia consequuntur? Atque, quidem! Culpa
                mollitia praesentium facilis voluptatum sit laborum assumenda
                dolore reprehenderit nihil illo voluptate nulla debitis quam
                ipsum, incidunt neque temporibus quia optio quae fugiat sapiente
                iusto. Error cum, eius at, voluptatibus quaerat eaque temporibus
                aut repellat assumenda laboriosam, illum velit excepturi
                praesentium neque modi architecto incidunt inventore? Hic
                corrupti non, consequatur sit unde quam.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1">
              <div className="mb-5">
                <h2 className="text-4xl text-left font-poppins font-bold mt-10">
                  Benefit of Service
                </h2>
                <p className="text-left">
                  Expound the actual teachings of the great explorer of the
                  truth, the master-builder of human happiness. No one rejects,
                  dislikes, or avoids pleasure itself.
                </p>
                <p className="text-left flex items-center">
                  <TfiHandPointRight className="mr-3"></TfiHandPointRight> Those
                  who do not know how to pursue
                </p>
                <p className="text-left flex items-center">
                  <TfiHandPointRight className="mr-3"></TfiHandPointRight> Those
                  who do not know how to pursue
                </p>
                <p className="text-left flex items-center">
                  <TfiHandPointRight className="mr-3"></TfiHandPointRight> Those
                  who do not know how to pursue
                </p>
                <p className="text-left flex items-center">
                  <TfiHandPointRight className="mr-3"></TfiHandPointRight> Those
                  who do not know how to pursue
                </p>
              </div>
              <div className="ml-10">
                <img src="assets/service-1.1.jpg" alt="" />
              </div>
            </div>
            <div>
              <h2 className="text-4xl text-left font-poppins font-bold mt-10">
                Some facts works with us
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
