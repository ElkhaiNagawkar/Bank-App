import React from "react";

export default function Homepage() {
  return (
    <div
      className="bg-zinc-600 w-10/12 h-5/6 col-span-9 ml-20 rounded-[50px] border-2 border-orange-400 
    shadow-[0_35px_60px_-15px_rgba(251,146,60,0.4)] grid grid-row-8 grid-cols-1"
    >
      <div className="w-full h-24 overflow-hidden flex items-center justify-between row-span-1 -mb-12">
        <p className="font-extrabold text-5xl text-orange-400 ml-10">
          Overview
        </p>
        <p className="font-bold text-3xl text-orange-400 mr-10">
          Welcome back Elkhai!
        </p>
      </div>
      <div className="grid grid-cols-12 grid-rows-12 grid-flow-col row-span-7 ml-5 mr-5 mb-5 gap-y-3 gap-x-4">
        <div className="col-span-3 row-span-6 rounded-[50px] bg-zinc-500 flex">
          <p className="text-2xl font-bold ml-6 mt-7 text-orange-200">
            My Cards
          </p>
        </div>
        <div className="col-span-3 row-span-6 rounded-[50px] bg-zinc-500"></div>
        <div className="col-span-6 row-span-12 rounded-[50px] bg-zinc-500">
          <p className="text-4xl font-bold ml-10 mt-7 text-orange-200">
            Transactions
          </p>
        </div>
        <div className="col-span-3 row-span-6 rounded-[50px] bg-zinc-500 flex flex-col">
          <p className="text-2xl font-bold ml-6 mt-7 mb-5 text-orange-200">
            Deposit
          </p>
          <p className="text-2xl font-bold ml-6 mt-7 text-orange-200">
            Add Expense
          </p>
        </div>
        <div className="col-span-3 row-span-3 rounded-[50px] bg-zinc-500">
          <p className="text-2xl font-bold ml-6 mt-7 text-orange-200">
            Send Money
          </p>
        </div>
        <div className="col-span-3 row-span-3 rounded-[50px] bg-zinc-500">
          <p className="text-2xl font-bold ml-6 mt-7 text-orange-200">Loan</p>
        </div>
      </div>
    </div>
  );
}
