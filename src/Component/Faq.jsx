import React from "react";
import { motion } from "framer-motion";
import ro from "/tokenomics.png";

const Faq = () => {
  const cards = [
    { id: 1, title: "Card 1", content: "This is the first card." },
    { id: 2, title: "Card 2", content: "This is the second card." },
    { id: 3, title: "Card 3", content: "This is the third card." },
    { id: 4, title: "Card 4", content: "This is the fourth card." },
    { id: 5, title: "Card 5", content: "This is the fifth card." },
  ];
  return (
    <div className="">
      <h1 className="text-center text-4xl font-extrabold my-2 text-white">Performance & Development Tracker</h1>
      
      <div className="container mx-auto md:flex items-center my-12">
      <div className="md:w-1/2 ">
        <div className="bg-primary md:w-9/12 p-6 rounded-lg mx-auto bg-opacity-10">
          <div className="container">
            <div className="flex justify-between my-4 text-white text-lg items-center">
              <h1>Engineering & Development </h1>
              <div className="border-b-2 border-yellow-300 w-[200px]"></div>
              <p>50%</p>
            </div>
          </div>
          <div className="container">
            <div className="flex justify-between my-4 text-white text-lg items-center">
              <h1>Management & Advisors </h1>
              <div className="border-b-2 border-red-500 w-[200px]"></div>
              <p>20%</p>
            </div>
          </div>
          <div className="container">
            <div className="flex justify-between my-4 text-white text-lg items-center">
              <h1>Sales & Marketing : </h1>
              <div className="border-b-2 border-green-500 w-[200px]"></div>
              <p>30%</p>
            </div>
          </div>
          <div className="container">
            <div className="flex justify-between my-4 text-white text-lg items-center">
              <h1>Support & Customer Service </h1>
              <div className="border-b-2 border-purple-500 w-[200px]"></div>
              <p>10%</p>
            </div>
          </div>
          <div className="container">
            <div className="flex justify-between my-4 text-white text-lg items-center">
              <h1>Training & Development </h1>
              <div className="border-b-2 border-teal-500 w-[200px]"></div>
              <p>5%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center items-center">
      <div className="w-[200px] h-[200px] bg-primary bg-opacity-70 rounded-full blur-2xl absolute"></div>
        <motion.div
          animate={{
            rotate: 360, 
          }}
          transition={{
            duration: 30, 
            repeat: Infinity, 
            ease: "linear",
          }}
          className="w-full max-w-[500px] h-full max-h-[500px] flex justify-center items-center"
        >
          <img
            src={ro}
            alt="Rotating"
            className="object-contain w-full h-full"
          />
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default Faq;
