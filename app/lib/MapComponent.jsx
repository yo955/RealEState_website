import { FaMapMarkerAlt } from "react-icons/fa";

const MapWithMarker = () => {
  return (
    <div className="relative my-8">
      {/* الخريطة */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345098686!2d144.9537353153154!3d-37.81720997975165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0c25c7%3A0x5045675218ceed0!2sYour+Location!5e0!3m2!1sen!2sus!4v1635291323851!5m2!1sen!2sus"
        className="w-full h-[400px] border-0"
        allowFullScreen=""
        loading="lazy"
      ></iframe>

      {/* الأيقونة */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <FaMapMarkerAlt className="text-red-500 text-3xl md:text-4xl lg:text-5xl" />
      </div>
    </div>
  );
};

export default MapWithMarker;
