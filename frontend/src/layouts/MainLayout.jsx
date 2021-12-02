import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Topbar from '../components/Topbar'

const MainLayout = ({ children }) => {
    return (
        <>
            <Topbar />
            <Navbar />
            {children}
            <Newsletter />
            <Footer />
        </>
    )
}

export default MainLayout
