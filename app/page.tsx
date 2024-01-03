import React from "react";
import HeaderToop from "./Components/HeaderToop";
import HeaderMain from "./Components/HeaderMain";
import NavBaar from "./Components/NavBaar";
import HeroBox from "./Components/HeroBox";
import NewProducts from "./Components/NewProducts";
import Tsetimonial from "./Components/Tsetimonial";
import MobNavbar from "./Components/MobNavbar";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <HeaderToop />
      <HeaderMain />
      <NavBaar />
      <HeroBox />
      <NewProducts />
      <Tsetimonial />
      <MobNavbar />
      <Footer />
    </div>
  );
}
