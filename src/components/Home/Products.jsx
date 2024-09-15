import React, { useEffect, useState } from 'react'
import { getCategoryProducts, getProducts } from '../../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Loading';
import Product from './Product';
import ReactPaginate from 'react-paginate';

const Products = ({ category, sort }) => {
  const dispatch = useDispatch();

  const { products, productsStatus } = useSelector((state) => state.products);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 8;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, category]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {
          productsStatus == "LOADING" ? <Loading /> :
            <>
              {
                currentItems?.sort((a,b) => sort == "inc" ? a.price - b.price : sort == "dec" ? b.price - a.price : null).map((product, index) => (
                  <Product key={index} product={product} />
                ))
              }
            </>
        }
      </div>
      <ReactPaginate
        className="paginate flex justify-center align-center my-5 gap-4"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  )
}

export default Products