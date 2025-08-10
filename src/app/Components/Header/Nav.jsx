import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
 <li>
  <Link href="/" onClick={() => setMobileToggle(false)}>
    Home
  </Link>
</li>


           
      <li>
  <Link href="/about" onClick={() => setMobileToggle(false)}>
    About Us
  </Link>
</li>
     
      <li className="menu-item-has-children">
        <Link href="#" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/service/seo" onClick={() => setMobileToggle(false)}>
                Google Seo


              </Link>
            </li>
            <li>
              <Link href="/service/shoots" onClick={() => setMobileToggle(false)}>
                Professional Camera Shoots

              </Link>
            </li>
            <li>
              <Link href="/service/graphic" onClick={() => setMobileToggle(false)}>
                Graphic Designing

              </Link>
            </li>
            <li>
              <Link href="/service/webdev" onClick={() => setMobileToggle(false)}>
                Web Development

              </Link>
            </li>
            <li>
              <Link href="/service/video" onClick={() => setMobileToggle(false)}>
                Video Editing

              </Link>
            </li>
                        
            <li>
              <Link href="/service/email" onClick={() => setMobileToggle(false)}>
                Email and Whatsapp Marketing

              </Link>
            </li>
            <li>
              <Link href="/service/performance" onClick={() => setMobileToggle(false)}>
                Performance Marketing

              </Link>
            </li>
          </ul>
        </DropDown>

      </li>      
      <li>
        <Link href="/portfolio/portfolio-full" onClick={() => setMobileToggle(false)}>
          Portfolio
        </Link>
      </li>
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
