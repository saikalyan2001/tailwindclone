import React, { useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { Link, useNavigate } from "react-router-dom";
import Bag from "../../Bag/Bag";
import Menubar from "./Menubar";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMenubar, setIsMenubar] = useState(false);

  const handlePage = () => {
    navigate("/allproducts");
  };

  const handleBag = () => {
    setIsOpen(!isOpen);
  };

  const handleMenubar = () => {
    setIsMenubar(!isMenubar)
  }

  return (
    <>
      <div className="flex justify-between items-cente bg-white  p-4 sticky top-0 z-20 mb-4 xs:border-b-2 xl:border-0">
        <div className="flex items-center gap-4">
          <div className="xl:hidden" onClick={handleMenubar}>
            <DragHandleIcon />
          </div>
          <Link to={"/"}>
            <img
              src="https://wrogn.com/cdn/shop/files/logo_icon_1.svg?v=1721736419&width=50"
              alt="brand-logo"
              className="cursor-pointer xs:w-7 xl:w-12"
            />
          </Link>

          <ul className="gap-10 font-bold text-xs cursor-pointer xs:hidden xl:flex">
            <li onClick={() => handlePage()}>ALL PRODUCTS</li>
            <li>TOPWEAR</li>
            <li>BOTTOMWEAR</li>
            <li>FOOTWEAR</li>
            <li>ESSENTIALS</li>
            <li>COLLABORATIONS</li>
          </ul>
        </div>

        <div className="flex items-center gap-5 cursor-pointer">
          <div className="xs:cursor-default  xl:border-2 xl:rounded-lg xl:py-2 xl:px-4">
            <SearchRoundedIcon />
            <input
              className="outline-none text-xs font-semibold xs:invisible xs:w-0 xs:ml-0  xl:visible xl:w-28 xl:ml-2"
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
      {isMenubar && <Menubar isMenubar={isMenubar} setIsMenubar={setIsMenubar} /> }

    </>
  );
};

export default Navbar;
