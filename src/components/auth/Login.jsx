import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const {isLoggedIn,isSignUp,login,logout,signUp,signOut} = useContext(UserContext);
  const handleClose = ()=>{
    logout();
    signOut();
  }
  return (
    <div
      onClick={() => logout}
      className="
        fixed inset-0 z-50
        bg-black/40 backdrop-blur-md
        flex items-center justify-center">
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={(e) => e.preventDefault()}
        className="
          relative
          w-[420px]
          bg-gradient-to-l from-gray-300
          rounded-2xl
          border border-black/20
          shadow-2xl
          px-8 pt-2 pb-8
          flex flex-col gap-6
        "
      >
        <button
          type="button"
          onClick={handleClose}
          className="
            absolute top-3 right-3
            w-8 h-8
            flex items-center justify-center
            rounded
            hover:bg-black/10
            text-xl font-bold
            cursor-pointer
          "
        >
          {" "}
          🗙
        </button>

        <div className="flex justify-center">
          <img
            src="/src/assets/images/logo/logo-devdost.png"
            alt="DevDost"
            className="w-16"
          />
        </div>

        <div className="flex flex-col gap-6">
          {isSignUp && <><input
            type="text"
            placeholder="Frist Name"
            className="w-full px-4 py-2 rounded-2xl border border-black/40 outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-2 rounded-2xl border border-black/40 outline-none"
          /></>}
          <input
            type="email"
            placeholder={isLoggedIn !== isSignUp?"username, or email":"Email"}
            className="w-full px-4 py-2 rounded-2xl border border-black/40 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-2xl border border-black/40 outline-none"
          />
          {isSignUp && <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 rounded-2xl border border-black/40 outline-none"
          />}
        </div>

        <button
          className="
            self-center
            mt-2 py-2 px-6 rounded-xl
            font-bold text-xl
            bg-gradient-to-r from-gray-500
            hover:bg-black hover:text-white
            cursor-pointer
            border 
          "
        >
          {isLoggedIn != isSignUp?"Log in":"create an account"}
        </button>

        {isLoggedIn && !isSignUp && <div className="flex justify-between text-sm text-black/70 mt-2">
          <button type="button" className="hover:underline cursor-pointer">
            Forgot password?
          </button>
          <button onClick={()=>signUp()} type="button" className="hover:underline cursor-pointer">
            Have'nt account
          </button>
        </div>}{isLoggedIn && isSignUp && <button onClick={()=>signOut()} type="button" className="hover:underline cursor-pointer">Already have an account</button>}
      </form>
    </div>
  );
};

export default Login;
