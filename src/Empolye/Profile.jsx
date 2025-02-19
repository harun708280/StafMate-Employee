import useAuth from "@/Hook/useAuth";
import React from "react";

const Profile = () => {
    const {user}=useAuth()
    console.log(user)
  return (
    <div className=" w-full mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
    <div className="flex items-center space-x-6">
      <img
        className="w-24 h-24 rounded-full border-4 border-secondary"
        src={user?.photoURL}
        alt="Employee"
      />
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">{user?.displayName}</h2>
        <p className="text-gray-600">Senior Software Engineer</p>
        <p className="text-gray-500">IT Department</p>
      </div>
    </div>

    <div className="mt-6 border-t pt-4">
      <p className="text-gray-700">
        <strong>Email:</strong> {user?.email}
      </p>
      <p className="text-gray-700">
        <strong>Phone:</strong> +1 234 567 890
      </p>
      <p className="text-gray-700">
        <strong>Joining Date:</strong> 12th Jan 2020
      </p>
    </div>

    <button className="mt-6 w-full bg-secondary text-white py-2 px-4 rounded-lg hover:bg-blue-600">
      Edit Profile
    </button>
  </div>
  );
};

export default Profile;
