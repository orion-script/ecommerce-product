import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Typing from "./components/Typing"

function App() {

  return (
    <>
    <Navbar />
    <Main />
    <div className="text-center mt-20 md:mt-8">
      <Typing />
    </div>
    </>
  )
}

export default App
