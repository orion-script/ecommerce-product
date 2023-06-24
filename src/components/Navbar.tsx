import React, {useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg"
import Menu from "../assets/icon-menu.svg"
import Close from "../assets/icon-close.svg"
import Avatar from "../assets/image-avatar.png"
import CartDropDown from "./CartDropDown"
import CartIcon from './CartIcon';
import { CartContext } from '../context/CartContext';

const Navbar: React.FC = () => {
    const [navbar, setNavbar] = useState(false);
    const {isCartOpen} = useContext(CartContext)

    useEffect(() => {
        navbar && screen.width < 480 ? document.body.classList.add("fixed") : document.body.classList.remove("fixed");
    }, [navbar])

    const navClose = () => {
        setNavbar(!navbar);
    };

  return (
    <>
        <nav className='flex w-full h-14 md:h-20 justify-between px-5 md:px-10 lg:px-14 items-center md:static fixed top-0 z-50 bg-White'>
            
            <div className="md:hidden">
                <button
                    className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={navClose}
                >
                    {navbar ? (
                        <img src={Close} width={15} height={15} alt="close icon" />
                    ) : (
                        <img src={Menu} width={15} height={15} alt="menu icon" />
                    )}
                </button>
            </div>

            <div className="flex justify-between md:w-4/5 lg:w-[70%]">
                <Link to="/">
                    <img src={Logo} alt="logo icon" className='cursor-pointer' />
                </Link>

                <ul className={`${navbar ? "block h-screen fixed top-16 left-0 right-0 z-10 pl-5 pt-5 w-4/5 font-bold text-xl animate-open-menu" : "hidden"} md:flex justify-between md:w-3/5 bg-White`}>
                    <li><a href="/collections">Collections</a></li>
                    <li className='py-3 md:py-0'><a href="/men">Men</a></li>
                    <li><a href="/women">Women</a></li>
                    <li className='py-3 md:py-0'><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>

            <div className="w-3/12 md:w-[10%] flex items-center justify-between">
                <CartIcon />
                <img src={Avatar} alt="avatar image" className='h-8 cursor-pointer' />
            </div>
        </nav>
        
        <hr className="bg-slate-200 h-px w-11/12 m-auto hidden md:block" />

        { isCartOpen && <CartDropDown />}
    </>
  )
}

export default Navbar