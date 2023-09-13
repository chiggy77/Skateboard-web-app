import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Product from './Product';
import Accessories from './Accessories';
import Home from './Home';
import HomePage from '../../Pages/HomePage';
import Login from '../Login/Login';
import SignUp from '../Login/SignUp';
import ProductList from '../products/ProductList';
import ProductDetails from '../products/ProductDetails';
import Checkout from '../Checkout/Checkout';
import { react,useState } from 'react';
import CreditCard from '../Payment/CreditCard';
import Thankyou from '../Payment/paymentcomponents/Thankyou';
import Cart from '../Cart';
const AllRoutes = () => {
    const [currForm, setCurrForm] = useState('login');

    const toggleForm = (formName) =>{
      setCurrForm(formName);
    }
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decks" element={<Product />} />
        <Route path="/accessories" element={<ProductList />} />
        <Route path="/cart" element={<HomePage />} />
        <Route path="/Login" element={currForm === "login" ? <Login onFormSwitch={toggleForm}/> : <SignUp onFormSwitch={toggleForm}/>} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<CreditCard/>} />
        <Route path="/thankyou" element={<Thankyou/>} />
      </Routes>
    
  );
}

export default AllRoutes;
