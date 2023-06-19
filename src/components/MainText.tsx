import React from 'react'
import Minus from "../assets/icon-minus.svg"
import Plus from "../assets/icon-plus.svg"

function StrikethroughText({children}) {
    return <span style={{textDecoration: 'line-through'}}>{children}</span>;
}

const MainText: React.FC = () => {
  return (
    <div className="md:w-2/5 h-[27rem] mt-40 md:mt-0">
        <p className='text-Orange font-mono font-extrabold'>SNEAKER COMPANY</p>

        <h3 className='text-Black font-bold text-4xl mt-3'>Fall Limited Edition Sneakers</h3>

        <p className='text-Grayishblue my-5'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>

        <div className="">
            <div className="">
                <span>$125.00</span>
                <span>50%</span>
            </div>
            <span><StrikethroughText>$250.00</StrikethroughText></span>
        </div>

        <div className="flex">
            <div className="flex items-center">
                <img src={Minus} alt="" />
                <span>0</span>
                <img src={Plus} alt="" />
            </div>
            <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default MainText