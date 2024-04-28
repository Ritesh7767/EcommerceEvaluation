import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { dataContext } from '../Context/DataContext'

const ProductCategory = () => {

    let data = useContext(dataContext)

    let params = useParams()
    console.log(params.id)

    let product = data?.filter(ele => ele.id == params.id)

    console.log(product)
  return (
    product?.map(ele => {
        let {image, title, price, description, category, rating:{rate, count} } = ele
        return (
            <div className='flex'>
                <div className='w-[40%]'>
                    <img src={image} className='w-[95%] ' />
                </div>
                <div className='w-[60%] flex flex-col gap-5'>
                    <h1 className='font-bold text-2xl '>{title}</h1>
                    <h2 className='font-bold text-2xl'>${price}</h2>
                    <p className='font-bold'> Category :- {category}</p>
                    <p>{description}</p>
                    <p>Rating : {rate} </p>
                </div>
            </div>
        )
    })
  )
}

export default ProductCategory