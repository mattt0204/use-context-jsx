import React, { useState } from "react";
import "./App.css";
import Page from "./components/Page";
import { DarkModeProvider } from "./context/ThemaContext";

export default function App() {
  return (
    <DarkModeProvider>
      <Page />
    </DarkModeProvider>
  );
}
