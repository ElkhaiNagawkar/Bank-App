import React from "react";
import { TiHome } from "react-icons/ti";
import { HiMiniCreditCard } from "react-icons/hi2";
import { VscAccount } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  function cardsPageRoute(path) {
    navigate(path);
  }

  function handleClick(e) {
    const path = e.target.className.split(" ")[0];
    cardsPageRoute(path);
  }

  return (
    <div className="group flex w-24 h-72 rounded-e-[50px] bg-zinc-600 border-2 border-s-transparent border-e-orange-400 border-t-orange-400 border-b-orange-400 border-opacity-40 hover:w-56 transition-all col-span-1 shadow-[0_8px_30px_rgb(251,146,60,0.16)]">
      <div className="w-full h-full flex flex-col justify-evenly items-center">
        <div
          className="HomePage w-10/12 flex items-center justify-center gap-x-3 hover:bg-zinc-400 hover:rounded-[40px]"
          onClick={handleClick}
        >
          <TiHome className="w-10 h-20 pointer-events-none" />
          <p className="hidden group-hover:block text-2xl font-semibold pointer-events-none">
            Home
          </p>
        </div>
        <div
          className="CardsPage w-10/12 flex items-center justify-center gap-x-3 hover:bg-zinc-400 hover:rounded-[40px]"
          onClick={handleClick}
        >
          <HiMiniCreditCard className="w-10 h-20 pointer-events-none" />
          <p className="hidden group-hover:block text-2xl font-semibold pointer-events-none">
            Cards
          </p>
        </div>
        <div className="w-10/12 flex items-center justify-center gap-x-3 group-hover:ml-5 hover:bg-zinc-400 hover:rounded-[40px]">
          <VscAccount className="w-10 h-20" />
          <p className="hidden group-hover:block text-2xl font-semibold">
            Account
          </p>
        </div>
      </div>
    </div>
  );
}
