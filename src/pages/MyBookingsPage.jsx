import varioImage from '../../public/images/vario.png'
import Footer from '../components/Footer';
import Header from '../components/Header';
import './MyBookingsPage.css'

function MyBookingsPage({cart}) {
    return (
        <>
            <Header cart={cart}/>
            <main className='my-bookings'>
                <div className="container">
                    <div className="text">
                        <h1>My Bookings</h1>
                        <p>Lorelament an enf an efn amn ennf amn ennf man ef</p>
                    </div>

                    <div className="menu-bookings-container">
                        <div className="selected">
                            Aktif & Akan Datang (4)
                        </div>
                        <div>
                            Selesai (2)
                        </div>
                    </div>
                    
                    <div className="booking-container">
                        <p className="id-booking">ID Booking: #000004</p>
                        <div className="bike-detail-container">
                            <div className="detail-bike">
                                <img src={varioImage} alt=""/>
                                <div className="bike-info">
                                    <h1>Vario</h1>
                                    <p>DK 1234 DBK</p>
                                    <div className="ongoing">
                                        <div className="point"></div>
                                        <p className="status">On going</p>
                                    </div>
                                </div>
                            </div>
                            <div className="edit-box">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.1161 4.54126C14.4686 4.18888 14.6666 3.71091 14.6667 3.2125C14.6668 2.71409 14.4688 2.23607 14.1165 1.8836C13.7641 1.53112 13.2861 1.33307 12.7877 1.33301C12.2893 1.33295 11.8113 1.53088 11.4588 1.88326L2.56145 10.7826C2.40667 10.9369 2.29219 11.127 2.22812 11.3359L1.34745 14.2373C1.33022 14.2949 1.32892 14.3562 1.34369 14.4145C1.35845 14.4728 1.38873 14.5261 1.43132 14.5686C1.4739 14.6111 1.5272 14.6413 1.58556 14.656C1.64392 14.6707 1.70516 14.6693 1.76279 14.6519L4.66479 13.7719C4.87357 13.7084 5.06357 13.5947 5.21812 13.4406L14.1161 4.54126Z" stroke="#FF6900" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p>Edit Booking</p>
                            </div>
                        </div>
                        <div className="booking-detail-container">
                            <div className="rent-date-container">
                                <div className="date-box">
                                    <h1>Tanggal Sewa</h1>
                                    <div>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.6665 1.66669V5.00002" stroke="#FF6900" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M13.3335 1.66669V5.00002" stroke="#FF6900" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M15.8333 3.33331H4.16667C3.24619 3.33331 2.5 4.07951 2.5 4.99998V16.6666C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6666V4.99998C17.5 4.07951 16.7538 3.33331 15.8333 3.33331Z" stroke="#FF6900" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M2.5 8.33331H17.5" stroke="#FF6900" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                
                                        <p>
                                            24 Januari 2026
                                        </p>
                                    </div>
                                </div>
                                <div className="date-box">
                                    <h1>Tanggal Selesai</h1>
                                    <div>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.6665 1.66669V5.00002" stroke="#FF6900" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M13.3335 1.66669V5.00002" stroke="#FF6900" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M15.8333 3.33331H4.16667C3.24619 3.33331 2.5 4.07951 2.5 4.99998V16.6666C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6666V4.99998C17.5 4.07951 16.7538 3.33331 15.8333 3.33331Z" stroke="#FF6900" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M2.5 8.33331H17.5" stroke="#FF6900" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                
                                        <p>
                                            24 Januari 2026
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="summary-container">
                                <div className="payment-box">
                                    <h1>Metode Pembayaran</h1>
                                    <div>
                                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 16C0 7.16344 7.16344 0 16 0H20C28.8366 0 36 7.16344 36 16V20C36 28.8366 28.8366 36 20 36H16C7.16344 36 0 28.8366 0 20V16Z" fill="#FFEDD4"/>
                                            <path d="M24.6665 13H11.3332C10.4127 13 9.6665 13.7462 9.6665 14.6667V21.3333C9.6665 22.2538 10.4127 23 11.3332 23H24.6665C25.587 23 26.3332 22.2538 26.3332 21.3333V14.6667C26.3332 13.7462 25.587 13 24.6665 13Z" stroke="#FF6900" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M18.0002 19.6666C18.9206 19.6666 19.6668 18.9205 19.6668 18C19.6668 17.0795 18.9206 16.3333 18.0002 16.3333C17.0797 16.3333 16.3335 17.0795 16.3335 18C16.3335 18.9205 17.0797 19.6666 18.0002 19.6666Z" stroke="#FF6900" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M13 18H13.0083M23 18H23.0083" stroke="#FF6900" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <p>
                                            QRIS
                                        </p>
                                    </div>
                                </div>

                                <div className="total-box">
                                    <div>
                                        <p className="title">Harga per hari</p>

                                        <p>IDR 150.000</p>
                                    </div>
                                    <div>
                                        <p className="title">Durasi</p>
                                        <p>3 hari</p>
                                    </div>
                                    <div className="total-price-box">
                                        <p className="total">Total</p>
                                        <p className="total-price">IDR 450.000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer/>
        </>
    )
}

export default MyBookingsPage;