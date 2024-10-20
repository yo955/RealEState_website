import AosWrapper from "../lib/ScrollAnimation";
const Category = () => {
  return (
    <AosWrapper>
      <div data-aos="fade-up">
        <section className="category container mb-40">
          <div className="w-full rounded-2xl py-8 bg-secondary mx-auto flex flex-col items-center justify-around p-4">
            <h1 className="text-3xl font-bold font-sans text-center m-5">
              مهتم بمشاريعنا القادمة؟
            </h1>
            <button className="btn rounded-lg w-1/2 sm:w-32 font-sans h-12 bg-slate-900 text-black hover:bg-slate-800 transition duration-300">
              تواصل معنا
            </button>
          </div>
        </section>
      </div>
    </AosWrapper>
  );
};

export default Category;
