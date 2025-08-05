import Image from "next/image";

const ContactInfo1 = () => {
    return (
<div className="contact1 sp">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 m-auto text-center">
          <div className="heading1">
           <p className="title" data-aos="fade-left" data-aos-duration="800"> <span className="span">
           <Image src="/assets/img/icons/span1.svg" alt="img" width={21} height={20}   />
             Contact us </span></p>
           <h2 className="text-anime-style-3">Unlock the Power of SEO & Digital Marketing Today</h2>
          </div>
          <div className="space30"></div>

          <div className="form-area-all" data-aos="zoom-out" data-aos-duration="900">

            <div className="form-content">
              <form action="#">
                <div className="single-input">
                  <label>First Name*</label>
                  <input type="text" placeholder="Your Name" />
                  <span className="icon"><Image src="/assets/img/icons/contact1-input1.svg" alt="img" width={20} height={20}   /></span>
                </div>
                <div className="single-input">
                  <label>Email Address*</label>
                  <input type="text" placeholder="Your Email" />
                  <span className="icon"><Image src="/assets/img/icons/contact1-input2.svg" alt="img" width={20} height={20}   /></span>
                </div>
                <div className="single-input">
                  <label>Website URL*</label>
                  <input type="text" placeholder="Yourwebsite.com" />
                  <span className="icon"><Image src="/assets/img/icons/contact1-input3.svg" alt="img" width={18} height={18}   /></span>
                </div>

                <div className="form-btn">
                  <button type="submit" className="theme-btn1">Start Your Free Audit <span><i className="bi bi-arrow-right"></i></span></button>
                </div>

              </form>
            </div>

            <div className="shape1">
            <Image src="/assets/img/shapes/contact1-shape1.png" alt="img" width={204} height={204}   />
            </div>
            <div className="shape2">
            <Image src="/assets/img/shapes/contact1-shape2.png" alt="img" width={190} height={190}   />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="contact1-box">
            <div className="icon">
            <Image src="/assets/img/icons/contact1-icon1.svg" alt="img" width={25} height={32}   />
            </div>
            <div className="heading">
              <h4>Address</h4>
              <a href="#">Prem Complex, Circular Rd, Medical Enclave, Amritsar, Punjab 143001</a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="contact1-box">
            <div className="icon">
            <Image src="/assets/img/icons/contact1-icon2.svg" alt="img" width={32} height={32}   />
            </div>
            <div className="heading">
              <h4>Email</h4>
              <a href="mailto:heshmedia21@gmail.com">heshmedia21@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="contact1-box">
            <div className="icon">
            <Image src="/assets/img/icons/contact1-icon3.svg" alt="img" width={32} height={32}   />
            </div>
            <div className="heading">
              <h4>Phone</h4>
              <a href="tel:+918360255087">+91 83602 55087</a>
            </div>
          </div>
        </div>

      </div>
    </div>
   </div>

    );
};

export default ContactInfo1;