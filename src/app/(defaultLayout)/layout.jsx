import React from 'react';
import Header1 from '../Components/Header/Header1';
import Footer1 from '../Components/Footer/Footer1';

const DefalultLayout = ({ children }) => {
    return (
        <div className='main-page-area'>
            <Header1></Header1>
            {children}
            <Footer1 addclass="footer1" footerlogo="/assets/img/logo/header-logo1.png"></Footer1>
        </div>
    );
};

export default DefalultLayout;