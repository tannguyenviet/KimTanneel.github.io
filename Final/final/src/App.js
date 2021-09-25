import orderApi from 'Api/orderApi';
import productApi from 'Api/productApi';
import NavBar from 'components/Navbar';
import LoginForm from 'features/Login/components/LoginForm';
import Order from 'features/Order';
import Product from 'features/Product';
import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NotFound from './components/NotFound';
// Lazy load - Code splitting
const Photo = React.lazy(() => import('./features/Photo'));
console.log('processenv',process.env.REACT_APP_API_URL);

function App() {
  const [productList, setProductList] =useState([]);
  useEffect(() =>{
    console.log('Vao effect');
    const fetchProductList = async () =>{
      try{
        console.log('vao fecthc');
        const params ={
          _page: 1,
          _limit: 10,
        };
        const response = await orderApi.getAll();
        console.log({response});
      }
      catch (error){
        console.log('Failed to fetch product list',error);
      }
    }
    fetchProductList();

  },[])
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />
          <NavBar/>
          <Switch>
            <Redirect exact from="/" to="/orders" />
            <Route path={"/products"} component={Product} />

            <Route path="/orders" component={Order}/>
            <Route path={"/login"} component={LoginForm} />
            <Route component={NotFound} />

          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;