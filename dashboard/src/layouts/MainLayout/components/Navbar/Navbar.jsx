import React from 'react'
import './navbar.scss'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import { Badge } from '@mui/material'
const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className="navbar-wrapper">
                <div id="start">
                    <h1 className="logo">Zakoo</h1>
                </div>
                <div id="end">
                    <div className="navbar-item">
                        <Badge color="primary" variant="dot">
                            <NotificationsNoneIcon />
                        </Badge>
                    </div>
                    <div className="navbar-item">
                        <SettingsOutlinedIcon />
                    </div>
                    <div className="navbar-item">
                        <img className="navbar-user-avatar" src="https://avatars.githubusercontent.com/u/59365742?v=4" alt="User Avatar" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
