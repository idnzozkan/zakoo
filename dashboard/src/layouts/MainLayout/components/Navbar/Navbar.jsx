import React from 'react'
import './navbar.scss'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import { Badge, ListItemIcon } from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Logout from '@mui/icons-material/Logout'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../../../store/apiRequests'

const Navbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const handleLogout = () => {
        logout(dispatch)
        setAnchorEl(null)
        navigate('/')
    }

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
                    <button
                        className="navbar-item"
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <img className="navbar-user-avatar" src="https://avatars.githubusercontent.com/u/59365742?v=4" alt="User Avatar" />
                    </button>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleLogout}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.1))',
                                mt: 1.5,
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                    >
                        <MenuItem>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default Navbar
