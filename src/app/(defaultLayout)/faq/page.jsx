import BreadCumb from '@/app/Components/Common/BreadCumb';
import ContactInfo4 from '@/app/Components/ContactInfo/ContactInfo4';
import ContactInfo6 from '@/app/Components/ContactInfo/ContactInfo6';
import Faq3 from '@/app/Components/Faq/Faq3';
import React from 'react';

const page = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/bg/comon-hero-bg.jpg"
                Title="Faq"
            ></BreadCumb>     
            <Faq3></Faq3> 
            <ContactInfo6></ContactInfo6>
            <ContactInfo4></ContactInfo4>                        
        </div>
    );
};

export default page;