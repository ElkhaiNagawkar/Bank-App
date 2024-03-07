import React from "react";
import { TiHome } from "react-icons/ti";
import { HiMiniCreditCard } from "react-icons/hi2";
import { VscAccount } from "react-icons/vsc";

export default function Navbar() {
  return (
    <div className="group flex w-24 h-72 rounded-e-[50px] bg-zinc-600 border-2 border-s-transparent border-e-orange-400 border-t-orange-400 border-b-orange-400 hover:w-56 transition-all col-span-1 shadow-[0_8px_30px_rgb(251,146,60,0.16)]">
      <div className="w-full h-full flex flex-col justify-evenly items-center">
        <div className="w-full flex items-center justify-center gap-x-3">
          <TiHome className="w-10 h-20" />
          <p className="hidden group-hover:block text-2xl font-semibold">
            Home
          </p>
        </div>
        <div className="w-full flex items-center justify-center gap-x-3">
          <HiMiniCreditCard className="w-10 h-20" />
          <p className="hidden group-hover:block text-2xl font-semibold ">
            Cards
          </p>
        </div>
        <div className="w-full flex items-center justify-center gap-x-3 group-hover:ml-5">
          <VscAccount className="w-10 h-20" />
          <p className="hidden group-hover:block text-2xl font-semibold">
            Account
          </p>
        </div>
      </div>
    </div>
  );
}
