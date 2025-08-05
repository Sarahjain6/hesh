"use client"
import SectionTitle2 from "../Common/SectionTitle2";
import data from '../../Data/services2.json';
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Link from "next/link";
import Image from "next/image";

const Service3 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);
      
    return (
<div className="service3 sp" data-background="/assets/img/bg/service3-bg.jpg">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 m-auto text-center">
          <div className="heading3">
            <SectionTitle2
                SubTitle="our seo services"
                Title="Features Loved Our SEO Digital Marketing Services"
            ></SectionTitle2>
          </div>
        </div>
      </div>

      <div className="space20"></div>
      <div className="row">
      {data.map((item, i) => (
        <div key={i} className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration="700">
          <div className="service3-box">
            <div className="image">
            <Image src={item.icon} alt="img" width={250} height={250}   />
            </div>
            <div className="heading3">
              <h4><Link href={item.btnLink}>{item.title}</Link></h4>
              <div className="space16"></div>
               <p>{item.desc}</p>
               <Link href={item.btnLink} className="learn"><i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        ))}

      </div>
    </div>
   </div>
    );
};

export default Service3;