import React from 'react'
import GalleryCards from './GalleryCards'

const Gallery = () => {
  return (
    <div>
      <div className='h-fit bg-orange-100 border-4 border-yellow-300 rounded-xl m-20 p-10'>
        <h3 className='font-bold text-lg text-center'>WEAR IT LIKE VIRAT</h3>
        <GalleryCards />
      </div>
    </div>
  )
}

export default Gallery
