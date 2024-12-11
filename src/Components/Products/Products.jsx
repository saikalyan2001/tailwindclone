import React, { useEffect, useState } from "react";
import { CurrencyRupeeOutlined, KeyboardArrowUp } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Products = () => {
  const [isFav, setIsFav] = useState(false);
  const [isDrop, setIsDrop] = useState(false);
  const [productIndex, setProductIndex] = useState();
  const [productInfo, setProductInfo] = useState([]);
  const [products, setProducts] = useState([])
  const [selectedSize, setSelectedSize] = useState();


  const location = useLocation();
  const productDetails = location.state;

  if (!productDetails) {
    console.log("no products ...");    
  }

  else {
    console.log("productDetails", productDetails.image);
    
  }

  const handleSize = (size) => {
    console.log(size);
    setSelectedSize(size.size);
  };

  console.log("products:", products);
  // console.log("products 2:", products[0]);
  // console.log("products 3:", products[0].label);
  
  // console.log("size:",products[0].sizes[0].size);

  // console.log("selectedSize",selectedSize);


  const gallery = useSelector((state) => state)

  console.log("get gallery:", gallery);

  const {image} = gallery
  

  
  


  useEffect(() => {
    console.log("Fetching products");
    fetch("/Json/NewArrivals.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching the products:", error));
  }, []);
  
  
  console.log("products:", products);
  

  console.log("productInfo", productInfo);

  const handleFav = () => {
    setIsFav(!isFav);
  };

  const handleDropText = (index) => {
    setIsDrop(!isDrop);
    setProductIndex(index);
  };

  useEffect(() => {
    fetch("/Json/Products.json")
      .then((response) => response.json())
      .then((data) => setProductInfo(data));
  }, []);

  

  return (
    <div className="mx-20 mt-4">
      <div className="text-sm">
        Home / ALL PRODUCTS / Believe in
        Naruto Beige Sweatshirt
      </div>

         <div className="mt-4 grid grid-cols-2 gap-10">

         <div className="grid grid-cols-2 gap-1 h-96">
             <img
               src={productDetails.image || productDetails.imageUrl}
               alt="img"
               className="rounded-2xl"
             />
   
             <img
               src={productDetails.image || productDetails.imageUrl}
               alt="img"
               className="rounded-2xl"
             />
             <img
               src={productDetails.image || productDetails.imageUrl}
               alt="img"
               className="rounded-2xl"
             />
   
             <img
               src={productDetails.image || productDetails.imageUrl}
               alt="img"
               className="rounded-2xl"
             />
             <img
               src={productDetails.image || productDetails.imageUrl}
               alt="img"
               className="rounded-2xl"
             />
   
             <img
               src={productDetails.image || productDetails.imageUrl}
               alt="img"
               className="rounded-2xl"
             />
         </div>
   
          <div className="m-0 p-0">
           <div className="flex justify-between">
             <p className="font-bold text-2xl flex gap-2 items-center">
               <CurrencyRupeeOutlined /> {productDetails.price}
             </p>
             <ShareOutlinedIcon />
           </div>
           <p className="text-base text-gray-500 font-medium mt-2">
                 MRP: Inclusive of all taxes
               </p>
           <p className="mt-4 text-lg">{productDetails.title}</p>
   
           <div className="bg-gray-200 h-px mt-6"></div>
   
           <div className="mt-4 border p-4 rounded-2xl flex gap-2 items-center bg-blue-50 w-fit">
             <img
               src="https://wrogn.com/cdn/shop/t/139/assets/icon-offergift.svg?v=84328268353463031721628886"
               alt=""
             />
             <p className="text-green-600 font-bold">
               WROGN10 <br />
               <span className="text-gray-600 font-medium text-sm">
                 Get an extra 10% discount on <br /> your purchase above 3000.
               </span>
             </p>
             <p className="font-semibold">1/3</p>
           </div>
   
           <div className="">
             <div className="flex justify-between mt-5">
               <p className="text-lg font-semibold">Select Size</p>
               <p className="font-semibold text-pink-600">Size guide</p>
             </div>
             <div className="grid grid-cols-4 mt-5 gap-3 text-center">
                   {/* {product.sizes.map((size) => ( */}
                 {products.map((product, index) => (
                                 <div>
   
                     <p
                       key={index}
                       // className={`border border-gray-400 rounded-lg py-2 px-5 text-sm cursor-pointer ${
                       //   selectedSize !== product.sizes.size ? "bg-gray-800 text-white font-semibold" : ""
                       // } `}
                       onClick={() => {
                         // handleSize(product.sizes.size);
                       }}
                     >
                       {/* {product.category} */}
                     </p>
                                   {product.sizes.map((size) => (
                                     <p>{size.size}</p>
                 ))}
                 </div>
   
                   ))}
   
                   {/* ))} */}
                 </div>
             <div className="flex gap-4">
               <button
                 className="text-lg font-semibold border border-gray-400 py-4 px-4  w-full rounded-xl mt-10"
                 onClick={handleFav}
               >
                 {" "}
                 {isFav ? (
                   <p>
                     <FavoriteIcon style={{ fontSize: "18", color: "red" }} />{" "}
                     Wishlisted
                   </p>
                 ) : (
                   <p>
                     <FavoriteBorderIcon style={{ fontSize: "18" }} /> Wishlist
                   </p>
                 )}
               </button>
               <button className="text-lg text-white bg-green-950 font-bold border-2 py-4 px-4 w-full rounded-xl mt-10">
                 Add to Bag
               </button>
             </div>
           </div>
   
           <div className="mt-10">
             <h3 className="font-semibold text-xl">Check delivery</h3>
             <div className="mt-4 flex gap-2">
               <input
                 type="text"
                 placeholder="Enter Pincode"
                 className="border border-gray-400 p-2 px-4 rounded-lg w-full"
               />
               <button className="border border-rose-500 bg-rose-100 font-semibold p-3 px-4 text-rose-600 rounded-lg">
                 Check
               </button>
             </div>
           </div>
   
           <div className="mt-6">
             <h3 className="font-semibold text-xl">Key Highlights</h3>
             <div className="mt-4 grid grid-cols-2 gap-6">
               <div>
                 <p className="text-gray-600 font-semibold">Color</p>
                 <p className="font-medium text-lg">Navy Blue</p>
   
                 <div className="bg-gray-200 h-px mt-6"></div>
               </div>
   
               <div>
                 <p className="text-gray-600 font-semibold">Pattern</p>
                 <p className="font-medium text-lg">Checkered</p>
   
                 <div className="bg-gray-200 h-px mt-6"></div>
               </div>
               <div>
                 <p className="text-gray-600 font-semibold">Brand Fabric</p>
                 <p className="font-medium text-lg">Pure Cotton</p>
   
                 <div className="bg-gray-200 h-px mt-6"></div>
               </div>
               <div>
                 <p className="text-gray-600 font-semibold">Fit</p>
                 <p className="font-medium text-lg">Oversized</p>
   
                 <div className="bg-gray-200 h-px mt-6"></div>
               </div>
               <div>
                 <p className="text-gray-600 font-semibold">Sleeve</p>
                 <p className="font-medium text-lg">Full Sleeve</p>
               </div>
               <div>
                 <p className="text-gray-600 font-semibold">Collar</p>
                 <p className="font-medium text-lg">Hood</p>
               </div>
             </div>
           </div>
   
           <div className="mt-10">
             <h3 className="font-semibold text-lg mb-4">Wash Care</h3>
   
             <div className="flex gap-10">
               <div className="flex flex-col gap-2 items-center">
                 <img
                   src="https://wrogn.com/cdn/shop/t/139/assets/machine_wash.svg?v=25890296179787405311722944847"
                   alt="img"
                   className="w-20"
                 />
                 <p className="text-center">
                   Machine <br /> Wash
                 </p>
               </div>
               <div className="flex flex-col gap-2 items-center">
                 <img
                   src="https://wrogn.com/cdn/shop/t/139/assets/cold_wash_only.svg?v=153873361698850470771722944842"
                   alt="img"
                   className="w-20"
                 />
                 <p className="text-center">
                   Cold wash <br /> only
                 </p>
               </div>
               <div className="flex flex-col gap-2 items-center">
                 <img
                   src="https://wrogn.com/cdn/shop/t/139/assets/reverse_and_dry.svg?v=162116787637824673331722944848"
                   alt="img"
                   className="w-20"
                 />
                 <p className="text-center">
                   Reverse and <br /> dry
                 </p>
               </div>
               <div className="flex flex-col gap-2 items-center">
                 <img
                   src="https://wrogn.com/cdn/shop/t/139/assets/avoid_direct_sun.svg?v=172272200500590539211722944841"
                   alt="img"
                   className="w-20"
                 />
                 <p className="text-center">
                   Avoid direct <br /> sun
                 </p>
               </div>
             </div>
           </div>
   
           <div className="mt-8">
             <h3 className="font-semibold text-xl">Product Information</h3>
   
             <div className="mt-10 cursor-pointer">
               {productInfo.map((info, index) => (
                 <div
                   className="flex justify-center w-4/5  gap-4"
                   onClick={() => handleDropText(index)}
                 >
                   <div>
                     <img src={info.image} alt="img" className="text-2xl" />
                   </div>
                   <div>
                     <div className="flex gap-60 w-full">
                       <div>
                         <p className="text-lg font-semibold">{info.title}</p>
                         <p className="text-gray-600">{info.tag}</p>
                       </div>
                       <div>
                         {isDrop ? <KeyboardArrowUp /> : <KeyboardArrowDownIcon />}
                       </div>
                     </div>
   
                     {isDrop && productIndex == index ? (
                       <div className="w-96 mt-4">
                         <h2>{info.desctitle}</h2>
                         <p>{info.description}</p>
                         <br />
                         <h2>{info.desctitle2}</h2>
                         <p>{info.description2}</p>
                         <br />
   
                         <h2>{info.desctitle3}</h2>
                         <p>{info.description3}</p>
   
                         <h2>{info.desctitle4}</h2>
                         <p>{info.description4}</p>
   
                         <h2>{info.desctitle5}</h2>
                         <p>{info.description5}</p>
                       </div>
                     ) : (
                       ""
                     )}
   
                     <hr className="mt-4" />
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </div>    
   
         </div>
     
    </div>
  );
};

export default Products;
