import React from "react";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen">
      {/* Left Section */}
      <div className="bg-gray-100 flex flex-col justify-center items-center p-6">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Sign In</h2>
        <form className="w-full max-w-sm">
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
            SIGN IN
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className="bg-gradient-to-br from-green-300 to-green-600 text-white flex flex-col justify-center items-center p-6">
        <h1 className="text-4xl font-bold mb-4">Hello, Friend!</h1>
        <p className="text-lg text-center mb-6">
          Enter your personal details and start your journey with us
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200"
        >
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default Login;
