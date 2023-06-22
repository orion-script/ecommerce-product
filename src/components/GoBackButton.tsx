import React from 'react'
import { Link } from 'react-router-dom'

function GoBackButton() {
  return (
    <Link to="/">
        <button className='bg-Orange text-White p-3 mt-5 rounded-lg'>Go Back</button>
    </Link>
  )
}

export default GoBackButton