import { useState, useEffect } from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router';
import HamburgerIcon from './icons/hamburgerIcon';
import CloseIcon from './icons/CloseIcon';
import BikurenIcon from './icons/BikurenIcon';
import CartIcon from './icons/CartIcon';
import ProfileIcon from './icons/ProfileIcon';

function Header({ cart }){
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
                      <CartIcon/>
                      <span className= {cart.length !== 0 ? 'count-cart' : `count-cart hide`}>
                        {cart.length !== 0 ? `${cart.length}` : ''}
                      </span>
                    </NavLink>
                    <NavLink onClick={() => {
                        window.scroll(0, 0);
                    }} to="/profile">
                      <ProfileIcon/>
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