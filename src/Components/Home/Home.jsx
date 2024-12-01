import React from 'react'
import Hero from '../Hero/Hero'
import NewArrivals from '../NewArrivals/NewArrivals'
import TrendingCategories from '../TrendingCategories/TrendingCategories'
import BestSellers from '../BestSellers/BestSellers'
import Banner from '../Banner/Banner'
import Wallpapers from '../Wallpapers/Wallpapers'
import Footer from '../Footer/Footer'
import FooterHeader from '../Footer/FooterHeader'
import Gallery from '../Gallery/Gallery'

const Home = () => {
  return (
    <>
    <Hero />
    <Gallery />
    <NewArrivals />
    <TrendingCategories />
    <BestSellers />
    <Banner />
    <Wallpapers />
    </>
  )
}

export default Home
