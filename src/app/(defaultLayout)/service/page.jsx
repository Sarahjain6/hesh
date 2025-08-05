import BreadCumb from '@/app/Components/Common/BreadCumb';
import ContactInfo4 from '@/app/Components/ContactInfo/ContactInfo4';
import Services5 from '@/app/Components/Services/Services5';
import Skill from '@/app/Components/Skill/Skill';
import Work1 from '@/app/Components/Work/Work1';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/bg/comon-hero-bg.jpg"
                Title="Our Services"
            ></BreadCumb>  
            <Services5></Services5>
            <Skill></Skill>
            <Work1></Work1>
            <ContactInfo4></ContactInfo4>                          
        </div>
    );
};

export default page;