import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import Header from './components/header';
import Hero from './components/hero'
import Banner from "./components/banner";
import Aside from "./components/aside";
import Counter from "./components/counter";
function Contents() {
  return (
    <body className="heading">
      <Header />
      <Hero />
      <Banner />
      <Aside />
      <Counter/>
    </body>
  )
}

ReactDOM.render(<Contents/>, document.getElementById("root")) 