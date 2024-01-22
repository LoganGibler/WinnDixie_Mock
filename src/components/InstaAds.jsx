import React from "react";
import { BsInstagram } from "react-icons/bs";
import instabig1 from "../imgs/InstaApp1.png";
import instabig2 from "../imgs/InstaApp2.png";
import instabig3 from "../imgs/InstaApp3.png";

const InstaAds = () => {
  const images1 = [instabig1, instabig1];
  const images2 = [instabig2, instabig3];

  return (
    <div className="pb-[4rem] px-3">
      <div className="flex justify-center mt-1 ml-0">
        <div className="w-[700px] lg-:w-[1170px]">
          <div className="text-xl justify-start ml-4 font-bold color-[#c8102e] lg-:text-3xl">
            Lastest From the Gram
          </div>
          <div className="flex ml-5 lg-:text-lg">
            <BsInstagram className="mt-1.5 mr-2" />
            Follow Us on{" "}
            <p className="underline ml-1 hover:cursor-pointer">Instagram</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center mt-3 lg-:flex-row">
        <div className="flex justify-center">
          {images1.map((image, index) => {
            return (
              <img
                key={index}
                src={image}
                className="flex mx-5 my-4 shadow1 max-w-[255px] hover:cursor-pointer"
              ></img>
            );
          })}
        </div>

        <div className="flex justify-center">
          {images2.map((image, index) => {
            return (
              <img
                key={index}
                src={image}
                className="flex mx-5 my-4 shadow1 max-w-[255px] hover:cursor-pointer"
              ></img>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InstaAds;
