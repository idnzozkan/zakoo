import React from 'react'
import './detail-card-sm.scss'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined'
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined'
import { Tooltip } from '@mui/material'

const DetailCardSm = () => {
    return (
        <div className='detail-card-sm'>
            <div className='detail-card-user'>
                <img src='https://randomuser.me/api/portraits/men/37.jpg' alt='User Avatar'></img>
                <div className="detail-card-user-info">
                    <span className='detail-card-user-fullname'>John Doe</span>
                    <span className='detail-card-username'>@john_doe</span>
                </div>
            </div>
            <div className="detail-card-account-info">
                <span className='title-account-info'>User Details</span>
                <ul>
                    <li>
                        <Tooltip title="Username" placement="right" arrow>
                            <span><PersonOutlineOutlinedIcon /> @idnzozkan</span>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip title="Phone Number" placement="right" arrow>
                            <span><PhoneIphoneOutlinedIcon /> +1-987-654-3210</span>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip title="Email" placement="right" arrow>
                            <span><EmailOutlinedIcon /> deniz@mail.com</span>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip title="Location" placement="right" arrow>
                            <span><FmdGoodOutlinedIcon /> San Jose, USA</span>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip title="Birthdate" placement="right" arrow>
                            <span><CakeOutlinedIcon /> 01/10/1990</span>
                        </Tooltip>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default DetailCardSm
