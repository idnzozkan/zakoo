import React from 'react'
import './sidebar.scss'
import SidebarItem from './SidebarItem'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined'

const Sidebar = () => {
    const pages = [
        {
            title: 'Home',
            path: '/',
            icon: <HomeOutlinedIcon />
        },
        {
            title: 'Orders',
            path: '/orders',
            icon: <ReceiptLongOutlinedIcon />
        },
        {
            title: 'Products',
            path: '/products',
            icon: <StorefrontOutlinedIcon />
        },
        {
            title: 'Customers',
            path: '/customers',
            icon: <GroupsOutlinedIcon />
        }
    ]

    return (
        <div className="sidebar">
            <ul className="sidebar-wrapper">
                {pages.map(p => (<SidebarItem page={p} key={p.title} />))}
            </ul>
        </div>
    )
}

export default Sidebar
