import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'

const MainLayout = ({ children }) => {
    return (
        <>
            <Topbar />
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default MainLayout
