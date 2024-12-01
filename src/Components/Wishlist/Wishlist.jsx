import { CloseOutlined } from "@mui/icons-material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import React, { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";

const Wishlist = () => {
  const [isAdd, setIsAdd] = useState(false);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        const q = query(
          collection(firestore, "WishList"),
          orderBy("createdAt", "desc")
        );

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const product = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProduct(product);
      });

      return () => unsubscribe();
        
      } catch (error) {
        console.error('Error fetching image URLs from Firestore:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

  fetchImageUrls();
}, []);



const handleAddtobag = () => {
  setIsAdd(!isAdd);
};


const handleDelete = async (id) => {
  try {
    await deleteDoc(doc(firestore, "WishList", id));
    setProduct((prev) => prev.filter((item) => item.id !== id));
  } catch (error) {
    console.error("Error deleting item:", error);
    setError(error.message);
  }
};


  return (
    <div>

      <div className="flex gap-4 items-center mx-20 mt-10 ">
      <h3 className="text-2xl font-bold">WISHLIST </h3>
      <p className="text-gray-500 text-base font-medium">7 Products</p>
      </div>

      <div className="grid grid-cols-4 gap-4  mt-10 justify-items-center mx-20">

      {product.length > 0 ? (
        product.map((data, index) => (
          <div key={data.id} className="cursor-pointer">
          <div className="relative">
            <img
              src={data.imageUrl}
              alt="img"
              className="w-80 rounded-xl"
              id="new-image"
              name="virat"
            />
            <div className="absolute top-3 right-3 bg-white rounded-full p-1"
            onClick={() => handleDelete(data.id)}
            >
              <CloseOutlined />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <p className="font-semibold text-lg">
              <CurrencyRupeeIcon /> {data.price}
            </p>
            <p>{data.title}</p>
            <button
              className="border border-gray-400 rounded-lg py-2 px-16 font-semibold"
              onClick={handleAddtobag}
            >
              Move to Bag
            </button>
          </div>
        </div>
        ))
      ) : (
        <p>No images available.</p>
      )}

      </div>

    </div>
  );
};

export default Wishlist;
