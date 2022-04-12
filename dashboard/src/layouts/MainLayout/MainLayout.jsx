import React from 'react'
import './main-layout.scss'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import { Toaster } from 'react-hot-toast'

const MainLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Sidebar />
                <Content>
                    <Toaster position='top-right' />
                    {children}
                </Content>
            </div>
        </div>
    )
}

export default MainLayout
