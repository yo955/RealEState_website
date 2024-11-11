import { PiBuildings } from "react-icons/pi";
import { PiBuildingApartmentDuotone } from "react-icons/pi";

const Apartments = () => {
  return (
    <section className="apartments-section my-10">
      <div className="text flex flex-col justify-center items-center gap-8 w-1/2 mx-auto">
        <div className="icons flex justify-center gap-8 ">
          <div className="right flex items-end gap-2">
            <PiBuildings className="text-5xl " />
            <h1 className="font-light font-sans text-3xl felx items-center">
              المبانى : <span className="text-3xl font-medium">1</span>
            </h1>
          </div>
          <div className="left flex items-end gap-2">
            <PiBuildingApartmentDuotone className="  text-5xl" />
            <h1 className="font-light font-sans text-3xl felx items-center">
              الوحدات : <span className="text-3xl font-medium">8</span>
            </h1>
          </div>
        </div>
        <h1 className="text-3xl  font-extrabold">
          حياة الرفاهية في قلب شمال العاصمة
        </h1>
        <h2 className="text-2xl font-normal font-sans text-center leading-10">
          استمتع بأسلوب حياة مترفة وفريدة من نوعها في مشروعنا السكني الفاخر،
          وحدات تمليك تجمع بين الرقي والراحة.
        </h2>
        <button className="btn bg-transparent font-sans border-[2px] flex justify-center items-center text-xl border-[#c39a62] hover:bg-[#c39a62] p-4  rounded-full h-[40px] w-[300px]">
          تحدث مع مندوب المبيعات
        </button>
      </div>
    </section>
  );
};

export default Apartments;
