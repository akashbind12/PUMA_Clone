import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './Pages/Home'
import { Footer } from './components/Footer'
import { Routes, Route, Link } from "react-router-dom";
import { Mens } from './Pages/Mens'
import { ProductDetails } from './Pages/ProducrDetail'
import { Cart } from './Pages/Cart'


function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<Mens></Mens>} />
          <Route path="/productdetails" element={<ProductDetails></ProductDetails>} />
          <Route path="/cart" element={<Cart></Cart> } />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
