
import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { data } from "../../Data";



const Mapp = () => {


  return (
    <div className="mapps">
        <div className="mapping">
    
        <MapContainer
            center={[data.places[1].coordinates.lat, data.places[1].coordinates.long]}
            zoom={2.5}
            scrollWheelZoom={0}
            style={{ height: "600px", width: "80vw" }}
           
          >
            
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[data.places[0].coordinates.lat, data.places[0].coordinates.long]}>
              <Popup><span className="country">Berlin</span><span  className="country_data">{data.places[0].data}</span></Popup>
            </Marker>
            <Marker position={[data.places[1].coordinates.lat, data.places[1].coordinates.long]}>
              <Popup><span className="country">Chicago</span><span className="country_data">{data.places[1].data}</span></Popup>
            </Marker>

            <Marker position={[data.places[2].coordinates.lat, data.places[2].coordinates.long]}>
              <Popup><span className="country">Mana Us</span><span className="country_data">{data.places[2].data}</span></Popup>
            </Marker>

            <div >
              <Marker  position={[data.places[3].coordinates.lat, data.places[3].coordinates.long]}>
                
                <Popup> <span className="country">Giza</span> <span className="country_data">{data.places[3].data}</span></Popup>
              </Marker>
            </div>
            
            <Marker position={[data.places[4].coordinates.lat, data.places[4].coordinates.long]}>
              <Popup><span className="country">Shanghai</span> <span className="country_data">{data.places[4].data}</span></Popup>
            </Marker>
            <Marker position={[data.places[5].coordinates.lat, data.places[5].coordinates.long]}>
              <Popup><span className="country">Queens Land</span> <span className="country_data">{data.places[5].data}</span></Popup>
            </Marker>
          </MapContainer>
        </div>
    </div>
  );
};

export default Mapp;
