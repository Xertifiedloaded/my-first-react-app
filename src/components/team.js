import React from "react";

export default function Team() {
    return (
        <React.Fragment>
            <section>
                <div className="container">
                    
                    <div className="team">
                        <div className="team-heading">
                            <small>Team</small>
                            <p className="expert">expert person</p>
                        </div>
                        <div className="teams">
                            <div className="each-team">
                                <div className="team-bg">
                                    <img src="/images/team-member-1.jpeg" alt=""></img>
                                </div>
                                <div className="hover">
                                    <div className="fullname">
                                        <p className="name2">Noil Robert</p>
                                        <p>marketter</p>
                                        <span className="member-social">
                                            <i class="fa-brands fa-facebook" style={{ color: "blue", fontSize: "17px" }}></i>
                                            <i class="fa-brands fa-twitter" style={{ color: "white", fontSize: "17px" }}></i>
                                            <i class="fa-brands fa-instagram" style={{ color: "purple", fontSize: "17px" }}></i>
                                            <i class="fa-brands fa-snapchat" style={{ color: "yellow", fontSize: "17px" }}></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="each-team">
                                <div className="team-bg">
                                    <img src="/images/team-member-2.jpeg" alt=""></img>
                                </div>
                                <div className="hover">
                                    <div className="fullname">
                                        <p className="name2">marcy pupi</p>
                                        <p>content writter</p>
                                        <span className="member-social">
                                            <i class="fa-brands fa-facebook" style={{ color: "blue", fontSize: "17px" }}></i>
                                            <i class="fa-brands fa-twitter" style={{ color: "white", fontSize: "17px" }}></i>
                                            <i class="fa-brands fa-instagram" style={{ color: "purple", fontSize: "17px" }}></i>
                                            <i class="fa-brands fa-snapchat" style={{ color: "yellow", fontSize: "17px" }}></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="each-team">
                                <div className="team-bg">
                                    <img src="/images/team-member-3.jpeg" alt=""></img>
                                </div>
                                <div className="hover">
                                    <div className="fullname">
                                        <p className="name2">perfect claude</p>
                                        <p>email marketter</p>
                                        <span className="member-social">
                                            <i class="fa-brands fa-facebook" style={{ color: "blue", fontSize: "17px" }}></i>
                                            <i class="fa-brands fa-twitter" style={{ color: "white", fontSize: "17px" }}></i>
                                            <i class="fa-brands fa-instagram" style={{ color: "purple", fontSize: "17px" }}></i>
                                            <i class="fa-brands fa-snapchat" style={{ color: "yellow", fontSize: "17px" }}></i>
                                        </span>
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}