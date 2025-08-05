import Image from "next/image";
import Link from "next/link";

const About5 = ({shape,img1,img2,subtitle,title,content,FeatureList,btnname,btnurl}) => {
    return (
<div className="about5 sp">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="images-all">
                <div className="shape-bg1">
                <Image src={shape} alt="img" width={782} height={743}   />
                </div>
                <div className="image1" data-aos="zoom-out" data-aos-duration="700">
                <Image src={img1} alt="img" width={470} height={530}   />
                </div>
                <div className="image2 animate2">
                <Image src={img2} alt="img" width={477} height={375}   />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="heading5">
                <p className="title" data-aos="fade-left" data-aos-duration="800"> <span className="span">
                <Image src="/assets/img/logo/span5.svg" alt="img" width={20} height={20}   />
                   {subtitle}</span></p>
                <h2 className="text-anime-style-3">{title}</h2>
                <div className="space16"></div>
                <p data-aos="fade-left" data-aos-duration="900">{content}</p>
                <ul className="about-list" data-aos="fade-left" data-aos-duration="900">
                {FeatureList?.map((item, index) => (                
                    <li key={index}><span><i className="bi bi-check-lg"></i></span> {item}</li>
                    ))}
                </ul>
                <div className="space30"></div>
                <div className="" data-aos="fade-left" data-aos-duration="700">
                  <Link className="theme-btn3" href={btnurl}>{btnname} <span><i className="bi bi-arrow-right"></i></span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
    );
};

export default About5;