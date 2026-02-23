import { useState, useEffect } from 'react';
import './CatalogHeader.css'
import { Link, NavLink } from 'react-router';
import HamburgerIcon from './icons/hamburgerIcon';
import CloseIcon from './icons/CloseIcon';
import CartIcon from './icons/CartIcon';
import BikurenIcon from './icons/BikurenIcon';
import ProfileIcon from './icons/ProfileIcon';

function Header({ searchBikes, cart }){
    const [open, setOpen] = useState(false);
  
    useEffect(() => {
        if (window.matchMedia("(max-width: 875px)").matches) {
            document.body.style.paddingTop = open
            ? "305.617px"
            : "137.617px";
        }

    return () => {
        document.body.style.paddingTop = "";
    };
    }, [open]);

    function setOpenMenu() {
        setOpen(open => !open);
    }

    return (
          <header className='catalog'>
              <div className="header catalog">
                <div className="left">
                    <NavLink  onClick={() => {
                        window.scroll(0, 0);
                    }} className="logo" to="#">
                      <BikurenIcon/>
                    </NavLink>
                    <NavLink  onClick={() => {
                        window.scroll(0, 0);
                    }} to="/" className="text-menu">Catalog</NavLink>
                    <NavLink  onClick={() => {
                        window.scroll(0, 0);
                    }} to="/myBookings" className="text-menu">My Bookings</NavLink>
                    <NavLink  onClick={() => {
                        window.scroll(0, 0);
                    }} to="/contact" className="text-menu">Contacts</NavLink>
                </div>
                <div className="middle">
                    <div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5 17.5L13.8833 13.8833" stroke="#99A1AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#99A1AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                </div>
                    <input 
                      type="text" 
                      placeholder="Search models..." 
                      onChange={(e) => {
                        if (window.innerWidth > 875) {
                          searchBikes(e.target.value);
                          window.scrollTo(0, 0); 
                        }
                        
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.target.blur();
                          window.scrollTo(0, 0); 
                          searchBikes(e.target.value);
                        }
                      }}
                      
                    />
                </div>
                <div className="right">
                    <NavLink  onClick={() => {
                        window.scroll(0, 0);
                    }} to="/checkout">
                      <CartIcon/>
                      <span className= {cart.length !== 0 ? 'count-cart' : `count-cart hide`}>
                        {cart.length !== 0 ? `${cart.length}` : ''}
                      </span>
                    </NavLink>
                    <NavLink  onClick={() => {
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