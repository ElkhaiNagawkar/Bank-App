import React from "react";
import { IoMdArrowRoundDown } from "react-icons/io";

export default function CardsPage() {
  // const [menuOpen, setMenuOpen] = React.useState(false);
  const [allUsers, setUsers] = React.useState(
    localStorage["allUsers"] ? JSON.parse(localStorage.getItem("allUsers")) : []
  );

  const user = allUsers.find((user) => {
    return user.loggedIn === true;
  });

  function validateCreditCard(name, number, expiry, csv) {
    const cardHolderName = document.querySelector(".card--holder--name");
    const cardNumber = document.querySelector(".card--number");
    const cardExpiry = document.querySelector(".card--expiry");
    const cardCsv = document.querySelector(".card--csv");
    let cardPass = true;

    if (!cardHolderName?.checkValidity() || name === "") {
      document
        .querySelector(".wrong--credit--name")
        ?.classList.remove("hidden");
      cardPass = false;
    } else {
      document.querySelector(".wrong--credit--name")?.classList.add("hidden");
    }

    if (!cardNumber?.checkValidity() || number === "") {
      document
        .querySelector(".wrong--credit--number")
        ?.classList.remove("hidden");
      cardPass = false;
    } else {
      document.querySelector(".wrong--credit--number")?.classList.add("hidden");
    }

    if (!cardExpiry?.checkValidity() || expiry === "") {
      document
        .querySelector(".wrong--credit--expiry")
        ?.classList.remove("hidden");
      cardPass = false;
    } else {
      document.querySelector(".wrong--credit--expiry")?.classList.add("hidden");
    }

    if (!cardCsv?.checkValidity() || csv === "") {
      document.querySelector(".wrong--credit--csv")?.classList.remove("hidden");
      cardPass = false;
    } else {
      document.querySelector(".wrong--credit--csv")?.classList.add("hidden");
    }

    return cardPass;
  }

  function handleAddCard() {
    const name = document.querySelector(".card--holder--name")?.value;
    const number = document.querySelector(".card--number")?.value;
    const expiry = document.querySelector(".card--expiry")?.value;
    const csv = document.querySelector(".card--csv")?.value;

    const cardValidated = validateCreditCard(name, number, expiry, csv);
  }

  return (
    <div
      className="bg-zinc-600 w-10/12 h-5/6 col-span-9 ml-20 rounded-[50px] border-2 border-orange-400 border-opacity-20 
    shadow-[0_35px_60px_-15px_rgba(251,146,60,0.4)]"
    >
      <div className="w-full h-24 overflow-hidden flex items-center justify-between row-span-1">
        <p className="font-extrabold text-5xl text-orange-400 ml-10">
          My Cards
        </p>
      </div>

      <div className="flex w-full h-5/6 px-5 gap-x-10">
        <div className="bg-zinc-400 w-6/12 h-full rounded-[50px] border-2 border-orange-400 border-opacity-40"></div>
        <div className="w-6/12 h-full grid grid-cols-6 grid-rows-8 relative gap-x-5 gap-y-12">
          <p className="text-4xl h-10 font-bold text-orange-400 col-span-6">
            Add a Card:
          </p>
          <div className="relative col-span-3">
            <input
              type="text"
              id="cardHolderName"
              maxLength={21}
              pattern="[a-zA-Z\s]{4,21}"
              placeholder="Card Holder Name"
              className="peer card--holder--name w-full h-12 rounded-full text-white bg-zinc-600 border-2 border-zinc-500 focus:outline-none placeholder-transparent placeholder:select-none indent-5"
            />
            <label
              htmlFor="cardHolderName"
              className="absolute left-4 top-3 font-semibold text-white opacity-80 peer-focus:-top-6 transition-all duration-500 peer-[:not(:placeholder-shown)]:-top-6 select-none pointer-events-none"
            >
              Card Holder Name
            </label>
            <label
              htmlFor="cardHolderName"
              className="wrong--credit--name text-xs absolute left-4 top-[3.1rem] font-semibold text-red-500 opacity-80 select-none pointer-events-none hidden"
            >
              Must include only letters/longer then 3 characters
            </label>
          </div>
          <div className="relative col-span-3">
            <input
              type="tel"
              id="cardNumber"
              placeholder="Card Number"
              maxLength={16}
              pattern="[0-9]{16,16}"
              className="peer card--number w-full h-12 rounded-full text-white bg-zinc-600 border-2 border-zinc-500 focus:outline-none placeholder-transparent placeholder:select-none indent-5 col-span-1"
            />
            <label
              htmlFor="cardNumber"
              className="absolute left-4 top-3 font-semibold text-white opacity-80 peer-focus:-top-6 transition-all duration-500 peer-[:not(:placeholder-shown)]:-top-6 select-none pointer-events-none"
            >
              Card Number
            </label>
            <label
              htmlFor="cardNumber"
              className="text-xs absolute left-4 top-[3.1rem] font-semibold text-white opacity-80 select-none pointer-events-none"
            >
              Format: (012345678901)
            </label>
            <label
              htmlFor="cardNumber"
              className="wrong--credit--number text-xs absolute left-52 top-[3.1rem] font-semibold text-red-500 opacity-80 select-none pointer-events-none hidden"
            >
              Wrong Input
            </label>
          </div>
          <div className="relative col-span-3">
            <input
              type="tel"
              id="Expiry"
              maxLength={5}
              pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
              placeholder="Expiration Date"
              className="peer card--expiry w-full h-12 rounded-full text-white bg-zinc-600 border-2 border-zinc-500 focus:outline-none placeholder-transparent placeholder:select-none indent-5 col-span-1"
            />
            <label
              htmlFor="Expiry"
              className="absolute left-4 top-3 font-semibold text-white opacity-80 peer-focus:-top-6 transition-all duration-500 peer-[:not(:placeholder-shown)]:-top-6 select-none pointer-events-none"
            >
              Expiration Date
            </label>
            <label
              htmlFor="Expiry"
              className="text-xs absolute left-6 top-[3.1rem] font-semibold text-white opacity-80 select-none pointer-events-none"
            >
              Format(MM/YY)
            </label>
            <label
              htmlFor="Expiry"
              className="wrong--credit--expiry text-xs absolute left-52 top-[3.1rem] font-semibold text-red-500 opacity-80 select-none pointer-events-none hidden"
            >
              Wrong Input
            </label>
          </div>
          <div className="relative col-span-3">
            <input
              type="tel"
              id="csv"
              placeholder="CSV"
              maxLength={3}
              minLength={3}
              pattern="^[0-9]*$"
              className="peer card--csv w-full h-12 rounded-full text-white bg-zinc-600 border-2 border-zinc-500 focus:outline-none placeholder-transparent placeholder:select-none indent-5 col-span-1"
            />
            <label
              htmlFor="csv"
              className="absolute left-4 top-3 font-semibold text-white opacity-80 peer-focus:-top-6 transition-all duration-500 peer-[:not(:placeholder-shown)]:-top-6 select-none pointer-events-none"
            >
              CSV
            </label>
            <label
              htmlFor="csv"
              className="wrong--credit--csv text-xs absolute left-52 top-[3.1rem] font-semibold text-red-500 opacity-80 select-none pointer-events-none hidden"
            >
              Wrong Input
            </label>
          </div>
          <div className="relative col-start-3 col-span-2">
            <button
              onClick={handleAddCard}
              className="w-full bg-gradient-to-tr from-green-500 to-teal-500 rounded-full py-2"
            >
              Add Card
            </button>
          </div>
          <div className="row-start-6 col-span-8">
            <p className="text-4xl h-10 font-bold text-orange-400 col-span-6">
              Delete a Card:
            </p>
          </div>
          {/* <div className="row-start-7 col-span-8">
            <div className="bg-zinc-500 w-1/2 h-12 rounded-full flex items-center justify-end">
              <IoMdArrowRoundDown className="mr-3 text-white h-full w-6" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
