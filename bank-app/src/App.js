import Login from "./Login";
import Homepage from "./Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-zinc-900 w-screen h-screen">
        <Routes>
          <Route path="/" index element={<Login />} />
          <Route path="/Homepage" element={<Homepage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
