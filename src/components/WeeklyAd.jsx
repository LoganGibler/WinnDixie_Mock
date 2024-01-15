import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import winespiritsad from "../imgs/winespiritsad.png";
import storeflyer from "../imgs/storeflyer.png";
import storesad from "../imgs/storesad.png";
import "../../src/App.css"; // Import your custom styles

const WeeklyAd = () => {
  const images = [storeflyer, winespiritsad, storesad];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container pb-[5rem] mx-0">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex flex-col pb-2 border-2 rounded-md">
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
                    Your Store's ad
                  </p>
                  <p className="text-sm">
                    Wednesday January 10 - Wednesday January 17
                  </p>
                </div>
              ) : null}
              {index === 1 ? (
                <div>
                  <p className="font-semibold text-[#c8102e]">Wine & Spirit</p>
                  <p className="text-sm">
                    Monday January 01 - Monday January 29
                  </p>
                </div>
              ) : null}
              {index === 2 ? (
                <div>
                  <p className="font-semibold text-[#c8102e]">In-store flyer</p>
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
  );
};

export default WeeklyAd;
