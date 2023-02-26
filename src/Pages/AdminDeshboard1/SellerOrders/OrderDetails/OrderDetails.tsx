import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import GoogleMaps from "../../../GoogleMaps/GoogleMaps";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
const markerIconUser = new L.Icon({
  iconUrl: require("../../../../assets/images/marker.png"),
  iconSize: [30, 40],
});
const markerIconSeller = new L.Icon({
  iconUrl: require("../../../../assets/images/marker2.png"),
  iconSize: [40, 40],
});

interface order {
  // location: { lat: any; long: any };
  // lat: any;
  // long: any;
  userEmail: string;
  date: string;
  number: string;
  model: string;
  seller: string;
  price: string;
  userName: string;
  serviceName: string;
  userImage: any;
  payment: any;
}
// type location = {
//   lat: any;
//   long: any;
// };

let lat = 0;
let long = 0;

const OrderDetails = () => {
  const { id } = useParams();
  const [order, setOrder] = useState<order>();
  // const [location, setLocation] = useState<location | any>();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/orderDetails?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setOrder(data?.data);
          console.log(data?.data?.location, "location check in useEffect");
          lat = data?.data?.location?.lat;
          long = data?.data?.location?.long;
        }
      });
  }, [id]);
  console.log(lat, long, "location");

  return (
    <section className="w-full lg:w-[90%] md:w-[80%] mx-auto px-4 md:px-8 lg:px-12 bg-[#EBF2F4] pb-10">
      {/* <GoogleMaps></GoogleMaps> */}
      <div className="mb-12 lg:mb-16">
        <MapContainer
          center={[23.777176, 90.399452]}
          zoom={7}
          scrollWheelZoom={false}
          className="h-[400px] w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=DxUohVtzxrJHRdt35lzh"
          />

          <Marker position={[lat, long]} icon={markerIconUser}>
            <Popup className="">
              <div className="flex gap-2 items-center mr-4">
                <img
                  src={order?.userImage}
                  alt=""
                  className="w-[25px] h-[25px] rounded-full"
                />
                <h1 className="text-xl">{order?.userEmail}</h1>
              </div>
            </Popup>
          </Marker>
          <Marker position={[23.777176, 90.399452]} icon={markerIconSeller}>
            <Popup>
              <h1 className="text-xl">Your Location</h1>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        <div className="col-span-2 bg-gray-200 shadow-md w-full h-full py-10 px-4">
          <h2 className="text-2xl font-bold border-b-2 border-green-600 mb-2 pb-1">
            {order?.serviceName}
          </h2>
          <h4 className="text-xl font-bold mb-2 text-left">
            Price: {order?.price}$
          </h4>
          <p className="text-left">
            <span className="font-bold">Serice Details:</span> The accumulation
            of dust, debris, and general gunk in your transmission system can
            interfere with the performance of your vehicle. The dirt will
            compromise the turning of the gears, hindering smooth shifting on
            the road. In addition, the gunk will increase the rate of internal
            wear. Therefore, as part of your transmission service and repair,
            you should check the color of the fluid during servicing. If the
            fluid is not red but dark, you should have the system flushed. You
            should also replace the transmission filters regularly to avoid
            recontamination. Immediate repair of your transmission is critical
            if the component is damaged through gradual deterioration or after
            an accident. Prompt restoration will prevent the escalation of the
            damage in the transmission. Therefore, the transmission service and
            repair process will be simpler and cheaper. In addition, you should
            remember that if the transmission is severely damaged, you might
            need to consider options such as rebuilding, remanufacturing, or
            replacement. Another key point in transmission service and repair is
            that you can avoid escalation of transmission damage by watching out
            for certain signs that indicate damage or degradation of the
            component. The symptoms will help you react promptly and conduct
            timely repairs.
          </p>
        </div>
        <div className="bg-gray-200 shadow-lg w-full h-full py-8 px-4">
          <img
            className="w-[150px] rounded-full mx-auto mb-4"
            src={order?.userImage}
            alt=""
          />
          <p className="text-left mb-1">
            <span className="font-bold text-lg">Name: </span>
            {order?.userName}
          </p>
          <p className="text-left mb-1">
            <span className="font-bold text-lg">Email: </span>
            {order?.userEmail}
          </p>
          <p className="text-left mb-1">
            <span className="font-bold text-lg">Payment type: </span>
            {order?.payment}
          </p>
          <p className="text-left mb-1">
            <span className="font-bold text-lg">Model: </span>
            {order?.model}
          </p>
          <p className="text-left mb-1">
            <span className="font-bold text-lg">Phone No: </span>
            {order?.number}
          </p>
          <p className="text-left mb-1">
            <span className="font-bold text-lg">Booking Date: </span>
            {order?.date}
          </p>
          <div>
            <button className="w-full my-3 btn bg-green-600 border-none text-white font-semibold rounded-sm">
              Accept
            </button>
            <button className="w-full btn bg-red-600 border-none text-white font-semibold rounded-sm">
              Deny
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
