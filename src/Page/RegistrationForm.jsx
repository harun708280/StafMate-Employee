import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FaUserPlus } from "react-icons/fa";
import { Spinner } from "flowbite-react";
import usePublic from "../Hook/usePublic";
import useAuth from "../Hook/useAuth";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [photoUrl, setPhotoUrl] = useState(null); // State to hold the uploaded photo URL
  const navigate = useNavigate();
  const publicAxios = usePublic();
  const { CreateAccount, update, setIsLoading, isLoading } = useAuth();

  const handlePhotoUpload = async (event, setFieldValue) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=2a9bcf84d4334dcac7a2729bb6336536`,
        formData
      );
      const imageUrl = response.data.data.url; // Extract uploaded image URL
      setPhotoUrl(imageUrl); // Update local state with photo URL
      setFieldValue("photo", imageUrl); // Update Formik with the photo URL
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  // Validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(/[A-Z]/, "Password must contain a capital letter")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain a special character"
      )
      .required("Password is required"),
    role: Yup.string().required("Role is required"),
    designation: Yup.string().required("Designation is required"),
    salary: Yup.number().required("Salary is required"),
    bank_account_no: Yup.string().required("Bank Account Number is required"),
    photo: Yup.string().url("Invalid image URL").required("Photo is required"),
  });

  const handleSubmit = async (values) => {
    try {
      setIsLoading(true);
      console.log("Form Values:", values);

      // Create the user with email and password
      const result = await CreateAccount(values.email, values.password);
      console.log("Account Created:", result);

      // Update the user's name and photo
      await update(values.name, photoUrl);
      console.log("User Updated");

      // Send user data to the server
      const response = await publicAxios.post("/user", {
        ...values,
        photo: photoUrl, // Ensure the photo URL is passed explicitly
      });
      console.log("User data posted to the server:", response.data);
      setIsLoading(false);

      // Navigate after successful registration
      navigate("/");
    } catch (error) {
      console.error("Error during registration:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center mt-12">
      <div className="max-w-2xl w-full p-6 border rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-bold text-center mb-6 uppercase flex items-center justify-center gap-3">
          <FaUserPlus />
          Register Staff
          <span className="text-secondary text-3xl font-extrabold italic">
            Mate
          </span>
        </h2>

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            role: "Employee",
            status:'false', 
            designation: "",
            salary: "",
            bank_account_no: "",
            photo: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form className="grid grid-cols-2 gap-3">
              {/* Full Name Field */}
              <div className="mb-4">
                <label htmlFor="name" className="block font-medium mb-1">
                  Full Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-1">
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Role Field */}
              <div className="mb-4">
                <label htmlFor="role" className="block font-medium mb-1">
                  Role
                </label>
                <Field
                  as="select"
                  id="role"
                  name="role"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="Employee">Employee</option>
                  <option value="HR">HR</option>
                </Field>
                <ErrorMessage
                  name="role"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Designation Field */}
              <div className="mb-4">
                <label htmlFor="designation" className="block font-medium mb-1">
                  Designation
                </label>
                <Field
                  type="text"
                  id="designation"
                  name="designation"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <ErrorMessage
                  name="designation"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Salary Field */}
              <div className="mb-4">
                <label htmlFor="salary" className="block font-medium mb-1">
                  Salary
                </label>
                <Field
                  type="number"
                  id="salary"
                  name="salary"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <ErrorMessage
                  name="salary"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Bank Account Number Field */}
              <div className="mb-4">
                <label
                  htmlFor="bank_account_no"
                  className="block font-medium mb-1"
                >
                  Bank Account Number
                </label>
                <Field
                  type="number"
                  id="bank_account_no"
                  name="bank_account_no"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <ErrorMessage
                  name="bank_account_no"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Photo Upload Field */}
              <div className="mb-4">
                <label htmlFor="photo" className="block font-medium mb-1">
                  Profile Photo
                </label>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  accept="image/*"
                  onChange={(e) => handlePhotoUpload(e, setFieldValue)}
                  className="w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <ErrorMessage
                  name="photo"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Password Field */}
              <div className="mb-4">
                <label htmlFor="password" className="block font-medium mb-1">
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="text-center mt-4 col-span-2">
                <button
                  type="submit"
                  className="bg-primary text-white w-full px-4 py-2 rounded-lg hover:bg-teal-700 transition"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <Spinner color="purple" aria-label="Loading spinner" />
                  ) : (
                    "Register"
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;
