import React, {useState, useEffect } from 'react'
import Logo from "../assets/logo.svg"
import Cart from "../assets/icon-cart.svg"
import Menu from "../assets/icon-menu.svg"
import Close from "../assets/icon-close.svg"
import Avatar from "../assets/image-avatar.png"

const Navbar: React.FC = () => {
    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        navbar && screen.width < 480 ? document.body.classList.add("fixed") : document.body.classList.remove("fixed");
    }, [navbar])

    const navClose = () => {
        setNavbar(!navbar);
    };

  return (
    <>
        <nav className='flex w-full h-16 md:h-24 justify-between px-5 md:px-10 lg:px-14 items-center'>
            
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
                <img src={Logo} alt="logo icon" />
                <ul className={`${navbar ? "block h-screen fixed top-16 left-0 right-0 z-10 pl-5 pt-5 w-4/5 font-bold text-xl animate-open-menu" : "hidden"} md:flex justify-between md:w-3/5 bg-White`}>
                    <li><a href="/">Collections</a></li>
                    <li className='py-3 md:py-0'><a href="/">Men</a></li>
                    <li><a href="/">Women</a></li>
                    <li className='py-3 md:py-0'><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
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