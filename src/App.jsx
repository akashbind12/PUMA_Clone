import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './Pages/Home'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  )
}

export default App
