import { CloseOutlined } from "@mui/icons-material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import React, { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { firestore } from "../../firebase/firebase";
import AddtobagModal from "../NewArrivals/AddtobagModal";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const [isAdd, setIsAdd] = useState(false);
  const [product, setProduct] = useState([]);
  const [modalData, setModalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleNavigation = (data) => {
    navigate("/products", {state: data} )
  }

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
        console.error("Error fetching image URLs from Firestore:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImageUrls();
  }, []);

  const handleAddtobag = (data) => {
    setIsAdd(!isAdd);
    setModalData(data)
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
    <>
      <div className="xs:mx-3 md:mx-6 lg:mx-16 xl:mx-20">
        <div className="flex gap-4 items-center mt-10 xs:mt-6">
          <h3 className="font-bold xs:text-base lg:text-2xl">WISHLIST </h3>
          <p className="text-gray-500 font-medium xs:text-sm xl:text-base">7 Products</p>
        </div>

        <div className="grid mt-10 justify-items-center xs:grid-cols-2 xs:gap-4 xs:mt-6 md:grid-cols-3 md:mt-10 xl:grid-cols-4">
          {product.length > 0 ? (
            product.map((data, index) => (
              <div key={data.id} className="cursor-pointer" onClick={() => handleNavigation(data)}>
                <div className="relative">
                  <img
                    src={data.imageUrl}
                    alt="img"
                    className="w-80 rounded-xl"
                    id="new-image"
                    name="virat"
                  />
                  <div
                    className="absolute top-3 right-3 bg-white rounded-full p-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(data.id);
                    }}
                  >
                    <CloseOutlined  />
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <p className="font-semibold text-lg flex items-center xs:text-sm md:text-base">
                    <CurrencyRupeeIcon style={{fontSize:"14px"}} /> {data.price}
                  </p>
                  <p className="xs:text-xs md:text-sm">{data.title}</p>
                  <button
                    className="border border-gray-400 rounded-lg py-2 px-16 font-semibold xs:text-xs md:text-base"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddtobag(data);
                    }}
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

      {/* {isAdd && (
        <AddtobagModal isAdd={isAdd} setIsAdd={setIsAdd} product={modalData}  />
      )} */}
    </>
  );
};

export default Wishlist;
