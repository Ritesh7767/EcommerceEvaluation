import React, { useContext } from 'react'
import { dataContext } from '../Context/DataContext'

const Cart = () => {

    let data = useContext(dataContext)

    console.log(data)

    console.log(data)

    let localData = JSON.parse(localStorage.getItem('id'))
    console.log(localData)

    let cartData = []

    localData?.forEach(local => {
        data?.forEach(ele => {
            if(local == ele.id){
                cartData.push(ele)
            }
        })
    })

    console.log(cartData)

  return (
    <div className='flex flex-col gap-3 mt-4 '>
        {cartData?.map(ele => {
            let {image, title, category, price} = ele
            return (
                <div className='flex h-[20vh] border justify-around w-[70%] m-auto '>
                    <div>
                        <img src={image} className='h-full'/>
                    </div>
                    <div className='font-bold'>
                        <h1 className='text-xl'>{title}</h1>
                        <p> Category :- {category} </p>
                        <button className='border text-sm border-black mt-3 w-[10vw] rounded-md h-[5vh] ' >Checkout</button>
                    </div>
                    <div className='font-bold'>
                        ${price}
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Cart