import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen ">
      {/* Left Section */}
      <div className=" bg-gradient-to-br from-green-300 to-green-600 text-white flex flex-col justify-center items-center p-6">
        <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
        <p className="text-lg text-center mb-6">
          To keep connected with us please login with your personal info
        </p>
        <button
          onClick={() => navigate("/login")}
          className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200"
        >
          SIGN IN
        </button>
      </div>

      {/* Right Section */}
      <div className=" bg-gray-100 flex flex-col justify-center items-center p-6">
        <h2 className="text-3xl font-bold text-green-600 mb-4">
          Create Account
        </h2>
        <div className="flex space-x-4 mb-6">
          <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
            <FaFacebook />
            <i className="fab fa-facebook-f"></i>
          </button>
          <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
            <FaGoogle />
            <i className="fab fa-google"></i>
          </button>
          <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
            <FaLinkedin />
            <i className="fab fa-linkedin-in"></i>
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          or use your email for registration:
        </p>
        <form className="w-full max-w-sm">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            onClick={() => navigate("/home")}
            className="w-full bg-green-600 text-white p-3 rounded-full hover:bg-green-700 font-semibold"
          >
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
