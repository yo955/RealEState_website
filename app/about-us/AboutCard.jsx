const AboutCard = ({ title, description, Icon }) => {
  return (
    <div className="w-full max-w-[300px] mx-auto bg-transparent border rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out min-h-[230px] dark:border-gray-600">
      <div className="flex flex-col items-center text-center">
        {/* الأيقونة داخل دائرة */}
        <div className="rounded-full overflow-hidden w-20 h-20 bg-secondary flex items-center justify-center dark:bg-black dark:text-white border dark:border-gray-600">
          {Icon}
        </div>

        {/* العنوان */}
        <h2 className="mt-4 text-xl font-semibold text-black lg:text-2xl font-sans  dark:text-gray-100">
          {title}
        </h2>

        {/* الوصف */}
        <p className="mt-2 text-black  w-full font-sans  dark:text-gray-200">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
