import React from 'react'
import { Navbar, SwapCard, Footer } from "./components";
import './App.css'

const App = () => {
  return (
    <div className="min-h-screen"> 
      <div className="gradient-bg-welcome"> 
      <Navbar /> 
      <SwapCard /> 
      </div> 
      <Footer /> 
    </div>
  )
}

export default App
