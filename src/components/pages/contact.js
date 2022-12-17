import React from "react";
export default function Contact() {
    return (
        <>
            <div className="about">
                <div className="about-container">
                    <h2 className="myabout">contact us</h2>
                    <p>We are willing to do our best to help you build your busines well.
                        lorem no paridant sunt culpa officia derenut molit
                        anium idest laborum sed us perdidbr.</p>
                    <p className="navigation">Home / career</p>
                </div>
            </div>
            <iframe className="frame" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=909&amp;height=438&amp;hl=en&amp;q=funaab%20abeokuta+(abeokuta)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            {/* <a href='https://maps-generator.com/'>Maps Generator</a> */}
            <div className="container">
                <div className="message">
                    <div className="msg">
                        <span className="sp" >message</span>
                        <h5 className="leave">leave a message</h5>
                    </div>
                    <form className="form">
                        <div className="form-box">
                            <div className="input-div">
                                <input className="input name" type="text" placeholder="your name " />

                                <input className="input email" type="text" placeholder="your email" />
                           </div>
                            <div className="input-div">
                                <input className="input subject" type="text" placeholder="subject" />
                                <input className="input message1" type="text" placeholder="message" />
                            </div>
                        </div>
                        <div className="form-btn-div">
                            <button className="form-btn" type="submit">submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}