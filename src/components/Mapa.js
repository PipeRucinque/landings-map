import { MapContainer, TileLayer, Marker } from "react-leaflet";
import {Popover} from 'react-bootstrap/';
import "../styles/mapa.css"


import React from "react";

const Mapa = (props) => {
  // console.log('Mapa:', props.forMap);

  


  return (
    <Popover id={`popover-positioned-right`}>
      <Popover.Header as="h3">Where it fell</Popover.Header>
      <Popover.Body>
        <MapContainer center={[props.forMap.geolocation.latitude, props.forMap.geolocation.longitude]} zoom={1.5} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[props.forMap.geolocation.latitude, props.forMap.geolocation.longitude]}></Marker>
        </MapContainer>
      </Popover.Body>
    </Popover>
  );
}

export default Mapa

//[51.505, -0.09]

{/* <Popover>
    <Popover.Header as="h3">Where it fell</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover> */}