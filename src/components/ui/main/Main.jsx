import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import './style.css';

const Main = (props) => {
  return (
    <div className="container">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Main;
