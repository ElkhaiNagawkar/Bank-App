import React from "react";
import CardDropdown from "./HelperComponents/CardDropdown";

export default function Homepage() {
  const [allUsers, setUsers] = React.useState(
    localStorage["allUsers"] ? JSON.parse(localStorage.getItem("allUsers")) : []
  );

  const user = allUsers.find((user) => {
    return user.loggedIn === true;
  });

  return (
    <div
      className="bg-zinc-600 w-10/12 h-5/6 col-span-9 ml-20 rounded-[50px] border-2 border-orange-400 border-opacity-20 
    shadow-[0_35px_60px_-15px_rgba(251,146,60,0.4)] grid grid-row-8 grid-cols-1"
    >
      <div className="w-full h-24 overflow-hidden flex items-center justify-between row-span-1">
        <p className="font-extrabold text-5xl text-orange-400 ml-10">
          Overview
        </p>
        <p className="font-bold text-3xl text-orange-400 mr-10">
          Welcome back {user?.userName}!
        </p>
      </div>
      <div className="grid grid-cols-12 grid-rows-12 grid-flow-col row-span-7 ml-5 mr-5 mb-5 gap-y-3 gap-x-4">
        <div className="col-span-3 row-span-6 rounded-[50px] bg-zinc-500 flex flex-col gap-y-4">
          <p className="text-2xl font-bold ml-6 mt-7 text-orange-200">
            My Cards
          </p>
          <CardDropdown />
        </div>
        <div className="col-span-3 row-span-6 rounded-[50px] bg-zinc-500 flex flex-col justify-evenly">
          <div>
            <p className="text-5xl text-green-500 font-bold ml-5 text-wrap">
              $400,000
            </p>
            <p className="font-bold text-xl ml-5">Your Money</p>
          </div>
          <div>
            <p className="text-5xl text-red-500 font-bold ml-5">$400,000</p>
            <p className="font-bold text-xl ml-5">Loan amount</p>
          </div>
        </div>
        <div className="col-span-6 row-span-12 rounded-[50px] bg-zinc-500">
          <p className="text-4xl font-bold ml-10 mt-7 text-orange-200">
            Transactions
          </p>
        </div>
        <div className="col-span-3 row-span-6 rounded-[50px] bg-zinc-500 flex flex-col justify-between">
          <div className="grid grid-cols-5 grid-rows-2 items-center mt-5">
            <p className="text-2xl font-bold ml-6 mt-7 mb-1 text-orange-200 col-span-5">
              Deposit
            </p>
            <input
              type="text"
              placeholder="Amount"
              className="text-white placeholder:text-white placeholder:text-opacity-30 rounded-full w-full h-4/6 ml-5 bg-zinc-600 border-2 border-zinc-400 focus:outline-none indent-5 col-span-3"
            />
            <button className="col-span-2 col-start-5 w-8/12 h-4/6 bg-gradient-to-tr from-green-500 to-teal-500 rounded-full text-xl font-extrabold">
              ➞
            </button>
          </div>
          <div className="grid grid-cols-5 grid-rows-2 items-center mb-10">
            <p className="text-2xl font-bold ml-6 mt-7 mb-1 text-orange-200 col-span-5">
              Add Expense
            </p>
            <input
              type="text"
              placeholder="Amount"
              className="text-white placeholder:text-white placeholder:text-opacity-30 rounded-full w-full h-4/6 ml-5 bg-zinc-600 border-2 border-zinc-400 focus:outline-none indent-5 col-span-3"
            />
            <button className="col-span-2 col-start-5 w-8/12 h-4/6 bg-gradient-to-tr from-rose-400 to-rose-600 rounded-full text-xl font-extrabold">
              ➞
            </button>
          </div>
        </div>
        <div className="col-span-3 row-span-3 rounded-[50px] bg-zinc-500">
          <div className="grid grid-cols-6 items-center gap-x-5">
            <p className="text-2xl font-bold ml-6 mt-7 mb-3 text-orange-200 col-span-6">
              Send Money
            </p>
            <input
              type="text"
              placeholder="Amount"
              className="col-span-3 w-10/12 h-8 ml-7 rounded-full text-white placeholder:text-white placeholder:text-opacity-30 bg-zinc-600 border-2 border-zinc-400 focus:outline-none indent-3"
            />
            <input
              type="text"
              placeholder="Reciever name"
              className="col-span-3 w-10/12 h-8 rounded-full text-white placeholder:text-white placeholder:text-opacity-30 bg-zinc-600 border-2 border-zinc-400 focus:outline-none indent-3"
            />
            <button className="col-span-2 col-start-3 bg-green-400 rounded-full mt-3 h-5/6 font-bold ">
              Send
            </button>
          </div>
        </div>
        <div className="col-span-3 row-span-3 rounded-[50px] bg-zinc-500">
          <div className="grid grid-cols-5 items-center gap-x-5">
            <p className="text-2xl font-bold ml-6 mt-7 mb-6 text-orange-200 col-span-6">
              Loan
            </p>
            <input
              type="text"
              placeholder="Amount"
              className="col-span-3 w-10/12 h-8 ml-7 rounded-full text-white placeholder:text-white placeholder:text-opacity-30 bg-zinc-600 border-2 border-zinc-400 focus:outline-none indent-3"
            />

            <button className="col-span-2 col-start-4 bg-green-400 rounded-full h-full font-bold ">
              Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
