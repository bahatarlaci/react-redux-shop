import React, { useState } from 'react'
import SliderComp from '../components/Home/SliderComp'
import Sorting from '../components/Home/Sorting'
import Category from '../components/Home/Category'
import Products from '../components/Home/Products'

const Home = () => {
  const [category, setCategory] = useState('')
  return (
    <>
      <SliderComp />
      <Sorting />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-3">
          <Category setCategory={setCategory} />
        </div>
        <div className="lg:col-span-9">
          <Products category={category} />
        </div>
      </div>
    </>
  )
}

export default Home