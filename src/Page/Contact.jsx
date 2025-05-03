import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import { FaClock } from "react-icons/fa"; 
import { FaGlobe } from "react-icons/fa"; 
import usePublic from "../Hook/usePublic";
import toast from "react-hot-toast";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delayChildren: 0.3, staggerChildren: 0.2 } },
};

const infoVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const formVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

const Contact = () => {
  const publicAxios = usePublic();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleDate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const number = from.number.value;
    const subject = from.subject.value;
    const message = from.message.value;
    const date = new Date();
    const contactData = { name, email, number, subject, message, date };

    try {
      const { data } = await publicAxios.post("/message", contactData);
      setMessage("Message sent successfully!");
      from.reset();
    } catch (error) {
      setMessage("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
      toast.success("Successfully sent a message");
    }
  };

  return (
    <motion.div
      className="py-16 max-w-6xl mx-auto text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        {/* Contact Information */}
        <motion.div
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={infoVariants}
        >
          <div className="flex items-center space-x-6">
            <div className="bg-primary p-4 rounded-xl text-white text-3xl">
              <IoCall />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Call to ask any question</h1>
              <h1 className="text-xl md:text-2xl font-extrabold">+0880158467623</h1>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="bg-primary p-4 rounded-xl text-white text-3xl">
              <MdMarkEmailRead />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Email us</h1>
              <h1 className="text-xl md:text-2xl font-extrabold">info@stafmate.com</h1>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="bg-primary p-4 rounded-xl text-white text-3xl">
              <FaLocationDot />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Visit our office</h1>
              <h1 className="text-xl md:text-2xl font-extrabold">Dhaka, Bangladesh</h1>
            </div>
          </div>

          {/* Additional Contact Information */}
          <div className="flex items-center space-x-6">
            <div className="bg-primary p-4 rounded-xl text-white text-3xl">
              <FaClock />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Working Hours</h1>
              <h1 className="text-xl md:text-2xl font-extrabold">Mon - Fri, 9am - 6pm</h1>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="bg-primary p-4 rounded-xl text-white text-3xl">
              <FaGlobe />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Our Website</h1>
              <h1 className="text-xl md:text-2xl font-extrabold">www.stafmate.com</h1>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <div className="my-12   w-full">
          <motion.div
            className="w-full  bg-primary bg-opacity-10 p-8 rounded-lg"
            variants={formVariants}
          >
            <form onSubmit={handleDate}>
              <h1 className="text-2xl mb-7 font-bold text-primary">Contact Us</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="text-white">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input text-black input-bordered border-primary focus:outline-primary"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="input text-black input-bordered border-primary focus:outline-primary"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-white">Phone Number</span>
                  </label>
                  <input
                    type="text"
                    name="number"
                    placeholder="Your Phone Number"
                    className="input text-black input-bordered border-primary focus:outline-primary"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-white">Subject</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject of your message"
                    className="input text-black input-bordered border-primary focus:outline-primary"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="label">
                    <span className="text-white">Message</span>
                  </label>
                  <textarea
                    name="message"
                    className="textarea text-black textarea-primary border-primary w-full"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className={`flex items-center text-xl font-bold text-white py-3 px-6 rounded-lg ${
                    loading ? "bg-gray-500 cursor-not-allowed" : "bg-primary hover:bg-primary-focus"
                  }`}
                  disabled={loading}
                >
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                  {!loading && <IoIosSend className="ml-2" />}
                </button>
              </div>
              {message && (
                <p className="mt-4 text-lg font-bold text-center text-green-400">
                  {message}
                </p>
              )}
            </form>
          </motion.div>

          {/* Image Section */}
          
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;