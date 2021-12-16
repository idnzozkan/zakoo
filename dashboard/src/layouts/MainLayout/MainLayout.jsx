import React from 'react'
import './main-layout.scss'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

const MainLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Sidebar />
                <Content>
                    {children}
                </Content>
            </div>
        </div>
    )
}

export default MainLayout
