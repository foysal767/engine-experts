import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const markerIconUser = new L.Icon({
  iconUrl: require("../../assets/images/marker.png"),
  iconSize: [30, 40],
});
const markerIconSeller = new L.Icon({
  iconUrl: require("../../assets/images/marker2.png"),
  iconSize: [40, 40],
});
const users = [
  {
    role: "user",
    lat: 22.3419,
    lang: 91.815536,
  },
  { role: "seller", lat: 23.777176, lang: 90.399452 },
  {
    role: "user",
    lat: 24.374,
    lang: 88.60114,
  },
  { role: "seller", lat: 24.894802, lang: 91.869034 },
  { role: "user", lat: 23.70731, lang: 90.415482 },
  { role: "user", lat: 22.80979, lang: 89.56439 },
];

const GoogleMaps = () => {
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
        {users?.map((user: any, i: any) => (
          <Marker
            position={[user?.lat, user?.lang]}
            icon={user?.role === "user" ? markerIconUser : markerIconSeller}
          >
            <Popup>
              <h1 className="text-2xl">{user?.role}</h1>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default GoogleMaps;
