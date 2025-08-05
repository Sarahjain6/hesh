import React from 'react';
import HeroBanner1 from '../Components/HeroBanner/HeroBanner1';
import About1 from '../Components/About/About1';
import Services1 from '../Components/Services/Services1';
import Work1 from '../Components/Work/Work1';
import Work5 from '../Components/Work/Work5';
import CaseStudy1 from '../Components/CaseStudy/CaseStudy1';
import Team1 from '../Components/Team/Team1';

import Testimonial1 from '../Components/Testimonial/Testimonial1';
import Blog1 from '../Components/Blog/Blog1';
import ContactInfo1 from '../Components/ContactInfo/ContactInfo1';
import Pricing1 from '../Components/Pricing/Pricing1';

const page = () => {
    return (
        <div>
            <HeroBanner1
                subtitle="Expert Strategies With Hesh"
                title="Accelerate Your Growth — Master the Digital Game."
                content="Our dedicated team of professionals committed to driving targeted traffic to your brand, increasing sales ."
               
                shape1="/assets/img/hero/hero1-main-shape.png"
                img1="/assets/img/hero/hero1-main-img.png"
                shape2="/assets/img/shapes/hero1-bottom-shape.png"
                list1="SEO Analytics"
                list2="Social Media Optimization"
                list3="Keyword Research"
            ></HeroBanner1>
            <About1
                img1="/assets/img/about/about1-main-img.png"
                img2="/assets/img/about/about1-shape1.png"
                img3="/assets/img/about/about1-shape2.png"
                subtitle="WHY CHOOSE US"
                title="Business's Potential with A Leading Digital Marketing"
                content="At Hesh Media, we specialize in transforming brands through bold ideas, smart strategies, and relentless creativity. Founded in 2023 in Amritsar, we’ve helped businesses of all sizes gain visibility, grow traffic, and dominate their local markets with cutting-edge digital solutions."
                FeatureList={[
                    "Higher Conversion Rates",
                    "Increase Social Media Engagement",
                    "Local Market Dominance",
                    "24/7 Promotion"
                ]}
                btnurl="/service"
                btnname="Explore Our Services"
            ></About1>   
            <Services1></Services1> 
            <Work1></Work1>
            <Work5></Work5>
            
           

           
            <Testimonial1></Testimonial1> 
            <Pricing1></Pricing1>   
            
            <ContactInfo1></ContactInfo1>               
        </div>
    );
};

export default page;