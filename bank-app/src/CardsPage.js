import React from "react";

export default function CardsPage() {
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
        <div className="w-6/12 h-full grid grid-cols-6 grid-rows-8 relative gap-x-5">
          <p className="text-4xl h-10 font-bold text-orange-400 col-span-6">
            Add a Card:
          </p>
          <div className="relative col-span-3">
            <input
              type="text"
              id="cardHolderName"
              className="peer w-full h-12 rounded-full text-white bg-zinc-600 border-2 border-zinc-500 focus:outline-none placeholder-transparent placeholder:select-none indent-5"
              placeholder="Card Holder Name"
            />
            <label
              htmlFor="cardHolderName"
              className="absolute left-4 top-3 font-semibold text-white opacity-80 peer-focus:-top-6 transition-all duration-500 peer-[:not(:placeholder-shown)]:-top-6 select-none pointer-events-none"
            >
              Card Holder Name
            </label>
          </div>
          <div className="relative col-span-3">
            <input
              type="text"
              id="cardNumber"
              className="peer w-full h-12 rounded-full text-white bg-zinc-600 border-2 border-zinc-500 focus:outline-none placeholder-transparent placeholder:select-none indent-5 col-span-1"
              placeholder="Card Number"
            />
            <label
              htmlFor="cardNumber"
              className="absolute left-4 top-3 font-semibold text-white opacity-80 peer-focus:-top-6 transition-all duration-500 peer-[:not(:placeholder-shown)]:-top-6 select-none pointer-events-none"
            >
              Card Number
            </label>
          </div>
          <div className="relative col-span-3">
            <input
              type="text"
              id="Expiry"
              className="peer w-full h-12 rounded-full text-white bg-zinc-600 border-2 border-zinc-500 focus:outline-none placeholder-transparent placeholder:select-none indent-5 col-span-1"
              placeholder="Expiration Date"
            />
            <label
              htmlFor="Expiry"
              className="absolute left-4 top-3 font-semibold text-white opacity-80 peer-focus:-top-6 transition-all duration-500 peer-[:not(:placeholder-shown)]:-top-6 select-none pointer-events-none"
            >
              Expiration Date
            </label>
          </div>
          <div className="relative col-span-3">
            <input
              type="text"
              id="csv"
              className="peer w-full h-12 rounded-full text-white bg-zinc-600 border-2 border-zinc-500 focus:outline-none placeholder-transparent placeholder:select-none indent-5 col-span-1"
              placeholder="CSV"
            />
            <label
              htmlFor="csv"
              className="absolute left-4 top-3 font-semibold text-white opacity-80 peer-focus:-top-6 transition-all duration-500 peer-[:not(:placeholder-shown)]:-top-6 select-none pointer-events-none"
            >
              Card Number
            </label>
          </div>
          <div className="relative col-start-3 col-span-2">
            <button className="w-full bg-gradient-to-tr from-green-500 to-teal-500 rounded-full py-2">
              Add Card
            </button>
          </div>
          <div className="row-start-6 col-span-8">
            <p className="text-4xl h-10 font-bold text-orange-400 col-span-6">
              Delete a Card:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
