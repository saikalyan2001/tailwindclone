import React, { useState } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {
  addDoc,
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { firestore } from "../../firebase/firebase";

const AddtobagModal = ({ isAdd, setIsAdd, product }) => {
  const [selectedSize, setSelectedSize] = useState();

  const handleSize = (size) => {
    console.log(size);
    setSelectedSize(size.size);
  };

  console.log(selectedSize);

  const sizes = product.sizes;

  console.log("sizes:", sizes);

  console.log("products:", product);

  const handleAddtobag = async (product) => {
    console.log("Clicking");

    const bagRef = collection(firestore, "Bag");
    const normalizedImageUrl = product.image.trim().toLowerCase();
    const checkImageQuery = query(
      bagRef,
      where("imageUrl", "==", normalizedImageUrl)
    );

    try {
      const querySnapshot = await getDocs(checkImageQuery);

      if (!querySnapshot.empty) {
        // Product exists, increase the count
        querySnapshot.forEach(async (doc) => {
          const productRef = doc.ref; // Reference to the existing product document
          await updateDoc(productRef, {
            quantity: doc.data().quantity + 1,
          });
          console.log("Product count increased!");
        });
      } else {
        // Product doesn't exist, add it
        await addDoc(bagRef, {
          imageUrl: product.image.trim().toLowerCase(),
          title: product.title,
          price: product.price,
          size: selectedSize,
          quantity: 1,
          createdAt: new Date(),
        });
        console.log("Product uploaded to Bag Successfully!");
      }
    } catch (error) {
      console.error("Error handling product: ", error);
    }
  };

  return (
    <>
      <div
        className="fixed bg-black  bg-opacity-50 inset-0 z-20"
        onClick={() => {
          setIsAdd(!isAdd);
        }}
      ></div>
      <div className="fixed z-20 top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 flex flex-col  gap-10 bg-white  overflow-auto  rounded-xl w-3/4 h-3/4">
        <div className="flex justify-between sticky top-0 bg-white p-5">
          <h3 className="text-lg font-semibold">Add to bag</h3>
          <div
            onClick={() => {
              setIsAdd(!isAdd);
            }}
          >
            <CloseOutlinedIcon
              className="text-gray-700 cursor-pointer"
              fontSize="small"
            />
          </div>
        </div>

        <div className="flex gap-5 ml-5">
          <div className="flex flex-col gap-3">
            <img src={product.image} alt="img" className="w-20 rounded-md" />
            <img src={product.image} alt="img" className="w-20 rounded-md" />
            <img src={product.image} alt="img" className="w-20 rounded-md" />
            <img src={product.image} alt="img" className="w-20 rounded-md" />
            <img src={product.image} alt="img" className="w-20 rounded-md" />
          </div>
          <div className="flex gap-5">
            <div>
              <img src={product.image} alt="img" className="rounded-xl" />
            </div>
            <div className="ml-5">
              <p className="text-xl font-semibold text-nowrap">
                Rs.{product.price}
                <span className="text-base text-gray-500 font-medium ml-2">
                  MRP: Inclusive of all taxes
                </span>
              </p>
              <p className="text-xl text-gray-900 font-medium">
                {product.title}
              </p>
              <div className="flex justify-between mt-5">
                <p className="text-lg font-semibold">Select Size</p>
                <p className="font-semibold text-pink-600">Size guide</p>
              </div>
              <div className="grid grid-cols-4 mt-5 gap-3 text-center">
                {/* {product.sizes.map((size) => ( */}
                {sizes.map((size, index) => (
                  <p
                    key={index}
                    className={`border border-gray-400 rounded-lg py-2 px-5 text-sm cursor-pointer ${
                      selectedSize === size.size ? "bg-gray-800 text-white font-semibold" : ""
                    } `}
                    onClick={() => {
                      handleSize(size);
                    }}
                  >
                    {size.size}
                  </p>
                ))}
                {/* ))} */}
              </div>
              <button
                className={`text-lg text-gray-400 font-semibold border-2 border-gray-300 py-2 w-full rounded-xl mt-10 ${selectedSize ? 'bg-green-900' : ''}`}
                onClick={() => handleAddtobag(product)}
                disabled={!selectedSize}
              >
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddtobagModal;
