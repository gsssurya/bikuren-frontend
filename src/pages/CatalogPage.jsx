import './CatalogPage.css'
import CatalogHeader from '../components/CatalogHeader';
import Footer from '../components/Footer';
import api from '../utils/api.util';
import { useEffect, useState } from 'react';
import formatMoney from '../utils/money.util';
import getUsdIdr from '../utils/money/usdIdr';

function CatalogPage(){
    const [bikes, setBikes] = useState([]);
    const [amountBike, setAmountBike] = useState(8);
    const [currency, setCurrency] = useState(localStorage.getItem('currency') || 'IDR');

    function moreOrLessBike(){
        if(amountBike >= bikes.length){
            setAmountBike(amountBike - 8)
        } else {
            setAmountBike(amountBike + 8)
        }
    }

    function saveCurrency(pair){
        localStorage.setItem('currency', pair);
    }

    useEffect(() => {
        getUsdIdr()
    }, [])

    useEffect(() => {
        api.get('/bikes')
        .then((respons) => {
            setBikes(respons.data)
        });
    }, [])
    

    return (
        <>
            <CatalogHeader/>
            <main className='catalog'>
            <div className="list-bike-container">
                <div className="title-container">
                <div className="text">
                    <h1>Find Your Perfect Ride</h1>
                    <p>Lorelament an enf an efn amn ennf amn ennf man ef</p>
                </div>
                <div className="currency">
                    <p 
                        className={
                            currency == 'IDR' ? 'selected' : ''
                        }
                        onClick={ () => { setCurrency('IDR'), saveCurrency('IDR') }}
                    >
                        IDR
                    </p>

                    <p 
                        className={
                            currency == 'USD' ? 'selected' : ''
                        }
                        onClick={ () => { setCurrency('USD'), saveCurrency('USD')}}
                    >
                            USD
                    </p>
                </div>
                </div>
                <div className="filter-container">
                <div className="bubble-filter selected">
                    🏍️ All Bikes
                </div>
                <div className="bubble-filter">
                    🛵 Scooters
                </div>
                <div className="bubble-filter">
                    🏁 Sport Bikes
                </div>
                </div>
                <div className="list-bikes">
                    { bikes.slice(0, amountBike).map((bike) => {
                        return (
                            <div className="bike-card-container" key={bike.id}>
                                <img src={`${import.meta.env.VITE_API_URL}/${bike.image}`} alt="bike-image"/>
                                <div className="description-container">
                                <div>
                                    <p className="bike-name">
                                        { bike.name }
                                    </p>
                                    <p className="bike-number">
                                        { bike.plate_number }
                                    </p>
                                </div>
                                <div>
                                    <p className="rent-period">PER DAY</p>
                                    <p className="bike-price">
                                        { formatMoney(bike.price, currency) }
                                    </p>
                                </div>
                                <button>Rent Now</button>
                                </div>

                                <div className={`bike-status ${bike.status}`}>
                                <div className="point"></div>
                                <p>
                                    { bike.status.toUpperCase() }
                                </p>
                                </div>

                                <div className="cart-container">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.66659 18.3334C7.12682 18.3334 7.49992 17.9603 7.49992 17.5001C7.49992 17.0398 7.12682 16.6667 6.66659 16.6667C6.20635 16.6667 5.83325 17.0398 5.83325 17.5001C5.83325 17.9603 6.20635 18.3334 6.66659 18.3334Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15.8333 18.3334C16.2936 18.3334 16.6667 17.9603 16.6667 17.5001C16.6667 17.0398 16.2936 16.6667 15.8333 16.6667C15.3731 16.6667 15 17.0398 15 17.5001C15 17.9603 15.3731 18.3334 15.8333 18.3334Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M1.70825 1.70825H3.37492L5.59159 12.0583C5.6729 12.4373 5.88381 12.7761 6.18801 13.0165C6.49221 13.2568 6.87067 13.3835 7.25825 13.3749H15.4083C15.7876 13.3743 16.1553 13.2443 16.4508 13.0064C16.7462 12.7686 16.9517 12.437 17.0333 12.0666L18.4083 5.87492H4.26659" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <p className="show-more-bike" onClick={moreOrLessBike}>
                    {
                        amountBike >= bikes.length ? "Show less" : "Show more"
                    }
                </p>
            </div>
            </main>
            <Footer/>
        </>
    )
}

export default CatalogPage;