"use client"
import { useEffect, useRef, useState } from "react";
import data from '../../Data/faq.json';
import Link from "next/link";
import Image from "next/image";

const Case1t = () => {

    const accordionContentRef = useRef(null);
    const [openItemIndex, setOpenItemIndex] = useState(-1);
    const [firstItemOpen, setFirstItemOpen] = useState(true);
  
    const handleItemClick = index => {
      if (index === openItemIndex) {
        setOpenItemIndex(-1);
      } else {
        setOpenItemIndex(index);
      }
    };
    useEffect(() => {
      if (firstItemOpen) {
        setOpenItemIndex(0);
        setFirstItemOpen(false);
      }
    }, [firstItemOpen]);


    return (
<div className="blog-details-area sp _relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="details-posts right">
                                <article>
                                    <div className="details-post-single">
                                        <div className="image image-anime">
                                        <Image src="/assets/img/case/case-details-img1.png" alt="img" width={826} height={555}   />
                                        </div>
                                        <div className="space30"></div>
                                        <div className="heading1">
                                            <h3>Email Marketing</h3>
                                            <div className="space16"></div>
                                            <p>Connect with your audience directly in their inbox. Our email marketing campaigns are designed to engage, nurture, and convert leads into loyal customers.
We craft personalised email strategies that drive results for your brand.</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-5">
                                                <ul className="details-list">
                                                <li><span className="check"><i className="bi bi-check-lg"></i></span> Custom campaign design and copywriting</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> Segmentation and automation</li>
                                           
                                                </ul>
                                            </div>
                                            <div className="col-md-7">
                                                <ul className="details-list">
                                                <li><span className="check"><i className="bi bi-check-lg"></i></span> Performance tracking and analytics</li>
                                                <li><span className="check"><i className="bi bi-check-lg"></i></span> Compliance with best practices</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </article>

                                <div className="space70"></div>
                                

                                <div className="space60"></div>
                                
                                <div className="space10"></div>
                                

                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="side-all">
                                <div className="details-sidebox">
                                  <h3>Search</h3>
                                  <div className="search-area">
                                      <form action="#">
                                          <input type="search" placeholder="Search..." />
                                          <div className="button">
                                          <button type="submit"><i className="bi bi-search"></i></button>
                                          </div>
                                      </form>
                                  </div>
                              </div>
    
                              <div className="details-sidebox">
                                  <h3>Other Services</h3>
                                  <div className="categorys">
                                      <ul>
                                      <li><Link href="/case/case-details">SEO & Digital Marketing <span className="arrow"><i className="bi bi-arrow-right"></i></span></Link></li>
                                  <li><Link href="/case/case-details">Pay-Per-Click Strategy <span className="arrow"><i className="bi bi-arrow-right"></i></span></Link></li>
                                  <li><Link href="/case/case-details">Social Media Success <span className="arrow"><i className="bi bi-arrow-right"></i></span></Link></li>
                                  <li><Link href="/case/case-details">Social Media Campaigns <span className="arrow"><i className="bi bi-arrow-right"></i></span></Link></li>
                                  <li><Link href="/case/case-details">Video Editing  <span className="arrow"><i className="bi bi-arrow-right"></i></span></Link></li>
                                  <li><Link href="/case/case-details">E-commerce SEO <span className="arrow"><i className="bi bi-arrow-right"></i></span></Link></li>
                                      </ul>
                                  </div>
                              </div>
    
                             

                              <div className="details-sidebox">
                                <h3>If You Need Any SEO And Digital Marketing Help ?</h3>
                                <div className="phone-btn">
                                    <a href="tel:+91+91 83602 55087"><Image src="/assets/img/icons/details-call-icon.svg" alt="img" width={24} height={24}   />+91 +91 83602 55087</a>
                                </div>
                            </div>

                            </div>
                        </div>
                        
                    </div>
                </div>
              </div>
              
    );
};

export default Case1;