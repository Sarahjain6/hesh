import PricingCard from "../Card/PricingCard";
import SectionTitle2 from "../Common/SectionTitle2";

const Pricing3 = () => {
    return (
<div className="pricing3 sp">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 m-auto text-center">
          <div className="heading3">
          <SectionTitle2
                SubTitle="Pricing plan"
                Title="SEO Marketing Pricing Plans"
            ></SectionTitle2>           
           </div>
        </div>
      </div>
      <div className="space30"></div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
        <PricingCard
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
            ></PricingCard>
        </div>

        <div className="col-lg-4 col-md-6">
            <PricingCard
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
            ></PricingCard>
        </div>

        <div className="col-lg-4 col-md-6">
        <PricingCard
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
            ></PricingCard>
        </div>

      </div>
    </div>
   </div>
    );
};

export default Pricing3;