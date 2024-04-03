import React from "react";
import { IoMdArrowRoundDown } from "react-icons/io";
import CardDropdown from "./HelperComponents/CardDropdown";
import Pagination from "./HelperComponents/Pagination";

export default function Homepage() {
  const [allUsers] = React.useState(
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

  const [expenseAmount, setExpenseAmount] = React.useState(
    document.querySelector(".expense--input")?.value
  );

  const [loanMenuOpen, setLoanMenuOpen] = React.useState(false);

  function addDeposit(newTransaction) {
    if (user.transactions.length === 60) {
      setUser({
        userName: user.userName,
        password: user.password,
        creditCard: user.creditCard,
        transactions: [...user.transactions, user.transactions.splice(-1)],
        money: user.money + +newTransaction.amount,
        loan: user.loan,
        loggerIn: user.loggedIn,
      });

      allUsers.find((user) => {
        if (user.loggedIn) {
          user.transactions.splice(-1);
        }
      });
      localStorage.setItem("allUsers", JSON.stringify(allUsers));
    }
    setUser({
      userName: user.userName,
      password: user.password,
      creditCard: user.creditCard,
      transactions: [newTransaction, ...user.transactions],
      money: user.money + +newTransaction.amount,
      loan: user.loan,
      loggerIn: user.loggedIn,
    });

    allUsers.find((user) => {
      if (user.loggedIn) {
        user.transactions.unshift(newTransaction);
        user.money = user.money + +newTransaction.amount;
      }
    });
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
  }

  function addExpense(newTransaction) {
    if (user.transactions.length === 60) {
      setUser({
        userName: user.userName,
        password: user.password,
        creditCard: user.creditCard,
        transactions: [...user.transactions, user.transactions.splice(-1)],
        money: user.money - +newTransaction.amount,
        loan: user.loan,
        loggerIn: user.loggedIn,
      });

      allUsers.find((user) => {
        if (user.loggedIn) {
          user.transactions.splice(-1);
        }
      });
      localStorage.setItem("allUsers", JSON.stringify(allUsers));
    }

    setUser({
      userName: user.userName,
      password: user.password,
      creditCard: user.creditCard,
      transactions: [newTransaction, ...user.transactions],
      money: user.money - +newTransaction.amount,
      loan: user.loan,
      loggerIn: user.loggedIn,
    });

    allUsers.find((user) => {
      if (user.loggedIn) {
        user.transactions.unshift(newTransaction);
        user.money = user.money - +newTransaction.amount;
      }
    });

    localStorage.setItem("allUsers", JSON.stringify(allUsers));
  }

  function addLoan(newTransaction) {
    if (user.transactions.length === 60) {
      setUser({
        userName: user.userName,
        password: user.password,
        creditCard: user.creditCard,
        transactions: [...user.transactions, user.transactions.splice(-1)],
        money: user.money + +newTransaction.amount,
        loan: user.loan + +newTransaction.amount,
        loggerIn: user.loggedIn,
      });

      allUsers.find((user) => {
        if (user.loggedIn) {
          user.transactions.splice(-1);
        }
      });
      localStorage.setItem("allUsers", JSON.stringify(allUsers));
    }

    setUser({
      userName: user.userName,
      password: user.password,
      creditCard: user.creditCard,
      transactions: [newTransaction, ...user.transactions],
      money: user.money + +newTransaction.amount,
      loan: user.loan + +newTransaction.amount,
      loggerIn: user.loggedIn,
    });

    allUsers.find((user) => {
      if (user.loggedIn) {
        user.transactions.unshift(newTransaction);
        user.money = user.money + +newTransaction.amount;
      }
    });

    localStorage.setItem("allUsers", JSON.stringify(allUsers));
  }

  function payLoan(newTransaction) {
    if (user.transactions.length === 60) {
      setUser({
        userName: user.userName,
        password: user.password,
        creditCard: user.creditCard,
        transactions: [...user.transactions, user.transactions.splice(-1)],
        money: user.money - +newTransaction.amount,
        loan: user.loan - +newTransaction.amount,
        loggerIn: user.loggedIn,
      });

      allUsers.find((user) => {
        if (user.loggedIn) {
          user.transactions.splice(-1);
        }
      });
      localStorage.setItem("allUsers", JSON.stringify(allUsers));
    }

    setUser({
      userName: user.userName,
      password: user.password,
      creditCard: user.creditCard,
      transactions: [newTransaction, ...user.transactions],
      money: user.money - +newTransaction.amount,
      loan: user.loan - +newTransaction.amount,
      loggerIn: user.loggedIn,
    });

    allUsers.find((user) => {
      if (user.loggedIn) {
        user.transactions.unshift(newTransaction);
        user.money = user.money - +newTransaction.amount;
      }
    });

    localStorage.setItem("allUsers", JSON.stringify(allUsers));
  }

  function handleDeposit() {
    const deposit = document.querySelector(".deposit--input")?.value;
    setDepositAmount(deposit);

    if (deposit <= 0 || deposit >= 10000000) {
      document.querySelector(".deposit--error")?.classList.remove("hidden");
      return;
    } else {
      document.querySelector(".deposit--error")?.classList.add("hidden");
    }

    const currentTime = new Date();

    const newTransaction = {
      amount: Number(deposit).toFixed(2),
      cardUsed: "N/A",
      time: `${currentTime.getDate()}/${
        currentTime.getMonth() + 1
      }/${currentTime.getFullYear()}`,
      type: "Deposit",
    };

    addDeposit(newTransaction);
  }

  function handleExpense() {
    const expense = document.querySelector(".expense--input")?.value;
    setExpenseAmount(expense);

    const card = document.querySelector(".selection").innerHTML;

    if (expense <= 0 || expense > user.money || card === "") {
      document.querySelector(".expense--error")?.classList.remove("hidden");
      return;
    } else {
      document.querySelector(".expense--error")?.classList.add("hidden");
    }

    const currentTime = new Date();

    const newTransaction = {
      amount: Number(expense).toFixed(2),
      cardUsed: card,
      time: `${currentTime.getDate()}/${
        currentTime.getMonth() + 1
      }/${currentTime.getFullYear()}`,
      type: "Expense",
    };

    addExpense(newTransaction);
  }

  function handleLoanType() {
    document.querySelector(".loan--selection").innerHTML === "Request"
      ? (document.querySelector(".loan--selection").innerHTML = "Pay")
      : (document.querySelector(".loan--selection").innerHTML = "Request");
  }

  function handleLoan() {
    const loan = document.querySelector(".loan--input")?.value;
    const loanType = document.querySelector(".loan--selection").innerHTML;
    const card = document.querySelector(".selection").innerHTML;
    setDepositAmount(loan);

    if (loanType === "Request") {
      if (loan <= 0 || loan >= 10000000) {
        document.querySelector(".loan--error")?.classList.remove("hidden");
        return;
      } else {
        document.querySelector(".loan--error")?.classList.add("hidden");
      }

      const currentTime = new Date();
      const newTransaction = {
        amount: Number(loan).toFixed(2),
        cardUsed: "N/A",
        time: `${currentTime.getDate()}/${
          currentTime.getMonth() + 1
        }/${currentTime.getFullYear()}`,
        type: "Loan",
      };

      addLoan(newTransaction);
    } else {
      if (loan <= 0 || loan > user.loan || loan > user.money) {
        document.querySelector(".loan--error")?.classList.remove("hidden");
        return;
      } else {
        document.querySelector(".loan--error")?.classList.add("hidden");
      }

      const currentTime = new Date();
      const newTransaction = {
        amount: Number(loan).toFixed(2),
        cardUsed: card,
        time: `${currentTime.getDate()}/${
          currentTime.getMonth() + 1
        }/${currentTime.getFullYear()}`,
        type: "Loan Expense",
      };

      payLoan(newTransaction);
    }
  }

  const [currentPage, setCurrentPage] = React.useState(1);
  const [transactionsPerPage] = React.useState(6);

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = user.transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
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
              ${Number(user.money).toFixed(2)}
            </p>
            <p className="font-bold text-xl ml-5">Your Money</p>
          </div>
          <div>
            <p className="text-5xl text-red-500 font-bold ml-5">
              ${Number(user.loan).toFixed(2)}
            </p>
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
            {currentTransactions.map(({ type, amount, time, cardUsed }) => {
              return (
                <div className="text-black text-opacity-80 flex justify-between px-12 mt-6 pb-5 font-bold border-b-2 border-zinc-600 border-opacity-45">
                  <p className="w-[3.2rem] whitespace-nowrap">{type}</p>
                  <p className="w-36 -ml-2">{cardUsed}</p>
                  <p className="w-16 -ml-10">{time}</p>
                  <p
                    className={`mr-10 w-10 ${
                      type === "Deposit" || type === "Loan"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {`$${
                      type !== "Deposit" && type !== "Loan" ? "-" : ""
                    }${amount}`}
                  </p>
                </div>
              );
            })}
          </div>
          <Pagination
            transactionsPerPage={transactionsPerPage}
            totalTransactions={user.transactions.length}
            paginate={paginate}
          />
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
          <div className="grid grid-cols-5 grid-rows-2 items-center mb-10 relative">
            <p className="text-2xl font-bold ml-6 mt-7 mb-1 text-orange-200 col-span-5">
              Add Expense
            </p>
            <input
              type="text"
              placeholder="Amount"
              id="expenseAmount"
              className="expense--input text-white placeholder:text-white placeholder:text-opacity-30 rounded-full w-full h-4/6 ml-5 bg-zinc-600 border-2 border-zinc-400 focus:outline-none indent-5 col-span-3"
            />
            <label
              htmlFor="expenseAmount"
              className="expense--error absolute text-red-500 font-semibold text-xs top-[7.4rem] left-9 hidden"
            >
              {expenseAmount <= 0
                ? "Amount must be larger then 0"
                : expenseAmount > user.money
                ? "Amount excedes current balance"
                : document.querySelector(".selection")?.innerHTML === ""
                ? "Please Add a card to utilize"
                : ""}
            </label>
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
        <div className="col-span-3 row-span-3 rounded-[50px] bg-zinc-500 relative">
          <div className="grid grid-cols-5 items-center gap-x-5">
            <p className="text-2xl font-bold ml-6 mt-7 mb-6 text-orange-200 col-span-3">
              Loan
            </p>

            <div
              onClick={() => setLoanMenuOpen(!loanMenuOpen)}
              className="bg-zinc-400 w-10/12 h-10 rounded-full flex items-center justify-end col-start-4 col-span-3 relative"
            >
              <IoMdArrowRoundDown className="text-white h-full w-5 absolute pointer-events-none self-center mr-3" />
              <p className="loan--selection absolute left-4 font-[600] text-white opacity-80 select-none">
                Request
              </p>
              {loanMenuOpen && (
                <div
                  onClick={handleLoanType}
                  className="scroll bg-zinc-400 rounded-xl left-2 top-11 h-10 w-24 absolute overflow-y-auto select-none flex justify-center items-center"
                >
                  <p className="text-white opacity-80 font-semibold ">
                    {document.querySelector(".loan--selection").innerHTML ===
                    "Request"
                      ? "Pay"
                      : "Request"}
                  </p>
                </div>
              )}
            </div>
            <input
              type="text"
              placeholder="Amount"
              id="loanAmount"
              className="loan--input col-span-3 w-10/12 h-8 ml-7 rounded-full text-white placeholder:text-white placeholder:text-opacity-30 bg-zinc-600 border-2 border-zinc-400 focus:outline-none indent-3"
            />
            <label
              htmlFor="loanAmount"
              className="loan--error absolute text-red-500 font-semibold text-xs top-[7.4rem] left-8 hidden"
            >
              {document.querySelector(".loan--selection")?.innerHTML ===
              "Request"
                ? depositAmount <= 0
                  ? "Amount must be larger then 0"
                  : depositAmount >= 10000000
                  ? "Amount is to big!"
                  : ""
                : user.loan === 0
                ? "No loan to pay off"
                : depositAmount <= 0
                ? "Amount must be larger then 0"
                : depositAmount > user.loan
                ? "Amount is larger then loan"
                : depositAmount > user.money
                ? "Not Enough to pay "
                : ""}
            </label>
            <button
              onClick={handleLoan}
              className="col-span-2 col-start-4 bg-green-400 rounded-full h-full font-bold "
            >
              {document.querySelector(".loan--selection")?.innerHTML
                ? document.querySelector(".loan--selection")?.innerHTML
                : "Request"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
