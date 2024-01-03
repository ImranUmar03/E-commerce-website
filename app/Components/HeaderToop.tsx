import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
const HeaderToop = () => {
  return (
    <div className="border-y mt-9 border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1 ml-10">
            <div className="header_top__icon_wrapper  transition-transform transform hover:scale-105">
              <BsFacebook />
            </div>
            <div className="header_top__icon_wrapper  transition-transform transform hover:scale-105">
              <BsInstagram />
            </div>
            <div className="header_top__icon_wrapper  transition-transform transform hover:scale-105">
              <BsTwitter />
            </div>
            <div className="header_top__icon_wrapper  transition-transform transform hover:scale-105">
              <BsLinkedin />
            </div>
          </div>
          <div className="text-gray-500 text-[12px]">
            <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - &55
          </div>

          <div className="flex gap-4">
            <select
              className="text-gray-500 text-[12px] w-[70px]"
              name="currency"
              id="currency"
            >
              <option value="USD $">USD $</option>
              <option value="EUR €">EUR €</option>
              <option value="INR">INR</option>
            </select>
            <select
              className="text-gray-500 text-[12px] w-[80px]"
              name="language"
              id="language"
            >
              <option value="ENGLISH">ENGLISH</option>
              <option value=" FRENCH">FRENCH</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderToop;
