import React from 'react'
import Slider from "react-slick";

const SliderComp = () => {
  var settings = {
    dots: false,
    buttons: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Slider {...settings}>
        <div className='!flex items-center justify-between bg-gray-100 px-4 sm:px-6 lg:px-8'>
          <div>
            <div className='text-5xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
            <div className='text-lg mt-5 pr-5'>Nike Air Monarch IV, her adımda rahatlık sunar. Yumuşak yastıklama ve destekleyici bir üst kısım, gün boyu konfor sağlar.</div>
            <button className='bg-black text-white px-4 py-2 rounded-lg mt-5'>İncele</button>
          </div>
          <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/uirypqqxq83mwcjbf9ej/AIR+MONARCH+IV.png" alt="Nike Air Monarch IV" />
        </div>
        <div>
          <div className='!flex items-center justify-between bg-gray-100 px-4 sm:px-6 lg:px-8'>
            <div>
              <div className='text-5xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
              <div className='text-lg mt-5 pr-5'>Nike Air Max 90, orijinal tasarımın ve yastıklamanın modern yorumudur. Yumuşak deri ve ağ kumaş üst kısım, rahatlık ve dayanıklılık sunar.</div>
              <button className='bg-black text-white px-4 py-2 rounded-lg mt-5'>İncele</button>
            </div>
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0f76f73e-2578-4d62-abab-c5563ea4f78c/NIKE+DUNK+LOW+RETRO.png" alt="Nike Dunk Low Retro" />
          </div>
        </div>
        <div>
          <div className='!flex items-center justify-between bg-gray-100 px-4 sm:px-6 lg:px-8'>
            <div>
              <div className='text-5xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
              <div className='text-lg mt-5 pr-5'>Nike Air Force 1 '07, klasik, temiz çizgileri, yükseklik ve konforu bir araya getirir. Deri ve tekstil üst kısım, rahatlık ve dayanıklılık sunar.</div>
              <button className='bg-black text-white px-4 py-2 rounded-lg mt-5'>İncele</button>
            </div>
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c6d9d042-f0b9-46a3-bd1f-04e16541a1d9/W+AIR+FORCE+1+%2707+NEXT+NATURE.png" alt="Nike Air Force 1 '07" />
          </div>
        </div>
      </Slider>
    </>
  )
}

export default SliderComp