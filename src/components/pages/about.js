import React from "react";
import Counter from "../../counter";
import Swiper from "../swiper";
import Team from "../team"
import Card from "../cards";
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
                 
                    <Card></Card>
                    <Swiper></Swiper>
                  
                </section>
                <Team></Team>
            </section>
        </React.Fragment>
    );
}