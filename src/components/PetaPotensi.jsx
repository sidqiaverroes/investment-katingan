import React from "react";
import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import JsonData from "../Assets/Ilok_Kebun_Katingan.geojson";

function PetaUnggulan() {
  return (
    <div
      id="peta"
      className="flex justify-center items-center w-full h-full py-16"
    >
      <div className="flex flex-col gap-6 justify-center items-center w-full max-w-screen-lg">
        <h1 className="text-birumud ">Peta Potensi</h1>
        <span className="overflow-hidden w-full mapHeight rounded-md">
          <MapContainer
            center={[-1.79, 112.58]}
            zoom={8}
            scrollWheelZoom={false}
            maxZoom={20}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-1.1573481, 111.8706036]}>
              <Popup>Kantor Kecamatan Katingan Hulu</Popup>
            </Marker>

            <Marker position={[-1.7655298, 113.0216498]}>
              <Popup>Polres Katingan</Popup>
            </Marker>
          </MapContainer>
        </span>
      </div>
    </div>
  );
}

export default PetaUnggulan;
