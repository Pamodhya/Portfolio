import React, { useState } from "react";
import { techstack } from "../techstack";
import "../styles.css";

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState("Advance");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <h1 className="mt-10 text-4xl font-bold text-center">Tech stack</h1>
      <br />
      <br />
      <div className="flex justify-center">
        <button
          className="py-2 px-8 border border-solid border-white font-semibold text-white bg-black hover:bg-red-800"
          onClick={() => handleCategoryChange("Advance")}
        >
          Advance
        </button>
        <button
          className="py-2 px-8 border border-solid border-white font-semibold text-white bg-black hover:bg-red-800"
          onClick={() => handleCategoryChange("Good")}
        >
          Good
        </button>
        <button
          className="py-2 px-8 border border-solid border-white font-semibold text-white bg-black hover:bg-red-800"
          onClick={() => handleCategoryChange("Familiar")}
        >
          Familiar
        </button>
      </div>

      <br />
      <div className="techstack-container ">
        {techstack
          .filter((tech) => tech.category === selectedCategory)
          .map((tech, index) => (
            <div key={index} className="techstack">
              <img src={tech.image} alt={tech.name} className="techstack-image" />
              <h3>{tech.name}</h3>
              <p className="category">{tech.category}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TechStack;
