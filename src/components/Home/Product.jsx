import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({ product }) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`products/${product?.id}`)} className='border rounded-md relative cursor-pointer'>
            <img src={product?.image} alt={product?.name} className='w-full h-[250px] object-cover m-auto' />
            <div className='text-2xl font-bold absolute top-0 right-0 z-10 bg-black text-white rounded-md p-1'>
                {product?.price} <span className='text-sm'>TL</span>
            </div>
            <div className='text-center px-3 my-3 text-l font-bold'>
                {product?.title}
            </div>
        </div>
    )
}

export default Product