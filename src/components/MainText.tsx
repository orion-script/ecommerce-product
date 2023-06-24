import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Minus from "../assets/icon-minus.svg";
import Plus from "../assets/icon-plus.svg";
import Cart from "../assets/icon-cart.svg";

function StrikethroughText({ children }) {
  return <span style={{ textDecoration: 'line-through' }}>{children}</span>;
}

const MainText: React.FC = () => {
  const { cartItems, addItemToCart, removeItemFromCart, cartCount } = useContext(CartContext);

  const toggleRemoveItemFromCart = () => {
    removeItemFromCart(cartItems)
  }

  // const toggleRemoveItemFromCart = () => {
  //   if (cartItems.length > 0) {
  //     const cartItemToRemove = cartItems[cartItems.length - 1]; // Remove the last item in the cart
  //     removeItemFromCart(cartItemToRemove);
  //   }
  // };

  const toggleAddItemToCart = () => {
    addItemToCart(cartItems)
  }

  // const toggleAddItemToCart = () => {
  //   // Here, you need to pass the product details instead of the entire cartItems array
  //   const productToAdd = {
  //     id: 'product-id', // Replace with the actual product ID
  //     name: 'Product Name', // Replace with the actual product name
  //     quantity: 1
  //   };
  //   addItemToCart(productToAdd);
  // };

  // const TogglAddItemToCart = () => {
  //   removeItemFromCart(cartItems)
  // }

  return (
    <div className="w-4/5 m-auto md:w-2/5 h-[27rem] mt-16 md:mt-0">
      <p className='text-Orange font-mono font-extrabold'>SNEAKER COMPANY</p>

      <h3 className='text-Black font-bold text-4xl mt-3'>Fall Limited Edition Sneakers</h3>

      <p className='text-Grayishblue my-8'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>

      <div className="flex md:flex-col justify-between items-center md:items-start h-12">
        <div className="w-2/4 md:w-2/5 flex justify-between items-center">
          <span className='text-Black text-2xl font-bold'>$125.00</span>
          <span className='bg-PaleOrange text-Orange font-bold rounded-sm px-2'>50%</span>
        </div>

        <span className='text-Grayishblue font-bold'><StrikethroughText>$250.00</StrikethroughText></span>
      </div>

      <div className="md:flex justify-between w-full mt-5 md:mt-10 h-12">
        <div className="bg-PaleOrange justify-between px-3 md:w-2/5 h-full flex items-center rounded-lg">
          <img src={Minus} alt="" className='cursor-pointer' onClick={toggleRemoveItemFromCart} />
          <span className='cursor-pointer'>{cartCount}</span>
          <img src={Plus} alt="" className='cursor-pointer' onClick={toggleAddItemToCart} />
        </div>

        <div className="md:w-2/4 mt-5 md:mt-0 h-full bg-Orange hover:opacity-50 text-White rounded-lg flex justify-around px-10 items-center cursor-pointer" onClick={addItemToCart}>
          <img src={Cart} alt="icon cart" className='fill-white' />
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default MainText;
