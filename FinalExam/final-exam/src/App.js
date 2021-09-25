import './App.css';
import NavBar from './components/NavBar/index'
import Header from './components/Header/index'
// import Order from './features/Order/'
import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Order from './features/Order/index';
import Product from './features/Product/index';
import NotFound from './components/NotFound/index'
import User from './features/User/index';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

// Create a client
const queryClient = new QueryClient()
function App() {
  
  return (
    <>
     <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
        
          <NavBar/>
            <Header name='Order Shop'/>
            <Switch>
              <Redirect exact from="/" to="/login" />
              <Route path={"/products"} component={Product} />
              <Route path={"/orders"} component={Order} />
              <Route path={"/login"} component={User} /> 
              <Route component={NotFound} />
            </Switch>
            
        </BrowserRouter>
      </Suspense>
      </QueryClientProvider>

    </>
  );
}

export default App;
