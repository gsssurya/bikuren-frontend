import './CatalogPage.css'
import bikeDefaultImage from '../../public/images/default-bike.png'
import CatalogHeader from '../components/CatalogHeader';
import Footer from '../components/Footer';
import api from '../utils/api.util';
import { useEffect, useState } from 'react';
import formatMoney from '../utils/money.util';
import getUsdIdr from '../utils/usdIdr';
import sortedBike from '../utils/sortedBike.util';
import formatDate from '../utils/formatDate.util';
import ClockIcon from '../components/icons/ClockIcon';
import RepairIcon from '../components/icons/RepairIcon';
import CartIcon from '../components/icons/CartIcon';
import BikeSkeleton from '../components/BikeSkeleton';
import { useNavigate } from 'react-router';

function CatalogPage({bikes, loading, currency, setCurrency}){
    const [keywords, setKeywords] = useState('');
    const [amountBike, setAmountBike] = useState(8);
    
    const [rentals, setRentals] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getUsdIdr()
    }, [])

    useEffect(() => {
        api.get(`/rentals?expand=detail`)
        .then((respons) => {
            setRentals(respons.data)
        });
    }, [])

    function moreOrLessBike(){
        if(amountBike >= bikes.length){
            setAmountBike(amountBike - 8)
        } else {
            setAmountBike(amountBike + 8)
        }
    }

    function searchBikes(key){
       setKeywords(key);
    }

    function saveCurrency(pair){
        localStorage.setItem('currency', pair);
    }

    function bikeButtonEl(status, rentals, bikeId) {
        if(status == 'rented'){
            const findRental = rentals.find(rental =>
                rental.status === "ongoing" &&
                rental.detail.some(d => d.bike_id === Number(bikeId) )
            );
            const finishDate = findRental
                ? findRental.detail.find(d => d.bike_id === Number(bikeId))
                : null;

            if(finishDate){
                return  (
                    <>
                        Available at
                        <p className='finish-rental-date'>
                           {formatDate(finishDate.finish_at)} 
                        </p>
                    </>
                )
            } else {
                return 'Rented'
            }
        } else if ( status == 'available'){
            return 'Rent now';
        } else {
            return 'Under maintenance'
        }
    }

    function pickIconBike(status){
        if(status == 'available'){
            return <CartIcon/>
        } else if (status == 'rented'){
            return <ClockIcon/>
        } else {
            return <RepairIcon/>
        }
    }


    const sortedBikes = sortedBike(bikes, keywords);

    return (
        <>
            <CatalogHeader searchBikes={searchBikes}/>
            <main className='catalog'>
            <div className="list-bike-container">
                <div className="title-container">
                <div className="text">
                    <h1>Find Your Perfect Ride</h1>
                    <p>Explore the city with comfort, style, and reliable bikes made for every journey.</p>
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
                    
                    { !loading ? sortedBikes.length > 0 ? sortedBikes.slice(0, amountBike).map((bike) => {
                        return (
                            <div className={sortedBikes.length <= 4 ? 'bike-card-container only-one' : 'bike-card-container'} key={bike.id}>
                                <img src={bike.image ? `${import.meta.env.VITE_API_URL}/${bike.image}` : bikeDefaultImage} className={ bike.status === 'available' ? '' : 'not-ready'} alt="bike-image"/>
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
                                <button className={bike.status} onClick={() => {
                                    if(bike.status === 'available'){
                                        navigate(`/checkout/${bike.id}`, {
                                            state: {
                                                bike: bike
                                            }
                                        });
                                        window.scrollTo(0, 0); 
                                    } 
                                }}>
                                    { bikeButtonEl(bike.status, rentals, bike.id) }
                                </button>
                                </div>

                                <div className={`bike-status ${bike.status}`}>
                                <div className="point"></div>
                                <p>
                                    { bike.status.toUpperCase() }
                                </p>
                                </div>

                                <div className={ bike.status != 'available' ? 'cart-container not-allowed' : 'cart-container' }>
                                    {pickIconBike(bike.status)}
                                </div>
                            </div>
                        )
                    }) : <p className='bike-not-found'>We couldn’t find any models named '<span>{keywords}</span>'.</p> : <BikeSkeleton/> }
                </div>
                <div className='show-more-box'>
                    <p className="show-more-bike" onClick={moreOrLessBike}>
                        {
                            sortedBikes.length <= 8 ? '' :
                            amountBike >= bikes.length ? "Show less" : "Show more"
                        }
                    </p>
                </div>
            </div>
            </main>
            <Footer/>
        </>
    )
}

export default CatalogPage;