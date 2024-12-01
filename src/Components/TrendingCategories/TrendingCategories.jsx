import React from 'react'

const TrendingCategories = () => {
  return (
    <div className='mt-20'>
        <h3 className='text-center text-xl font-bold'>TRENDING CATEGORIES</h3>
        <div className='grid grid-cols-2 gap-5 mt-5 mx-20'>
            <img src="https://wrogn.com/cdn/shop/files/Sweat-Big.webp?v=1723202203" alt="img" className='rounded-xl' />
            <img src="https://wrogn.com/cdn/shop/files/Oversized-Big_9f65684a-c343-4d34-8934-6d80b4c844b7.webp?v=1723202203" alt="img" className='rounded-xl' />
        </div>
        <div className='grid grid-cols-3 gap-5 mt-5 mx-20'>
            <img src="https://wrogn.com/cdn/shop/files/Cargos_1c53fbe5-1669-46b2-af8d-303fd6c4dd82.webp?v=1723202203" alt="img" className='rounded-xl' />
            <img src="https://wrogn.com/cdn/shop/files/Resort-Collar_000c463d-8a68-424a-b3db-7e6fa3450b34.webp?v=1723202204" alt="img" className='rounded-xl' />
            <img src="https://wrogn.com/cdn/shop/files/Flat-Knit.webp?v=1723202203" alt="img" className='rounded-xl' />
        </div>
    </div>
  )
}

export default TrendingCategories
