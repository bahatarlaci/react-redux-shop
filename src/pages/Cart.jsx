import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getCartTotal } from '../redux/cartSlice';
import CartComp from '../components/Cart/CartComp';
import { formatPrice } from '../utils/format';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts, totalAmount } = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch, totalAmount]);

  return (
    <div>
      {
        carts?.length > 0 ?
          <div>
            {
              carts.map((cart, i) => (
                <CartComp key={i} cart={cart} />
              ))
            }
            <div className='flex items-center justify-end text-xl my-20'>
              <div>Total Amount: <span className='ml-1 font-bold'>{formatPrice(totalAmount)}</span></div>
            </div>
          </div> :
          <div className='text-xl my-5'>
            Cart is empty, please add some items to cart
            <div
              className='bg-blue-800 text-white w-[150px] h-10 rounded-lg flex justify-center items-center cursor-pointer mt-5'
              onClick={() => navigate('/')}
            >
              Go to Shop
            </div>
          </div>
      }
    </div>
  )
}

export default Cart