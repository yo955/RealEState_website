import { useState } from "react";
import { TbStairs } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { FaShower } from "react-icons/fa";
import { RxBorderTop } from "react-icons/rx";
import Image from "next/image";

const ApartmentCard = ({ apartment }) => {
  const [isOpen, setIsOpen] = useState(false);

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
        return "متاح";
      case "soon":
        return "قريبا";
      case "sold":
        return "مباع";
      default:
        return status;
    }
  }

  const togglePopup = () => {
    if (apartment.status != "soon") {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div>
      <div
        onClick={togglePopup}
        className="card hover:shadow-lg transition-all duration-150 w-full cursor-pointer"
      >
        <div className="relative block rounded-3xl border border-gray-100 overflow-hidden shadow-lg dark:border-gray-600">
          <span
            className={`absolute w-1/4 text-center justify-center inline-table items-center top-6 left-1 z-10 rounded-r-lg px-4 py-1 text-xl font-medium uppercase tracking-wide text-white ${
              statusColors[apartment.status]
            }`}
          >
            {translate(apartment.status.toLowerCase())}
          </span>

          <div className="relative w-full h-56">
            <Image
              src={apartment.mainImage}
              alt="مشروع عقاري"
              fill
              className="rounded-2xl p-2 object-cover"
              priority
              sizes="(max-width: 640px) 100vw, (min-width: 641px) 50vw"
            />
          </div>

          <div className="p-1 bg-white dark:bg-black py-4 ">
            <div className="flex flex-col justify-between px-2 mb-4 gap-3">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                A-3
              </h3>
              <div className="flex items-center text-gray-600 dark:text-white">
                <h1 className="text-xl font-semibold dark:text-white">
                  {apartment.floor}
                </h1>
                <TbStairs className="text-2xl text-black dark:text-white" />
              </div>
              <div className="icon flex justify-between gap-5 pr-2">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 dark:text-white">
                    {apartment.rooms}
                  </span>
                  <IoBedOutline className="text-2xl text-gray-600  dark:text-white" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 dark:text-white">
                    {apartment.bathrooms}
                  </span>
                  <FaShower className="text-2xl text-gray-600  dark:text-white" />
                </div>
                <div className="flex items-center gap-2 pl-2">
                  <span className="text-gray-600 dark:text-white">
                    {apartment.space}
                  </span>
                  <RxBorderTop className="text-2xl text-gray-600  dark:text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-hidden"
          style={{ direction: "ltr" }}
          onClick={togglePopup} // Close when clicking outside popup content
        >
          <div
            className="bg-white  dark:bg-gray-800 rounded-lg p-5 w-11/12 md:w-2/3 lg:w-1/2 relative overflow-x-hidden max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} // Prevent click event from propagating to the background
          >
            <div className="w-14 h-14 p-4  absolute top-0 right-0 bottom-auto left-auto float-right flex justify-center items-center z-10">
              <button
                onClick={togglePopup}
                className="absolute  text-gray-800 hover:text-gray-800 text-3xl dark:text-white  "
              >
                &times; {/* The X icon */}
              </button>
            </div>
            <div className="flex justify-start mb-4 w-full">
              {/* Image in landscape mode (wider than tall) */}
              <div className="w-full max-w-[90vw] p-5 min-w-[500px] h-auto">
                <Image
                  src={apartment.mainImage}
                  alt="مشروع عقاري"
                  priority
                  width={2000} // Setting a wide width for landscape
                  height={1000} // A smaller height for landscape view
                  className="rounded-lg object-cover w-full"
                />
              </div>
            </div>
            <div className="icons bg-[#f7f6f2] dark:bg-slate-700 h-20 flex items-center justify-center p-8 py-12 rounded-lg">
              <div className="icons flex justify-between gap-5 pr-2">
                <div className="flex items-center flex-col gap-2 pl-2">
                  <div className="flex items-center gap-2 pl-2">
                    <TbStairs className="text-2xl text-gray-600  dark:text-white" />
                    <span className="text-gray-600 dark:text-white">
                      {apartment.floor}
                    </span>
                  </div>
                  <h1 className="dark:text-white">الدور</h1>
                </div>
                <div className="flex items-center flex-col gap-2 pl-2">
                  <div className="icon-top flex items-center gap-2">
                    <IoBedOutline className="text-2xl text-gray-600  dark:text-white" />
                    <span className="text-gray-600 dark:text-white">
                      {apartment.rooms}
                    </span>
                  </div>
                  <h1 className="dark:text-white">الغرف</h1>
                </div>
                <div className="flex items-center flex-col gap-2 pl-2">
                  <div className="icon-top flex items-center gap-2">
                    <FaShower className="text-2xl text-gray-600  dark:text-white" />
                    <span className="text-gray-600 dark:text-white">
                      {apartment.bathrooms}
                    </span>
                  </div>
                  <h1 className="dark:text-white">دورات المياه</h1>
                </div>
                <div className="flex items-center flex-col gap-2 pl-2">
                  <div className="icon-top flex items-center gap-2">
                    <RxBorderTop className="text-2xl text-gray-600  dark:text-white" />
                    <span className="text-gray-600 dark:text-white">
                      {apartment.space}
                    </span>
                  </div>
                  <h1 className="dark:text-white">المساحة</h1>
                </div>
              </div>
            </div>
            <h1 className="text-2xl my-2 dark:text-slate-100">
              : التفاصيل الخاصة بالوحدة السكنية{" "}
            </h1>
            <p className="text-gray-600 flex flex-wrap dark:text-gray-300 text-center bg-[#f7f6f2] dark:bg-slate-700 ">
              {apartment.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApartmentCard;
