import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSignInForm,SetIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    SetIsSignInForm(!isSignInForm)
  }
  return (
    <div className="relative h-screen w-full m-0 overflow-hidden">
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9ba9f0e2-b246-47f4-bd1f-3e84c23a5db8/web/IN-en-20251020-TRIFECTA-perspective_d6da84e9-6145-4b1e-bb51-e402c966a045_large.jpg"
          alt="logo"
        />
      </div>
      <form className="absolute w-3/12 py-12 px-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-2">{isSignInForm? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
        <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-800"
        />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
          {isSignInForm? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}> {isSignInForm? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
