import Link from 'next/link';
import data from '../../Data/services1.json';
import SectionTitle from "../Common/SectionTitle";
import Image from 'next/image';

const Services1 = () => {
    return (
<div className="service1 sp">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="heading1">
            <SectionTitle
                SubTitle="our seo services"
                Title="Features Loved Our SEO <br/> Digital Marketing Services"
            ></SectionTitle>
           </div>
        </div>
        <div className="col-lg-6">
          <div className="right-btn" data-aos="fade-left" data-aos-duration="900">
            <Link className="theme-btn1" href="/contact">Request A Free Consultation <span><i className="bi bi-arrow-right"></i></span></Link>
          </div>
        </div>
      </div>

      <div className="space30"></div>
      <div className="row">
      {data.map((item, i) => (
        <div key={i} className="col-lg-3 col-md-6" data-aos="zoom-in-up" data-aos-duration="700">
          <div className={item.addclass}>
            <div className="icon">
            <Image src={item.icon} alt="img" width={36} height={36}   />
            </div>
            <div className="heading1">
              <h4><Link href={item.btnLink}>{item.title}</Link></h4>
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

export default Services1;