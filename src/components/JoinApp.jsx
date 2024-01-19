import React from "react";
import mobilePhoneImg from "../imgs/mobilePhoneApp.png";
import phoneImg from "../imgs/cellPhoneApp.png";
// c8102e

const JoinApp = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-[#c8102e] flex flex-col text-white px-3 md:justify-center md:flex-row md:grow md:pb-10">
        <div className="flex flex-col md:mx-1 md:px-1 mx-3 px-3 mt-8 lg:mr-10 lg:mt-10">
          <h1 className="text-xl font-bold md:text-2xl lg:text-4xl lg:pb-3">
            The app is where it's at
          </h1>
          <p className="md:mt-3 lg:text-lg">
            Get all your Winn-Dixie rewards in one place!
          </p>
          <li className="md:mt-3 lg:text-lg">Check your points</li>
          <li className="lg:text-lg">Shop the weekly ad</li>
          <li className="lg:text-lg">Score the weekly ad</li>
          <li className="font-bold mb-3 lg:text-lg">
            $5 off $30 coupon when you sign up
          </li>
          <p className="lg:text-lg">
            Want to see all the benefits of app users?
          </p>
          <p className="underline md:mt-0.5 lg:text-lg">Click Here!</p>
          <div className="hidden lg:flex justify-center mt-8">
            <button className="font-semibold border-[1px] rounded-md border-white px-6 py-2 hover:cursor-pointer lg:text-lg">
              Join Winn-Dixie rewards
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-4 md:hidden">
          <button className="font-semibold border-[1px] rounded-md border-white px-6 py-2 hover:cursor-pointer">
            Join Winn-Dixie rewards
          </button>
        </div>
        <div className="flex justify-center mt-4 md:hidden">
          <img src={mobilePhoneImg}></img>
        </div>
        <div className="hidden md:flex ml-[10rem]">
          <img
            src={mobilePhoneImg}
            className="rounded-md pt-2 lg:w-[250px]"
          ></img>
        </div>
      </div>
      <div className="flex justify-center mx-3 px-3 mt-3 text-center md:hidden">
        <p>
          <u className="text-red-400">Click here</u> to see the full Winn-Dixie
          rewards offer Terms and Conditions.
        </p>
      </div>
    </div>
  );
};

export default JoinApp;
