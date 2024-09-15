import React, { useEffect, useState } from 'react'
import SliderComp from '../components/Home/SliderComp'
import Sorting from '../components/Home/Sorting'
import Category from '../components/Home/Category'
import Products from '../components/Home/Products'

const Home = () => {
  const [category, setCategory] = useState('')
  const [sort, setSort] = useState('')

  return (
    <>
      <SliderComp />
      <Category setCategory={setCategory} />
      <Sorting setSort={setSort} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-12">
          <Products category={category} sort={sort} />
        </div>
      </div>
    </>
  )
}

export default Home