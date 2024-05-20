import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Admin from './pages/Admin';
import LoginPage from './pages/LoginPage';
import Client from './pages/Client';
import SingleProduct from './pages/SingleProduct';


function App() {
  return (
    <BrowserRouter >
      <Routes >
        <Route path='/' element={<Layout />}>
          <Route path='/admin' element={<Admin />}/>
          <Route path='/client' element={<Client />} />
          <Route path='/product/:id' element={<SingleProduct />}/>
        </Route>
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
