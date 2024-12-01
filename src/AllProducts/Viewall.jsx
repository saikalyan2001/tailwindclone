import React, { useEffect, useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import SortModal from "./SortModal";
import Filterbar from "./Filterbar";
import { useSelector } from "react-redux";

const Viewall = ({selectItem}) => {

  const [isSort, setIsSort] = useState(false);
  const [isGrid4, setIsGrid4] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const newSortVal = useSelector((state) => state.item)
  console.log("newSortVal:", newSortVal);
  
  const sortedProducts = 
  newSortVal === "New Arrivals" 
  ? products 
  : products.filter((product) => product.sort === newSortVal);

  // Fetch data from the JSON file
  useEffect(() => {
    fetch('/Json/Viewall.json') // Make sure the path is correct
      .then((response) => response.json())
      .then((data) => { 
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);


  const priceRanges = [
    { label: "Under 1000", min: 0, max: 999 },
    { label: "1000-2000", min: 1000, max: 2000 },
    { label: "2000-3000", min: 2000, max: 3000 },
    { label: "3000-4000", min: 3000, max: 4000 },
    { label: "4000-5000", min: 4000, max: 5000 },
    // Add more ranges as needed
    { label: "Above 5000", min: 5001, max: Infinity }
  ];
  
  const getDisplayedProducts = () => {
    let displayedProducts = [...products];
  
    // Apply filters
    if (selectedFilters.categories?.length > 0) {
      displayedProducts = displayedProducts.filter((product) =>
        selectedFilters.categories.includes(product.category)
      );
    }
  
    if (selectedFilters.colors?.length > 0) {
      displayedProducts = displayedProducts.filter((product) =>
        product.color.some((color) => selectedFilters.colors.includes(color))
      );
    }
  
    if (selectedFilters.sizes?.length > 0) {
      displayedProducts = displayedProducts.filter((product) =>
        product.size.some((size) => selectedFilters.sizes.includes(size))
      );
    }
  
    if (selectedFilters.prices?.length > 0) {
      displayedProducts = displayedProducts.filter((product) => {
        const price = parseFloat(product.price.replace(",", ""));
        return selectedFilters.prices.some((range) => {
          const selectedRange = priceRanges.find((r) => r.label === range);
          return selectedRange && price >= selectedRange.min && price <= selectedRange.max;
        });
      });
    }
  
    // Apply sorting
    if (newSortVal !== "New Arrivals") {
      displayedProducts = displayedProducts.filter((product) => product.sort === newSortVal);
    }
  
    return displayedProducts;
  };
  
  const displayedProducts = getDisplayedProducts();
  
  

  const handleSort = () => {
    console.log("sorting...");
    
    setIsSort(!isSort);
  }

  const handleGrid4 = () => {
    setIsGrid4(!isGrid4)
  }

 


  return (
    <div className="flex">
    <Filterbar onFilterChange={setSelectedFilters} />
    <div className="w-2/3 ml-10">
      
      <div className="flex gap-5 justify-end">

      <div className={isGrid4 ? "border border-black rounded-lg w-fit p-2 flex gap-0.5 cursor-pointer" : "border border-black rounded-lg w-fit p-2 flex gap-0.5 cursor-pointer opacity-50"} onClick={handleGrid4}>
      <div className="border border-black w-2.5 h-6 rounded">
      </div>
      <div className="border border-black w-2.5 h-6 rounded">
      </div>
      <div className="border border-black w-2.5 h-6 rounded">
      </div>
      <div className="border border-black w-2.5 h-6 rounded">
      </div>
      </div>

      <div className={isGrid4 ? "border border-black rounded-lg w-fit p-2 flex gap-0.5 cursor-pointer opacity-50" : "border border-black rounded-lg w-fit p-2 flex gap-0.5 cursor-pointer"} onClick={handleGrid4}>
      <div className="border border-black w-2.5 h-6 rounded">
      </div>
      <div className="border border-black w-2.5 h-6 rounded">
      </div>
      <div className="border border-black w-2.5 h-6 rounded">
      </div>
      </div>
      </div>



      <div className="border border-gray-400 relative py-2 px-5 w-fit rounded-xl ml-auto mt-5 cursor-pointer" onClick={handleSort}>
        <div>
          <SortOutlinedIcon />
          <span className="ml-2 font-bold text-gray-800">Sort by ({newSortVal})</span> 
        </div>
      </div>
      {isSort && <SortModal isSort={isSort} setIsSort={setIsSort} />}




      <div className={isGrid4 ? "grid grid-cols-4 gap-4 mt-5 justify-items-center" : "grid grid-cols-3 gap-4 mt-5 justify-items-center"}>


        {displayedProducts.map((product) => (
                  <div key={product.id} className="cursor-pointer">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-auto rounded-xl"
                    />
                    <div className="absolute top-3 right-3 bg-white rounded-full p-1">
                      <FavoriteBorderOutlinedIcon />
                    </div>
                    <p className="absolute top-3 text-xs bg-pink-500 text-white p-1 rounded-tr-md rounded-br-md">
                      FRESH ARRIVALS
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 mt-2">
                    <p className="font-semibold text-lg">
                      <CurrencyRupeeIcon /> {product.price}
                    </p>
                    <p className="text-sm text-nowrap">{product.title}</p>
                    <button className="border border-gray-400 rounded-lg py-2 px-16 font-semibold">
                      Add to Bag
                    </button>
                  </div>
                </div>
        ))}

      </div>


    </div>
    </div>
  );
};

export default Viewall;
