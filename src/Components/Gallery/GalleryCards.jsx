import React, { useEffect, useState } from 'react'
import GalleryFooter from './GalleryFooter'
import { useDispatch } from 'react-redux'
import { galleryData } from '../../Redux/action'

const GalleryCards = () => {

  const [data, setData] = useState([])
  const [productData, setProductData] = useState([])
  
  
useEffect(() => {
  fetch("/Json/Gallery.json")
  .then((response) => response.json())
  .then((data) => setData(data))
  .catch((error) => console.error("error Fetching Data:",error));
}, [])


  console.log("data", data);

  const dispatch = useDispatch();

  dispatch(galleryData(data))
  

  return (
    <div className='grid  gap-4 mt-6 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 '>

      {data.map((d) => (
         <div key={d.id} className='bg-green-900  w-fit p-2.5 rounded-xl xs:w-full xs:flex xs:flex-col xs:items-center'>
         <img src={d.image} alt="img" 
         className='w-64 h-80 rounded-xl border border-yellow-300 xs:w-full'
         />
         <GalleryFooter footerdata = {d.footer} />
       </div>
      ))}

   
  </div>
  )
}

export default GalleryCards
