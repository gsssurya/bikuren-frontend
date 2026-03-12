import { Routes, Route } from 'react-router'
import { useState, useEffect } from 'react'
import './App.css'
import CatalogPage from './pages/CatalogPage'
import MyBookingsPage from './pages/MyBookingsPage'
import CheckoutPage from './pages/CheckoutPage'
import CheckoutEachPage from './pages/CheckoutEachPage'
import ProfilePage from './pages/ProfilePage'
import ContactPage from './pages/ContactPage'
import api from './utils/api.util'
import { useLocation } from "react-router-dom";
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import EmailVerificationPage from './pages/EmailVerificationPage';
import VerifyEmailPage from './pages/VerifyEmailPage'

function App() {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState(localStorage.getItem('currency') || 'IDR');
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  useEffect(() => {
    const checkUser = async () => {
      try {
        setLoading(true);
        const getUser = await api.get(`/auth/me`);
        if(getUser.status == 200){
          setUser(getUser.data.userId);
        }
        
        setLoading(false);
      } catch (e) {
        console.log(e)
        setUser(null);
      }
    };
    checkUser();
  }, []);


  useEffect(() => {
    if (location.pathname === "/signin" || location.pathname === "/signup" || location.pathname.startsWith('/verify')) {
      document.body.style.paddingTop = "0";
    }
  }, [location]);

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

  useEffect(() => {
      if (cart.length > 0) {
          localStorage.setItem("cart", JSON.stringify(cart));
      } else {
          localStorage.removeItem("cart");
      }
  }, [cart]);
  return (
    <Routes>
      <Route index element={
        <CatalogPage 
          bikes={bikes}
          loading={loading}
          currency={currency}
          setCurrency={setCurrency}
          cart={cart}
          setCart={setCart}
        /> 
      }/>
      <Route path='myBookings' element={ 
        <MyBookingsPage 
          cart={cart}
        /> 
      }/>
      <Route path='checkout' element={ 
        <CheckoutPage 
          cart={cart}
          setCart={setCart}
          bikes={bikes}
          currency={currency}
        /> 
      }/>
      <Route path='checkout/:bikeId' element={ 
        <CheckoutEachPage
          bikes={bikes}
          currency={currency}
        /> 
      }/>
      <Route path='profile' element={
        <ProfilePage
          cart={cart}
          user={user}
          setUser={setUser}
          appLoad={loading}
        />
      }/>
      <Route path='contact' element={
        <ContactPage
          cart={cart}
        />
      }/>
      <Route path='signin' element={
        <SignInPage
          user={user}
          setUser={setUser}
          appLoad={loading}
          setAppLoad={setLoading}
        />
      }/>
      <Route path='signup' element={
        <SignUpPage
          appLoad={loading}
          user={user}
          setAppLoad={setLoading}
        />
      }/>
      <Route path='verify/:id/:token' element={
        <VerifyEmailPage/>
      }/>
    </Routes>
  )
}

export default App;
