import React from 'react';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ProductList from './pages/ProductList';
import Product from './pages/Product'
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './pages/Layout';




function App() {
 

  return (
    <>
    
      <Routes>
        <Route exact path='/' index element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/product' element={<Product/>}/>
        
      </Routes>
   
     
    </>
  );
}

export default App;
