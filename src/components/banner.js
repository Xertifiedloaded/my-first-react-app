import React from "react";
export default function Banner() {
    return (
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
    )
}
