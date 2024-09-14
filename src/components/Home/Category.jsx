import React, { useEffect } from 'react'
import { getCategories } from '../../redux/categorySlice';
import { useDispatch, useSelector } from 'react-redux';

const Category = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  console.log(categories);

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch]);

  return (
    <div className='bg-gray-100 p-4'>
      <div className='text-xl font-bold mb-2 border-b px-2 pb-3'>Kategoriler</div>
      <div>
        {
          categories.map((category, index) => (
            <div className='text-l px-2 py-3 cursor-pointer hover:bg-gray-200' key={index}>{category}</div>
          ))
        }
      </div>
    </div>
  )
}

export default Category