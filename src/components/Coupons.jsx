import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
<FaCirclePlus />;
const Coupons = ({ coupons }) => {
  return (
    <div className="flex flex-col pb-[5rem]">
      <div className="flex">
        <h1 className="font-bold pl-4 text-xl">Digital coupons</h1>
      </div>

      <div className="flex flex-col mt-3">
        {coupons.map((coupon, index) => {
          return (
            <div
              className="flex bg-white py-4 px-3 border-t-[1px] border-slate-300"
              key={index}
            >
              <div className="flex items-center justify-center mr-3">
                <img
                  src={coupon.productImg}
                  className="max-w-[90px] h-auto"
                ></img>
              </div>
              <div className="mr-5 flex flex-col">
                <h1 className="font-bold">{coupon.productPrice}</h1>
                <p className="truncated-text-sm text-sm">{coupon.couponName}</p>
                <p className="text-sm">{coupon.expiration}</p>
              </div>
              <div className="flex grow justify-end pr-1.5">
                <div className="flex items-center justify-center">
                  <FaCirclePlus className="text-2xl text-[#c8102e] hover:cursor-pointer" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Coupons;
