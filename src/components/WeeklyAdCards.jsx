import React from "react";
import winespiritsad from "../imgs/winespiritsad.png";
import storeflyer from "../imgs/storeflyer.png";
import storesad from "../imgs/storesad.png";

const WeeklyAdCards = () => {
  const images = [storeflyer, storesad, winespiritsad];

  return (
    <div className="flex flex-col pb-[5rem] ml-[0rem]">
      <h1 className="grow ml-3 mb-2 pb-3 text-2xl font-bold">Weekly Ads</h1>
      <div className="flex justify-center ">
        <div className="flex max-w-[840px] grow">
          {images.map((image, index) => {
            return (
              <div
                className="flex shadow1 hover:cursor-pointer  flex-col px-2 mx-[10px] pt-3 pb-4 border-[1px] border-slate-300 max-w-[200px] rounded-md"
                key={index}
              >
                <div className="flex justify-center py-2">
                  <img src={image} className="w-[150px] h-[150px]"></img>
                </div>

                {index === 0 ? (
                  <div className="">
                    <p className="text-[#c8102e] font-bold">Your stores ad</p>
                    <p> Wednesday January 10 - Wednesday January 17</p>
                  </div>
                ) : null}
                {index === 1 ? (
                  <div>
                    <p className="text-[#c8102e] font-bold">Store Survey</p>
                    <p> Wednesday January 10 - Wednesday January 24</p>
                  </div>
                ) : null}
                {index === 2 ? (
                  <div>
                    <p className="text-[#c8102e] font-bold">Wine & Spirits</p>
                    <p> Monday January 01 - Monday January 29</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WeeklyAdCards;
