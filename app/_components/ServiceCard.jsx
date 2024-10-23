import Image from "next/image";

const ServiceCard = ({ title, description, imageSrc }) => {
  return (
    <div className="w-full max-w-[300px] mx-auto bg-secondary border border-gray-200 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out min-h-[230px]">
      <div className="flex flex-col items-center">
        <div className="rounded-full overflow-hidden w-20 h-20 bg-slate-600">
          <Image
            src={imageSrc}
            alt={title}
            width={80} // تأكد من ضبط القيم المناسبة
            height={80}
            className="object-cover w-full h-full" 
          />
        </div>

        <h2 className="mt-4 text-xl font-bold text-primary">{title}</h2>
        <p className="mt-2 text-gray-600 text-center">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
