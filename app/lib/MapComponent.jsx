"use client";
import { IoLocationSharp } from "react-icons/io5";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  // إحداثيات الرياض
  const position = [24.7136, 46.6753];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "500px", width: "100%", marginBottom: "5rem" }}
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
