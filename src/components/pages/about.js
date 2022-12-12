import React from "react";
import Counter from "../../counter";
import Swiper from "../swiper";
import Team from  "../team"
export default function About() {
    return (
        <React.Fragment>
            <div className="about">
                <div className="about-container">
                    <h2 className="myabout">about us</h2>
                    <p>We are willing to do our best to help you build your busines well.
                        lorem no paridant sunt culpa officia derenut molit
                        anium idest laborum sed us perdidbr.</p>
                    <p className="navigation">Home / About Us</p>
                </div>
            </div>
            <section>
                <container>
                    <div className="about-flex">
                        <div className="about-child">
                            <div className="about-img-cont">
                                <img src="/images/about-3.jpeg"></img>
                            </div>
                        </div>
                        <div className="about-child">
                            <div className="about-content">
                                <small>
                                    About Agico
                                </small>
                                <p className="display">Eausmod Tempor Magna Nostrud Exercitation</p>
                                <p className="display2">Lorem ipsium dolor sit amet consecuter adispsing ellit sed do usmod tempor incidunt enim ad minim veniam, quis nostured exer citation ulla mco laboris nisi ut aliquipi commondo. Ellit sed do usmod tempor incidunt enim ad minim veniam, quis nostured exer citation ulla mco laboris nisi ut.</p>
                                <p className="display3">Sed ut perspiciatis unde omnis iste nature error incidunt enim ad minim veniam, quis sit ut perspicatis accu doloreque lauditianum.</p>
                                <button className="btn3">contact us</button>
                            </div>
                        </div>
                    </div>
                </container>
                <Counter></Counter>
                <section>
                    <div className="container">
                        <div className="card1-content">
                            <small>services</small>
                            <p className="area">our service area</p>
                        </div>
                        <div className="cards">
                            <div className="card1">
                                <div className="card1-container">
                                    <i class="fa-solid fa-tv" style={{ color: "red", fontSize: "35px" }}></i>
                                    <p className="networking">networking</p>
                                    <p className="dedication">We at agico, are willing and able to help you create an exclusive design of your choice.</p></div>
                            </div>
                            <div className="card1">
                                <div className="card1-container">
                                    <i class="fa-solid fa-people-group  icon1" style={{ color: "blue", fontSize: "35px" }}></i>
                                    <p className="networking">networking</p>
                                    <p className="dedication">We at agico, are willing and able to help you create an exclusive design of your choice.</p></div>
                            </div>
                            <div className="card1">
                                <div className="card1-container">
                                    <i class="fa-brands fa-modx icon1" style={{ fontSize: "35px" }}></i>
                                    <p className="networking">networking</p>
                                    <p className="dedication">We at agico, are willing and able to help you create an exclusive design of your choice.</p></div>
                            </div>
                            <div className="card1">
                                <div className="card1-container">
                                    <i class="fa-regular fa-clock icon1 " style={{ fontSize: "35px" }}></i>
                                    <p className="networking">networking</p>
                                    <p className="dedication">We at agico, are willing and able to help you create an exclusive design of your choice.</p></div>
                            </div>
                            <div className="card1">
                                <div className="card1-container">
                                    <i class="fa-brands fa-dropbox icon1" style={{ color: "blue", fontSize: "35px" }}></i>
                                    <p className="networking">networking</p>
                                    <p className="dedication">We at agico, are willing and able to help you create an exclusive design of your choice.</p></div>
                            </div>
                            <div className="card1">
                                <div className="card1-container">
                                    <i class="fa-solid fa-rss icon1" style={{ color: "blue", fontSize: "35px" }}></i>
                                    <p className="networking">networking</p>
                                    <p className="dedication">We at agico, are willing and able to help you create an exclusive design of your choice.</p></div>
                            </div>
                            <div className="card1">
                                <div className="card1-container">
                                    <i class="fa-solid fa-list-check icon1" style={{ color: "red", fontSize: "35px" }}></i>
                                    <p className="networking">networking</p>
                                    <p className="dedication">We at agico, are willing and able to help you create an exclusive design of your choice.</p></div>
                            </div>
                            <div className="card1">
                                <div className="card1-container">
                                    <i class="fa-solid fa-address-card icon1" style={{ color: "indigo", fontSize: "35px" }}></i>
                                    <p className="networking">networking</p>
                                    <p className="dedication">We at agico, are willing and able to help you create an exclusive design of your choice.</p></div>
                            </div>
                            <div className="card1">
                                <div className="card1-container">
                                    <i class="fa-brands fa-bandcamp icon1" style={{ color: "purple", fontSize: "35px" }}>  </i>
                                    <p className="networking">networking</p>
                                    <p className="dedication">We at agico, are willing and able to help you create an exclusive design of your choice.</p></div>
                            </div>
                        </div>
                    </div>
                    <Swiper></Swiper>
                  
                </section>
                <Team></Team>
            </section>
        </React.Fragment>
    );
}