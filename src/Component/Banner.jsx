import React from "react";
import Lottie from "react-lottie";
import b from "./banner.json";
const Banner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: b,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex items-center gap-12 max-w-[1600px] py-12 mx-auto w-11/12 h-[70vh]">
      <div className="w-1/2 space-y-4 ">
        <h1 className="text-5xl text-white font-extrabold" >Efficient HR Solutions for Your Business Growth.</h1>
        <p className="text-lg text-white">
          Streamline your workforce management with our innovative HR solutions,
          designed to drive productivity and foster business growth.
        </p>
        <button className="bg-[#F43F5E] py-2 px-4 rounded-lg uppercase text-white font font-semibold">
          Get Started
        </button>
      </div>
      <div className=" ">
        {/* Lottie animation rendered when data is available */}
        <Lottie options={defaultOptions}  />
      </div>
    </div>
  );
};

export default Banner;
