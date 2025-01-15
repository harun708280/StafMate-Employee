import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaUserLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import sample from './../../node_modules/lodash-es/sample';
const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Form Data", values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className=""> {/* Added margin-top to ensure spacing from navbar */}
      <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-bold text-center mb-6 uppercase flex  items-center justify-center gap-3"> <span><FaUserLock /></span>  Login Staf<span className="text-secondary text-3xl font-extrabold italic">fM</span>ate</h2>
        <div className="text-center mt-4">
          <button className="w-full py-2 px-4  border-2 rounded-md  transition flex  items-center justify-center mt-2 gap-3 font-medium">
         <span><FcGoogle /></span>  Continue with Google 
          </button>
        </div>
        <p className="text-sm text-gray-600 text-center my-3">Or</p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-1">
                  Email Address
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

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
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              

              <div className="text-center mt-3">
                <button
                  type="submit"
                  className="bg-secondary text-white w-full px-4 py-2 rounded-lg hover:bg-teal-700 transition"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>
              </div>
            </Form>
            
          )}
        </Formik>
        <div className=" mt-4">
            <p className="text-sm">
              Don’t have an account?{" "}
              <a href="/register" className="text-teal-900 font-medium">
                Register
              </a>
            </p>
          </div>
      </div>
    </div>
  );
};

export default Login;
