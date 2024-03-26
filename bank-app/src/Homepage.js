import React from "react";
import CardDropdown from "./HelperComponents/CardDropdown";

export default function Homepage() {
  const [allUsers, setUsers] = React.useState(
    localStorage["allUsers"] ? JSON.parse(localStorage.getItem("allUsers")) : []
  );

  const [user, setUser] = React.useState(
    allUsers.find((user) => {
      return user.loggedIn === true;
    })
  );

  const [depositAmount, setDepositAmount] = React.useState(
    document.querySelector(".deposit--input")?.value
  );

  function handleDeposit() {
    const deposit = document.querySelector(".deposit--input")?.value;
    setDepositAmount(deposit);

    if (deposit <= 0 || deposit >= 10000000) {
      document.querySelector(".deposit--error")?.classList.remove("hidden");
      return;
    } else {
      document.querySelector(".deposit--error")?.classList.add("hidden");
    }

    const card = document.querySelector(".selection").innerHTML;
    const currentTime = new Date();

    const newTransaction = {
      depositAmount: deposit,
      cardUsed: "N/A",
      time: `${currentTime.getDate()}/${
        currentTime.getMonth() + 1
      }/${currentTime.getFullYear()}`,
      type: "Deposit",
    };

    setUser({
      userName: user.userName,
      password: user.password,
      creditCard: user.creditCard,
      transactions: [...user.transactions, newTransaction],
      loggerIn: user.loggedIn,
    });

    allUsers.find((user) => {
      if (user.loggedIn) {
        user.transactions.push(newTransaction);
      }
    });

    localStorage.setItem("allUsers", JSON.stringify(allUsers));
  }

  function handleExpense() {
    const expense = document.querySelector(".expense--input")?.value;
    // setDepositAmount(deposit);

    // if (deposit <= 0 || deposit >= 10000000) {
    //   document.querySelector(".deposit--error")?.classList.remove("hidden");
    //   return;
    // } else {
    //   document.querySelector(".deposit--error")?.classList.add("hidden");
    // }

    const card = document.querySelector(".selection").innerHTML;
    const currentTime = new Date();

    const newTransaction = {
      depositAmount: expense,
      cardUsed: card,
      time: `${currentTime.getDate()}/${
        currentTime.getMonth() + 1
      }/${currentTime.getFullYear()}`,
      type: "expense",
    };

    setUser({
      userName: user.userName,
      password: user.password,
      creditCard: user.creditCard,
      transactions: [...user.transactions, newTransaction],
      loggerIn: user.loggedIn,
    });

    allUsers.find((user) => {
      if (user.loggedIn) {
        user.transactions.push(newTransaction);
      }
    });

    localStorage.setItem("allUsers", JSON.stringify(allUsers));
  }

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
        <div className="col-span-6 row-span-12 rounded-[50px] bg-zinc-500 flex flex-col">
          <p className="text-4xl font-bold ml-10 mt-7 mb-7 text-orange-200">
            Transactions
          </p>
          <div className="w-[97%] h-[80%] bg-zinc-400 self-center rounded-[50px]">
            <div className="flex justify-between px-12 py-5 font-bold text-2xl text-black text-opacity-80 border-b-2 w-full border-zinc-700 border-opacity-50 ">
              <p>Type</p>
              <p>Card Used</p>
              <p>Date</p>
              <p>Amount</p>
            </div>
            {user.transactions.map(
              ({ type, depositAmount, time, cardUsed }) => {
                return (
                  <div className="text-black text-opacity-80 flex justify-between px-12 mt-6 pb-5 font-bold border-b-2 border-zinc-600 border-opacity-45">
                    <p>{type}</p>
                    <p className="w-36 -ml-6">{cardUsed}</p>
                    <p className="w-16 -ml-16">{time}</p>
                    <p
                      className={`mr-6 w-10 ${
                        depositAmount > 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      ${depositAmount}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className="col-span-3 row-span-6 rounded-[50px] bg-zinc-500 flex flex-col justify-between">
          <div className="grid grid-cols-5 grid-rows-2 items-center mt-5 relative">
            <p className="text-2xl font-bold ml-6 mt-7 mb-1 text-orange-200 col-span-5 ">
              Deposit
            </p>
            <input
              type="number"
              placeholder="Amount"
              id="depositAmount"
              className="deposit--input appearance-none text-white placeholder:text-white placeholder:text-opacity-30 rounded-full w-full h-4/6 ml-5 bg-zinc-600 border-2 border-zinc-400 focus:outline-none indent-5 col-span-3"
            />
            <label
              htmlFor="depositAmount"
              className="deposit--error absolute text-red-500 font-semibold text-xs top-[7.4rem] left-9 hidden"
            >
              {depositAmount <= 0
                ? "Amount must be larger then 0"
                : depositAmount >= 10000000
                ? "Amount is to big!"
                : ""}
            </label>

            <button
              onClick={handleDeposit}
              className="col-span-2 col-start-5 w-8/12 h-4/6 bg-gradient-to-tr from-green-500 to-teal-500 rounded-full text-xl font-extrabold"
            >
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
              className="expense--input text-white placeholder:text-white placeholder:text-opacity-30 rounded-full w-full h-4/6 ml-5 bg-zinc-600 border-2 border-zinc-400 focus:outline-none indent-5 col-span-3"
            />
            <button
              onClick={handleExpense}
              className="col-span-2 col-start-5 w-8/12 h-4/6 bg-gradient-to-tr from-rose-400 to-rose-600 rounded-full text-xl font-extrabold"
            >
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
