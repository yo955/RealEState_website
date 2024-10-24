import { IoLocationSharp } from "react-icons/io5";
import Image from "next/image";

const Card = ({ status, imageUrl, location, projectName, projectNumber }) => {
  const statusColors = {
    متاح: "bg-green-600 ",
    قريبا: "bg-yellow-500",
    مباع: "bg-red-600",
  };

  return (
    <div className="card hover:shadow-lg transition-all duration-150">
      <a
        href="#"
        className="relative block rounded-3xl border border-gray-100 overflow-hidden shadow-lg  dark:border-gray-600"
      >
        <span
          className={`absolute w-1/4 text-center top-6 left-1 z-10 rounded-r-lg px-4 py-1 text-xl font-medium uppercase tracking-wide text-white ${statusColors[status]}`}
        >
          {status}
        </span>

        <div className="relative w-full h-56 ">
          <Image
            src={imageUrl}
            alt="مشروع عقاري"
            fill
            className="rounded-2xl p-2 object-cover"
            priority // أضف هذه السمة إذا كانت الصورة تظهر في الجزء العلوي من الصفحة
            sizes="(max-width: 640px) 100vw, (min-width: 641px) 50vw" // تحديث sizes
          />
        </div>

        <div className="p-1 bg-white dark:bg-black">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-800  dark:text-white">
              {projectName} {projectNumber}
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
