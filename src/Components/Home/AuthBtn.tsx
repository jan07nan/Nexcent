import React from "react";

import { useNavigate } from "react-router-dom";

const AuthBtn = () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-4">
      <>
        <button
          onClick={() => navigate("/login")}
          className="px-2 py-2 rounded-md text-green-700 bg-slate-50 hover:text-slate-50 hover:bg-green-700"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/login")}
          className="px-2 py-2 rounded-md text-slate-50 bg-green-700 hover:text-green-700 hover:bg-slate-50"
        >
          Sign up
        </button>
      </>
    </div>
  );
};

export default AuthBtn;
