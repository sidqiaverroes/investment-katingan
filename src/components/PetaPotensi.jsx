import React from "react";
import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
import { Icon } from 'leaflet';
import JsonData from '../Assets/Ilok_Kebun_Katingan.geojson'

function MapView() {
    return(
        <MapContainer 
        className="markercluster-map"
        center={[51.0, 19.0]}
        zoom={5}
        maxZoom={20}>

            
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* <GeoJSON data={JsonData} /> */}
        </MapContainer>
    );
}

function PetaUnggulan() {
    return(
        <div className="flex flex-col h-full w-full justify-center bg-white gap-4 py-20">
            <div className="h-1/4 max-w-screen-l">
                <h2 className="text-5xl font-bold text-birumud text-center">
                    Peta Potensi Investasi
                </h2>
            </div>
            <div className="h-3/4 justify-center items-center container mx-auto">
                    <MapView/>
            </div>
        </div>
    );
}

export default PetaUnggulan;