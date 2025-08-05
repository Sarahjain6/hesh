import Image from "next/image";
import Link from "next/link";

const Footer1 = ({addclass,footerlogo}) => {
    return (
<div className={addclass}>
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="heading1">
            <a href="index.html" className="logo"><Image src={footerlogo} alt="img" width={160} height={56}   /></a>
            <p>Transform your social media presence with data-driven strategies and creative excellence.</p>
            <div className="form-area">
              <input type="text" placeholder="Email Address" />
              <button type="submit" className="form-btn"><i className="bi bi-arrow-right"></i></button>
            </div>
          </div>
        </div>
        <div className="col-lg col-6">
          <div className="menu-list">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/pricing">Our Portfolio</Link></li>
              <li><Link href="/blog">Team Member</Link></li>
              <li><Link href="/case">Services</Link></li>
            </ul>
          </div>
        </div>

        <div className="col-lg col-6">
          <div className="menu-list">
            <h3>Company</h3>
            <ul>
              <li><a href="#">Our Portfolio</a></li>
              <li><a href="#">Team Member</a></li>
              <li><a href="#">Pricing Plan</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Partnership</a></li>
            </ul>
          </div>
        </div>

        <div className="col-lg col-6">
          <div className="menu-list">
            <h3>Our Services</h3>
            <ul>
              <li><Link href="/service">SEO Marketing</Link></li>
              <li><Link href="/service">Content Marketing</Link></li>
              <li><Link href="/service">Digital MArketing</Link></li>
              <li><Link href="/service">Email Marketing</Link></li>
              <li><Link href="/service">Marketing Strategy</Link></li>
            </ul>
          </div>
        </div>

        <div className="col-lg col-6">
          <div className="menu-list contact-list">
            <h3>Contact Us</h3>
            <div className="contact-box">
              <div className="icon">
              <Image src="/assets/img/icons/footer-contact-icon1.svg" alt="img" width={24} height={24}   />
              </div>
              <div className="pera">
                <a href="tel:+918360255087">+91 83602 55087</a>
              </div>
            </div>

            <div className="contact-box">
              <div className="icon">
              <Image src="/assets/img/icons/footer-contact-icon2.svg" alt="img" width={24} height={24}   />
              </div>
              <div className="pera">
                <a href="#"> Amritsar, Punjab 143001</a>
              </div>
            </div>

            <div className="contact-box">
              <div className="icon">
              <Image src="/assets/img/icons/footer-contact-icon3.svg" alt="img" width={24} height={24}   />
              </div>
              <div className="pera">
                <a href="mailto:heshmedia21@gmail.com">heshmedia21@gmail.com</a>
              </div>
            </div>

            

          </div>
        </div>

      </div>

      <div className="space40"></div>
      <div className="footer-border"></div>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="coppyright">
            <p>Copyright 2025 hesh. |  All Right Reserved</p>
          </div>
        </div>
        <div className="col-lg-6">
          <ul className="footer-social">
                <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                <li><a href="https://www.instagram.com/heshmedia.in"><i className="bi bi-instagram"></i></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=61570841835736&mibextid=wwXIfr&rdid=aaiLPgQMMkcSRNEa&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15kH8JHZMZ%2F%3Fmibextid%3DwwXIfr#"><i className="bi bi-facebook"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="space20"></div>
   </div>

    );
};

export default Footer1;