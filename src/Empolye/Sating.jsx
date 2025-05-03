import React from 'react';
import { FaUserCog, FaBell, FaLock, FaPalette, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.1 } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const inputVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const Setting = () => {
  return (
    <motion.div
      className="container mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="text-2xl font-semibold text-gray-800 mb-6" variants={sectionVariants}>
        Account Settings
      </motion.h2>

      {/* Profile Settings */}
      <motion.div className="mb-6 border-b pb-4" variants={sectionVariants}>
        <div className="flex items-center space-x-4 mb-2">
          <FaUserCog className="text-xl text-gray-600" />
          <motion.h3 className="text-lg font-semibold text-gray-700" variants={inputVariants}>
            Profile
          </motion.h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-gray-600 text-sm font-bold mb-2">
              Name
            </label>
            <motion.input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              defaultValue="John Doe"
              variants={inputVariants}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-600 text-sm font-bold mb-2">
              Email
            </label>
            <motion.input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              defaultValue="john.doe@example.com"
              variants={inputVariants}
              transition={{ delay: 0.1 }}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-600 text-sm font-bold mb-2">
              Phone Number
            </label>
            <motion.input
              type="tel"
              id="phone"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              defaultValue="+1 555-1234"
              variants={inputVariants}
              transition={{ delay: 0.2 }}
            />
          </div>
          <div>
            <label htmlFor="bio" className="block text-gray-600 text-sm font-bold mb-2">
              Bio
            </label>
            <motion.textarea
              id="bio"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="3"
              defaultValue="A passionate software developer..."
              variants={inputVariants}
              transition={{ delay: 0.3 }}
            ></motion.textarea>
          </div>
          <motion.button
            className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Update Profile
          </motion.button>
        </div>
      </motion.div>

      {/* Notifications Settings */}
      <motion.div className="mb-6 border-b pb-4" variants={sectionVariants} transition={{ delay: 0.1 }}>
        <div className="flex items-center space-x-4 mb-2">
          <FaBell className="text-xl text-gray-600" />
          <motion.h3 className="text-lg font-semibold text-gray-700" variants={inputVariants}>
            Notifications
          </motion.h3>
        </div>
        <div className="space-y-2">
          <motion.div className="flex items-center justify-between" variants={inputVariants}>
            <label className="text-gray-700">Email Notifications</label>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-primary rounded focus:outline-none focus:shadow-outline" defaultChecked />
          </motion.div>
          <motion.div className="flex items-center justify-between" variants={inputVariants} transition={{ delay: 0.1 }}>
            <label className="text-gray-700">Push Notifications</label>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-primary rounded focus:outline-none focus:shadow-outline" />
          </motion.div>
          <motion.div className="flex items-center justify-between" variants={inputVariants} transition={{ delay: 0.2 }}>
            <label className="text-gray-700">SMS Notifications</label>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-primary rounded focus:outline-none focus:shadow-outline" defaultChecked />
          </motion.div>
          <motion.button
            className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline mt-3"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Save Notification Settings
          </motion.button>
        </div>
      </motion.div>

      {/* Security Settings */}
      <motion.div className="mb-6 border-b pb-4" variants={sectionVariants} transition={{ delay: 0.2 }}>
        <div className="flex items-center space-x-4 mb-2">
          <FaLock className="text-xl text-gray-600" />
          <motion.h3 className="text-lg font-semibold text-gray-700" variants={inputVariants}>
            Security
          </motion.h3>
        </div>
        <div className="space-y-3">
          <div>
            <label htmlFor="password" className="block text-gray-600 text-sm font-bold mb-2">
              Change Password
            </label>
            <motion.input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Current Password"
              variants={inputVariants}
            />
            <motion.input
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
              placeholder="New Password"
              variants={inputVariants}
              transition={{ delay: 0.1 }}
            />
            <motion.input
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
              placeholder="Confirm New Password"
              variants={inputVariants}
              transition={{ delay: 0.2 }}
            />
            <motion.button
              className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline mt-3"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Change Password
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Appearance Settings */}
      <motion.div className="mb-6 border-b pb-4" variants={sectionVariants} transition={{ delay: 0.3 }}>
        <div className="flex items-center space-x-4 mb-2">
          <FaPalette className="text-xl text-gray-600" />
          <motion.h3 className="text-lg font-semibold text-gray-700" variants={inputVariants}>
            Appearance
          </motion.h3>
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Theme</label>
          <motion.div className="flex space-x-4" variants={inputVariants}>
            <motion.button
              className="bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-700 hover:border-primary focus:outline-none focus:shadow-outline"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Light
            </motion.button>
            <motion.button
              className="bg-gray-800 text-white rounded-md py-2 px-4 hover:bg-gray-700 focus:outline-none focus:shadow-outline"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ delay: 0.1 }}
            >
              Dark
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Language Settings */}
      <motion.div className="mb-6" variants={sectionVariants} transition={{ delay: 0.4 }}>
        <div className="flex items-center space-x-4 mb-2">
          <FaGlobe className="text-xl text-gray-600" />
          <motion.h3 className="text-lg font-semibold text-gray-700" variants={inputVariants}>
            Language
          </motion.h3>
        </div>
        <div>
          <label htmlFor="language" className="block text-gray-600 text-sm font-bold mb-2">
            Select Language
          </label>
          <motion.select
            id="language"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            variants={inputVariants}
          >
            <option>English</option>
            <option>Bangla</option>
            <option>Spanish</option>
            <option>French</option>
          </motion.select>
          <motion.button
            className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline mt-3"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Save Language
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Setting;