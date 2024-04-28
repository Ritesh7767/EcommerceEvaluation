import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-[#191919] text-[#f1f1f1] h-[10vh] flex items-center'>
        <ul className='flex justify-around items-center w-full font-bold'>
            
            <Link to={'/'}>HOME</Link>
            <Link to={'/product'}>Products</Link>
            <Link to={'/cart'}>Cart</Link>
            <Link to={'/login'}>Login</Link>
        </ul>
    </div>
  )
}

export default Navbar