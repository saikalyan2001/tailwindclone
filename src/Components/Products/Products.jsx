import React, { useState } from "react";
import { CurrencyRupeeOutlined } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Products = () => {
  const [isFav, setIsFav] = useState(false);

  const handleFav = () => {
    setIsFav(!isFav);
  };

  return (
    <div className="flex gap-8 mt-10 mx-20 w-full">
      <div className="w-1/2 grid grid-cols-2 gap-2">
        <img
          src="https://wrogn.com/cdn/shop/files/VM4.jpg?v=1730264880"
          alt="img"
          className="rounded-2xl"
        />
        <img
          src="https://wrogn.com/cdn/shop/files/4_7742c6c3-f747-4263-be0a-4098d35b5075.jpg?v=1730109677&width=360"
          alt="img"
          className="rounded-2xl"
        />
        <img
          src="https://wrogn.com/cdn/shop/files/7_85e747ec-ec62-4233-b1a8-b28582252e2c.jpg?v=1730109677&width=360"
          alt="img"
          className="rounded-2xl"
        />
        <img
          src="https://wrogn.com/cdn/shop/files/5_0172e7f6-30d3-4a1d-bbb0-a7e8ac3f8c6b.jpg?v=1730109677&width=360"
          alt="img"
          className="rounded-2xl"
        />
      </div>
      <div>
        <div className="flex justify-between">
          <p className="font-bold text-2xl flex gap-2 items-center">
            <CurrencyRupeeOutlined /> 2,999{" "}
            <span className="text-base text-gray-500 font-medium">
              MRP: Inclusive of all taxes
            </span>
          </p>
          <ShareOutlinedIcon />
        </div>
        <p className="mt-4 text-lg">Blue Daze Hooded Shirt</p>

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
          <div className="grid grid-cols-5 mt-5 gap-3 text-center">
            <p className="border border-gray-400 rounded-lg py-2 px-5 text-sm">
              S
            </p>
            <p className="border border-gray-400 rounded-lg py-2 px-5 text-sm">
              M
            </p>
            <p className="border border-gray-400 rounded-lg py-2 px-5 text-sm">
              L
            </p>
            <p className="border border-gray-400 rounded-lg py-2 px-5 text-sm">
              XL
            </p>
            <p className="border border-gray-400 rounded-lg py-2 px-5 text-sm">
              {" "}
              2XL
            </p>
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
              <p className="text-center">Machine <br /> Wash</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <img
                src="https://wrogn.com/cdn/shop/t/139/assets/cold_wash_only.svg?v=153873361698850470771722944842"
                alt="img"
                className="w-20"
              />
              <p className="text-center">Cold wash <br /> only</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <img
                src="https://wrogn.com/cdn/shop/t/139/assets/reverse_and_dry.svg?v=162116787637824673331722944848"
                alt="img"
                className="w-20"
              />
              <p className="text-center">Reverse and <br /> dry</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <img
                src="https://wrogn.com/cdn/shop/t/139/assets/avoid_direct_sun.svg?v=172272200500590539211722944841"
                alt="img"
                className="w-20"
              />
              <p className="text-center">Avoid direct <br /> sun</p>
            </div>

          </div>
        
        </div>

        <div className="mt-8">
          <h3 className="font-semibold text-xl">Product Information</h3>

          <div className="mt-10">
            <div className="flex gap-4">
              <img src="https://wrogn.com/cdn/shop/t/139/assets/icon-product-desc.svg?v=5693077646890846751722254987" alt="img" className="text-2xl" />
              <div className="flex justify-between w-full">
                <div>
                <p className="text-lg font-semibold">Product Description</p>
                <p className="text-gray-600">Details and Highlights</p>
                </div>
              <KeyboardArrowDownIcon />
              </div>
            </div>

          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Products;
