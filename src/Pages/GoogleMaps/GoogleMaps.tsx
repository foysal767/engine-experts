import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const markerIconUser = new L.Icon({
  iconUrl: require("../../assets/images/marker.png"),
  iconSize: [30, 40],
});
const markerIconSeller = new L.Icon({
  iconUrl: require("../../assets/images/marker2.png"),
  iconSize: [40, 40],
});

const GoogleMaps = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    fetch("https://engine-experts-server-phi.vercel.app/locations")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setLocations(data.data);
        }
      });
  }, []);
  return (
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
        {locations?.map((user: any, i: any) => (
          <Marker key={i}
            position={[user?.location?.lat, user?.location?.long]}
            icon={user?.role === "user" ? markerIconUser : markerIconSeller}
          >
            <Popup>
              <h1 className="text-2xl">{user?.email}</h1>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default GoogleMaps;
