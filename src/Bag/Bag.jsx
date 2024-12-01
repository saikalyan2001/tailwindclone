import { CloseOutlined, CurrencyRupee } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import "./Bag.css";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { dex, size } from "../Redux/action";

const Bag = ({ isOpen, setIsOpen }) => {
  const [products, setProducts] = useState([]);
  const [formattedTotal, setFormattedTotal] = useState("");
  const [isDrop, setIsDrop] = useState(false);
  const [sizeIndex, setSizeIndex] = useState();
  const [isUpdated, setIsUpdated] = useState(false);
  const [updatedSize, setUpdatedSize] = useState();

  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  console.log("state is:", state);

  const newUpdatedSize = state.newSize;
  console.log("newUpdatedSize:", newUpdatedSize);

  const newUpdatedIndex = state.newIndex;
  console.log("newUpdatedIndex:", newUpdatedIndex);

  const handleSizeDropDown = (index) => {
    console.log("yes Yes");
    console.log("index:", index);
    setSizeIndex(index);
    setIsDrop(!isDrop);

    dispatch(dex(index));

    setTimeout(() => {
      setSizeIndex(null);
    }, 100);
  };

  const handleSize = (i) => {
    console.log("i", i);

    console.log("no no no");
    setUpdatedSize(i);
    setIsUpdated(!isUpdated);
    setIsDrop(!isDrop);

    dispatch(size(i));
    setTimeout(() => {
      setUpdatedSize(null);
    }, 100); // Adjust delay if needed
  };

  console.log("updatedSize:", updatedSize);
  console.log("SizeIndex:", sizeIndex);

  useEffect(() => {
    const fetchProducts = async () => {
      const bagCollection = collection(firestore, "Bag");
      const querySnapshot = await getDocs(bagCollection);
      const productList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Calculate the grand total when products change
    const grandTotal = products.reduce(
      (acc, product) =>
        acc + parseFloat(product.price.replace(/,/g, "")) * product.quantity,
      0
    );

    // Format the total with commas and set the formatted total
    setFormattedTotal(
      new Intl.NumberFormat("en-IN").format(grandTotal.toFixed(2))
    );
  }, [products]);

  const handleDelete = async (productId) => {
    try {
      // Delete product from Firestore
      const productDoc = doc(firestore, "Bag", productId);
      await deleteDoc(productDoc);

      // Update local state to remove the product
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleIncrement = async (productId, currentQuantity) => {
    const newQuantity = currentQuantity + 1;

    try {
      // Update Firestore
      const productDoc = doc(firestore, "Bag", productId);
      await updateDoc(productDoc, { quantity: newQuantity });

      // Update local state
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === productId
            ? { ...product, quantity: newQuantity }
            : product
        )
      );
    } catch (error) {
      console.error("Error incrementing quantity:", error);
    }
  };

  const handleDecrement = async (productId, currentQuantity) => {
    if (currentQuantity <= 1) return; // Prevent quantity from going below 1
    const newQuantity = currentQuantity - 1;

    try {
      // Update Firestore
      const productDoc = doc(firestore, "Bag", productId);
      await updateDoc(productDoc, { quantity: newQuantity });

      // Update local state
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === productId
            ? { ...product, quantity: newQuantity }
            : product
        )
      );
    } catch (error) {
      console.error("Error decrementing quantity:", error);
    }
  };

  const Sizes = [
    { size: "S" },
    { size: "M" },
    { size: "L" },
    { size: "XL" },
    { size: "2XL" },
  ];

  return (
    <>
      <div
        className="fixed bg-black bg-opacity-50 inset-0 z-20 "
        onClick={() => setIsOpen(!isOpen)}
      ></div>

      {isOpen && (
        <div className="fixed bg-white text-nowrap top-0 right-0  h-full w-2/5 z-20 overflow-auto">
          <div className="fixed top-0 bg-white w-2/5 p-6">
            <div className="flex justify-between">
              <h3 className="font-semibold text-xl">My Bag</h3>
              <div onClick={() => setIsOpen(!isOpen)}>
                <CloseOutlined
                  className="text-gray-700 cursor-pointer"
                  fontSize="small"
                />
              </div>
            </div>
          </div>

          <div className="bg-green-200 p-2 mt-20">
            <p className="text-green-900 text-sm font-semibold text-center">
              Sale ends in <span>05H : 40M : 37S</span>
            </p>
          </div>

          {products.map((product, index) => (
            <div
              key={product.id}
              className="flex gap-4 m-8 p-4 border border-gray-400 rounded-xl w-fit"
            >
              <img
                src={product.imageUrl}
                alt="img"
                className="w-32 rounded-md"
              />
              <div className="relative">
                <div className="flex gap-40">
                  <p className="font-semibold">
                    <CurrencyRupee fontSize="" />
                    {product.price}
                  </p>
                  <DeleteOutlinedIcon
                    className="text-gray-500 cursor-pointer"
                    onClick={() => handleDelete(product.id)}
                  />
                </div>
                <p className="text-gray-900 text-sm mt-2">{product.title}</p>
                <p className="text-gray-500 text-sm mt-4">Colour : Pink</p>
                <div className="flex gap-2">
                  <div
                    className="flex gap-2 items-center border border-gray-400 font-semibold text-sm w-fit p-1.5 rounded mt-3 cursor-pointer"
                    onClick={() => handleSizeDropDown(index)}
                  >
                    <p>
                      Size:{" "}
                      {newUpdatedSize && newUpdatedIndex === index
                        ? newUpdatedSize
                        : product.size}
                    </p>
                    <div>
                      <ArrowDropDownIcon />
                    </div>
                  </div>

                  <div className="flex gap-4 items-center border border-gray-400 font-semibold text-sm w-fit p-1.5 rounded mt-3">
                    <RemoveIcon
                      className={`text-gray-500 cursor-pointer ${
                        product.quantity <= 1
                          ? "text-gray-300 cursor-default"
                          : ""
                      }`}
                      style={{ fontSize: "16px" }}
                      onClick={() => {
                        if (product.quantity > 1)
                          handleDecrement(product.id, product.quantity);
                      }}
                    />
                    <p>{product.quantity}</p>
                    <AddIcon
                      className="text-gray-500 cursor-pointer"
                      style={{ fontSize: "16px" }}
                      onClick={() =>
                        handleIncrement(product.id, product.quantity)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {isDrop ? (
            <div className="absolute mt-px flex flex-col gap-2 bg-white border border-gray-400 rounded text-center z-10 overflow-auto font-medium w-fit h-28 px-5 cursor-pointer">
              {Sizes.map((size, i) => (
                <p
                  key={i}
                  onClick={() => handleSize(size.size)}
                  className={`${
                    newUpdatedSize === size.size ? "bg-pink-600" : ""
                  }`}
                >
                  {size.size}
                </p>
              ))}
            </div>
          ) : (
            ""
          )}

          <div className="m-5">
            <h3>Coupons</h3>
            <div className="flex gap-2 items-center border border-pink-600 bg-pink-100 rounded-lg p-3 w-auto mt-4">
              <img
                src="https://wrogn.com/cdn/shop/t/139/assets/icon-coupon.svg?v=110953183165362428181721628886"
                alt=""
              />
              <p className="text-pink-700 font-semibold text-sm">
                Have Coupons? Use them in checkout
              </p>
            </div>
          </div>

          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0818/0305/1309/files/Trust_marker_6.png?v=1724824174"
              alt="img"
            />
          </div>

          <div className="p-5">
            <h3 className="mb-5 font-semibold text-xl">Order summary</h3>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <p className="text-gray-500 text-sm">
                  Total MRP (Incl. Of Taxes)
                </p>
                <p className="text-base font-semibold">
                  <CurrencyRupee style={{ fontSize: "16" }} /> {formattedTotal}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500 text-sm">Discount on MRP</p>
                <p className="text-base font-semibold text-green-800">
                  <CurrencyRupee style={{ fontSize: "16" }} />0
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500 text-sm">Delivery Fee</p>
                <p className="text-base font-semibold text-green-800">FREE</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500 text-sm">Coupon Discount</p>
                <p className="text-base font-semibold text-green-800">
                  <CurrencyRupee style={{ fontSize: "16" }} />0
                </p>
              </div>
            </div>

            <div className="bg-gray-400 h-px mt-3"></div>

            <div className="flex justify-between items-center mt-4">
              <h3 className="font-semibold text-xl">Total Payable</h3>
              <p className="text-xl font-semibold">
                <CurrencyRupee style={{ fontSize: "20" }} /> {formattedTotal}
              </p>
            </div>

            <div className="mt-8 mb-28">
              <img
                src="https://wrogn.com/cdn/shop/t/139/assets/payment_banner.svg?v=90671800364117800651721628885"
                alt="img"
                className="w-full"
              />
            </div>
          </div>

          <div className="fixed bottom-0 bg-white w-2/5 z-10">
            <div className="mb-5 bg-yellow-300 p-2 text-center rounded-tl-xl rounded-tr-xl">
              <p>Yay! You unlocked FREE delivery</p>
            </div>

            <div className="flex gap-5 items-center m-4">
              <div>
                <p className="font-bold text-lg">
                  <CurrencyRupee style={{ fontSize: "16" }} /> {formattedTotal}
                </p>
                <p className="text-gray-500 text-xs  ">Total payable</p>
              </div>
              <button className="bg-gray-950 text-white font-semibold rounded-xl w-full p-4">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Bag;
