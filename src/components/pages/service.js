import React from "react";
import Card from "../cards";
export default function Service() {
    return (
        <React.Fragment>
            <section>
                <div className="container">
                    <div className="about">
                        <div className="about-container">
                            <h2 className="myabout">our service</h2>
                            <p className="service-info">We are willing to do our best to help you build your busines well.
                                lorem no paridant sunt culpa officia derenut molit
                                anium idest laborum sed us perdidbr.</p>
                            <p className="navigation">home / Our Service</p>
                        </div>
                    </div>

                    {/* <div className="container"> */}
                    <Card></Card>
                    <div className="container">
                        <div className="features">
                            <small>features</small>
                            <p>exclusive features</p>
                        </div>
                        <div className="fluid-container">
                            <div className="fluid">
                                <div className="container-fluid">
                                    <i class="fa-solid fa-laptop solid"></i>
                                    <p className="design">Exclusive Design</p>
                                    <p className="fluid-content">We at agico, are willing and able to help you create an exclusive design of your choice.</p>
                                </div>
                            </div>
                            <div className="fluid">
                                <div className="container-fluid">
                                    <i class="fa-sharp fa-solid fa-gears solid"></i>
                                    <p className="design">Easy Customize</p>
                                    <p className="fluid-content">We promise you adequate security on all our websites,
                                        lorem ipsium dolor tautnm catricit.</p>
                                </div>
                            </div>
                            <div className="fluid">
                                <div className="container-fluid">
                                    <i class="fa-brands fa-modx solid"></i>
                                    <p className="design">Extreme Security</p>
                                    <p className="fluid-content">We promise you adequate security on all our websites,
                                        lorem ipsium dolor tautnm catricit.</p>
                                </div>
                            </div>

                        </div>
                    </div>
             


                </div>

            </section>
        </React.Fragment>

    )
}