import React from "react";
const information = {
    src: "/images/logo.png"
}
const navInfo = {
    home: "home",
    about: "about",
    service: "service",
    team: "team",
    price: "our price",
    contact: "contact",
    career: "carrer",
    buttonInfo: "sign up",
}
function Header() {
    return (
        <section className="mysection">
            <nav className="head">
                <div className="container">
                    <div className="logo">
                        <div className="icon-container">
                            <img src={information.src} alt="" />
                        </div>
                        <nav className="nav">

                            <ul className="nav-menu">
                                <li className="nav-item">
                                    <a href="/">{navInfo.home}</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/about">{navInfo.about}</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/service">{navInfo.service}</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/team">{navInfo.team}</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/price">{navInfo.price}</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/career">{navInfo.career}</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/contact">{navInfo.contact}</a>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-btn">
                                        <a href="/signup">{navInfo.buttonInfo}</a>
                                    </button>
                                </li>
                            </ul>

                        </nav>
                    </div>
                </div>
            </nav>
           

        </section>
    )
}
export default Header;