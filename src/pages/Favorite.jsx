import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import CartComp from '../components/Cart/CartComp';
import { formatPrice } from '../utils/format';
import { getFavoriteTotal } from '../redux/favoriteSlice';

const Favorite = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(getFavoriteTotal())
  }, [dispatch]);

  return (
    <div>
      <div className='text-2xl font-bold'>Favorite List</div>
      {
        favorites?.length > 0 ?
          <div>
            {
              favorites.map((cart, i) => (
                <CartComp key={i} cart={cart} favorite={true}/>
              ))
            }
          </div> :
          <div className='text-xl my-5'>
            You have no favorite items.
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

export default Favorite