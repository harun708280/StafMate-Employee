import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import usePublic from "../Hook/usePublic";
import toast from "react-hot-toast";

const Contact = () => {
  const publicAxios = usePublic();
  const [loading, setLoading] = useState(false); // Loading state
  const [message, setMessage] = useState(""); // Message state

  const handleDate = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const number = from.number.value;
    const subject = from.subject.value;
    const message = from.message.value;
    const contactData={name,email,number,subject,message}

    try {
      const { data } = await publicAxios.post("/message",contactData);
      setMessage("Message sent successfully!"); 
      
      from.reset();
    } catch (error) {
      setMessage("Failed to send message. Please try again."); 
      console.error(error);
    } finally {
      setLoading(false); 
      toast.success('successfully send a massage')
    }
  };

  return (
    <div>
      <div className="text-white">
        {/* Contact Information */}
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
          <div className="flex items-center space-x-6">
            <div className="bg-primary p-4 rounded-xl text-white text-3xl">
              <IoCall />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Call to ask any question</h1>
              <h1 className="text-2xl md:text-3xl font-extrabold">
                +0880158467623
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="bg-primary p-4 rounded-xl text-white text-3xl">
              <MdMarkEmailRead />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Email us</h1>
              <h1 className="text-2xl md:text-3xl font-extrabold">
                info@stafmate.com
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="bg-primary p-4 rounded-xl text-white text-3xl">
              <FaLocationDot />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Visit our office</h1>
              <h1 className="text-2xl md:text-3xl font-extrabold">
                Dhaka, Bangladesh
              </h1>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="my-12 gap-14 flex flex-col md:flex-row w-11/12 mx-auto">
          <div className="w-full md:w-1/2 bg-primary bg-opacity-10 p-5 rounded-lg">
            <form onSubmit={handleDate}>
              <h1 className="text-2xl mb-7 font-bold">Contact Us</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span>Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input text-black input-bordered border-primary focus:outline-primary"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span>Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input text-black input-bordered border-primary focus:outline-primary"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span>Phone Number</span>
                  </label>
                  <input
                    type="text"
                    name="number"
                    placeholder="Phone Number"
                    className="input text-black input-bordered border-primary focus:outline-primary"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span>Subject</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="input text-black input-bordered border-primary focus:outline-primary"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <textarea
                    name="message"
                    className="textarea text-black textarea-primary border-primary w-full"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className={`flex items-center text-xl font-bold text-white py-2 px-5 rounded-lg ${
                    loading ? "bg-gray-500" : "bg-primary hover:bg-primary"
                  }`}
                  disabled={loading}
                >
                  <span>{loading ? "Sending..." : "Send"}</span>
                  {!loading && <IoIosSend />}
                </button>
              </div>
            </form>
            {message && (
              <p className="mt-4 text-lg font-bold text-center">
                {message}
              </p>
            )}
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img
              className="h-[500px] w-full object-cover rounded-lg"
              src="https://86818.cdn.cke-cs.com/32bzTYt9r2A6HeD1ZJBh/images/1a0f6057d6b1c7020f90717ffacb1516170b01d7036f6877.jpeg"
              alt="Contact section image showing office environment"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
