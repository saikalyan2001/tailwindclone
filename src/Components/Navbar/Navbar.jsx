import React, { useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link, useNavigate } from "react-router-dom";
import Bag from "../../Bag/Bag";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handlePage = () => {
    navigate("/allproducts");
  };

  const handleBag = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-around items-center  bg-white  p-4 sticky top-0 z-20">
        <div className="flex items-center gap-10">
          <Link to={"/"}>
            <img
              src="https://wrogn.com/cdn/shop/files/logo_icon_1.svg?v=1721736419&width=50"
              alt="brand-logo"
              className="w-12 cursor-pointer"
            />
          </Link>

          <ul className="flex gap-10 font-bold text-xs cursor-pointer">
            <li onClick={() => handlePage()}>ALL PRODUCTS</li>
            <li>TOPWEAR</li>
            <li>BOTTOMWEAR</li>
            <li>FOOTWEAR</li>
            <li>ESSENTIALS</li>
            <li>COLLABORATIONS</li>
          </ul>
        </div>

        <div className="flex items-center gap-5 cursor-pointer">
          <div className="border-2 rounded-lg py-2 px-4">
            <SearchRoundedIcon />
            <input
              className=" outline-none ml-2 w-28 text-xs font-semibold"
              type="text"
              placeholder="SEARCH"
            />
          </div>
          <div className="cursor-auto">
            <Link to={"/profile"}>
            <PersonOutlineOutlinedIcon />
            </Link>
          </div>
          <div>
            <Link to={"/wishlist"}>
            <FavoriteBorderOutlinedIcon />
            </Link>
          </div>
          <div onClick={handleBag}>
            <ShoppingBagOutlinedIcon />
          </div>
        </div>
      </div>
      {isOpen && <Bag isOpen={isOpen} setIsOpen={setIsOpen} />}

    </>
  );
};

export default Navbar;
