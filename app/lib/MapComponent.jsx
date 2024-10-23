"use client";
import { IoLocationSharp } from "react-icons/io5";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet"; 

const MapComponent = () => {
  // إحداثيات الرياض
  const position = [24.7136, 46.6753];

  return (
    <MapContainer
      center={position}
      zoom={13}
      className="h-64 w-full md:h-96 mb-20" 
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        position={position}
        icon={L.divIcon({ className: "custom-icon" })}
      >
        <Popup>
          <IoLocationSharp /> شركة المراعي، الرياض.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
