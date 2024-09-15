import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addToCard } from '../../redux/cartSlice'

const DetailComp = ({ productDetail }) => {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value)
        if (!isNaN(value) && value >= 1) {
            setQuantity(value)
        }
    }

    const addBasket = () => {
        dispatch(addToCard({
            id: productDetail?.id,
            title: productDetail?.title,
            image: productDetail?.image,
            price: productDetail?.price,
            quantity: quantity,
        }))
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 items-center my-20'>
            <div className='lg:col-span-6'>
                <img src={productDetail?.image} alt={productDetail?.name} className='w-full h-[400px] object-cover m-auto' />
            </div>
            <div className='lg:col-span-6'>
                <div className='text-3xl font-bold mb-3'>{productDetail?.title}</div>
                <div className='text-lg mb-3'>Rating: {productDetail?.rating?.rate}, Count: {productDetail?.rating?.count}</div>
                <div className='text-lg mb-5'>{productDetail?.description}</div>
                <div className='text-5xl font-bold mb-8'>{productDetail?.price}<span className='text-sm ml-1'>TL</span></div>
                <div className="flex items-center gap-4">
                    <button className="text-4xl cursor-pointer w-6 h-6 flex items-center justify-center" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
                        <AiOutlineMinus />
                    </button>
                    <input type="text" className="text-center w-12 text-2xl font-bold focus:outline-none" value={quantity} onChange={handleQuantityChange} maxLength={3} />
                    <button className="text-4xl cursor-pointer w-6 h-6 flex items-center justify-center" onClick={() => quantity < productDetail?.rating?.count && setQuantity(quantity + 1)}>
                        <AiOutlinePlus />
                    </button>
                </div>
                {
                    quantity > productDetail?.rating?.count ? <div className='text-red-500 text-sm mt-5'>Not enough stock, only {productDetail?.rating?.count} left</div> :
                        <button className='bg-blue-500 text-white mt-3 px-3 py-2 rounded-md' onClick={addBasket}>Add to Basket</button>
                }
            </div>
        </div>
    )
}

export default DetailComp