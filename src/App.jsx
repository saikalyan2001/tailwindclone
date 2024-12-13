import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import TopScrollbar from "./Components/TopScrollbar/TopScrollbar";
import Gallery from "./Components/Gallery/Gallery";
import NewArrivals from "./Components/NewArrivals/NewArrivals";
import TrendingCategories from "./Components/TrendingCategories/TrendingCategories";
import BestSellers from "./Components/BestSellers/BestSellers";
import Banner from "./Components/Banner/Banner";
import Wallpapers from "./Components/Wallpapers/Wallpapers";
import Footer from "./Components/Footer/Footer";
import FooterHeader from "./Components/Footer/FooterHeader";
import AllProducts from "./AllProducts/AllProducts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Wishlist from "./Components/Wishlist/Wishlist";
import Profile from "./Components/Profile/Profile";
import Products from "./Components/Products/Products";
import Menubar from "./Components/Navbar/Menubar";

function App() {
  return (
    <Router>
      <TopScrollbar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/menubar" element={<Menubar />} />
      </Routes>
      <FooterHeader />
      <Footer />
    </Router>
  );
}

export default App;
