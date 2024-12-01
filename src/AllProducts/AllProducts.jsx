import React from "react";
import Filterbar from "./Filterbar";
import NewArrivals from "../Components/NewArrivals/NewArrivals";
import Viewall from "./Viewall";

const AllProducts = () => {
  return (
    <>

      <div>
        <div className="mx-20 mt-10">
          <img
            src="https://wrogn.com/cdn/shop/files/SamayD.jpg?v=1730206294"
            alt="img"
            className="rounded-3xl"
          />
        </div>
        <div className="mt-5 mx-20">
          <p className="text-xs mb-6">HOME / ALL PRODUCTS / VIEW ALL </p>

          <p className="text-2xl font-bold flex items-center gap-3">
            VIEW ALL{" "}
            <span className="text-base font-medium text-gray-500">
              1626 Products
            </span>
          </p>
        </div>
      </div>
      <div className="flex">
      {/* <Filterbar /> */}
      <Viewall />
      </div>
    </>
  );
};

export default AllProducts;
