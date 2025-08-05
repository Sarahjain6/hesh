"use client"
import { useEffect, useState } from 'react';
import Nav from './Nav';
import Link from 'next/link';
import Image from 'next/image';

export default function Header1({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState('');
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs-gescout_sticky'); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky'); // Scrolling up
      } else {
        setIsSticky('');
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, hasMounted]);

  const headerClass = `cs_site_header header_style_2 cs_style_1 ${
    variant || ''
  } cs_sticky_header cs_site_header_full_width ${
    mobileToggle ? 'cs_mobile_toggle_active' : ''
  } ${hasMounted ? isSticky : ''}`; // ⬅️ Only add scroll class on client

  return (
    <header className={headerClass}>
      <div className="cs_main_header">
        <div className="container">
          <div className="cs_main_header_in">
            <div className="cs_main_header_left">
              <Link href="/" className="cs_site_branding">
                <Image
                  src="/assets/img/logo/header-logo1.png"
                  alt="Logo"
                  width={130}
                  height={46}
                />
              </Link>
            </div>
            <div className="cs_main_header_center">
              <div className="cs_nav cs_primary_font fw-medium">
                <span
                  className={
                    mobileToggle
                      ? 'cs-munu_toggle cs_teggle_active'
                      : 'cs-munu_toggle'
                  }
                  onClick={() => setMobileToggle(!mobileToggle)}
                >
                  <span></span>
                </span>
                <Nav setMobileToggle={setMobileToggle} />
              </div>
            </div>
            <div className="cs_main_header_right">
              <div className="header-btn">
                <div className="button">
                  <Link href="/contact" className="theme-btn1">
                    Get In Touch <span><i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
