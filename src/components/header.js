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
    function show() {
        let hide = document.querySelector(".hide")
        hide.classList.replace("hide", "show")
        console.log(hide)
    }
    function hide() {
        let show = document.querySelector(".show")
        console.log(show)
        show.classList.replace("show", "hide")
    }
    return (
        <section className="mysection">
            <nav className="head">
                <div className="container">
                    <div className="logo">
                        <div className="icon-container">
                            <img src={information.src} alt="" />
                        </div>
                        <nav className="nav desktop">
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
                        <nav className="nav mobile">
                            <span className="hamburger"><i onClick={show} class="fa-solid solid fa-bars"></i></span>
                            <div className="nav-hidder hide">
                                <div className="container">
                                    <div className="mark">
                                        <i onClick={hide} class="fa-solid fa-xmark xsolid"></i>
                                    </div>
                                    <ul className="my-menu">
                                        <ul className="nav-menu">
                                            <li className="nav-item">
                                                <a className="mobile-anchor" href="/">{navInfo.home}</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="mobile-anchor" href="/about">{navInfo.about}</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="mobile-anchor" href="/service">{navInfo.service}</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="mobile-anchor" href="/team">{navInfo.team}</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="mobile-anchor" href="/price">{navInfo.price}</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="mobile-anchor" href="/career">{navInfo.career}</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="mobile-anchor" href="/contact">{navInfo.contact}</a>
                                            </li>
                                            <li className="nav-item">
                                                <button className="nav-btn">
                                                    <a className="mobile-anchor" href="/signup">{navInfo.buttonInfo}</a>
                                                </button>
                                            </li>
                                        </ul>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </nav>


        </section>
    )
}
export default Header;