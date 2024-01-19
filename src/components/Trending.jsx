import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../src/App.css"; // Import your custom styles
import mardigras from "../imgs/mardigrasWD.png";
import beefPic from "../imgs/AngusBeef.png";

const Trending = () => {
  const images = [mardigras, beefPic];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="pb-[15rem] mt-[3rem]">
      <div className="flex flex-col justify-center">
        <div className="flex justify-center px-8 pb-4">
          <h1 className="text-lg font-bold text-[#c8102e]">
            Check out what's trending before checking out
          </h1>
        </div>
        <div>
          <img
            className="absolute z-1"
            src="https://www.winndixie.com/-/media/media/home-content/whatsnewtrending/windixie-home-mobile.png"
          ></img>
        </div>
        <div className="flex justify-center mt-[5rem] mx-8">
          <div className="shadow1 px-4 py-3 flex flex-col  z-10 bg-white rounded-md">
            <div className="flex items-center">
              <img
                className="rounded-md"
                src="https://www.winndixie.com/-/media/media/weekly-bau-content/2024/wk4-2024/web/primary-pod/primary_trendingpod_shoppermarketing1_445x209.png"
              ></img>
            </div>
            <p className="font-semibold mt-1.5">Earn a 5$ Digital Coupon!</p>
            <p className="mt-1.5">
              Buy a $25 in participating products and earn a 5$ digital coupon.
            </p>
            <p className="font-semibold hover:cursor-pointer flex mt-[2rem]">
              Shop now <IoIosArrowForward className="text-xl mt-[3px] ml-2" />
            </p>
          </div>
        </div>

        <div className="carousel-container pb-[3rem] mx-8 mt-5 rounded-md">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div
                key={index}
                className="flex flex-col pb-2 border-2 rounded-md shadow1"
              >
                <div className="flex justify-center pt-3 pb-2">
                  <img
                    src={image}
                    className="rounded-md mx-0 w-[150px] h-[150px]"
                    alt={`Slide ${index + 1}`}
                  />
                </div>
                <div className="px-4">
                  {index === 0 ? (
                    <div>
                      <p className="font-semibold text-[#c8102e]">
                        Recipes for the Krewe
                      </p>
                      <p className="text-sm">
                        Add a fun, festive, finger food-friendly touch to your
                        table this Mardi Gras with king cake "fries."
                      </p>
                    </div>
                  ) : null}
                  {index === 1 ? (
                    <div>
                      <p className="font-semibold text-[#c8102e]">
                        Find the best beef at your local Winn-Dixie!
                      </p>
                      <p className="text-sm">
                        Learn more about Certified Angus Beef brand, discover
                        recipes, and more!
                      </p>
                    </div>
                  ) : null}
                  {index === 2 ? (
                    <div>
                      <p className="font-semibold text-[#c8102e]">
                        In-store flyer
                      </p>
                      <p className="text-sm">
                        Wednesday January 10 - Wednesday January 24
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Trending;
