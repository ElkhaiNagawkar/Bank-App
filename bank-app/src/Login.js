import React from "react";

export default function Login() {
  const [signOrLog, setSignOrLog] = React.useState(false);
  const [user, setUser] = React.useState([]);

  function handleSignLog(e) {
    e.preventDefault();
    document
      .querySelector(".info--container")
      ?.classList.toggle("translate-x-[28rem]");
    document
      .querySelector(".signUp--header")
      .classList?.toggle("-translate-x-36");
    document
      .querySelector(".login--header")
      .classList?.toggle("translate-x-36");

    document.querySelector(".signUp--username--input").value = "";
    document.querySelector(".signUp--password--input").value = "";
    document.querySelector(".login--username--input").value = "";
    document.querySelector(".login--password--input").value = "";

    setSignOrLog(!signOrLog);
  }

  function handleSignUp(e) {
    e.preventDefault();

    const userNameInput = document.querySelector(
      ".signUp--username--input"
    )?.value;
    const passwordInput = document.querySelector(
      ".signUp--password--input"
    )?.value;

    if (userNameInput !== "" && passwordInput !== "") {
      if (user.find((user) => user.userName === userNameInput)) {
        document
          .querySelector(".signUp--username--taken")
          ?.classList.remove("hidden");
        document
          .querySelector(".signUp--username--taken")
          ?.classList.add("flex");
      } else {
        user?.push({
          userName: userNameInput,
          password: passwordInput,
        });
        document
          .querySelector(".signUp--username--taken")
          ?.classList.add("hidden");
        document
          .querySelector(".signUp--username--taken")
          ?.classList.remove("flex");
      }
    }

    if (userNameInput === "") {
      document
        .querySelector(".signUp--username--error")
        ?.classList.remove("hidden");
    } else {
      document
        .querySelector(".signUp--username--error")
        ?.classList.add("hidden");
    }

    if (passwordInput === "") {
      document
        .querySelector(".signUp--password--error")
        ?.classList.remove("hidden");
    } else {
      document
        .querySelector(".signUp--password--error")
        ?.classList.add("hidden");
    }
  }

  function handleLogin(e) {
    e.preventDefault();

    const userNameInput = document.querySelector(
      ".login--username--input"
    )?.value;
    const passwordInput = document.querySelector(
      ".login--password--input"
    )?.value;

    if (userNameInput !== "" && passwordInput !== "") {
      if (
        user.find(
          (user) =>
            user.userName === userNameInput && user.password === passwordInput
        )
      ) {
        document.querySelector(".login--error")?.classList.add("hidden");
        document.querySelector(".login--error")?.classList.remove("flex");
      } else {
        document.querySelector(".login--error")?.classList.remove("hidden");
        document.querySelector(".login--error")?.classList.add("flex");
      }
    }
  }

  return (
    <div className="bg-zinc-700 w-6/12 h-4/6 rounded-[50px] border-2 border-orange-500 flex items-center gap-x-32 text-white relative">
      <div className="w-6/12 h-[38rem] gap-y-11 flex flex-col ml-10">
        <div className="relative">
          <input
            type="text"
            placeholder="UserName"
            id="username"
            className="peer signUp--username--input h-12 w-full rounded-full mt-24 bg-zinc-600 border-2 border-zinc-500 focus:outline-none placeholder-transparent placeholder:select-none indent-5"
          />
          <label
            htmlFor="username"
            className="absolute left-4 top-[75%] font-semibold text-white opacity-80  peer-focus:top-[49%] transition-all duration-500 peer-[:not(:placeholder-shown)]:top-[50%] select-none pointer-events-none"
          >
            UserName
          </label>
          <label
            htmlFor="username"
            className="signUp--username--error absolute left-4 top-full font-semibold text-red-500 opacity-80 hidden text-xs"
          >
            Please enter a username
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="password"
            id="password"
            className="peer signUp--password--input h-12 w-full rounded-full bg-zinc-600 border-2 border-zinc-500 focus:outline-none placeholder-transparent placeholder:select-none indent-5"
          />
          <label
            htmlFor="password"
            className="absolute left-4 top-[25%] font-semibold text-white opacity-80  peer-focus:-top-6 transition-all duration-500 peer-[:not(:placeholder-shown)]:-top-6 select-none pointer-events-none"
          >
            Password
          </label>
          <label
            htmlFor="password"
            className="signUp--password--error absolute left-4 top-full font-semibold text-red-500 opacity-80 hidden text-xs"
          >
            Please enter a password
          </label>
        </div>
        <div className="flex flex-col">
          <button
            onClick={handleSignUp}
            className="signUp--button h-12 rounded-full font-semibold border-2 border-orange-400 hover:bg-orange-500 hover:text-black transition-all duration-500"
          >
            Sign Up
          </button>
          <label
            htmlFor="signUp--button"
            className="signUp--username--taken hidden justify-center mt-3 text-red-500"
          >
            This User name is already taken
          </label>
        </div>
      </div>
      <div className="w-6/12 h-[38rem] gap-y-11 flex flex-col mr-10">
        <div className="relative">
          <input
            type="text"
            id="username"
            className="login--username--input peer h-12 w-full rounded-full mt-24 bg-zinc-600 border-2 border-zinc-500 focus:outline-none placeholder-transparent placeholder:select-none indent-5"
            placeholder="UserName"
          />
          <label
            htmlFor="username"
            className="absolute left-4 top-[75%] font-semibold text-white opacity-80  peer-focus:top-[49%] transition-all duration-500 peer-[:not(:placeholder-shown)]:top-[50%] select-none pointer-events-none"
          >
            UserName
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            id="password"
            placeholder="Password"
            className="login--password--input peer h-12 w-full rounded-full bg-zinc-600 border-2 border-zinc-500 focus:outline-none indent-5 placeholder-transparent placeholder:select-none"
          />
          <label
            htmlFor="password"
            className="absolute left-4 top-[25%] font-semibold text-white opacity-80  peer-focus:-top-6 transition-all duration-500 peer-[:not(:placeholder-shown)]:-top-6 select-none pointer-events-none"
          >
            Password
          </label>
        </div>
        <div className="flex flex-col">
          <button
            onClick={handleLogin}
            className="login--button h-12 rounded-full font-semibold border-2 border-orange-400 hover:bg-orange-500 hover:text-black transition-all duration-500"
          >
            Log In
          </button>
          <label
            htmlFor="login--button"
            className="login--error hidden justify-center mt-3 text-red-500"
          >
            Incorrect username or password
          </label>
        </div>
      </div>
      <div className="info--container w-6/12 h-[38rem] bg-zinc-600 border-2 border-zinc-500 rounded-[40px] ml-2 flex items-center justify-between flex-col z-10 transition-all ease-out absolute ">
        <div className="flex justify-center items-center flex-col mt-36">
          <div className="overflow-hidden h-14 w-36 relative flex justify-center items-center">
            <p className="signUp--header text-4xl w-36 font-extrabold absolute -translate-x-36 transition-all duration-500">
              Sign Up
            </p>
            <p className="login--header text-4xl font-extrabold absolute transition-all duration-500">
              Login
            </p>
          </div>
          <p className="font-semibold">
            {signOrLog
              ? "Welcome! Please sign up to create your account."
              : "Welcome Back! Please log in to access your account."}
          </p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <p className="font-semibold mb-5">
            {signOrLog ? "Already got an account?" : "Don't have an account?"}
          </p>
          <button
            onClick={handleSignLog}
            className="border-2 border-orange-400 w-11/12 mb-5 h-10 rounded-full font-semibold hover:bg-orange-500 hover:text-black transition-all duration-500"
          >
            {signOrLog ? "Log In" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}
