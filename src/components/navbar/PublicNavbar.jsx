import React, { useState } from "react";
import { Link } from "react-router";
import Login from "../auth/Login";

const PublicNavbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="w-full h-24 border-b-2 border-b-gray-400/70">
      
      <div className="h-full flex items-center justify-between px-20">
      
        <div className="w-17  mb-3 cursor-pointer">
          <img
            src="/src/assets/images/logo/logo-devdost.png"
            alt="devdost-logo"
            className="w-full "
          />
        </div>

        <ul className="flex items-center gap-16 [&>li]:text-xl [&>li]:cursor-pointer [&>li:hover]:underline [&>li:hover]:underline-offset-4">
          <li>Product</li>
          <li>Features</li>
          <li>Learn</li>
          <li>Support</li>
          <li>Download</li>
        </ul>

        <button onClick={()=>setIsLogin(true)} className="px-10 py-2 border rounded-lg text-xl cursor-pointer font-bold  bg-gradient-to-r from-gray-300  hover:bg-black hover:text-white">
          Log in
        </button>
        

      </div>
      {isLogin && <Login setIsLogin={setIsLogin}/>}
    </div>
  );
};

export default PublicNavbar;
