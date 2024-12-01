import React from 'react';
import "./StoreWallpapers.css";

const StoreWallpapers = () => {
  return (
    <div>
      <div className='grid grid-cols-2 items-center mt-20 mx-20'>
        <div className='flex  flex-col gap-5'>
            <p className='text-3xl'>WROGN STORE.</p>
            <h3 className='text-6xl font-semibold'>RIGHT PLACE.</h3>
            <p className='text-lg text-gray-600 font-semibold'>Find how close you're to going <br /> Wrogn!</p>
            <button className='bg-lime-950 text-white text-xl font-semibold py-5 px-20 rounded-xl w-fit'>See All Stores</button>
        </div>
        <div className='border-2 border-yellow-400 rounded-xl store'>
        {/* <img src="https://wrogn.com/cdn/shop/files/STORE-WEBSITE-BANNER639X359.webp?v=1722239596" alt="img" className='rounded-xl' /> */}
        </div>
      </div>
      <div className='grid grid-cols-2 mt-20 mx-20 gap-5'>
        <div className='border-2 border-yellow-400 rounded-xl image1'>
                    {/* <img src="https://wrogn.com/cdn/shop/files/STORE-WEBSITE-BANNER639X359.webp?v=1722239596" alt="img" /> */}
        </div>
        <div className='grid grid-cols-2 gap-5'>
            <div className='border-2 border-yellow-400 rounded-xl image2'>
            {/* <img src="https://wrogn.com/cdn/shop/files/STORE-WEBSITE-BANNER-308X385.webp?v=1722239595" alt="img" /> */}

            </div>
            <div className='border-2 border-yellow-400 rounded-xl image3'>
            {/* <img src="https://wrogn.com/cdn/shop/files/STORE-WEBSITE-BANNER-308X385-_2.webp?v=1722239595" alt="img" /> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default StoreWallpapers
