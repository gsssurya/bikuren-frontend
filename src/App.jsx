import { Routes, Route } from 'react-router'
import { useState, useEffect } from 'react'
import './App.css'
import CatalogPage from './pages/CatalogPage'
import MyBookingsPage from './pages/MyBookingsPage'
import CheckoutPage from './pages/CheckoutPage'
import CheckoutEachPage from './pages/CheckoutEachPage'
import api from './utils/api.util'

function App() {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState(localStorage.getItem('currency') || 'IDR');

  useEffect(() => {
      const fetchBikes = async () => {
          try {
              setLoading(true);
              const response = await api.get("/bikes");
              setBikes(response.data);
              setLoading(false);
          } catch (error) {
              console.error(error);
          }
      };

      fetchBikes();
  }, [])
  return (
    <Routes>
      <Route index element={
        <CatalogPage 
          bikes={bikes}
          loading={loading}
          currency={currency}
          setCurrency={setCurrency}
        /> 
      }/>
      <Route path='myBookings' element={ 
        <MyBookingsPage/> 
      }/>
      <Route path='checkout' element={ 
        <CheckoutPage/> 
      }/>
      <Route path='checkout/:bikeId' element={ 
        <CheckoutEachPage
          bikes={bikes}
          currency={currency}
        /> 
      }/>
    </Routes>
  )
}

export default App;
