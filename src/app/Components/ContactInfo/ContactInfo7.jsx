import Image from "next/image";

const ContactInfo7 = () => {
    return (
        <div>
  <div className="faq-contact contact-page sp bg1">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <div className="heading1">
                    <p className="title"> <span className="span">
                   
                        Contact us </span></p>
                    <h2>Not Found Your Answer? Just Ask Your Questions</h2>
                    <div className="space16"></div>
                    <p>At Hesh, we understand that navigating the complexities of SEO and digital marketing can raise numerous questions. While we have covered a wide range of topics in our FAQs and plan SEO comparisons, we recognize that every business is unique, and you might have specific queries that were not addressed.</p>

                    <div className="faq-contact-boxs">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="single-box">
                                    <div className="icon">
                                    <Image src="/assets/img/icons/contact-icon1.svg" alt="img" width={33} height={32}   />
                                    </div>
                                    <div className="heading">
                                        <h6>our Email</h6>
                                        <a href="mailto:heshmedia21@gmail.com">heshmedia21@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="single-box">
                                    <div className="icon">
                                    <Image src="/assets/img/icons/contact-icon2.svg" alt="img" width={32} height={32}   />
                                        
                                    </div>
                                    <div className="heading">
                                        <h6>Phone</h6>
                                        <a href="tel:+918360255087">+91 83602 55087</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="faq-contact-form">
                    <h4>Send Us A Message</h4>
                    <form action="#">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="single-input">
                                    <input type="text" placeholder="First Name" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="single-input">
                                    <input type="text" placeholder="Last Name" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="single-input">
                                    <input type="number" placeholder="Phone Number" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="single-input">
                                    <input type="email" placeholder="Email Address" />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="single-input">
                                    <input type="url" placeholder="Website URL" />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="single-input">
                                    <textarea rows="5" placeholder="Your Message"></textarea>
                                </div>
                                <div className="space30"></div>
                                <div className="button">
                                    <button className="theme-btn1">Start Your Digital Journey now  <span><i className="bi bi-arrow-right"></i></span></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>

  <div className="container">
    <div className="row">
        <div className="col-lg-12">
            <div className="contact-map-page">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9888.157548045152!2d74.891613!3d31.653278!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391963d54d9cd0ad%3A0xe14221f66723e485!2sHesh%20Media!5e1!3m2!1sen!2sin!4v1754369665722!5m2!1sen!2sin"  loading="lazy"></iframe>
               
              </div>
        </div>
    </div>
</div>

<div className="space100"></div>           
        </div>
    );
};

export default ContactInfo7;