import React from "react";
import { VscAccount } from "react-icons/vsc";

export default function AccountPage() {
  const [allUsers] = React.useState(
    localStorage["allUsers"] ? JSON.parse(localStorage.getItem("allUsers")) : []
  );

  const [user, setUser] = React.useState(
    allUsers.find((user) => {
      return user.loggedIn === true;
    })
  );

  return (
    <div
      className="bg-zinc-600 w-10/12 h-5/6 col-span-9 ml-20 rounded-[50px] border-2 border-orange-400 border-opacity-20 
    shadow-[0_35px_60px_-15px_rgba(251,146,60,0.4)] flex items-center"
    >
      <div className="bg-zinc-400 w-4/12 h-[98%] rounded-[40px] ml-2 border-2 border-orange-400 border-opacity-20 flex items-center flex-col text-zinc-900 text-opacity-90">
        <div className="h-2/6 flex ">
          <VscAccount className="w-36 h-full" />
        </div>
        <div className="-mt-10 font-bold text-4xl ">
          <p>{user.userName}</p>
        </div>
        <div className="flex flex-col gap-y-8 w-44 font-bold mt-[22rem]">
          <button className="bg-orange-400 py-2 rounded-full">Log Out</button>
          <button className="bg-red-500  py-2 rounded-full">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
