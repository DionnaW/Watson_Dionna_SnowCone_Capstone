import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import { AuthProvider } from "./context/AuthContext";
import Toppings from './views/toppings/New';
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
          {/* <Route path="/toppings" element={<Toppings />} /> */}
          <Route path='/' element={<Home />} /> 
        </Routes>
      </AuthProvider>
    </Router>
  )
}


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from "./components/auth/Login";
// import Register from "./components/auth/Register";
// import Header from "./components/Header";
// import Home from "./components/Home";
// import { AuthProvider } from "./context/AuthContext";
// 
// function App() {
  // return (
    // <Router>
      {/* <AuthProvider> */}
        {/* <Header /> */}
        {/* <Routes> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route path="/home" element={<Home />} /> */}
        {/* </Routes> */}
      {/* </AuthProvider> */}
    {/* </Router> */}
  // );
// }
// 
// export default App;
// 


//==============================================================================================
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Nav from './components/Nav';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './Register';
// import Contact from './pagesContact';
// import Flavors from './Flavors';
// import Toppings from './Toppings';
// 
// function App() {
    // return (
        // <Router>
            {/* <Nav /> */}
            {/* <Routes> */}
                {/* <Route path="/" element={<Home />} /> */}
                {/* <Route path="/login" element={<Login />} /> */}
                {/* <Route path="/register" element={<Register />} /> */}
                {/* <Route path="/contact" element={<Contact />} /> */}
                {/* <Route path="/flavors" element={<Flavors />} /> */}
                {/* <Route path="/toppings" element={<Toppings />} /> */}
            {/* </Routes> */}
        {/* </Router> */}
    // );
// }
// 
// export default App;