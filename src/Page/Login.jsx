import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaUserLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hook/useAuth";
import usePublic from "../Hook/usePublic";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { LoginGoogle, Login } = useAuth();
  const publicAxios = usePublic();
  const handleGoogle = () => {
    LoginGoogle()
    .then(async (result) => {
      const dataUser = {
        name: result?.user?.displayName,
        email: result?.user?.email,
        role: "Employee",
        status: "false",

        designation: "Sales Assistant",
        salary: 20000,
        bank_account_no: 4242424242424242,
        photo: result?.user?.photoURL,
      };
      
      const { data } = await publicAxios.post("/user", dataUser);
      toast.success("successfully Login");
      navigate(`${location.state ? location.state : "/"}`);
    })
    .catch(error=>{
      switch (error.code) {
        case "auth/user-not-found":
          toast.error("No user found with this email");
          break;
        case "auth/wrong-password":
          toast.error("Incorrect password. Please try again.");
          break;
        case "auth/invalid-email":
          toast.error("Invalid email address. Please enter a valid email.");
          break;
        
        
        
        default:
          toast.error("An unknown error occurred. Please try again.");
          console.error("Error Code:", error.code, "Message:", error.message);
      }
    })
  };
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
    Login(values.email, values.password)
    .then((result) => {
      toast.success('successfully Login')
        navigate(`${location.state?location.state:'/'}`)
    })
    .catch(error=>{
      switch (error.code) {
        case "auth/user-not-found":
          toast.error("No user found with this email");
          break;
        case "auth/wrong-password":
          toast.error("Incorrect password. Please try again.");
          break;
        case "auth/invalid-email":
          toast.error("Invalid email address. Please enter a valid email.");
          break;
        
        
        
        default:
          toast.error("An unknown error occurred. Please try again.");
          console.error("Error Code:", error.code, "Message:", error.message);
      }
    })
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className="">
      {" "}
      {/* Added margin-top to ensure spacing from navbar */}
      <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-bold text-center mb-6 uppercase flex  items-center justify-center gap-3">
          {" "}
          <span>
            <FaUserLock />
          </span>{" "}
          Login Staf
          <span className="text-secondary text-3xl font-extrabold italic">
            fM
          </span>
          ate
        </h2>
        <div className="text-center mt-4">
          <button
            onClick={handleGoogle}
            className="w-full py-2 px-4  border-2 rounded-md  transition flex  items-center justify-center mt-2 gap-3 font-medium"
          >
            <span>
              <FcGoogle />
            </span>{" "}
            Continue with Google
          </button>
        </div>
        <hr className="my-3" />

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
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
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
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
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
