import Link from "next/link";
import AosWrapper from "../lib/ScrollAnimation";
const Category = () => {
  return (
    <AosWrapper>
      <div data-aos="fade-up">
        <section className="category container my-40">
          <div className="w-full rounded-2xl py-8 bg-secondary mx-auto flex flex-col items-center justify-around p-4 dark:bg-black dark:border-gray-600 border">
            <h1 className="text-3xl font-bold font-sans text-center m-5 text-black dark:text-white">
              مهتم بمشاريعنا القادمة؟
            </h1>
            <Link
              href="https://wa.me/201555909247" // استبدل "201012345678" برقمك الفعلي
              className="text-white transition hover:text-gray-500/75 text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn rounded-lg p-2 w-full font-sans h-12 bg-slate-900 text-white hover:bg-slate-800 transition duration-300 ">
                تواصل معنا
              </button>
            </Link>
          </div>
        </section>
      </div>
    </AosWrapper>
  );
};

export default Category;
