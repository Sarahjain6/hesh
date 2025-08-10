import About1 from '@/app/Components/About/About1';
import About4 from '@/app/Components/About/About4';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import ContactInfo4 from '@/app/Components/ContactInfo/ContactInfo4';
import Skill from '@/app/Components/Skill/Skill';
import Team2 from '@/app/Components/Team/Team2';
import Testimonial1 from '@/app/Components/Testimonial/Testimonial1';
import Work5 from '@/app/Components/Work/Work5';
import Pricing1 from '@/app/Components/Pricing/Pricing1';
import React from 'react';
import Faq3 from '@/app/Components/Faq/Faq3';
const page = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/bg/comon-hero-bg.jpg"
                Title="About Hesh"
            ></BreadCumb> 
            <About1
                img1="/assets/img/about/about1-main-img.png"
                img2="/assets/img/about/about1-shape1.png"
                img3="/assets/img/about/about1-shape2.png"
                subtitle="WHY CHOOSE US"
                title="Business's Potential with A Leading Digital Marketing"
                content="Our team of experienced professionals is dedicated to helping  business achieve higher visibility, increased to traffic, greater."
                FeatureList={[
                    "Higher Conversion Rates",
                    "Increase Website Traffic",
                    "Local Market Dominance",
                    "24/7 Promotion"
                ]}
                btnurl="/service"
                btnname="Explore Our Services"
            ></About1>  
            <About4
                subtitle="About Us"
                title="Experience the Power A Strategic SEO & Digital"
                content="Our team of experienced professionals is dedicated helping business achieve higher visibility, increased traffic, greater."
                list1="SEO Marketing"
                list2="SEO Analysis"
                img1="/assets/img/about/about2-main-img.png"
                img2="/assets/img/about/about1-shape1.png"
                img3="/assets/img/about/about1-shape2.png"
            ></About4>
             
            
              <Faq3></Faq3> 
            <Testimonial1></Testimonial1>  
             <Pricing1></Pricing1>
                                                           
        </div>
    );
};

export default page;