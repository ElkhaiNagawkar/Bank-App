import React from "react";
import { IoMdArrowRoundDown } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";

export default function CardsPage() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [allUsers, setUsers] = React.useState(
    localStorage["allUsers"] ? JSON.parse(localStorage.getItem("allUsers")) : []
  );

  const [user, setUser] = React.useState(
    allUsers.find((user) => {
      return user.loggedIn === true;
    })
  );

  function validateCreditCard(name, number, expiry) {
    const cardHolderName = document.querySelector(".card--holder--name");
    const cardNumber = document.querySelector(".card--number");
    const cardExpiry = document.querySelector(".card--expiry");
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

    return cardPass;
  }

  function handleAddCard() {
    if (user.creditCard.length === 8) {
      document.querySelector(".maximum--cards")?.classList.remove("hidden");
      return;
    } else {
      document.querySelector(".maximum--cards")?.classList.add("hidden");
    }

    const name = document.querySelector(".card--holder--name")?.value;
    const number = document.querySelector(".card--number")?.value;
    const expiry = document.querySelector(".card--expiry")?.value;

    const cardValidated = validateCreditCard(name, number, expiry);

    if (cardValidated) {
      const newCard = {
        key: uuidv4(),
        cardHolderName: name,
        cardNumber: number,
        cardExpiry: expiry,
      };

      setUser({
        userName: user.userName,
        password: user.password,
        loggerIn: user.loggedIn,
        creditCard: [...user.creditCard, newCard],
      });

      allUsers.find((user) => {
        if (user.loggedIn) {
          user.creditCard.push(newCard);
        }
      });

      localStorage.setItem("allUsers", JSON.stringify(allUsers));
    }
  }

  function handleSelect(cardNumber) {
    if ((document.querySelector(".selection").innerHTML = "")) {
      return;
    }

    document.querySelector(
      ".selection"
    ).innerHTML = `Ending with ${cardNumber?.slice(12)}`;
    setMenuOpen(!menuOpen);
  }

  function handleDelete() {
    const cardToDelete = document
      .querySelector(".selection")
      .innerHTML.slice(12);
    const cardIndex = user.creditCard.findIndex((card) => {
      return card.cardNumber.slice(12) === cardToDelete;
    });
    document.querySelector(".selection").innerHTML = "";
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
        <div className="bg-zinc-400 w-6/12 h-full rounded-[50px] border-2 border-orange-400 border-opacity-40">
          <ul className="w-full font-extrabold text-xl flex justify-between mt-6 pb-6 border-b-2 border-zinc-700 border-opacity-80">
            <li className="ml-16">Name</li>
            <li>Number</li>
            <li className="mr-16">Expiry</li>
          </ul>
          {user.creditCard.map(({ cardHolderName, cardNumber, cardExpiry }) => {
            return (
              <div className="border-b-2 border-opacity-45 border-zinc-600 pb-4">
                <div className="ml-8 mt-5 mr-8 flex justify-between">
                  <p className="font-[600] text-[1.1rem] w-36">
                    {cardHolderName}
                  </p>
                  <p className="font-[600] text-[1.1rem] -ml-20">
                    Ending with {cardNumber?.slice(12)}
                  </p>
                  <p className="font-[600] text-[1.1rem] mr-12">{cardExpiry}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-6/12 h-full grid grid-cols-12 grid-rows-8 relative gap-x-5 gap-y-12 pr-7">
          <p className="text-4xl h-10 font-bold text-orange-400 col-span-12">
            Add a Card:
          </p>
          <div className="relative col-span-6">
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
          <div className="relative col-span-6">
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
          <div className="relative col-span-6">
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
          <div className="relative col-start-7 col-span-6 row-start-3">
            <button
              onClick={handleAddCard}
              id="addCardButton"
              className="w-full h-12 bg-gradient-to-tr from-green-500 to-teal-500 rounded-full py-2 font-semibold"
            >
              Add Card
            </button>
            <label
              htmlFor="addCardButton"
              className="maximum--cards text-xs text-red-500 ml-4 absolute left-0 top-[2.7rem] text-pretty hidden"
            >
              Reached maximum number of cards. Plase remove a card.
            </label>
          </div>
          <div className="row-start-5 col-span-8">
            <p className="text-4xl h-10 font-bold text-orange-400 col-span-6 select-none">
              Delete a Card:
            </p>
          </div>
          <div className="row-start-6 col-span-6 relative">
            <div
              className="bg-zinc-500 w-full h-12 rounded-full flex items-center justify-end"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <IoMdArrowRoundDown className="mr-3 text-white h-full w-6 absolute pointer-events-none" />
              <p className="selection absolute left-5 font-[600] text-white opacity-80 select-none"></p>
            </div>
            {menuOpen && (
              <div className="scroll bg-zinc-500 rounded-xl left-2 top-[3.6rem] h-44 w-72 row-start-8 absolute overflow-y-auto">
                {user.creditCard.map(({ cardNumber }) => {
                  return (
                    <div
                      className="flex justify-center mt-2 py-3 hover:bg-zinc-600 mx-4 rounded-[25px] text-white opacity-80"
                      onClick={() => handleSelect(cardNumber)}
                    >
                      <p className="font-[600] select-none">
                        Ending with {cardNumber.slice(12)}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="row-start-6 col-start-7 col-span-6 h-full">
            <button
              className="bg-gradient-to-tl from-orange-400 to-red-400 py-2 w-full rounded-full font-semibold h-12 select-none"
              onClick={handleDelete}
            >
              Delete Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
