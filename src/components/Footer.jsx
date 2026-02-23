import './Footer.css'
import { Link, NavLink } from 'react-router';
import BikurenIcon from './icons/BikurenIcon';

function Footer(){
    return (
         <footer>
            <div className="footer-container">
                <div className="top">
                <div className="left">
                    <Link className="logo" to="/">
                        <BikurenIcon/>
                    </Link>
                    <p>Providing the best riding experience across Bali. Trusted by thousands of international travelers every month.</p>
                    <div className="sosmed-container">
                    <a href="">
                       <svg viewBox="0 0 24 24" width="20" height="20" stroke="#000000" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>    
                    </a>
                    <a href="">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </a>
                    </div>
                </div>
                <div className="middle">
                    <h1>Quick Links</h1>
                    <div>
                    <Link onClick={() => {
                        window.scroll(0, 0);
                    }} to="/">Catalog</Link>
                    <Link  onClick={() => {
                        window.scroll(0, 0);
                    }} to="/myBookings">My Bookings</Link>
                    <Link  onClick={() => {
                        window.scroll(0, 0);
                    }} to="/contact">Contacts</Link>
                    </div>
                </div>
                <div className="right">
                    <h1>Location</h1>
                    <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.6668 8.33329C16.6668 12.4941 12.051 16.8275 10.501 18.1658C10.3566 18.2744 10.1808 18.3331 10.0002 18.3331C9.8195 18.3331 9.64373 18.2744 9.49933 18.1658C7.94933 16.8275 3.3335 12.4941 3.3335 8.33329C3.3335 6.56518 4.03588 4.86949 5.28612 3.61925C6.53636 2.36901 8.23205 1.66663 10.0002 1.66663C11.7683 1.66663 13.464 2.36901 14.7142 3.61925C15.9645 4.86949 16.6668 6.56518 16.6668 8.33329Z" stroke="#FF6900" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 10.8334C11.3807 10.8334 12.5 9.71409 12.5 8.33337C12.5 6.95266 11.3807 5.83337 10 5.83337C8.61929 5.83337 7.5 6.95266 7.5 8.33337C7.5 9.71409 8.61929 10.8334 10 10.8334Z" stroke="#FF6900" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p>
                        Jl. Canggu No. 88, Badung, Bali, Indonesia
                    </p>

                    </div>
                    <div className="maps-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.6280406448664!2d115.1375748760306!3d-8.63166058774932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2394d0369303d%3A0x5e7b6d6bd4e36bb7!2sRent%20bike%20BIKUREN!5e0!3m2!1sid!2sid!4v1769356455620!5m2!1sid!2sid"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
                </div>
                <div className="bottom">
                <div className="claim">
                    <p>Created by <a href="https://github.com/gsssurya" target='_blank'><span>GusSurya</span></a></p>
                    <p className="owner">Owned by <span>Krisna W.</span></p>
                </div>
                <p className="copyright">@2026 BIKUREN Digital. Alright reserved.</p>
                </div>
            </div>
            </footer>
    )
}

export default Footer;