import React from "react";
import Swiper from "../swiper";
export default function Price() {
    return (
        <React.Fragment>
            <section>
                <div className="container">
                    <div className="about">
                        <div className="about-container">
                            <h2 className="myabout">our pricing</h2>
                            <p className="service-info">We are willing to do our best to help you build your busines well.
                                lorem no paridant sunt culpa officia derenut molit
                                anium idest laborum sed us perdidbr.</p>
                            <p className="navigation">home / Our Service</p>
                        </div>
                    </div>
                    <div className="table">
                        <small className="small">pricing Table</small>
                        <div className="plan">choose your plan</div>
                        <div className="container">
                            <div className="table-head">
                                <div className="tab">
                                    <div className="first-tab">
                                        <p className="basic">Basic</p>
                                        <p className="amount">$40<span>/month</span></p>
                                        <p className="individual">Best For Small Individuals</p>
                                    </div>
                                    <hr></hr>
                                    <div className="second-tab">
                                        <p className="express">express service</p>
                                        <p className="custom">Customs Clearaance</p>
                                        <p className="time-critical">Time-Critical Services</p>
                                        <div className="price-btn">
                                            <button>
                                                select plan
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab">
                                    <div className="first-tab">
                                        <p className="basic">professional</p>
                                        <p className="amount">$40<span>/month</span></p>
                                        <p className="individual">Best For Small Individuals</p>
                                    </div>
                                    <hr></hr>
                                    <div className="second-tab">
                                        <p className="express">express service</p>
                                        <p className="custom">Customs Clearaance</p>
                                        <p className="time-critical">Time-Critical Services</p>
                                        <div className="price-btn">
                                            <button>
                                                select plan
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab">
                                    <div className="first-tab">
                                        <p className="basic">Business</p>
                                        <p className="amount">$40<span>/month</span></p>
                                        <p className="individual">Best For Small Individuals</p>
                                    </div>
                                    <hr></hr>
                                    <div className="second-tab">
                                        <p className="express">express service</p>
                                        <p className="custom">Customs Clearaance</p>
                                        <p className="time-critical">Time-Critical Services</p>
                                        <div className="price-btn">
                                            <button>
                                                select plan
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Swiper></Swiper>
        </React.Fragment>
    )
}