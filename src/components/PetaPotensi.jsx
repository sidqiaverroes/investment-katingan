import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';

function MapView() {
    return(
        <MapContainer 
        className="markercluster-map"
        center={[51.0, 19.0]}
        zoom={4}
        maxZoom={18}>

            
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

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