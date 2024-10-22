import Image from "next/image";
import { FaHouse } from "react-icons/fa6";
const AboutCard = ({ title, description, Icon }) => {
  return (
    <div className="w-full max-w-[300px] mx-auto bg-transparent border-transparent rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out min-h-[230px]">
      <div className="flex flex-col items-center text-center">
        {/* الأيقونة داخل دائرة */}
        <div className="rounded-full overflow-hidden w-20 h-20 bg-secondary flex items-center justify-center">
          {Icon}
        </div>

        {/* العنوان */}
        <h2 className="mt-4 text-xl font-semibold text-black lg:text-2xl font-sans">
          {title}
        </h2>

        {/* الوصف */}
        <p className="mt-2 text-black  w-full font-sans">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
