import React, { useContext } from "react";
import { ThemaContext } from "../context/ThemaContext";

export default function Content() {
  const { darkMode } = useContext(ThemaContext);
  console.log("Content");
  return (
    <div className={`content ${darkMode ? "dark" : "white"}`}>
      <p>이 사이트는 프론트엔드 테킷 수강생과 함께 공부하는 사이트입니다.</p>
    </div>
  );
}
