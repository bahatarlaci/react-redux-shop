import React from 'react'

const Sorting = ({ setSort }) => {
  return (
    <div className='bg-gray-100 my-5 p-2 flex items-center justify-end'>
      <select onChange={(e) => setSort(e.target.value)} className='p-2 border border-gray-300 rounded'>
        <option disabled value="">Seçiniz</option>
        <option value="inc">En Düşük Fiyat</option>
        <option value="dec">En Yüksek Fiyat</option>
      </select>
    </div>
  )
}

export default Sorting