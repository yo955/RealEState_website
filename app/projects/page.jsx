import dynamic from "next/dynamic";
import Category from "../_components/Category/Category";
import FeatureProjects from "./FeatureProjects";
const MapComponent = dynamic(() => import("../lib/MapComponent"), {
  ssr: false,
});

const Projects = () => {
  return (
    <div>
      <div className="h-[450px]">
        <MapComponent width="100%" />
      </div>

      <FeatureProjects />
      <Category />
    </div>
  );
};

export default Projects;
