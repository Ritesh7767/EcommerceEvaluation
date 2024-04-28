import React, { useContext } from 'react'
import { isAuth } from '../Context/AuthContext'

const Login = () => {

    let {auth, setAuth} = useContext(isAuth)

    const handleClick = event => {
        event.preventDefault()
        setAuth(true)
    }

    console.log(auth)

  return (
    <form className='w-[30%] border flex flex-col gap-3 m-auto text-center mt-[10vh] bg-[teal] text-white p-3 ' onSubmit={event => handleClick(event)} >
        <h1 className='font-bold text-xl '>Login Here</h1>
        <label className='text-lg' >Enter your email id</label>
        <input type="email" className='rounded-md h-[7vh] pl-3 outline-none text-black w-[90%] m-auto ' />
        <label htmlFor="">Enter your password</label>
        <input type="password" className='rounded-md h-[7vh] pl-3 outline-none text-black w-[90%] m-auto ' />
        <input type="submit" className='border bg-sky-700 w-[50%] m-auto border-none rounded-md h-10 '/>
    </form>
  )
}

export default Login