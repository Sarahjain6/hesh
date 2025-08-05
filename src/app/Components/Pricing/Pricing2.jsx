import PricingCard2 from "../Card/PricingCard2";
import SectionTitle from "../Common/SectionTitle";

const Pricing2 = () => {
    return (
        <div className="pricing2 sp">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto text-center">
              <div className="heading1">
              <SectionTitle
                SubTitle="Pricing plan"
                Title="SEO Marketing Pricing Plans"
            ></SectionTitle>  
               </div>
            </div>
          </div>
    
          <div className="space30"></div>
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up" data-aos-duration="800">
              <PricingCard2
                title="Basic Plan"
                price="$599"
                duration="Month"
                content="Ideal for small businesses an startups looking to establish."
                btnname="Choose Plan"
                btnurl="/pricing"
                FeatureList={[
                    "Local SEO optimization",
                    "Basic content optimization",
                    "Monthly performance reports",
                    "Comprehensive website audit",
                    "Technical SEO enhancements"
                ]}
              ></PricingCard2>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-duration="800">
            <PricingCard2
                title="Pro Plan"
                price="$999"
                duration="Month"
                content="Ideal for small businesses an startups looking to establish."
                btnname="Choose Plan"
                btnurl="/pricing"
                FeatureList={[
                    "Local SEO optimization",
                    "Basic content optimization",
                    "Monthly performance reports",
                    "Comprehensive website audit",
                    "Technical SEO enhancements"
                ]}
              ></PricingCard2>
            </div>
    
          </div>
        </div>
       </div>
    
    );
};

export default Pricing2;