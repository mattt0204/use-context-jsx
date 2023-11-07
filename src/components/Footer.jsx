import React from "react";

export default function Footer({ isDark, toggleThema }) {
  return (
    <footer className={`footer ${isDark ? "dark" : "white"}`}>
      <button onClick={toggleThema}>테마 변경</button>
    </footer>
  );
}
