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
  <Link href="#" onClick={() => setMobileToggle(false)}>
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
              <Link href="#" onClick={() => setMobileToggle(false)}>
                Services 1
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setMobileToggle(false)}>
                Services 2
              </Link>
            </li>            
            <li>
              <Link href="#" onClick={() => setMobileToggle(false)}>
                Service 3
              </Link>
            </li>
          </ul>
        </DropDown>

      </li>      
      <li>
        <Link href="#" onClick={() => setMobileToggle(false)}>
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
