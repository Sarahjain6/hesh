"use client"
import { useEffect } from "react";
import loadBackgroudImages from "./loadBackgroudImages";
import Link from "next/link";
import Image from "next/image";

const BreadCumb = ({bgimg,Title}) => {
    
    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (

      <div className="common-hero" data-background={bgimg}>
      <div className="container">
          <div className="row">
              <div className="col-lg-6 m-auto text-center">
                  <div className="heading">
                      <span className="title">
                      <Image src="/assets/img/icons/span4.svg" alt="img" width={20} height={20}   />
                         <Link href="/">Home</Link><span className="arrow"><i className="bi bi-chevron-right"></i></span>{Title}</span>
                      <h1>{Title}</h1>
                  </div>
              </div>
          </div>
      </div>
     </div>

      
    );
};

export default BreadCumb;