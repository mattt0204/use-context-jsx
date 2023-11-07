import React, { useContext } from "react";
import { ThemaContext } from "../context/ThemaContext";

export default function Footer() {
  const { isDark, setIsDark } = useContext(ThemaContext);
  return (
    <footer className={`footer ${isDark ? "dark" : "white"}`}>
      <button onClick={() => setIsDark(!isDark)}>테마 변경</button>
    </footer>
  );
}
