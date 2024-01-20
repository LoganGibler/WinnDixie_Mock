import React from "react";
import bigAppDeal from "../imgs/bigAppDeal.png";
import percentBack from "../imgs/percentBack.png";
import moneyPhone from "../imgs/moneyPhone.png";

const WaysToSaveDeals = () => {
  const ways2saveDeals = [
    {
      title: "Big App Deal",
      description: "Save more with the hottest deal.",
      img: bigAppDeal,
    },
    {
      title: "Percent back offers",
      description:
        "A percent back offer to get bonus reward points back on your purchase.",
      img: percentBack,
    },
    {
      title: "Digital Coupons",
      description:
        "From groceries to household items, we'll help you find the savings.",
      img: moneyPhone,
    },
  ];

  // #56b7e6
  return (
    <div className="flex pb-[5rem] mx-5 justify-center">
      <div className="flex justify-center">
        <div className="hidden md:absolute md:w-full md:h-[150px] md:flex bg-[#24125f] justify-center z-1">
          <h1 className="text-white font-bold text-xl mt-[1.5rem] md:text-2xl">
            More ways to save
          </h1>
        </div>
        <div className="md:flex-row flex flex-col mx-2 mt-2 md:mt-[2rem] justify-center">
          {ways2saveDeals.map((deal, index) => {
            return (
              <div
                className="shadow1 px-3 bg-white pb-3 pt-1 mx-2 flex flex-col rounded-md mt-10 z-10 md:w-[240px] lg:w-[300px]"
                key={index}
              >
                <div className="bg-[#24125f] px-2 text-white py-2 mt-1 rounded-tr-md rounded-tl-md md:h-[100px]">
                  <h1 className="font-bold text-lg md:text-base">
                    {deal.title}
                  </h1>
                  <p className="md:text-sm">{deal.description}</p>
                </div>
                <div className="bg-[#56b7e6] flex items-center justify-center py-4 rounded-br-md rounded-bl-md lg:h-[135px]">
                  <img src={deal.img} className="w-[150px] md:w-[100px]"></img>
                </div>
                <div className="flex justify-center mt-3">
                  <button className="py-2 text-bold bg-[#c8102e] text-white font-bold rounded-md grow mx-[3rem] md:text-base hover:cursor-pointer">
                    Learn more
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WaysToSaveDeals;
