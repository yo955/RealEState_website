"use client";
import ProjectsCard from "../_components/FeaturedCard";
import { useState } from "react";
import productsData from "./products.json";
import AosWrapper from "../lib/ScrollAnimation";

const FeatureProjects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProducts = productsData.filter((product) => {
    if (filter === "all") return true;
    return product.status === filter;
  });

  return (
    <div className="container mx-auto p-4">
      {/* Buttons section */}
      <div className="flex flex-wrap justify-center items-center text-center mb-5 font-sans text-lg font-bold gap-4">
        <button
          className={`px-4 py-2 rounded-md transition-all duration-300 ${
            filter === "all"
              ? "bg-orange-300"
              : "bg-gray-200 hover:bg-orange-300"
          }`}
          onClick={() => setFilter("all")}
        >
          الكل
        </button>
        <button
          className={`px-4 py-2 rounded-md transition-all duration-300 ${
            filter === "مباع"
              ? "bg-orange-300"
              : "bg-gray-200 hover:bg-orange-300"
          }`}
          onClick={() => setFilter("مباع")}
        >
          مباع
        </button>
        <button
          className={`px-4 py-2 rounded-md transition-all duration-300 ${
            filter === "قريبا"
              ? "bg-orange-300"
              : "bg-gray-200 hover:bg-orange-300"
          }`}
          onClick={() => setFilter("قريبا")}
        >
          قريبا
        </button>
        <button
          className={`px-4 py-2 rounded-md transition-all duration-300 ${
            filter === "متاح"
              ? "bg-orange-300"
              : "bg-gray-200 hover:bg-orange-300"
          }`}
          onClick={() => setFilter("متاح")}
        >
          متاح
        </button>
      </div>

      {/* Cards grid */}
      <AosWrapper>
        <div data-aos="zoom-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProjectsCard
                key={product.id}
                status={product.status}
                imageUrl={product.imageUrl}
                location={product.location}
                projectName={product.projectName}
                projectNumber={product.projectNumber}
              />
            ))}
          </div>
        </div>
      </AosWrapper>
    </div>
  );
};

export default FeatureProjects;
