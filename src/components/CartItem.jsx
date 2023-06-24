// import React from 'react'
import PropTypes from 'prop-types';
import Picture from "../assets/image-product-1-thumbnail.jpg"
import Delete from "../assets/icon-delete.svg"

function CartItem( {cartItem} ) {
  const { quantity } = cartItem;
  const total = 125.00 * quantity;

  return (
    <div className="w-4/5 mt-5 flex items-center justify-between">
        <img src={Picture} alt="" className='w-2/12' />
        <div className="">
            <p>Fall Limited Edition Sneakers</p>
            <p>$125.00 x {quantity} <span className='font-bold'>${total.toFixed(2)}</span></p>
        </div>
        <img src={Delete} alt="" className='h-3 cursor-pointer' />
    </div>
  )
}

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
  }).isRequired
};

export default CartItem