// import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Cart from "../assets/icon-cart.svg"

function CartIcon() {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

    const ToggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  return (
    <div className="relative">
        <img src={Cart} alt="cart icon"className='cursor-pointer' onClick={ToggleIsCartOpen} />
        <p className='absolute top-[-10px] right-[-8px] bg-Orange w-[20px] h-[18px] rounded-md text-White flex justify-center items-center'>{cartCount}</p>
    </div>
  )
}

export default CartIcon