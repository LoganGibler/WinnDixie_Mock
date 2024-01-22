import React from "react";
import mardigras from "../imgs/mardigrasWD.png";
import beefPic from "../imgs/AngusBeef.png";

import { IoIosArrowForward } from "react-icons/io";

const RecipeCards = () => {
  const images = [mardigras, beefPic];
  const recipes = [
    {
      title: "Recipes for the Krewe",
      des: "Add a fun, festive, finger food-friendly touch to your table this Mardi Gras with king cake 'fries.'",
      img: images[0],
    },
    {
      title: "Find the best beef at your local Winn-Dixie!",
      des: "   Learn more about Certified Angus Beef brand, discover recipes, and more!",
      img: images[1],
    },
  ];

  return (
    <div className="flex justify-center z-10 mt-[5rem] mr-3">
      {recipes.map((recipe, index) => {
        return (
          <div
            key={index}
            className="px-5 py-3 flex flex-col mx-3 bg-white rounded-md shadow1"
          >
            <div className="flex justify-center">
              <img
                src={recipe.img}
                className="rounded-md h-[180px] w-[180px]"
              ></img>
            </div>
            <div className="max-w-[250px] mt-3 flex-grow">
              <h1 className="mt-1 text-[#c8102e] font-semibold">
                {recipe.title}
              </h1>
              <p className="">{recipe.des}</p>
              {index === 0 ? (
                <p className="text-[#c8102e] mt-9 flex font-semibold hover:cursor-pointer">
                  Learn more <IoIosArrowForward className="text-lg mt-1" />
                </p>
              ) : null}
              {index === 1 ? (
                <p className="text-[#c8102e] mt-3 flex font-semibold hover:cursor-pointer">
                  Learn more <IoIosArrowForward className="text-lg mt-1" />
                </p>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeCards;
