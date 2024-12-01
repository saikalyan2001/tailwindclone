import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Viewall from "./Viewall";
import { useDispatch, useSelector } from "react-redux";
import { sorting } from "../Redux/action";

const SortModal = ({ isSort, setIsSort }) => {
  const [sort, setSort] = useState([
    "Featured",
    "New Arrivals",
    "Best Selling",
    "Price Low to High",
    "Price High to Low",
  ]);


  const dispatch = useDispatch();

  const newSort = useSelector((state) => state.item)

  const handleCheck = (i) => {
    dispatch(sorting(i))
  }

  const handleSortModal = () => {
    setIsSort(!isSort);
  };

  return (
    <>
      <div
        className="fixed bg-gray-300 bg-opacity-50 inset-0 z-10"
        onClick={handleSortModal}
      ></div>

      <div className="fixed top-80 right-40 inset-0 z-20 bg-white flex flex-col  w-fit h-fit px-5 py-3 rounded-3xl ml-auto">
        <div className="flex justify-between">
          <h2 className="w-56">Sort by</h2>
          <div className="cursor-pointer" onClick={handleSortModal}>
            <CloseIcon />
          </div>
        </div>
        <hr className="mt-5" />
        {sort.map((item ,index) => (
          <div key={index} className="m-2">
            <div className="flex gap-4">
              <div className="cursor-pointer" onClick={ () => handleCheck(item)}>
              {newSort == item ? (
                <CheckCircleIcon />
              ) : (
                <RadioButtonUncheckedOutlinedIcon />
              )}
              </div>
              {item}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SortModal;
