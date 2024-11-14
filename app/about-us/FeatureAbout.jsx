import React from "react";
import AboutCard from "./AboutCard";
import { FaHouse } from "react-icons/fa6";
import AosWrapper from "../lib/ScrollAnimation";
import Link from "next/link";

const FeatureAbout = () => {
  const CardContent = [
    {
      title: "تصاميم عصرية",
      description: "نقدم تصاميم تجمع بين الإبداع والوظائف العملية",
      Icon: <FaHouse className="text-3xl" />,
    },
    {
      title: "جودة استثنائية",
      description:
        "نلتزم بأعلى معايير الجودة في جميع جوانب مشاريعنا، من التصميم إلى التنفيذ",
      Icon: <FaHouse className="text-3xl" />,
    },
    {
      title: "بيئة متكاملة",
      description: "نبني مجتمعات متكاملة توفر المرافق والخدمات لحياة ميسرة",
      Icon: <FaHouse className="text-3xl" />,
    },
    {
      title: "تجربة سكن فريدة",
      description: "نسعى لتقديم تجربة سكن تجمع بين الاسترخاء والتميز",
      Icon: <FaHouse className="text-3xl" />,
    },
  ];

  const CardJsx = CardContent.map((item, index) => {
    return (
      <AboutCard
        key={index}
        title={item.title}
        description={item.description}
        Icon={item.Icon}
      />
    );
  });

  return (
    <section className="featured container mx-auto mb-20 px-4">
      <div className="grid lg:grid-cols-2 grid-cols-1 items-stretch gap-8">
        {/* النص والمحتوى على اليسار */}
        <AosWrapper>
          <div data-aos="fade-left">
            <div className="bg-secondary w-full p-6 lg:p-8 rounded-xl flex flex-col justify-evenly h-full dark:bg-black border dark:border-gray-600 dark:text-gray-100">
              <div>
                <h1 className="font-bold font-sans text-2xl md:text-3xl mb-5 dark:text-white">
                  مميزات مشاريعنا
                </h1>
                <p className="text-sm md:text-base lg:text-lg text-slate-500 font-medium font-sans mb-5  dark:text-gray-200 dark:font-bold">
                  مشاريعنا المميزة تجمع بين تصاميم مبتكرة ووظائف عملية، مع
                  التركيز على تقديم جودة عالية تلبي تطلعاتك. نحن نبني بيئات
                  متكاملة تتضمن المرافق والخدمات التي تضفي راحة ورفاهية على
                  حياتك. مواقعنا استراتيجية لضمان الوصول السهل إلى مختلف
                  المناطق، ونستخدم أحدث التقنيات لتعزيز راحتك وأمانك. بالإضافة
                  إلى فرص الاستثمار المجزية التي نقدمها، نسعى دائمًا لتقديم
                  تجربة سكن استثنائية تجمع بين الاسترخاء والتميز.
                </p>
              </div>
              <Link prefetch={true} href="/projects">
                <button className="text-white bg-black py-2 px-4 rounded-md mt-2 lg:w-40 md:py-4 md:px-6 border dark:border-gray-500">
                  شاهد احدث المشاريع
                </button>
              </Link>
            </div>
          </div>
        </AosWrapper>

        {/* الكروت على اليمين */}
        <AosWrapper>
          <div data-aos="fade-right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full">
              {CardJsx}
            </div>
          </div>
        </AosWrapper>
      </div>
    </section>
  );
};

export default FeatureAbout;
