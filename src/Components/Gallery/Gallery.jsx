import React from 'react'
import GalleryCards from './GalleryCards'

const Gallery = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='h-fit flex flex-col items-center bg-orange-100 border-4 border-yellow-300 rounded-xl m-20 p-10 xs:w-96 md:w-fit lg:w-fit xl:w-fit'>
        <h3 className='font-bold text-lg text-center'>WEAR IT LIKE VIRAT</h3>
        <GalleryCards />
      </div>
    </div>
  )
}

export default Gallery
