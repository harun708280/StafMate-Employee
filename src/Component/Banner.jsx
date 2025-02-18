import React from "react";
import Lottie from "react-lottie";
import b from "./banner.json";
import { motion } from "framer-motion";

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
    <div className="md:flex items-center  gap-12 max-w-[1600px] py-12 mx-auto w-11/12 relative">
      <div className="md:w-1/2 flex-1 w-full space-y-4">
        <h1 className="text-2xl md:text-5xl text-white font-extrabold rounded-lg shadow-lg p-3 shadow-secondary">
          Efficient HR Solutions for Your Business Growth.
        </h1>
        <p className="text-lg text-white">
          Streamline your workforce management with our innovative HR solutions,
          designed to drive productivity and foster business growth.
        </p>
        <button className="bg-[#F43F5E] py-2 px-4 rounded-lg uppercase text-white font font-semibold">
          Get Started
        </button>
      </div>

      {/* Rotating Circular Animation */}
      <div className="w-1/2 mx-auto flex justify-end relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
          className="flex flex-1 items-center justify-center"
        >
          <div className="h-[450px] w-[450px] border-[3px] border-gray-500 border-dashed flex justify-center items-center rounded-full">
            <div className="h-[350px] w-[350px] border-gray-500 shadow-xl border-[3px] border-dashed rounded-full"></div>
          </div>
        </motion.div>

        {/* Floating Image */}
        <div className="absolute top-12 ">
          <motion.img
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="w-[700px] rounded-lg border-2 border-primary"
            src={"/assets/dash.png"}
            alt="Dashboard"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
