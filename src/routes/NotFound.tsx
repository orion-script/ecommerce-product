import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl">Oops! Page not found.</p>

      <Link to="/">
            <button className='bg-Orange text-White p-3 mt-5 rounded-lg'>Go Back</button>
        </Link>
    </div>
  </div>
  )
}

export default NotFound