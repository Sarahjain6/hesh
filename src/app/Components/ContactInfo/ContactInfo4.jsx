"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";

const ContactInfo4 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <div className="cta2" data-background="/assets/img/bg/cta2-bg.jpg" >
        <div className="container _relative">
          <div className="row">
            <div className="col-lg-6 m-auto text-center">
              <div className="heading">
                <h2>Maximize Your ROI with Our Best Solutions</h2>
                <div className="form-area">
                  <form action="#">
                    
                    <div className="form-btn">
                     
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Image src="/assets/img/others/cta2-img1.png" alt="img" width={238} height={226} className="image1"  />
          <Image src="/assets/img/others/cta2-img2.png" alt="img" width={238} height={226}  className="image2"  />
        </div>
       </div>
    );
};

export default ContactInfo4;