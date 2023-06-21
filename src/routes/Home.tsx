import React from 'react'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Typing from "../components/Typing"

function Home() {
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

export default Home