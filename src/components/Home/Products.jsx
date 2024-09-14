import React, { useEffect } from 'react'
import { getProducts } from '../../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Loading';
import Product from './Product';

const Products = () => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);

  console.log(products);

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        productsStatus == "LOADING" ? <Loading /> :
          <>
            {
              products?.map((product, index) => (
                <Product key={index} product={product} />
              ))
            }
          </>
      }
    </div>
  )
}

export default Products