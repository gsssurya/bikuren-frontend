import { useState, useEffect } from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router';
import HamburgerIcon from './icons/hamburgerIcon';
import CloseIcon from './icons/CloseIcon';
import BikurenIcon from './icons/BikurenIcon';

function Header(){
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (window.matchMedia("(max-width: 875px)").matches) {
            document.body.style.paddingTop = open
            ? "264px"
            : "";
        }

    return () => {
        document.body.style.paddingTop = "";
    };
    }, [open]);

    function setOpenMenu() {
        setOpen(open => !open);
    }

    return (
          <header className='all'>
              <div className="header all">
                <div className="left">
                    <NavLink onClick={() => {
                        window.scroll(0, 0);
                    }} className="logo" to="/">
                      <BikurenIcon/>
                    </NavLink>
                    <NavLink onClick={() => {
                        window.scroll(0, 0);
                    }} to="/" className="text-menu">Catalog</NavLink>
                    <NavLink onClick={() => {
                        window.scroll(0, 0);
                    }} to="/myBookings" className="text-menu">My Bookings</NavLink>
                    <NavLink onClick={() => {
                        window.scroll(0, 0);
                    }} to="/contact" className="text-menu">Contacts</NavLink>
                </div>
                <div className="right">
                    <NavLink onClick={() => {
                        window.scroll(0, 0);
                    }} to="/checkout">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.66683 18.3334C7.12707 18.3334 7.50016 17.9603 7.50016 17.5001C7.50016 17.0398 7.12707 16.6667 6.66683 16.6667C6.20659 16.6667 5.8335 17.0398 5.8335 17.5001C5.8335 17.9603 6.20659 18.3334 6.66683 18.3334Z" stroke="#364153" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15.8333 18.3334C16.2936 18.3334 16.6667 17.9603 16.6667 17.5001C16.6667 17.0398 16.2936 16.6667 15.8333 16.6667C15.3731 16.6667 15 17.0398 15 17.5001C15 17.9603 15.3731 18.3334 15.8333 18.3334Z" stroke="#364153" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1.7085 1.70825H3.37516L5.59183 12.0583C5.67314 12.4373 5.88405 12.7761 6.18826 13.0165C6.49246 13.2568 6.87092 13.3835 7.2585 13.3749H15.4085C15.7878 13.3743 16.1556 13.2443 16.451 13.0064C16.7465 12.7686 16.9519 12.437 17.0335 12.0666L18.4085 5.87492H4.26683" stroke="#364153" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </NavLink>
                    <NavLink onClick={() => {
                        window.scroll(0, 0);
                    }} to="/profile">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8332 17.5V15.8333C15.8332 14.9493 15.482 14.1014 14.8569 13.4763C14.2317 12.8512 13.3839 12.5 12.4998 12.5H7.49984C6.61578 12.5 5.76794 12.8512 5.14281 13.4763C4.51769 14.1014 4.1665 14.9493 4.1665 15.8333V17.5" stroke="#364153" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.99984 9.16667C11.8408 9.16667 13.3332 7.67428 13.3332 5.83333C13.3332 3.99238 11.8408 2.5 9.99984 2.5C8.15889 2.5 6.6665 3.99238 6.6665 5.83333C6.6665 7.67428 8.15889 9.16667 9.99984 9.16667Z" stroke="#364153" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </NavLink>
        
                    <Link className="hamburger-icon" onClick={setOpenMenu}>
                        { open ? <CloseIcon/> : <HamburgerIcon/>}
                    </Link>
                </div>
              </div>
        
              <div className={ open ? "mobile-menu show" : "mobile-menu" }>
                  <Link onClick={() => {
                    setOpenMenu();
                    window.scroll(0,0);
                  }} to="/" className="text-menu">Catalog</Link>
                  <Link onClick={() => {
                    setOpenMenu();
                    window.scroll(0,0);
                  }} to="/myBookings" className="text-menu">My Bookings</Link>
                  <Link onClick={() => {
                    setOpenMenu();
                    window.scroll(0,0);
                  }} to="/contact" className="text-menu">Contacts</Link>
              </div>
            </header>
    )
}

export default Header;