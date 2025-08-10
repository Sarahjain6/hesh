"use client"
import { useEffect, useRef, useState } from "react";
import data from '../../Data/faq.json';
import Image from "next/image";

const CaseDetailsCenter = () => {

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
                <div className="col-lg-8 m-auto">
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
                                    <p>Connect with your audience directly in their inbox. Our email marketing campaigns are designed to engage, nurture, and convert leads into loyal customers.</p>
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
                                        <li><span className="check"><i className="bi bi-check-lg"></i></span> Compliance with best practices</li>
                                                <li><span className="check"><i className="bi bi-check-lg"></i></span>Performance tracking and analytics</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <div className="space70"></div>
                        <article>
                            <div className="details-post-single">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="image image-anime">
                                        <Image src="/assets/img/case/case-details-img2.png" alt="img" width={401} height={347}   />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="image image-anime">
                                        <Image src="/assets/img/case/case-details-img3.png" alt="img" width={401} height={347}   />
                                        </div>
                                    </div>

                                </div>
                                <div className="space30"></div>
                                <div className="heading1">
                                    <h3>E-commerce SEO And Digital Marketing</h3>
                                    <div className="space16"></div>
                                    <p>In the highly competitive world of e-commerce, SEO and digital marketing are critical tools for driving traffic, increasing visibility, and boosting sales. Effective e-commerce SEO involves optimizing a website so that it ranks higher in search.</p>
                                </div>
                            </div>
                        </article>

                        <div className="space60"></div>
                        <div className="heading1">
                            <h3>Frequently Asked Questions (FAQs)</h3>
                        </div>
                        <div className="space10"></div>
                        <div className="details-accodion">
                            <div className="accordion accordion1" id="accordionExample">
                            {data.map((item, index)=>(
                                <div key={index} className={`cs_accordian accordion-item ${index === openItemIndex ? "active" : "" }`}> 
                                  <h2 className="accordion-header" id="headingOne">
                                    <button onClick={() => handleItemClick(index)} className="accordion-button">
                                    {item.title}
                                    </button>
                                  </h2>
                                  <div ref={accordionContentRef} id="collapseOne" className="accordion-collapse accordion-content" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    {item.desc}
                                    </div>
                                  </div>
                                </div>
                                ))}
                    
                              </div>
                    
                        </div>

                    </div>
                </div>
                
            </div>
        </div>
      </div>
    );
};

export default CaseDetailsCenter;