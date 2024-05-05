import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import { AuthProvider } from "./context/AuthContext";
import Toppings from './pages/Topping';
import Flavors from './views/flavors/New';
import Header from './pages/Header';
import Home from './pages/Home';

export default function App() {
  return (

    <Router>
      <AuthProvider>
        <Header/>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path="/flavors" element={<Flavors />} /> */}
          <Route path="/toppings" element={<Toppings />} />
          <Route path='/' element={<Home />} /> 
        </Routes>
      </AuthProvider>
    </Router>
  )
}