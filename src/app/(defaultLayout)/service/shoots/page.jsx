import CaseStudy3 from '@/app/Components/CaseStudy/CaseStudy3.jsx';
import Shoots from '@/app/Components/Details/shoots.jsx';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import ContactInfo4 from '@/app/Components/ContactInfo/ContactInfo4';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/bg/comon-hero-bg.jpg"
                Title="Services"
            ></BreadCumb>  
           <Shoots></Shoots>
           <CaseStudy3></CaseStudy3>
            <ContactInfo4></ContactInfo4>                
        </div>
    );
};

export default page;