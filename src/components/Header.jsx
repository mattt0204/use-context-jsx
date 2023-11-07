import React, { useContext } from "react";
import { ThemaContext } from "../context/ThemaContext";

export default function Header() {
  const { isDark } = useContext(ThemaContext);
  return (
    <header className={`header ${isDark ? "dark" : "white"}`}>
      <h1>Welcome! 프론트엔드 테킷 수강생</h1>
    </header>
  );
}
