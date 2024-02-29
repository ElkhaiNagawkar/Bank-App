import React from "react";

export default function Login() {
  function handleSignLog(e) {
    e.preventDefault();
    document
      .querySelector(".info--container")
      ?.classList.toggle("translate-x-[28rem]");
    document
      .querySelector(".signUp--header")
      .classList?.toggle("-translate-y-12");
    document
      .querySelector(".login--header")
      .classList?.toggle("translate-y-12");
  }

  return (
    <div className="bg-zinc-700 w-6/12 h-4/6 rounded-[50px] border-2 border-orange-500 flex items-center gap-x-32 text-white relative">
      <div className="w-6/12 h-[38rem] gap-y-11 flex flex-col ml-10">
        <input
          type="text"
          className="h-12 rounded-full mt-24 bg-zinc-600 border-2 border-zinc-500 focus:outline-none"
        />
        <input
          type="text"
          className="h-12 rounded-full bg-zinc-600 border-2 border-zinc-500 focus:outline-none"
        />
        <button className=" h-12 rounded-full font-semibold border-2 border-orange-400 hover:bg-orange-500 hover:text-black transition-all duration-500">
          Sign Up
        </button>
      </div>
      <div className="w-6/12 h-[38rem] gap-y-11 flex flex-col mr-10">
        <input
          type="text"
          className="h-12 rounded-full mt-24 bg-zinc-600 border-2 border-zinc-500 focus:outline-none"
        />
        <input
          type="text"
          className="h-12 rounded-full bg-zinc-600 border-2 border-zinc-500 focus:outline-none"
        />
        <button className=" h-12 rounded-full font-semibold border-2 border-orange-400 hover:bg-orange-500 hover:text-black transition-all duration-500">
          Log In
        </button>
      </div>
      <div className="info--container w-6/12 h-[38rem] bg-zinc-600 border-2 border-zinc-500 rounded-[40px] ml-2 flex items-center justify-between flex-col z-10 transition-all ease-out absolute ">
        <div className="flex justify-center items-center flex-col mt-36">
          <div className="overflow-hidden h-14 pr-10 relative">
            <p className="signUp--header text-4xl font-extrabold ml-7 absolute -translate-y-12 transition-all duration-700">
              Sign Up
            </p>
            <p className="login--header text-4xl font-extrabold ml-8 transition-all duration-700">
              Login
            </p>
          </div>
          <p className="font-semibold">
            Welcome Back! Please Log in to access your account.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <p className="font-semibold mb-5">Don't have an account?</p>
          <button
            onClick={handleSignLog}
            className="border-2 border-orange-400 w-11/12 mb-5 h-10 rounded-full font-semibold hover:bg-orange-500 hover:text-black transition-all duration-500"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
