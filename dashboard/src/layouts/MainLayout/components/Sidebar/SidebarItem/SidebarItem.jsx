import React from 'react'
import './sidebar-item.scss'
import { Link, useLocation } from 'react-router-dom'

const SidebarItem = ({ page }) => {
    const { pathname } = useLocation()

    return (
        <Link to={page.path} className={pathname === page.path ? 'active' : ''}>
            <li>
                {page.icon}
                {page.title}
            </li>
        </Link>
    )
}

export default SidebarItem
