import { IoLocationSharp } from "react-icons/io5";
import Image from "next/image";

const Card = ({ status, imageUrl, location, projectTitle }) => {
  const statusColors = {
    متاح: "bg-green-600 ",
    قريبا: "bg-yellow-500",
    مباع: "bg-red-600",
    available: "bg-green-600 ",
    soon: "bg-yellow-500",
    sold: "bg-red-600",
  };
  function translate(status) {
    switch (status) {
      case "available":
        status = "متاح";
        break;
      case "soon":
        status = "قريبا";
        break;
      case "sold":
        status = "مباع";
        break;

      default:
        break;
    }
    return status;
  }
  return (
    <div className="card hover:shadow-lg transition-all duration-150">
      <a
        href="#"
        className="relative block rounded-3xl border border-gray-100 overflow-hidden shadow-lg  dark:border-gray-600"
      >
        <span
          className={`absolute w-1/4 text-center  justify-center inline-table items-center  top-6 left-1 z-10 rounded-r-lg px-4 py-1 text-xl font-medium uppercase tracking-wide text-white ${statusColors[status]}`}
        >
          {translate(status.toLowerCase())}

        </span>

        <div className="relative w-full h-56 ">
          <Image
            src={imageUrl}
            alt="مشروع عقاري"
            fill
            className="rounded-2xl p-2 object-cover"
            priority
            sizes="(max-width: 640px) 100vw, (min-width: 641px) 50vw"
          />
        </div>

        <div className="p-1 bg-white dark:bg-black">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-800  dark:text-white">
              {projectTitle}
            </h3>
            <div className="flex items-center text-gray-600  dark:text-white">
              <IoLocationSharp className="mr-1" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
