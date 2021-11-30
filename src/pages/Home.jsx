import React from 'react'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import MainLayout from '../layouts/MainLayout'

const Home = () => {
    return (
        <MainLayout>
            <Slider />
            <Categories />
            <Products title="Featured Products" />
            <Newsletter />
        </MainLayout>
    )
}

export default Home
