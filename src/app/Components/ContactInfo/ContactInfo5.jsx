"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";

const ContactInfo5 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <div className="service-details-others" data-background="/assets/img/bg/service-details-others-bg.png">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 m-auto text-center">
                    <div className="heading1-w">
                        <h2>SEO Competitor Analysis</h2>
                        <div className="space16"></div>
                        <p>Competitor analysis is a fundamental aspect of strategic business development that involves a comprehensive examination of your rivals to understand their strengths, weaknesses, and market.</p>
    
                        <div className="form-area">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="single-input">
                                        <input type="text" placeholder="https:// yoursite.com" />
                                        <Image className="icon" src="/assets/img/icons/service-details-form-icon1.svg" alt="img" width={21} height={20}   />
                                    </div>
                                </div>
    
                                <div className="col-md-6">
                                    <div className="single-input">
                                        <input type="text" placeholder="youremail@domain.com" />
                                        <Image className="icon" src="/assets/img/icons/service-details-form-icon2.svg" alt="img" width={21} height={20}   />
                                    </div>
                                </div>
                                <div className="space30"></div>
                                <div className="form-btn">
                                    <button className="theme-btn1">Analyze Website <span><i className="bi bi-arrow-right"></i></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default ContactInfo5;