import React, { useEffect, useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddtobagModal from "./AddtobagModal";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { collection, addDoc, query, where, getDocs, deleteDoc, updateDoc } from "firebase/firestore"; // Add this import to get addDoc
import { firestore } from "../../firebase/firebase";
import Products from "../Products/Products";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../Redux/action";
import { useNavigate } from "react-router-dom";

const NewArrivals = () => {
  const [isAdd, setIsAdd] = useState(false);
  const [isFav, setIsFav] = useState({});
  const [imageUrl, setImageUrl] = useState("");
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("All"); // State for filtering
  const [modalData, setModalData] = useState([])
  const [newProduct, setNewProduct] = useState([])
  

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleNavigate = (product) => {
    navigate("/products", { state: product })
  }
  

  useEffect(() => {
    console.log("Fetching products");
    fetch("/Json/NewArrivals.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        dispatch(updateProduct(data));
      })
      .catch((error) => console.error("Error fetching the products:", error));
    fetchFavorites();
  }, [dispatch]);

  


  const fetchFavorites = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, "WishList"));
      const favItems = {};

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        favItems[data.imageUrl] = true; // Mark image URL as favorited
      });

      setIsFav(favItems);
    } catch (error) {
      console.error("Error fetching favorites: ", error);
    }
  };

  // const handleAddtobag = async (product) => {
  //   console.log("Clicking");
    
  //   const bagRef = collection(firestore, "Bag");
  //   const normalizedImageUrl = product.image.trim().toLowerCase();
  //   const checkImageQuery = query(bagRef, where("imageUrl", "==", normalizedImageUrl));

  //   try {
  //     const querySnapshot = await getDocs(checkImageQuery);

  //     if (!querySnapshot.empty) {
  //       // Product exists, increase the count
  //       querySnapshot.forEach(async (doc) => {
  //         const productRef = doc.ref; // Reference to the existing product document
  //         await updateDoc(productRef, {
  //           quantity: doc.data().quantity + 1,
  //         });
  //         console.log("Product count increased!");
  //       });
  //     } else {
  //       // Product doesn't exist, add it
  //       await addDoc(bagRef, {
  //         imageUrl: product.image.trim().toLowerCase(),
  //         title: product.title,
  //         price: product.price,
  //         quantity: 1,
  //         createdAt: new Date(),
  //       });
  //       console.log("Product uploaded to Bag Successfully!");
  //     }
  //   } catch (error) {
  //     console.error("Error handling product: ", error);
  //   }
  // };

  const handleFav = async (index, product) => {
    const productKey = product.image;

    setIsFav((prev) => ({
      ...prev,
      [productKey]: !prev[productKey],
    }));

    if (!isFav[productKey]) {
      await uploadImage(product);
    } else {
      await removeImage(product);
    }
  };

  const uploadImage = async (product) => {
    try {
      await addDoc(collection(firestore, "WishList"), {
        imageUrl: product.image,
        title: product.title,
        price: product.price,
        createdAt: new Date(),
      });
      console.log("Image URL uploaded Successfully!");
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };

  const removeImage = async (product) => {
    try {
      const q = query(
        collection(firestore, "WishList"),
        where("imageUrl", "==", product.image)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
        console.log("Image removed successfully!");
      });
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((product) => product.category === filter);

      const handleModal = (product) => {
        console.log("product:", product);
        setModalData(product)
        setIsAdd(!isAdd);
      }

  return (
    <>
      <div className="mt-20">
        <h3 className="text-center text-xl font-bold">NEW ARRIVALS</h3>
        <div>{imageUrl && <img src={imageUrl} alt="" id="newimg" />}</div>
        <div className="flex gap-2 justify-center mt-5 font-medium">
          <button
            className={`border-2 px-4 py-2 rounded-xl ${filter === "All" ? "bg-gray-300" : ""}`}
            onClick={() => setFilter("All")}
          >
            ALL
          </button>
          <button
            className={`border-2 px-4 py-2 rounded-xl ${filter === "T-Shirts" ? "bg-gray-300" : ""}`}
            onClick={() => setFilter("T-Shirts")}
          >
            T-SHIRTS
          </button>
          <button
            className={`border-2 px-4 py-2 rounded-xl ${filter === "Shirts" ? "bg-gray-300" : ""}`}
            onClick={() => setFilter("Shirts")}
          >
            SHIRTS
          </button>
          <button
            className={`border-2 px-4 py-2 rounded-xl ${filter === "Jeans" ? "bg-gray-300" : ""}`}
            onClick={() => setFilter("Jeans")}
          >
            JEANS
          </button>
        </div>
        <div className="grid grid-cols-5 gap-4 mt-10 justify-items-center mx-20 w-fit">
          {filteredProducts.map((product, index) => (
            <div key={index} className="cursor-pointer" onClick={() => handleNavigate(product)}>
              <div className="relative">
                <img
                  src={product.image}
                  alt="img"
                  className="w-fit rounded-xl"
                  id="new-image"
                  name="virat"
                />
                <div
                  className="absolute top-3 right-3 bg-white rounded-full p-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFav(index, product)}
                  }
                >
                  {isFav[product.image] ? (
                    <FavoriteIcon className="text-red-500" />
                  ) : (
                    <FavoriteBorderOutlinedIcon />
                  )}
                </div>
                <p className="absolute top-3 text-xs bg-pink-500 text-white p-1 rounded-tr-md rounded-br-md">
                  {product.label}
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <p className="font-semibold text-lg flex items-center">
                  <CurrencyRupeeIcon fontSize="" /> {product.price}
                </p>
                <p className="w-52 text-nowrap text-sm">{product.title}</p>
                <button
                  className="border border-gray-400 rounded-lg py-2 px-16 font-semibold"
                  // onClick={() => handleAddtobag(product)}
                  disabled={isAdd}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleModal(product);
                  }
                  } 
                >
                  Add to Bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isAdd && <AddtobagModal isAdd={isAdd} setIsAdd={setIsAdd} product={modalData} />}
    </>
  );
};

export default NewArrivals;
