import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaLock, FaTasks, FaMoneyBillAlt, FaChartBar, FaUserCog, FaCheckCircle } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const featureVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

const About = () => {
  return (
    <motion.div
      className="py-16 mx-auto max-w-6xl text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <motion.section
          className="mb-12 text-center"
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold mb-4">About Our HR Solution</h2>
          <p className="text-lg opacity-80">
            We provide a comprehensive HR solution designed to streamline your human resources processes,
            empower your team, and foster a productive work environment.
          </p>
        </motion.section>

        <motion.section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" variants={sectionVariants}>
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">For Administrators</h3>
            <ul className="opacity-80 space-y-2">
              <li className="flex items-center">
                <FaCheckCircle className="text-primary mr-2" />
                Manage employee data and records securely.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-primary mr-2" />
                Configure and manage user roles and permissions.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-primary mr-2" />
                Oversee system settings and maintain configurations.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-primary mr-2" />
                Generate insightful reports on HR activities and trends.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">For HR Professionals</h3>
            <ul className="opacity-80 space-y-2">
              <li className="flex items-center">
                <FaCheckCircle className="text-primary mr-2" />
                Efficiently manage employee assignments and track progress.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-primary mr-2" />
                Process employee payments accurately and on time.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-primary mr-2" />
                Monitor and update progress on various HR-related tasks.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-primary mr-2" />
                Facilitate seamless team collaboration and communication.
              </li>
            </ul>
          </div>
        </motion.section>

        <motion.section className="mb-12" variants={sectionVariants}>
          <h3 className="text-2xl font-semibold text-primary mb-4 text-center">Key Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              className="bg-primary bg-opacity-10 rounded-lg shadow-md p-6 flex flex-col items-center text-center"
              variants={featureVariants}
              whileHover="hover"
            >
              <FaUsers className="text-3xl text-primary mb-2" />
              <h4 className="text-lg font-semibold text-primary mb-2">User Role Management</h4>
              <p className="opacity-70">Clearly define and manage different user roles within the system for enhanced security and workflow.</p>
            </motion.div>
            <motion.div
              className="bg-primary bg-opacity-10 rounded-lg shadow-md p-6 flex flex-col items-center text-center"
              variants={featureVariants}
              whileHover="hover"
            >
              <FaTasks className="text-3xl text-primary mb-2" />
              <h4 className="text-lg font-semibold text-primary mb-2">Progress Management</h4>
              <p className="opacity-70">Effectively manage, assign, and track the progress of various employee-related tasks and assignments.</p>
            </motion.div>
            <motion.div
              className="bg-primary bg-opacity-10 rounded-lg shadow-md p-6 flex flex-col items-center text-center"
              variants={featureVariants}
              whileHover="hover"
            >
              <FaMoneyBillAlt className="text-3xl text-primary mb-2" />
              <h4 className="text-lg font-semibold text-primary mb-2">Payment Processing</h4>
              <p className="opacity-70">Streamline the process of managing and processing employee payments with accuracy and efficiency.</p>
            </motion.div>
            <motion.div
              className="bg-primary bg-opacity-10 rounded-lg shadow-md p-6 flex flex-col items-center text-center"
              variants={featureVariants}
              whileHover="hover"
            >
              <FaUserCog className="text-3xl text-primary mb-2" />
              <h4 className="text-lg font-semibold text-primary mb-2">Employee Access</h4>
              <p className="opacity-70">Provide employees with secure access to relevant personal information and HR-related tools.</p>
            </motion.div>
            <motion.div
              className="bg-primary bg-opacity-10 rounded-lg shadow-md p-6 flex flex-col items-center text-center"
              variants={featureVariants}
              whileHover="hover"
            >
              <FaChartBar className="text-3xl text-primary mb-2" />
              <h4 className="text-lg font-semibold text-primary mb-2">Reporting & Analytics</h4>
              <p className="opacity-70">Gain valuable insights into your HR operations through comprehensive reporting and analytical features.</p>
            </motion.div>
            <motion.div
              className="bg-primary bg-opacity-10 rounded-lg shadow-md p-6 flex flex-col items-center text-center"
              variants={featureVariants}
              whileHover="hover"
            >
              <FaLock className="text-3xl text-primary mb-2" />
              <h4 className="text-lg font-semibold text-primary mb-2">Secure Data Handling</h4>
              <p className="opacity-70">Ensure the highest level of security and privacy for all sensitive HR-related data within the system.</p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section className="text-center" variants={sectionVariants}>
          <h3 className="text-2xl font-semibold text-primary mb-4">Our Commitment</h3>
          <p className="text-lg opacity-80">
            We are committed to providing a user-friendly, efficient, and reliable HR solution that helps your
            organization thrive. Our goal is to simplify HR processes, enhance communication, and empower your
            employees.
          </p>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default About;