import React, { useState } from "react";
import "./App.css";
import soda from "../src/imgs/sodacoupon.png";
import litter from "../src/imgs/littercoupon.png";
import gain from "../src/imgs/gaincoupon.png";
import "flickity/dist/flickity.min.css";
import {
  Navbar,
  Menu,
  MobileSubMenu,
  Banner,
  Deals,
  Coupons,
  WeeklyAd,
  WeeklyAdCards,
  WaysToSaveDeals,
  JoinApp,
  Trending,
  InstaAds,
  Footer,
  FooterLarge,
} from "./components";

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileSubOptionTitle, setMobileSubOptionTitle] = useState("");
  const [subOptions, setSubOptions] = useState([]);
  const [mobileSubMenuActive, setMobileSubMenuActive] = useState(false);

  const coupons = [
    {
      id: 1,
      couponName:
        "Buy 3 of Crush, Schweppes, Starry or Mug (Valid on Crush, Schweppes, Starry or Mug 2 Liter. Items must appear on the same receipt).",
      productImg: soda,
      productPrice: "$2.00 OFF",
      expiration: "Exp: 2/14",
      couponDetails:
        "RETAILER: Dr Pepper/Seven Up, Inc. will reimburse you the face value plus 8¢ handling if you and the consumer have met the offer’s terms. Void if prohibited, taxed, restricted, transferred, assigned, sold, purchased or if coupon is reproduced, gang cut or mint condition. Consumer pays deposit and taxes. Cash value 1/20¢. Good only in USA. Limit One Coupon Per Item(s) Purchased. RETAILER REDEEM BY MAILING TO: Keurig Dr. Pepper, Inmar Brand Solutions Dept. # 78000, Mfr Rcv Office, 801 UNION PACIFIC BLVD STE 5, LAREDO, TX 78045-9475. CRUSH and SCHWEPPES are registered trademarks of Dr Pepper/ Seven Up, Inc. ©2023 Dr Pepper/Seven Up, Inc.",
    },
    {
      id: 2,
      couponName:
        "Buy 1 of TIDY CATS® (Valid on 24 lb box of TIDY CATS® Tidy Care Comfort Clumping Cat Litter or one (1) 8 lb bag of TIDY CATS® Tidy Care Alert Non-Clumping Cat Litter).",
      productImg: litter,
      productPrice: "$3.00 OFF",
      expiration: "Exp: 3/05",
      couponDetails:
        "NOT FOR RESALE. Coupon void if altered, copied, sold, purchased, transferred, exchanged or where prohibited or restricted by law. CIC® Member Coupon Integrity Program. CONSUMER: Limit one coupon per specified item(s) purchased. No cash or credit in excess of shelf price awarded. Any other use constitutes fraud. RETAILER: Nestlé Purina PetCare Company, Inmar Dept. #17800, 801 Union Pacific Blvd, STE 5, Laredo, TX 78045, USA will redeem this coupon per our Nestlé Coupon Redemption Policy found at www.purina.com/terms-and-conditions. Consumer must pay sales tax where applicable. Valid in the USA, incl. APOs/FPOs. Cash value: 1/80¢.",
    },
    {
      id: 3,
      couponName:
        "Buy 1 of Gain Liquid Laundry Detergent (Valid on Gain Liquid Laundry Detergent 46 oz. Excludes Gain Flings, Gain Ultra Flings, Gain Liquid Fabric Softeners, Gain Essential Oils, Gain Fireworks, Gain Sheets and trial/travel size).",
      productImg: gain,
      productPrice: "$4.00 OFF",
      expiration: "Exp: 2/18",
      couponDetails:
        "Dealer: Submission to Procter &amp; Gamble signifies compliance with 'Requirements for Proper Coupon Redemption.' Please visit this link for coupon terms for proper redemption: http://www.pg.com/en_US/downloads/partners_suppliers/PG_Coupon_Terms_of_Proper_Redemption.pdf. Limit of one coupon per item. Consumer: Limit ONE coupon per purchase of products and quantities stated. Any other use constitutes fraud. Coupons are not authorized if purchasing products for resale. You may pay sales tax. Not valid in Puerto Rico. Limit of one coupon per household. Digital Coupons and paper coupons may not be combined on the purchase of a single item. Specially marked items, such as Clearance or Manager's Specials may not be eligible for Digital Coupons.",
    },
  ];

  return (
    <div className="flex flex-col bg-white">
      <Navbar
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
      />

      <Menu
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        mobileSubOptionTitle={mobileSubOptionTitle}
        setMobileSubOptionTitle={setMobileSubOptionTitle}
        subOptions={subOptions}
        setSubOptions={setSubOptions}
        mobileSubMenuActive={mobileSubMenuActive}
        setMobileSubMenuActive={setMobileSubMenuActive}
      />
      <MobileSubMenu
        mobileSubOptionsTitle={mobileSubOptionTitle}
        subOptions={subOptions}
        mobileSubMenuActive={mobileSubMenuActive}
        setMobileSubMenuActive={setMobileSubMenuActive}
      />
      <Banner />
      <div className="">
        <div className="flex flex-col lg:hidden">
          <Deals />
          <Coupons coupons={coupons} />
        </div>
        <div className="flex justify-center">
          <div className="hidden lg:flex flex-col">
            <Deals />
            <Coupons coupons={coupons} />
          </div>
          <div className="hidden lg:flex justify-center ml-2">
            <WeeklyAdCards />
          </div>
        </div>

        <div className="hidden md:flex lg:hidden justify-center">
          <WeeklyAdCards />
        </div>
       
      </div>

      <div className="flex md:hidden">
          <WeeklyAd />
        </div>

      <div className="">
        <WaysToSaveDeals />
      </div>
      <div>
        <JoinApp />
      </div>
      <div className="">
        <Trending />
      </div>
      <InstaAds />
      <div className="flex justify-center lg:hidden">
        <Footer />
      </div>
      <div className="">
        <FooterLarge />
      </div>

      {menuActive || showDropdown ? (
        <div
          className="overlay1"
          onClick={(e) => {
            setMenuActive(false);
            setShowDropdown(false);
          }}
        ></div>
      ) : null}
    </div>
  );
}

export default App;
