import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Hero = () => {
  const {isLoggedIn,isSignUp,login,logout,signUp,signOut} = useContext(UserContext);
  const handleOnClick = ()=>{
    login();
    signUp();
  }
  return (
    <div className="relative flex justify-center mt-10 ">
      <div className="absolute left-0 ">
        <img className="h-[300px]" src="/src/assets/images/hero/blur-bg-1.png" />
        <img className="h-[300px]" src="/src/assets/images/hero/blur-bg-2.png" />
      </div>
      <div className="w-9/12 flex items-center justify-center">
        <div className="w-1/2 flex flex-col gap-6">
          <h1 className="text-6xl font-bold leading-tight">
            Build Something Epic Together
          </h1>

          <p className="text-lg text-gray-600">
            Discover developers who share your goals.
            <span className="block  ">Match, collaborate, and build</span>
            amazing projects.
          </p>

          <button onClick={handleOnClick} className="w-50 py-2 border rounded-lg text-xl cursor-pointer font-bold  bg-gradient-to-r from-gray-300  hover:bg-black hover:text-white">
            Create Account
          </button>
        </div>
        <div className="w-72 ml-0 rotate-2">
          <img
            src="/src/assets/images/hero/hero-profile-card.png"
            alt="hero-card"
            className="w-full"
          />
        </div>
      </div>
      <div className="absolute right-0 -bottom-23 ">
        <img className="h-[500px]" src="/src/assets/images/hero/blur-bg-3.png"/>
      </div>
    </div>
  );
};

export default Hero;
