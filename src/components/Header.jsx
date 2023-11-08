import React, { useContext } from "react";
import { ThemaContext } from "../context/ThemaContext";

export default function Header() {
  const { darkMode } = useContext(ThemaContext);
  return (
    <header className={`header ${darkMode ? "dark" : "white"}`}>
      <h1>Welcome! 프론트엔드 테킷 수강생</h1>
    </header>
  );
}
