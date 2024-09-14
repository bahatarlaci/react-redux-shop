import React from 'react'
import SliderComp from '../components/Home/SliderComp'
import Sorting from '../components/Home/Sorting'
import Category from '../components/Home/Category'
import Products from '../components/Home/Products'

const Home = () => {
  return (
    <>
      <SliderComp />
      <Sorting />
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <Category />
        </div>
        <div className="col-span-9">
          <Products />
        </div>
      </div>
    </>
  )
}

export default Home