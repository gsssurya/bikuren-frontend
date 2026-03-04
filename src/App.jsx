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

function App() {
  const location = useLocation();
  const [user, setUser] = useState({});
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState(localStorage.getItem('currency') || 'IDR');
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  useEffect(() => {
    const checkUser = async () => {
      try {
        setLoading(true);
        const id = JSON.parse(localStorage.getItem('user')).id;
        const check = await api.get(`/users/${id}`);
        if (check) {
          setUser(check?.data);
        } else {
          localStorage.removeItem("user");
          setUser({});
        }
      } catch (e) {
      } finally {
        setLoading(false);
      }
    };
    checkUser();
  }, []);


  useEffect(() => {
    if (location.pathname === "/signin" || location.pathname === "/signup") {
      document.body.style.paddingTop = "0";
    }
  }, [location]);

  useEffect(() => {
      const fetchBikes = async () => {
          try {
              setLoading(true);
              const response = await api.get("/bikes");
              setBikes(response.data);
          } catch (error) {
              console.error(error);
          } finally {
            setLoading(false);
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
          setUserGen={setUser}
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
        />
      }/>
      <Route path='signup' element={
        <SignUpPage/>
      }

      />
    </Routes>
  )
}

export default App;
