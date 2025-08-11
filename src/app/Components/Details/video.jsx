"use client"
import { useEffect, useRef, useState } from "react";
import data from '../../Data/faq.json';
import Link from "next/link";
import Image from "next/image";

const Video = () => {

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
                                            <h3>Video Editing</h3>
                                            <div className="space16"></div>
                                            <p>Professionally edited videos featuring seamless transitions, effects, and compelling storytelling to captivate your audience. From engaging content to talking head and ambiance videos, we bring your vision to life with creativity and precision.</p>
                                        </div>
                          
                                    </div>
                                </article>

                                <div className="space70"></div>
                               

                                <div className="space60"></div>
                               
                                <div className="space10"></div>
                                <div className="details-accodion">
                                    <div className="accordion accordion1" id="accordionExample">
        
                                   

                            
                                      </div>
                            
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="side-all">
                                   
                              <div className="details-sidebox">
                                  <h3>Other Services </h3>
                                  <div className="categorys">
                                      <ul>
                                      <li><Link href="/service/seo">Google Seo <span className="arrow"><i className="bi bi-arrow-right"></i></span></Link></li>
                                  <li><Link href="/service/webdev">Web Development <span className="arrow"><i className="bi bi-arrow-right"></i></span></Link></li>
                                  <li><Link href="//service/shoots">Professional Camera Shoots <span className="arrow"><i className="bi bi-arrow-right"></i></span></Link></li>
                                  <li><Link href="/service/graphic">Graphic Designing <span className="arrow"><i className="bi bi-arrow-right"></i></span></Link></li>
                                  <li><Link href="/service/email">Email and Whatsapp Marketing<span className="arrow"><i className="bi bi-arrow-right"></i></span></Link></li>
                                  <li><Link href="/service/erformance">Performance Marketing <span className="arrow"><i className="bi bi-arrow-right"></i></span></Link></li>
                                      </ul>
                                  </div>
                              </div>
    
                             

                              <div className="details-sidebox">
                                <h3>If You Need Any SEO And Digital Marketing Help ?</h3>
                                <div className="phone-btn">
                                    <a href="tel:+918360255087"><Image src="/assets/img/icons/details-call-icon.svg" alt="img" width={24} height={24}   />+91 8360255087</a>
                                </div>
                            </div>

                            </div>
                        </div>
                        
                    </div>
                </div>
              </div>
              
    );
};

export default Video;