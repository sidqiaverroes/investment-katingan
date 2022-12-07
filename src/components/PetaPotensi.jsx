import React from "react";
import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import { Icon } from "leaflet";
import JsonData from "../Assets/Ilok_Kebun_Katingan.geojson";

function PetaUnggulan() {
  return (
    <div id="peta" className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col justify-center items-center w-full max-w-screen-lg">
        <h1 className="text-birumud">Peta Potensi</h1>
        <span className=" overflow-hidden w-full mapHeight rounded-md">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </span>
      </div>
    </div>
  );
}

export default PetaUnggulan;
