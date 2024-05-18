import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Admin from './pages/Admin';
import Client from './pages/Client';
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <BrowserRouter >
      <Routes >
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Admin />}/>
          <Route path='/client' element={<Client />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
