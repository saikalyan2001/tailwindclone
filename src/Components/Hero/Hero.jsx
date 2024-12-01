import React from "react";
import "./Hero.css";
import BottomHero from "../BottomHero/BottomHero";

const Hero = () => {
  return (
    <div className="bg-yellow-300 rounded-2xl px-1 pt-1">
      <div className="relative  p-10 flex justify-center items-center gap-20 hero-container rounded-2xl h-auto">
        <div className="flex flex-col text-nowrap items-center gap-5 m-auto">
          <h3 className="text-7xl">THE FESTIVE DROP</h3>
          <div className="flex flex-col items-center gap-1">
            <div
              className="h-0.5 bg-gray-300 "
              style={{ width: "400px" }}
            ></div>
            <p className="text-5xl text-white">UPTO 60% OFF</p>
            <div
              className="h-0.5 bg-gray-300 "
              style={{ width: "400px" }}
            ></div>
          </div>
        </div>
        <img
          src="https://s-media-cache-ak0.pinimg.com/originals/58/28/d0/5828d01119b039ba2c67880ce1dd6538.jpg"
          alt="t-shirt"
          className="w-2/5 h-full m-auto"
        />
      </div>
      <BottomHero />
    </div>
  );
};

export default Hero;
