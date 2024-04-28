import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { dataContext } from '../Context/DataContext'

const Product = () => {

    let data = useContext(dataContext)
    let navigate = useNavigate()

    const handleClick = id => {
        navigate(`/product/${id}`)
    }

    const handleCart = id => {
        let localData = JSON.parse(localStorage.getItem('id')) || []
        localData.push(id)
        let setArr = new Set(localData)
        localStorage.setItem('id', JSON.stringify([...setArr]))
    }

  return (
    <div className='grid grid-flow-row grid-cols-4 gap-4 mt-4'>
        {
            data?.map(ele => {
                let {id , image, title, price} = ele
                
                return (
                    <div className='border h-[60vh] text-center' >
                        <img src={image} className='h-[60%] mb-11 inline-block' onClick={() => handleClick(id)}/>
                        <h1 className='font-bold text-lg text-start overflow-clip h-14 '>{title}</h1>
                        <p className='font-bold text-start text-2xl'>${price}</p>
                        {/* <p>Rating :- {rate}</p> */}
                        <button onClick={() => handleCart(id)}>Add to Cart</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Product