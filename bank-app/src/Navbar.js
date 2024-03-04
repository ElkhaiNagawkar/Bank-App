import React from "react";
import { TiHome } from "react-icons/ti";
import { HiMiniCreditCard } from "react-icons/hi2";
import { VscAccount } from "react-icons/vsc";

export default function Navbar() {
  return (
    <div className="group flex w-20 h-80 rounded-e-[25px] bg-zinc-600 border-[3px] border-s-transparent border-e-orange-400 border-t-orange-400 border-b-orange-400 hover:w-48 transition-all">
      <div className="w-full h-full flex flex-col justify-evenly items-center transition-all duration-1000">
        <div className="w-[2.6rem] flex items-center gap-x-3 group-hover:w-32 transition-all duration-1000">
          <TiHome className="w-10 h-20" />
          <p className="hidden group-hover:block text-2xl font-semibold ">
            Home
          </p>
        </div>
        <div className="w-[2.6rem] flex items-center gap-x-3 group-hover:w-32 transition-all duration-1000">
          <HiMiniCreditCard className="w-10 h-20" />
          <p className="hidden group-hover:block text-2xl font-semibold ">
            Cards
          </p>
        </div>
        <div className="w-[2.6rem] flex items-center gap-x-3 group-hover:w-36 transition-all duration-1000 ml-1">
          <VscAccount className="w-10 h-20" />
          <p className="hidden group-hover:block text-2xl font-semibold ">
            Account
          </p>
        </div>
      </div>
    </div>
  );
}
