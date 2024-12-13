import React from "react";
import "./Hero.css";
import BottomHero from "../BottomHero/BottomHero";

const Hero = () => {
  return (
    <div className="bg-yellow-300 rounded-2xl px-1 pt-1 xs:mx-1">
      <div className="relative  p-10 flex justify-center items-center sm:gap-8 md:gap-12 xl:gap-20 hero-container rounded-2xl h-auto xs:gap-2">
        <div className="flex flex-col text-nowrap items-center gap-5 m-auto">
          <h3 className="xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">THE FESTIVE DROP</h3>
          <div className="flex flex-col items-center gap-1">
            <div
              className="h-0.5 bg-gray-300 xs:w-40 sm:w-60 lg:w-72 xl:w-96"
              // style={{ width: "400px" }}
            ></div>
            <p className="xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl text-white">UPTO 60% OFF</p>
            <div
              className="h-0.5 bg-gray-300 xs:w-40 sm:w-60 lg:w-72 xl:w-96"
              // style={{ width: "400px" }}
            ></div>
          </div>
        </div>
        <img
          src="https://s-media-cache-ak0.pinimg.com/originals/58/28/d0/5828d01119b039ba2c67880ce1dd6538.jpg"
          alt="t-shirt"
          className="m-auto xs:w-60 xs:h-80 sm:w-80 sm:h-full md:w-96 lg:w-2/4 xl:w-2/5 xl:h-full "
        />
      </div>
      <BottomHero />
    </div>
  );
};

export default Hero;
