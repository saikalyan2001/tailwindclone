import React, { useState } from "react";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AddIcon from "@mui/icons-material/Add";

const Filterbar = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    colors: [],
    sizes: [],
    prices: [],
  });

  const [isDropdown, setIsDropdown] = useState({
    category: false,
    color: false,
    price: false,
    size: false,
  });

  const filters = {
    categories: [
      "Blazers",
      "Caps",
      "Cargos",
      "Footwear",
      "Jackets",
      "Sweatshirts",
      "Shorts",
      "Socks",
    ],
    colors: ["Red", "Blue", "Black", "White", "Green", "Yellow"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    prices: ["Under 1000", "1000-2000", "2000-3000", "Above 3000"],
  };

  const toggleFilter = (type, value) => {
    const updatedFilters = selectedFilters[type].includes(value)
      ? selectedFilters[type].filter((item) => item !== value)
      : [...selectedFilters[type], value];
  
    const newFilters = { ...selectedFilters, [type]: updatedFilters };
    setSelectedFilters(newFilters);
    onFilterChange(newFilters); // Pass to parent
  };

  const toggleDropdown = (type) => {
    setIsDropdown({ ...isDropdown, [type]: !isDropdown[type] });
  };

  // Convert price string to a numeric value without commas
  const getNumericPrice = (price) => parseInt(price.replace(/,/g, ''), 10);

  // Function to check if a product price fits within the selected price filter
  const isPriceInRange = (price) => {
    const priceValue = getNumericPrice(price);

    if (selectedFilters.prices.includes("Under 1000") && priceValue < 1000) return true;
    if (selectedFilters.prices.includes("1000-2000") && priceValue >= 1000 && priceValue <= 2000) return true;
    if (selectedFilters.prices.includes("2000-3000") && priceValue >= 2000 && priceValue <= 3000) return true;
    if (selectedFilters.prices.includes("Above 3000") && priceValue > 3000) return true;

    return false;
  };


  

  const renderFilterSection = (type, title) => (
    <div className="mb-8">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => toggleDropdown(type)}
      >
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-gray-500 h-px">
          {isDropdown[type] ? <HorizontalRuleIcon /> : <AddIcon />}
        </p>
      </div>
      {isDropdown[type] && (
        <div className="flex flex-col gap-5">
          {filters[type].map((item) => (
            <div key={item} className="flex justify-between">
              <p className="text-gray-600 font-medium">{item}</p>
              <p
                className="text-gray-400 font-thin cursor-pointer"
                onClick={() => toggleFilter(type, item)}
              >
                {selectedFilters[type].includes(item) ? (
                  <CheckBoxIcon />
                ) : (
                  <CheckBoxOutlineBlankRoundedIcon />
                )}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="ml-20 mt-10 w-60">
      <h2 className="text-xl font-bold">Filters</h2>
      <div className="h-px w-60 bg-gray-300 my-4"></div>

      {/* Category Section */}
      {renderFilterSection("categories", "Category")}

      {/* Color Section */}
      {renderFilterSection("colors", "Color")}

      {/* Price Section */}
      {renderFilterSection("prices", "Price")}

      {/* Size Section */}
      {renderFilterSection("sizes", "Size")}
    </div>
  );
};

export default Filterbar;
