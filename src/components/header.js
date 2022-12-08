import React from "react";
import Nav from './nav'
const information = {
    src: "/images/logo.png"
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
                            <Nav></Nav>
                        </nav>
                    </div>
                </div>
            </nav>

        </section>
    )
}
export default Header;