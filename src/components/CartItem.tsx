import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Picture from '../assets/image-product-1-thumbnail.jpg';
import Delete from '../assets/icon-delete.svg';

type CartItemProps = {
  cartItem: {
    name: string;
    quantity: number;
  };
}



const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const { name, quantity } = cartItem;
  const total = 125.0 * quantity;

  const { clearItemFromCart } = useContext(CartContext);

  const clearItemHandler = (cartItem) => {
    clearItemFromCart(cartItem);
  };

  return (
    <div className="w-4/5 mt-5 flex items-center justify-between">
        <img src={Picture} alt="" className='w-2/12' />
        <div className="">
            <p>Fall Limited Edition Sneakers</p>
            <p>$125.00 x {quantity} <span className='font-bold'>${total.toFixed(2)}</span></p>
        </div>
        <img src={Delete} alt="" className='h-3 cursor-pointer' onClick={clearItemHandler} />
    </div>
  );
};

export default CartItem;
