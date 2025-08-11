import Gallery from '@/app/Components/CaseStudy/graphicc';
import Graphic from '@/app/Components/Details/graphic';
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
           <Graphic></Graphic>
           <Gallery></Gallery>
            <ContactInfo4></ContactInfo4>                
        </div>
    );
};

export default page;