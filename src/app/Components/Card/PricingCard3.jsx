import Link from "next/link";

const PricingCard3 = ({addclass,title,content,FeatureList,price,pricename,btnurl,btnname}) => {
    return (
        <div className={addclass} data-aos="fade-up" data-aos-duration="900">
        
        <h6>{title}</h6>
        <p>{content}</p>
          <ul className="pricing-list">
          {FeatureList?.map((item, index) => (
            <li key={index}><span><i className="bi bi-check-lg"></i></span> {item}</li>
        ))}
          </ul>
        <div className="head-text">
          <h3>{price}<span>/{pricename}</span></h3>
        </div>
        <div className="button">
          <Link className="theme-btn3" href={btnurl}>{btnname} <span><i className="bi bi-arrow-right"></i></span></Link>
        </div>
      </div>
    );
};

export default PricingCard3;