import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Cart from '../assets/icon-cart.svg';

const CartIcon: React.FC = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="relative">
      <img src={Cart} alt="cart icon" className="cursor-pointer" onClick={toggleIsCartOpen} />
      <p className="absolute top-[-10px] right-[-8px] bg-Orange w-[20px] h-[18px] rounded-md text-White flex justify-center items-center">
        {cartCount}
      </p>
    </div>
  );
};

export default CartIcon;
