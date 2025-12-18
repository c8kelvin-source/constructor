import { useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import "./style.css";

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  return (
    <>
      <Header onLoginClick={() => setIsPopupOpen(true)} />

      <div
        className={`wrapper ${isPopupOpen ? "active-popup" : ""} ${
          isRegister ? "active" : ""
        }`}
      >
        <span
          className="icon-close"
          onClick={() => {
            setIsPopupOpen(false);
            setIsRegister(false);
          }}
        >
          ✖
        </span>

        {isRegister ? (
          <Register onSwitchToLogin={() => setIsRegister(false)} />
        ) : (
          <Login onSwitchToRegister={() => setIsRegister(true)} />
        )}
      </div>
    </>
  );
}
