import React from "react";
export default function Aside() {
    return (
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
    )
}