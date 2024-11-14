import Link from "next/link";
const HeroAbout = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://prod-images.cooingestate.com/processed/property_image/image/32810/high.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-[#1118278b] ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

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
            <Link
              prefetch={true}
              href="/projects"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              لرؤية مشاريعنا
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
