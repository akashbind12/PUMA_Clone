import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './Pages/Home'
import { Footer } from './components/Footer'
import { Routes, Route, Link } from "react-router-dom";
import { Mens } from './Pages/Mens'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<Mens></Mens>} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App