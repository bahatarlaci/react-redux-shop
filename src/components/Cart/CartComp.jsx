import React from 'react'
import { removeFromCart } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { formatPrice } from '../../utils/format'
import { removeFromFavorite } from '../../redux/favoriteSlice'
import { useNavigate } from 'react-router-dom'

const CartComp = ({ cart, favorite }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <>
      <div className='mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center border-b pb-5'>
        <div onClick={() => navigate('/products/' + cart?.id)} className='lg:col-span-2 flex justify-center lg:justify-start cursor-pointer'>
          <img className='w-[150px] h-[150px] object-cover' src={cart?.image} alt={cart.title} />
        </div>

        <div className='lg:col-span-5 cursor-pointer' onClick={() => navigate('/products/' + cart?.id)}>
          <div className='text-xl font-semibold mb-2'>{cart?.title}</div>
          <div className='text-gray-600'>{cart?.description}</div>
        </div>

        {
          !favorite &&
          <div className='lg:col-span-3 text-lg'>
            Quantity: {cart?.quantity} - {formatPrice(cart?.price)}
          </div>
        }

        <div className='lg:col-span-2 flex justify-center lg:justify-end'>
          <div
            className='bg-red-800 text-white w-[200px] h-10 rounded-lg flex justify-center items-center cursor-pointer'
            onClick={() => !favorite ? dispatch(removeFromCart(cart?.id)) : dispatch(removeFromFavorite(cart?.id))}
          >
            Remove
          </div>
        </div>
      </div>
    </>
  )
}

export default CartComp
