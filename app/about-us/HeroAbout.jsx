import React from "react";

const HeroAbout = () => {
  return (
    <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            عن نمو الأصول
          </h1>

          <p className="mt-4 lg:w-[1000px] leading-10 text-white sm:text-xl/relaxed font-sans">
            شركة نمو الأصول العقارية متخصصة في التطوير والإستثمار العقاري، مقرها
            في قلب عاصمــة المملكة العربية السعودية الرياض، ويرتكز أساسها على
            أعلى معايير الجودة، التي تحقق مستوى عال من الأصالة و الرفاهية.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              لرؤية مشاريعنا
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
