import BreadCumb from '@/app/Components/Common/BreadCumb';
import ContactInfo4 from '@/app/Components/ContactInfo/ContactInfo4';
import Services5 from '@/app/Components/Services/Services5';
import Skill from '@/app/Components/Skill/Skill';
import Work1 from '@/app/Components/Work/Work1';
import Work2 from '@/app/Components/Work/Work2';
import Work3 from '@/app/Components/Work/Work3';
import Work4 from '@/app/Components/Work/Work4';
import Work5 from '@/app/Components/Work/Work5';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/bg/comon-hero-bg.jpg"
                Title="Our Services"
            ></BreadCumb>  
            
            <Skill></Skill>
            <Work1></Work1>
            <Work2></Work2>
            <Work3></Work3>
                              
        </div>
    );
};

export default page;