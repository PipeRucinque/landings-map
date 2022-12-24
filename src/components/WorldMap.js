import React from 'react'
import { MapContainer, TileLayer, Marker } from "react-leaflet";



function WorldMap({data}) {

// console.log('worldMap data:', data)

const dataFilter = data.filter((landing) => landing.geolocation !== landing)
console.log('worldMap dataFilter:', dataFilter);
    return (
    <div>
        <MapContainer center={[51.505, -0.09]} zoom={1} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            (data.geolocation.latitude || data.geolocation.longitude) ? ( 
                {data.map((landing) => (
                    <Marker position={[landing.geolocation.latitude, landing.geolocation.longitude]}></Marker>
            ))}) : (null)
        
        </MapContainer>
    </div>
   )
}

export default WorldMap
