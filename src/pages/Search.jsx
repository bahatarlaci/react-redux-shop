import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import CartComp from '../components/Cart/CartComp';

const Search = () => {
    const { keyword } = useParams();
    const { products } = useSelector((state) => state.products);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (keyword) {
            const filtered = products.filter((product) =>
                product.title.toLowerCase().includes(keyword.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts([]);
        }
    }, [keyword, products]);

    return (
        <>
            <div className='text-xl font-bold mb-10'>Search Results</div>
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <div key={product.id} className='cursor-pointer flex flex-col md:flex-row md:items-center md:justify-between mb-5' onClick={() => navigate(`/products/${product.id}`)}>
                        <div className='flex items-center'>
                            <img src={product.image} alt={product.title} className='w-[200px] h-24 object-contain rounded-md' />
                            <div className='ml-5'>
                                <h2 className='text-lg font-bold'>{product.title}</h2>
                                <p className='text-gray-500'>{product.price}TL</p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No products found</p>
            )}
        </>
    );
}

export default Search;
