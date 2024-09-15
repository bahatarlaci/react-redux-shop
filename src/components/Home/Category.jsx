import React, { useEffect } from 'react'
import { getCategories } from '../../redux/categorySlice';
import { useDispatch, useSelector } from 'react-redux';

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch]);

  return (
    <div className='bg-gray-100 p-4 mt-5'>
      <div className='text-xl font-bold mb-2 border-b px-2 pb-3'>Categories</div>
      <div className='flex flex-wrap md:flex-nowrap space-y-2 md:space-y-0 md:space-x-4'>
        {
          categories.map((category, index) => (
            <div
              onClick={() => setCategory(category)}
              className='text-l px-2 py-3 cursor-pointer hover:bg-gray-200 w-full md:w-auto text-center'
              key={index}
            >
              {category}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Category;