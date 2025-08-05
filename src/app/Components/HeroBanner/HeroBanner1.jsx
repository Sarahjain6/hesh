"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";

const HeroBanner1 = ({subtitle,title,content,subcontent,shape1,img1,shape2,list1,list2,list3}) => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <div className="hero1" data-background="/assets/img/hero/hero1-bg.jpg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="main-heading">
                <span className="span" data-aos="fade-left" data-aos-duration="800">
                <Image src="/assets/img/icons/main-span1.svg" alt="img" width={20} height={20}   />
                   {subtitle}</span>
                <h1 className="text-anime-style-3">{title}</h1>
                <p data-aos="fade-right" data-aos-duration="800">{content}</p>
                <p className="has-teg" data-aos="fade-right" data-aos-duration="1000">{subcontent}</p>
                <div className="form-area" data-aos="fade-right" data-aos-duration="1200">
                  <form action="#">
                    <input type="email" placeholder="Your Mail " />
                    <div className="form-btn">
                      <button type="submit" className="theme-btn1">Get started <span><i className="bi bi-arrow-right"></i></span></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="main-images" data-aos="zoom-out" data-aos-duration="700">
                <div className="image1">
                <Image src={shape1} alt="img" width={666} height={696}   />
                </div>
                <div className="image2">
                <Image src={img1} alt="img" width={609} height={636}   />
                </div>
                <div className="shapes shape1 animate4" data-aos="zoom-in-up" data-aos-duration="700">
                  <div className="icon">
                  <Image src="/assets/img/icons/hero1-icon1.svg" alt="img" width={34} height={34}   />
                  </div>
                  <p className="pera">{list1}</p>
                </div>
    
                <div className="bottom-shape round-circle2" data-aos="flip-right" data-aos-duration="700">
                <Image src={shape2} alt="img" width={120} height={120}   />
                </div>
    
                <div className="shapes shape2 animate1" data-aos="zoom-in-up" data-aos-duration="700">
                  <div className="icon">
                  <Image src="/assets/img/icons/hero1-icon2.svg" alt="img" width={34} height={34}   />
                  </div>
                  <p className="pera">{list2}</p>
                </div>
    
                <div className="shapes shape3 animate3" data-aos="zoom-in-up" data-aos-duration="700">
                  <div className="icon">
                  <Image src="/assets/img/icons/hero1-icon3.svg" alt="img" width={32} height={32}   />
                  </div>
                  <p className="pera">{list3}</p>
                </div>
    
              </div>
            </div>
          </div>
        </div>
       </div>
    );
};

export default HeroBanner1;