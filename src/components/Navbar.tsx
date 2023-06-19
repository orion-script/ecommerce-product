import React from 'react'
import Logo from "../assets/logo.svg"
import Cart from "../assets/icon-cart.svg"
import Menu from "../assets/icon-menu.svg"
import Avatar from "../assets/image-avatar.png"

const Navbar: React.FC = () => {
  return (
    <>
        <nav className='flex w-full h-16 md:h-24 justify-between px-5 md:px-10 lg:px-14 items-center'>
            
            <img src={Menu} alt="menu icon" className='md:hidden' />
            <div className="flex justify-between md:w-4/5 lg:w-[70%]">
                <img src={Logo} alt="logo icon" />
                <ul className='md:flex justify-between w-3/5 hidden'>
                    <li><a href="http://">Collections</a></li>
                    <li><a href="http://">Men</a></li>
                    <li><a href="http://">Women</a></li>
                    <li><a href="http://">About</a></li>
                    <li><a href="http://">Contact</a></li>
                </ul>
            </div>

            <div className="w-3/12 md:w-[10%] flex items-center justify-between">
                <img src={Cart} alt="cart icon"className='cursor-pointer' />
                <img src={Avatar} alt="avatar image" className='h-8 cursor-pointer' />
            </div>
        </nav>
        <hr className="bg-slate-200 h-px w-11/12 m-auto hidden md:block" />
    </>
  )
}

export default Navbar