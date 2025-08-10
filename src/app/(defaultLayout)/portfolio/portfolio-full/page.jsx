import About6 from '@/app/Components/About/About6';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import ContactInfo4 from '@/app/Components/ContactInfo/ContactInfo4';
import ContactInfo5 from '@/app/Components/ContactInfo/ContactInfo5';
import Faq2 from '@/app/Components/Faq/Faq2';
import Partner from '@/app/Components/Partner/Partner';
import Testimonial1 from '@/app/Components/Testimonial/Testimonial1';
import Services7 from '@/app/Components/Services/Services7';
import TableAnalysis from '@/app/Components/TableAnalysis/TableAnalysis';
import React from 'react';
import Work4 from '@/app/Components/Work/Work4';
import Work5 from '@/app/Components/Work/Work5';

const page = () => {
    return (
        <div>
           
           
            <BreadCumb
                bgimg="/assets/img/bg/comon-hero-bg.jpg"
                Title="Portfolio"
            ></BreadCumb>
           <Testimonial1></Testimonial1> 
            <Work5></Work5>
         
          
            <ContactInfo4></ContactInfo4>                              
        </div>
    );
};

export default page;