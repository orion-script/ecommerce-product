import React from 'react'
import GoBackButton from '../components/GoBackButton'

function Collection() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <p className="text-xl">Collections</p>
      <p className="text-xl">Nothing is here yet👌</p>
      <GoBackButton />
    </div>
  )
}

export default Collection