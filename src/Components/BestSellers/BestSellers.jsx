import React from 'react'

const BestSellers = () => {
  return (
    <div>
      <h1 className='mt-20 text-center font-bold text-xl'>BEST SELLERS</h1>
      <div className='grid grid-cols-4 gap-4 mt-5 mx-20'>
        <img src="https://wrogn.com/cdn/shop/files/DenimJackets_c415ea9a-8659-4d02-897d-13c52289f280.webp?v=1723229230&width=360" alt="img" className='rounded-xl' />
        <img src="https://wrogn.com/cdn/shop/files/Oversized-Shirts_053699c4-b396-45f3-9052-fb07fce1cefe.webp?v=1723229229&width=360" alt="img" className='rounded-xl' />
        <img src="https://wrogn.com/cdn/shop/files/Resort-Collar_9643239e-4945-464b-ae49-f94a42fcad51.webp?v=1723203681&width=360" alt="img" className='rounded-xl' />
        <img src="https://wrogn.com/cdn/shop/files/Cargos_786e765b-c7d4-453e-a58d-08883e1d649a.webp?v=1723203680&width=360" alt="img" className='rounded-xl' />
      </div>
    </div>
  )
}

export default BestSellers
