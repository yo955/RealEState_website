// React Icons //
import { FaArrowLeft } from "react-icons/fa6";
// React Icons //
import AosWrapper from "../lib/ScrollAnimation";
import Card from "./FeaturedCard";

const Featured = () => {
  const CardContent = [
    {
      id: 1,
      status: "مباع",
      imageUrl:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop",
      location: "الرياض - العقيق",
      projectName: "نمو",
      projectNumber: "103",
    },
    {
      id: 2,
      status: "قريبا",
      imageUrl:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop",
      location: "الرياض - العقيق",
      projectName: "نمو",
      projectNumber: "105",
    },
    {
      id: 3,
      status: "متاح",
      imageUrl:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop",
      location: "الرياض - العقيق",
      projectName: "نمو",
      projectNumber: "107",
    },
  ];

  const CardJsx = CardContent.map((item) => {
    return (
      <AosWrapper key={item.id}>
        <div data-aos="zoom-in">
          <Card
            status={item.status}
            imageUrl={item.imageUrl}
            location={item.location}
            projectName={item.projectName}
            projectNumber={item.projectNumber}
          />
        </div>
      </AosWrapper>
    );
  });
  return (
    <section className="mt-16 pb-12">
      <div className="header flex items-center justify-between container mb-10">
        <h1 className=" text-black text-3xl font-bold">مشاريعنا</h1>
        <h1 className=" text-black text-2xl from-neutral-400 border-b-2 border-black cursor-pointer flex items-center">
          جميع المشاريع <FaArrowLeft className="m-1" />
        </h1>
      </div>
      <div className="cards grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 container">
        {CardJsx}
      </div>
    </section>
  );
};

export default Featured;
