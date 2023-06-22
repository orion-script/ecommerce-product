import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Checkout from './routes/Checkout';
import NotFound from './routes/NotFound';
import Collection from "./routes/Collection"
import Men from "./routes/Men"
import Women from "./routes/Women"
import About from "./routes/About"
import Contact from "./routes/Contact"
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/collections" element={<Collection />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
