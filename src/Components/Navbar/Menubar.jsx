import { Link } from "react-router-dom";
import { ArrowForward, Close } from "@mui/icons-material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";import React, { useEffect, useState } from "react";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Menubar = ({ isMenubar, setIsMenubar }) => {

    const [productsData, setProductsData] = useState([])

    useEffect(() => {
        fetch("/Json/Menubar.json")
        .then((response) => response.json())
        .then((data) => setProductsData(data))
    }, [])


    console.log("productsData:", productsData);
    

  return (
    <>
      <div className="w-full h-full fixed inset-0 z-20 bg-white overflow-auto">
        <div className="flex justify-between items-center bg-white p-5  w-full fixed top-0 left-0 shadow">
          <Link to={"/"} onClick={() => setIsMenubar(!isMenubar)}>
            <img
              src="https://wrogn.com/cdn/shop/files/logo_icon_1.svg?v=1721736419&width=50"
              alt="brand-logo"
              className="cursor-pointer w-7"
            />
          </Link>
          <div onClick={() => setIsMenubar(!isMenubar)}>
          <Close />

          </div>
        </div>


        <div className="mx-10 my-20">
        {productsData.map((data) => (
              <div>
                            <Link to={"/allproducts"} onClick={() => setIsMenubar(!isMenubar)}>

                      <div className="flex justify-between items-center my-4 ">
                    <div className="flex items-center gap-4">
                    <img src={data.img} alt="all products"
                    className="w-12"
                     />
                    <p>{data.type}</p>
                    </div>
                    <ArrowForward />
                    
                </div>

                </Link >

                <hr />

              </div>
                
        ))}
        </div>

        <div className="fixed bottom-0 z-20 bg-white w-full ">
          <div className="flex justify-between mx-6 p-4 border-2 rounded-2xl mb-6">
            <div className="flex flex-col items-center gap-2 cursor-pointer">
              <div><PersonOutlineOutlinedIcon/></div>
              <p>ACCOUNT</p>
            </div>

            <div className="flex flex-col items-center gap-2 cursor-pointer">
              <div><ShoppingBagOutlinedIcon/></div>
              <p>ORDERS</p>
            </div>
            <div className="flex flex-col items-center gap-2 cursor-pointer">
              <div><HelpOutlineIcon/></div>
              <p>SUPPORT</p>
            </div>
          </div>

          <div className="border rounded-2xl border-red-500 mb-2 text-red-600 font-bold text-center p-4 mx-6 ">
            <p>Logout</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default Menubar;
