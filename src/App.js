import React from "react";
import { useState } from "react";
import './index'
import './index.css';
import Header from './components/header';
import Home from "./components/pages/home";
import Login from "./components/pages/signup";
import About from "./components/pages/about";
import Career from "./components/pages/career";
import Contact from "./components/pages/contact";
import Service from "./components/pages/service";
import Team from "./components/pages/team";

import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <section>
            <Header>
            </Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/service" element={<Service></Service>}></Route>
                <Route path="/team" element={<Team></Team>}></Route>
                <Route path="/career" element={<Career></Career>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
                <Route path="/signup" element={<Login></Login>}></Route>
            </Routes>

        </section>
    )
}
export default App