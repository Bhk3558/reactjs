import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
// import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import CartPage from './Pages/Cart';
import Home from './Pages/Home';
import Register from './Pages/Register/Register';
import {BrowserRouter, Routes, Route} from 'react-router-dom'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Register /> */}
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/Register' element={<Register />}></Route>
     </Routes></BrowserRouter>
        {/*  new testing conflict*/}
   {/* <Home /> */}
   {/* < CartPage /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals( )
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
