import React from 'react'
import StoreWallpapers from './StoreWallpapers'

const Wallpapers = () => {
  return (
    <div>
      <h1 className='text-center font-bold text-xl mt-10'>COOL WALLPAPERS</h1>
      <div className='grid grid-cols-3 gap-10 mx-52'> 
        <img src="https://wrogn.com/cdn/shop/files/Website-Banner3.png?v=1722942513&width=360" alt="img" className='rounded-xl' />
        <img src="https://wrogn.com/cdn/shop/files/Website-Banner1.png?v=1722942511&width=360" alt="img" className='rounded-xl' />
        <img src="https://wrogn.com/cdn/shop/files/Website-Banner2.png?v=1722942511&width=360" alt="img" className='rounded-xl' />
      </div>
      <StoreWallpapers />
    </div>
  )
}

export default Wallpapers
