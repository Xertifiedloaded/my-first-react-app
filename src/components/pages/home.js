import React from "react";
import Client from "../client";
import Swiper from "../swiper";
// import Footer from "../footer";
export default function Home() {
    return (

        <div>

            <section className="hero-bar">
                <div className="container">
                    <div className="hero-container">
                        <h2 className="hero-content">Build Your Business Together</h2>
                        <p className="hero-paragraph">We are willing to do our best to help you build your busines well.</p>
                        <div className="hero-btn">
                            <button className="btn1 btncolor"><i class="fa-brands fa-google-play"></i> google play</button>
                            <button className="btn1"> <i class="fa-brands fa-apple"></i> app store</button>
                        </div>
                    </div>
                </div>
            </section>
            <aside className="aside">
                <div className="container">
                    <div className="banner-img-container">
                        <img className="banner-img" src="/images/message.png" alt="" />
                    </div>
                    <section>
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
                            <div className="fluid">
                                <div className="container-fluid">
                                    <i class="fa-regular fa-clock solid"></i>
                                    <p className="design">24 Hour Service</p>
                                    <p className="fluid-content">As the adage says "Time is money" so we promise to be availabe to attend to you always.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </aside>
            <section>
                <div className="container">
                    <div className="box">
                        <div className="box-item">
                            <div className="box-img">
                                <img className="stat" src="/images/statistics.png" alt="" />
                            </div>
                        </div>
                        <div className="box-item">
                            <div className="box-container">
                                <h2 className="number">01</h2>
                                <h3 className="title">Aspernatur Aut Odit Fugit Sed
                                    Quia Consetur.</h3>
                                <p className="box-para">Lorem ipsium dolor sit amet consecuter adispsing ellit sed do usmod tempor incidunt enim ad minim veniam, quis nostured exer citation ulla mco laboris nisi ut aliquipi commondo.</p>
                                <div>
                                    <span className="gear-title">
                                        <div className="solid-icon">
                                            <i class="fa-sharp fa-solid fa-gears solid"></i>
                                        </div>
                                        <div className="details">
                                            <h4>Extreme Security</h4>
                                            <p>Lorem ipsium dolor amet consecuter elit sed do eisumud tempor incident labore dolore magna.</p>
                                        </div>
                                    </span>
                                    <span className="gear-title">
                                        <div className="solid-icon">
                                            <i class="fa-sharp fa-solid fa-gears solid"></i>
                                        </div>
                                        <div className="details">
                                            <h4>Satisfied Development</h4>
                                            <p>Lorem ipsium dolor amet consecuter elit sed do eisumud tempor incident labore dolore magna.</p>

                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="box-item">
                            <div className="box-container">
                                <h2 className="number">02</h2>
                                <h3 className="title">Eausmod Temper Magna Nostrud Exercitiation</h3>
                                <p className="box-para">Lorem ipsium dolor sit amet consecuter adispsing ellit sed do usmod tempor incidunt enim ad minim veniam, quis nostured exer citation ulla mco laboris nisi ut aliquipi commondo.
                                    Reprehendent in volumptre veilt esse cilium dolore eu fugiat particilae execuptre sint occacet cupicidant non proident.</p>
                                <button className="read">read more</button>
                            </div>
                        </div>
                        <div className="box-item">
                            <div className="box-img">
                                <img className="stat" src="/images/income.png" alt="" />
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <section>
                <div className="counter">

                    <div className="number-new">
                        <h1 className="count" datatype="8000">8k+</h1>
                        <div className="download">Download per day</div>
                    </div>
                    <div className="number-new">
                        <h1 className="count" datat-val="20000">20k+</h1>
                        <div className="award">Design Awards</div>
                    </div>
                    <div className="number-new">
                        <h1 className="count" data-val="25000">25k+</h1>
                        <div className="total">Total Satisfied Awards</div>
                    </div>
                    <div className="number-new">
                        <h1 className="count" data-val="30000">30k+</h1>
                        <div className="people">People Behind This App</div>
                    </div>
                </div>
                <section>
                    <div className="agico">
                        <div className="agico-content">
                            <h2 className="download-new">Download Agico Now</h2>
                            <p className="lorem">Lorem ipsium dolor sit amet consecuter adispsing ellit sed do usmod tempor incidunt enim ad minim veniam, quis nostured exer citation ulla mco laboris nisi ut aliquipi commondo.
                                Lorem ipsium dolor sit amet consecuter adispsing ellit sed do usmod tempor aliquipi commondo.</p>
                            <img className="logo-4" src="/images/logo-4.png" alt="" />
                            <div className="images">
                                <img className="shoppy" src="/images/slack.png" alt="" />
                                <img className="shoppy" src="/images/open-tracker.png" alt="" />
                                <img className="shoppy" src="/images/shopify.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <Swiper></Swiper>
            {/* client side */}
            <section>
                <Client></Client>
                {/* <Footer></Footer> */}
            </section>
        </div>


    )
}
