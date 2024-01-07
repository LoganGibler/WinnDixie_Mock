import React from "react";
import smallmeat from "../imgs/smallMeat.png";
import bigmeat from "../imgs/bigmeat.png";

const Deals = () => {
  const productDeals = [
    {
      productName: "GROUND BEEF MARKET STYLE, 1 Pound",
      productImg: bigmeat,
      productPrice: "3.99",
      productPriceUnit: "lb",
      productPriceSave: "Save $2.00",
      productPriceSaveUnit: "lb",
      productPriceSavePercent: "25%",
      productPriceSaveValid: "Valid 1/6 - 2/6",
    },
    {
      productName: "BEEF FOR STEW LEAN, 1 Pound",
      productImg: smallmeat,
      productPrice: "6.99",
      productPriceUnit: "lb",
      productPriceSave: "Save $3.00",
      productPriceSaveValid: "Valid 1/6 - 3/6",
    },
  ];

  return (
    <div className="flex flex-col mt-2">
      <div className="flex pl-4 pb-2 border-b-[1px] border-slate-300">
        <h1 className="font-bold text-lg">Deals near you</h1>
      </div>

      <div className="mt-2 flex flex-col">
        {productDeals.map((product, index) => {
          return (
            <div key={index} className="flex px-3 py-1.5 mt-1">
              <div className="flex">
                <img
                  src={product.productImg}
                  className="h-[100px] w-[100px]"
                ></img>
              </div>
              <div className="flex flex-col px-2">
                <div className="flex">
                  <p className="font-bold text-sm">{product.productName}</p>
                </div>
                <div className="flex">
                  <p className="text-sm">${product.productPrice}</p>
                  <p className="text-sm ml-1">{product.productPriceUnit}</p>
                </div>
                <div className="flex">
                  <p className="text-sm text-[#c8102e]">
                    {product.productPriceSave}
                  </p>
                </div>
                <div className="flex">
                  <p className="text-sm text-[#c8102e]">
                    {product.productPriceSaveValid}
                  </p>
                </div>
              </div>
              <div className="flex"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Deals;
