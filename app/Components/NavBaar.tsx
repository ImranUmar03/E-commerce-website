import React from "react";

const NavBaar = () => {
  return (
    <div className="flex items-center justify-center gap-10 py-5 text-[18px] cursor-pointer">
      <p className=" hover:text-accent hover:border-b-4 border-accent">Home</p>
      <p className=" hover:text-accent hover:border-b-4 border-accent">
        CATEGORIES
      </p>
      <p className=" hover:text-accent hover:border-b-4 border-accent">MEN'S</p>
      <p className=" hover:text-accent hover:border-b-4 border-accent">
        WOMEN'S
      </p>
      <p className=" hover:text-accent hover:border-b-4 border-accent">
        JEWELRY
      </p>
      <p className=" hover:text-accent hover:border-b-4 border-accent">
        OERFUME
      </p>
      <p className=" hover:text-accent hover:border-b-4 border-accent">BLOG</p>
      <p className=" hover:text-accent hover:border-b-4 border-accent">
        HOT OFFERS
      </p>
    </div>
  );
};

export default NavBaar;
