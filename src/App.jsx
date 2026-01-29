import { Routes, Route } from 'react-router'
import './App.css'
import CatalogPage from './pages/CatalogPage'
import MyBookingsPage from './pages/MyBookingsPage'
import CheckoutPage from './pages/CheckoutPage'

function App() {

  return (
    <Routes>
      <Route index element={ <CatalogPage/> }/>
      <Route path='myBookings' element={ <MyBookingsPage/> }></Route>
      <Route path='checkout' element={ <CheckoutPage/> }></Route>
    </Routes>
  )
}

export default App;
