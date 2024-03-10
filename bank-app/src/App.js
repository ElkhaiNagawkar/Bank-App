import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./Login";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import CardsPage from "./CardsPage";

export default function App() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      document.querySelector(".homepage--container")?.classList.add("hidden");
    } else {
      document.querySelector(".homepage--container")?.classList.add("flex");
      document
        .querySelector(".homepage--container")
        ?.classList.remove("hidden");
    }
  }, [location]);

  return (
    <div className="bg-zinc-900 w-screen h-screen">
      <Routes>
        <Route path="/" index element={<Login />} />
      </Routes>
      <div className="homepage--container items-center h-screen grid grid-cols-10">
        <Navbar />
        <Routes>
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/CardsPage" element={<CardsPage />} />
        </Routes>
      </div>
    </div>
  );
}
