import React from 'react'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'

const Home = () => {
    return (
        <>
            <Topbar />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
        </>
    )
}

export default Home
