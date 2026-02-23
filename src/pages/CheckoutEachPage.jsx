import './CheckoutEachPage.css'
import '../components/Header.css'
import { useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';
import bikeDefaultImage from '../../public/images/default-bike.png'
import formatMoney from '../utils/money.util';
import { Link } from 'react-router';

function CheckoutEachPage({ bikes, currency }){
    const navigate = useNavigate();
    const { bikeId } = useParams();
    const bike = bikes.find(
        (b) => String(b.id) === bikeId
    );

    useEffect(() => {
        if (!bike) return;

        if (bike.status !== "available") {
            navigate('/');
        }
    }, [bike, navigate]);

    function goingBack(){
        navigate(-1);
    }
    
    if (!bike) return null;

    return (
        <>
            <nav className="each">
                <div className="back-icon">
                    <Link onClick={goingBack}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 19L5 12L12 5" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19 12H5" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
                <div className="text-box">
                    <h1>
                        Checkout Rental
                    </h1>
                    <p>
                       Complete your rental details
                    </p>
                </div>
            </nav>

            <main className='checkout each'>
                <div className="container">
                    <div className="checkout-container each">
                        <div className="left">
                            <div className="bikes-list-box">
                                <h1 className='title'>Kendaraan dipilih</h1>
                                <div className="bike-detail-box">
                                    <img src={bike.image ? `${import.meta.env.VITE_API_URL}/${bike.image}` : bikeDefaultImage} alt=""/>
                                    <div>
                                        <p className="plat-number">#{bike.id}</p>
                                        <h1>{bike.name}</h1>
                                        <h2>{formatMoney(bike.price, currency)}/day</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="rental-details-box">
                                <h1 className='title'>Detail rental</h1>
                                <div className="date-box">
                                    <p>Tanggal sewa</p>
                                    <div>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.66699 1.66675V5.00008" stroke="#99A1AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M13.333 1.66675V5.00008" stroke="#99A1AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M15.8333 3.33325H4.16667C3.24619 3.33325 2.5 4.07944 2.5 4.99992V16.6666C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6666V4.99992C17.5 4.07944 16.7538 3.33325 15.8333 3.33325Z" stroke="#99A1AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M2.5 8.33325H17.5" stroke="#99A1AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <input type="date" name="" id=""/>
                                    </div>
                                </div>
                                <div className="date-box">
                                    <p>Tanggal selesai</p>
                                    <div>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.66699 1.66675V5.00008" stroke="#99A1AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M13.333 1.66675V5.00008" stroke="#99A1AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M15.8333 3.33325H4.16667C3.24619 3.33325 2.5 4.07944 2.5 4.99992V16.6666C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6666V4.99992C17.5 4.07944 16.7538 3.33325 15.8333 3.33325Z" stroke="#99A1AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M2.5 8.33325H17.5" stroke="#99A1AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <input type="date" name="" id=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <h1 className='title'>Metode pembayaran</h1>
                            <div className="payment-method-box">
                                <div className="payment-icon">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.166 1.6665H5.83268C4.91221 1.6665 4.16602 2.4127 4.16602 3.33317V16.6665C4.16602 17.587 4.91221 18.3332 5.83268 18.3332H14.166C15.0865 18.3332 15.8327 17.587 15.8327 16.6665V3.33317C15.8327 2.4127 15.0865 1.6665 14.166 1.6665Z" stroke="#4A5565" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M10 15H10.0083" stroke="#4A5565" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div>
                                    <h1>
                                        QRIS
                                    </h1>
                                    <p>
                                        Bayar dengan QRIS
                                    </p>
                                </div>
                                <div className="picked">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_160_87)">
                                    <path d="M18.1669 8.33357C18.5474 10.2013 18.2762 12.1431 17.3984 13.8351C16.5206 15.527 15.0893 16.8669 13.3431 17.6313C11.597 18.3957 9.64154 18.5384 7.80293 18.0355C5.96433 17.5327 4.35368 16.4147 3.23958 14.8681C2.12548 13.3214 1.57529 11.4396 1.68074 9.53639C1.78619 7.63318 2.54092 5.82364 3.81906 4.40954C5.0972 2.99545 6.8215 2.06226 8.7044 1.76561C10.5873 1.46897 12.515 1.82679 14.166 2.7794" stroke="#FF6900" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M7.5 9.16683L10 11.6668L18.3333 3.3335" stroke="#FF6900" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_160_87">
                                    <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                </div>
                            </div>
                            <div className="payment-method-box checked">
                                <div className="payment-icon">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.667 4.1665H3.33366C2.41318 4.1665 1.66699 4.9127 1.66699 5.83317V14.1665C1.66699 15.087 2.41318 15.8332 3.33366 15.8332H16.667C17.5875 15.8332 18.3337 15.087 18.3337 14.1665V5.83317C18.3337 4.9127 17.5875 4.1665 16.667 4.1665Z" stroke="#4A5565" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M1.66699 8.3335H18.3337" stroke="#4A5565" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>

                                </div>
                                <div>
                                    <h1>
                                        COD
                                    </h1>
                                    <p>
                                        Bayar di Tempat
                                    </p>
                                </div>
                                <div className="picked">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_160_87)">
                                    <path d="M18.1669 8.33357C18.5474 10.2013 18.2762 12.1431 17.3984 13.8351C16.5206 15.527 15.0893 16.8669 13.3431 17.6313C11.597 18.3957 9.64154 18.5384 7.80293 18.0355C5.96433 17.5327 4.35368 16.4147 3.23958 14.8681C2.12548 13.3214 1.57529 11.4396 1.68074 9.53639C1.78619 7.63318 2.54092 5.82364 3.81906 4.40954C5.0972 2.99545 6.8215 2.06226 8.7044 1.76561C10.5873 1.46897 12.515 1.82679 14.166 2.7794" stroke="#FF6900" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M7.5 9.16683L10 11.6668L18.3333 3.3335" stroke="#FF6900" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_160_87">
                                    <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                </div>
                            </div>
                            
                            <div className="summary-box">

                                <div>
                                    <h1>
                                        Durasi Sewa
                                    </h1>
                                    <p>
                                        -
                                    </p>
                                </div>

                                <div>
                                    <h1>
                                        Subtotal/day
                                    </h1>
                                    <p>
                                        IDR 0
                                    </p>
                                </div>

                                <div className="total-box">
                                    <h1>
                                        Total
                                    </h1>
                                    <p>
                                        IDR 0
                                    </p>
                                </div>

                                <button className="rental-button">
                                    Konfirmasi sewa
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default CheckoutEachPage;