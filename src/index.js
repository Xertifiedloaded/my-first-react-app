import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import Header from './components/header';
import Hero from './components/hero'
import Banner from "./components/banner";
function Contents() {
  return (
    <body className="heading">
      <Header />
      <Hero />
      <Banner />
    </body>
  )
}

ReactDOM.render(<Contents />, document.getElementById("root")) 