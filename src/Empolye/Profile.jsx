import useAuth from "@/Hook/useAuth";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.2, ease: "easeInOut" } },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.3, ease: "easeInOut" } },
};

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

const Profile = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <motion.div
      className="flex justify-center mt-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className=" w-full max-w-xl flex flex-col justify-center border-red-600 border mx-auto p-6 bg-white shadow-lg rounded-lg">
        <motion.div className="flex items-center space-x-6" variants={imageVariants}>
          <motion.img
            className="w-24 h-24 rounded-full border-4 border-primary"
            src={user?.photoURL}
            alt="Employee"
            layoutId="profile-image"
          />
          <motion.div variants={textVariants}>
            <motion.h2 className="text-2xl font-semibold text-gray-800" layoutId="profile-name">
              {user?.displayName}
            </motion.h2>
            <motion.p className="text-gray-600" layoutId="profile-title">
              Senior Software Engineer
            </motion.p>
            <motion.p className="text-gray-500" layoutId="profile-department">
              IT Department
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div className="mt-6 border-t pt-4" variants={textVariants}>
          <motion.p className="text-gray-700">
            <strong>Email:</strong> {user?.email}
          </motion.p>
          <motion.p className="text-gray-700">
            <strong>Phone:</strong> +1 234 567 890
          </motion.p>
          <motion.p className="text-gray-700">
            <strong>Joining Date:</strong> 12th Jan 2020
          </motion.p>
        </motion.div>

        <motion.button
          className="mt-6 w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          variants={buttonVariants}
          whileHover="hover"
        >
          Edit Profile
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Profile;