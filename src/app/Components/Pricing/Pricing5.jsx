import Image from "next/image";
import PricingCard3 from "../Card/PricingCard3";

const Pricing5 = () => {
    return (
<div className="pricing5 sp">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 m-auto text-center">
          <div className="heading5">
          <p className="title" data-aos="fade-left" data-aos-duration="800"> <span className="span">
          <Image src="/assets/img/logo/span5.svg" alt="img" width={20} height={20}   />
            Pricing plan</span></p>
          <h2 className="text-anime-style-3">SEO Marketing Pricing Plans</h2>          
           </div>
        </div>
      </div>
      <div className="space30"></div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
        <PricingCard3
                addclass="pricing-box"
                title="Basic"
                content="Ideal for small businesses and startups looking to establish an online presence."
                FeatureList={[
                    "Local SEO optimization",
                    "Basic content optimization",
                    "Monthly performance reports",
                    "Comprehensive website audit",
                    "Technical SEO enhancements",
                    "Review generation management"
                ]}
                price="$599"
                pricename="Month"
                btnurl="/pricing"
                btnname="Choose Plan"
            ></PricingCard3>
        </div>

        <div className="col-lg-4 col-md-6">
            <PricingCard3
                addclass="pricing-box active"
                title="Premium"
                content="Ideal for small businesses and startups looking to establish an online presence."
                FeatureList={[
                    "Local SEO optimization",
                    "Basic content optimization",
                    "Monthly performance reports",
                    "Comprehensive website audit",
                    "Technical SEO enhancements",
                    "Review generation management"
                ]}
                price="$699"
                pricename="Month"
                btnurl="/pricing"
                btnname="Choose Plan"
            ></PricingCard3>
        </div>

        <div className="col-lg-4 col-md-6">
        <PricingCard3
                addclass="pricing-box"
                title="Advanced"
                content="Ideal for small businesses and startups looking to establish an online presence."
                FeatureList={[
                    "Local SEO optimization",
                    "Basic content optimization",
                    "Monthly performance reports",
                    "Comprehensive website audit",
                    "Technical SEO enhancements",
                    "Review generation management"
                ]}
                price="$799"
                pricename="Month"
                btnurl="/pricing"
                btnname="Choose Plan"
            ></PricingCard3>
        </div>

      </div>
    </div>
   </div>
    );
};

export default Pricing5;