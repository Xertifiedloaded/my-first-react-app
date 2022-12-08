import React from "react";
const navInfo = {
    home: "home",
    about: "about",
    service: "service",
    team: "team",
    price: "our price",
    contact: "contact",
    buttonInfo: "sign up",
}
function Nav() {
    // let nav = document.querySelectorAll(".nav-item")
    return (
        <ul className="nav-menu">
            <li className="nav-item">
                {navInfo.home}
            </li>
            <li className="nav-item">
                {navInfo.about}
            </li>
            <li className="nav-item">
                {navInfo.service}
            </li>
            <li className="nav-item">
                {navInfo.team}
            </li>
            <li className="nav-item">
                {navInfo.price}
            </li>
            <li className="nav-item">
                {navInfo.contact}
            </li>
            <li className="nav-item">
                {navInfo.price}
            </li>
            <li className="nav-item">
                <button className="nav-btn">
                    {navInfo.price}
                </button>
            </li>
        </ul>
    )
}
export default Nav