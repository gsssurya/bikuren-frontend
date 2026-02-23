import { useState, useEffect } from 'react';
import './CatalogHeader.css'
import { Link, NavLink } from 'react-router';
import HamburgerIcon from './icons/hamburgerIcon';
import CloseIcon from './icons/CloseIcon';
import CartIcon from './icons/CartIcon';
import BikurenIcon from './icons/BikurenIcon';

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