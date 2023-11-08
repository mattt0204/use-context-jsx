import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
export default function Page() {
  console.log("Page");
  return (
    <div className="page">
      <Header />
      <Content />
      <Footer></Footer>
    </div>
  );
}
