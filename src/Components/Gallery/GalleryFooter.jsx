import React, { useEffect, useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { useNavigate } from "react-router-dom";
import ModalGallery from "./ModalGallery";

const GalleryFooter = ({footerdata}) => {

  const { image, title, price, original_price, discount, sizes } = footerdata;

  const [isQuickView,setIsQuickView] = useState(false);

  const navigate = useNavigate();

  const handleProduct = () => {
    navigate("/products", { state: footerdata })
  }

  const handleQuickView = (event) => {
    event.stopPropagation();
    setIsQuickView(!isQuickView)
    console.log("Quick View");
  }

  // console.log("sizes:", sizes);
  

  return (
   <>
       <div className="flex gap-2 bg-white p-3 mt-3 rounded-lg cursor-pointer" onClick={handleProduct}>
       <img
         src={image}
         alt="img"
         className="w-20 h-40 rounded-sm"
       />
       <div className="flex flex-col gap-10">
           <div className="flex flex-col gap-2">
             <p className="text-xs text-gray-800">
               {title}
             </p>
             <div className="text-sm font-semibold">
              <div className="flex">
              <p className=" flex items-center">
              <CurrencyRupeeIcon style={{fontSize: "14px"}} />
              {price}
              </p>
               <span className="text-gray-400 line-through ml-2">
                 <CurrencyRupeeIcon style={{fontSize: "14px"}} />
                 {original_price}
               </span>{" "}
              </div>
               <br /> <span className="text-green-600 text-xs">({discount})</span>
             </div>
           </div>
         <div className="flex gap-2 text-nowrap">
           <button className="border border-gray-400 text-xs font-medium w-fit px-3 py-1" disabled={isQuickView} onClick={handleQuickView}>
             QUICK VIEW
           </button>
           <button className="border border-gray-400 text-xs text-pink-600 font-thin w-fit px-1 py-1">
             <ArrowOutwardRoundedIcon />
           </button>
         </div>
       </div>
     </div>

     {isQuickView ? <ModalGallery Data={footerdata} isQuickView={isQuickView} setIsQuickView={setIsQuickView} /> : ''}     
   </>

  );
};

export default GalleryFooter;
