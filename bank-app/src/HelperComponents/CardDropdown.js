import React from "react";
import { IoMdArrowRoundDown } from "react-icons/io";

export default function CardDropdown() {
  const [allUsers, setUsers] = React.useState(
    localStorage["allUsers"] ? JSON.parse(localStorage.getItem("allUsers")) : []
  );

  const [user, setUser] = React.useState(
    allUsers.find((user) => {
      return user.loggedIn === true;
    })
  );

  const [menuOpen, setMenuOpen] = React.useState(false);

  function handleSelect(cardHolderName, cardNumber, cardExpiry) {
    if ((document.querySelector(".selection").innerHTML = "")) {
      return;
    }

    document.querySelector(
      ".selection"
    ).innerHTML = `Ending with ${cardNumber?.slice(12)}`;
    document.querySelector(".card--number").innerHTML = cardNumber;
    document.querySelector(".card--name").innerHTML = cardHolderName;
    document.querySelector(".card--expiry").innerHTML = cardExpiry;
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="h-4/6 w-10/12 flex justify-center flex-col items-center self-center gap-y-3 relative">
      {user.creditCard.length !== 0 ? (
        <div
          className={`card bg-gradient-to-tl from-orange-400 to-red-500 w-full rounded-xl flex flex-col`}
        >
          <p className="card--number font-bold ml-5 mt-16 self-center">
            {user.creditCard[0].cardNumber}
          </p>
          <p className="card--name font-bold text-xl ml-5 mr-5 whitespace-nowrap line-clamp-1">
            {user.creditCard[0].cardHolderName}
          </p>
          <p className="card--expiry font-bold text-xs ml-5 pb-5">
            {user.creditCard[0].cardExpiry}
          </p>
        </div>
      ) : (
        <div className="h-36 flex justify-center items-center font-bold text-xl text-zinc-200 text-center">
          <p>There are currently no cards to display here here</p>
        </div>
      )}

      <div
        className="bg-zinc-400 w-10/12 h-10 rounded-full flex items-center justify-end"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <IoMdArrowRoundDown className="text-white h-full w-6 absolute pointer-events-none self-center mr-3" />
        <p className="selection absolute left-10 font-[600] text-white opacity-80 select-none">
          {user.creditCard.length === 0
            ? ""
            : `Ending with ${user.creditCard[0]?.cardNumber.slice(12)}`}
        </p>
        {menuOpen && (
          <div className="scroll bg-zinc-400 rounded-xl left-8 top-[13.5rem] h-44 w-[13.2rem] absolute overflow-y-auto">
            {user.creditCard.map(
              ({ cardHolderName, cardNumber, cardExpiry }) => {
                return (
                  <div
                    className="flex justify-center mt-2 py-3 hover:bg-zinc-600 mx-4 rounded-[25px] text-white opacity-80"
                    onClick={() =>
                      handleSelect(cardHolderName, cardNumber, cardExpiry)
                    }
                  >
                    <p className="font-[600] select-none">
                      Ending with {cardNumber.slice(12)}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        )}
      </div>
    </div>
  );
}
