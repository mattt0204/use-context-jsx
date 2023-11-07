import React, { useState } from "react";
import "./App.css";
import Page from "./components/Page";
import { ThemaContext } from "./context/ThemaContext";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemaContext.Provider
      value={{
        isDark,
        setIsDark,
      }}
    >
      <Page />
    </ThemaContext.Provider>
  );
}
