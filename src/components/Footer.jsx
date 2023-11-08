import React, { useContext } from "react";
import { ThemaContext } from "../context/ThemaContext";

export default function Footer() {
  const { darkMode, toggleDarkMode } = useContext(ThemaContext);
  return (
    <footer className={`footer ${darkMode ? "dark" : "white"}`}>
      <button onClick={toggleDarkMode}>테마 변경</button>
    </footer>
  );
}
