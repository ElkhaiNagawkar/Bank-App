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

  const [changeUsernameError, setChangeUsernameError] = React.useState("");
  const [changePasswordError, setChangePasswordError] = React.useState("");
  const [usernameChangeGood, serUsernameChangeGood] = React.useState(null);
  const [passwordChangeGood, setPasswordChangeGood] = React.useState(null);

  function handleUserNameChange() {
    const userNameInput = document.querySelector(
      ".change--username--input"
    )?.value;

    if (userNameInput !== "") {
      if (user.userName === userNameInput) {
        setChangeUsernameError("Can't set username to currently used username");
        serUsernameChangeGood(false);
        return;
      } else if (allUsers?.find((user) => user.userName === userNameInput)) {
        setChangeUsernameError("This Username is already taken");
        serUsernameChangeGood(false);
        return;
      } else if (userNameInput.length < 3) {
        setChangeUsernameError("Username must be at least 3 characters long");
        serUsernameChangeGood(false);
        return;
      } else {
        setUser({
          userName: userNameInput,
          password: user.password,
          creditCard: user.creditCard,
          transactions: user.transactions,
          money: user.money,
          loan: user.loan,
          loggerIn: user.loggedIn,
        });
      }
      allUsers.find((user) => {
        if (user.loggedIn) {
          user.userName = userNameInput;
        }
      });

      localStorage.setItem("allUsers", JSON.stringify(allUsers));
    }
    if (userNameInput === "") {
      serUsernameChangeGood(false);
      setChangeUsernameError("Please Enter Username");
      return;
    }
    setChangeUsernameError("Username Changed");

    serUsernameChangeGood(true);
  }

  function handlePassword() {
    const passwordInput = document.querySelector(
      ".change--password--input"
    )?.value;

    if (passwordInput !== "") {
      if (user.password === passwordInput) {
        setChangePasswordError("Can't set password to currently used password");
        setPasswordChangeGood(false);

        return;
      } else {
        setUser({
          userName: user.userName,
          password: passwordInput,
          creditCard: user.creditCard,
          transactions: user.transactions,
          money: user.money,
          loan: user.loan,
          loggerIn: user.loggedIn,
        });
      }
      allUsers.find((user) => {
        if (user.loggedIn) {
          user.password = passwordInput;
        }
      });

      localStorage.setItem("allUsers", JSON.stringify(allUsers));
    }
    if (passwordInput === "") {
      setChangePasswordError("Please Enter password");
      setPasswordChangeGood(false);
      return;
    }
    setChangePasswordError("Password Changed");
    setPasswordChangeGood(true);
  }

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
      <div className="flex flex-col h-full w-8/12 ml-10">
        <div className="self-start w-full h-24 flex items-center">
          <p className="text-5xl text-orange-400 font-extrabold ">Account</p>
        </div>
        <div className="relative w-4/12 mt-8">
          <p className="font-semibold text-orange-300 text-xl ml-2">
            Change Username
          </p>
          <input
            type="text"
            placeholder="UserName"
            id="username"
            minLength={3}
            maxLength={21}
            className="peer change--username--input h-12 w-full rounded-full mt-7 bg-zinc-600 border-2 border-zinc-500 focus:outline-none placeholder-transparent placeholder:select-none indent-5 text-white"
          />
          <label
            htmlFor="username"
            className="absolute left-4 top-[66%] font-semibold text-white opacity-80  peer-focus:top-[30%] transition-all duration-500 peer-[:not(:placeholder-shown)]:top-[30%] select-none pointer-events-none"
          >
            UserName
          </label>
          <label
            htmlFor="username"
            className={`change--username--error absolute left-4 top-full font-semibold ${
              usernameChangeGood ? "text-green-500" : "text-red-500"
            } opacity-80 ${
              usernameChangeGood === null ? "hidden" : "flex"
            } text-xs`}
          >
            {changeUsernameError}
          </label>
        </div>
        <button
          onClick={handleUserNameChange}
          className="mt-6 w-2/12 ml-[5rem] bg-gradient-to-tr from-green-500 to-teal-500 rounded-full py-2"
        >
          Confirm
        </button>
        <div className="relative w-4/12 mt-8">
          <p className="font-semibold text-orange-300 text-xl ml-2">
            Change Password
          </p>
          <input
            type="text"
            placeholder="password"
            id="password"
            className="peer change--password--input h-12 w-full rounded-full mt-7 bg-zinc-600 border-2 border-zinc-500 focus:outline-none placeholder-transparent placeholder:select-none indent-5 text-white"
          />
          <label
            htmlFor="password"
            className="absolute left-4 top-[65%] font-semibold text-white opacity-80  peer-focus:top-[30%] transition-all duration-500 peer-[:not(:placeholder-shown)]:top-[30%] select-none pointer-events-none"
          >
            Password
          </label>
          <label
            htmlFor="password"
            className={`change--password--error absolute left-4 top-full font-semibold ${
              passwordChangeGood ? "text-green-500" : "text-red-500"
            } opacity-80 ${
              passwordChangeGood === null ? "hidden" : "flex"
            } text-xs`}
          >
            {changePasswordError}
          </label>
        </div>
        <button
          onClick={handlePassword}
          className="mt-6 w-2/12 ml-[5rem] bg-gradient-to-tr from-green-500 to-teal-500 rounded-full py-2"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
