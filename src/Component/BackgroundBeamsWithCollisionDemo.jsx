import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import useUserRole from "@/Hook/useUserRole";
import { Link, NavLink } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeInOut", delay: 0.4 } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

const rotatingCircleVariants = {
  animate: {
    rotate: 360,
    transition: { duration: 120, repeat: Infinity, ease: "linear" },
  },
};

const floatingImageVariants = {
  animate: {
    y: [0, 20, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

export function BackgroundBeamsWithCollisionDemo() {
  const [role] = useUserRole();
  return (
    <motion.div
      className=" py-20 md:py-32 overflow-hidden relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 flex items-center justify-between md:gap-16">
        {/* Left Text Section */}
        <motion.div className="md:w-1/2 w-full space-y-6" variants={textVariants}>
        <h1 className="text-3xl md:text-5xl text-white font-bold" style={{ lineHeight: '1.2' }}>
  Unlock Your Team's Potential with Our Efficient HR Solutions.
</h1>
          <p className="text-lg text-white opacity-80">
            Revolutionize your workforce management through our cutting-edge HR platform,
            crafted to boost productivity, streamline operations, and drive sustainable business growth.
          </p>
         <div className="">
         <Link
                to={
                  role === "Employee"
                    ? "/dashboard"
                    : role === "HR"
                    ? "/hrDashboard"
                    : role === "Admin"
                    ? "/adminDashboard"
                    : "/"
                }
                className="text-white text-lg mt-4"
              >
          <motion.button
            className="bg-primary py-3 px-6 rounded-lg uppercase text-white font-semibold flex items-center gap-2"
            variants={buttonVariants}
            whileHover="hover"
          >
            Explore Features <FaArrowRight />
          </motion.button>
          </Link>
         </div>
        </motion.div>

        {/* Right Image and Animation Section */}
        <div className="w-1/2 mx-auto flex justify-end pb-12 relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
          className="flex flex-1 items-center justify-center"
        >
          <div className="md:h-[600px]  opacity-20 shadow-2xl   md:w-[600px] border-[3px] border-gray-500 border-dashed flex justify-center items-center rounded-full">
            <div className="md:h-[500px] md:w-[500px] border-gray-500 shadow-xl border-[3px] border-dashed rounded-full"></div>
          </div>
        </motion.div>

        {/* Floating Image */}
        <div className="absolute hidden md:block top-12 ">
          <motion.img
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="md:w-[700px]  md:h-[500px] rounded-lg border-2 border-primary"
            src={"/assets/dash.png"}
            alt="Dashboard"
          />
        </div>
      </div>
      </div>
    </motion.div>
  );
}

export default BackgroundBeamsWithCollisionDemo;