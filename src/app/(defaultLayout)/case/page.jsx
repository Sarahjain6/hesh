import CaseStudy3 from '@/app/Components/CaseStudy/CaseStudy3';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import ContactInfo4 from '@/app/Components/ContactInfo/ContactInfo4';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/bg/comon-hero-bg.jpg"
                Title="Case Studies"
            ></BreadCumb>  
            <CaseStudy3></CaseStudy3>
                         
        </div>
    );
};

export default page;