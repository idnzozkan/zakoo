import React from 'react'
import './detail-card-sm.scss'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined'
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined'
import { Tooltip } from '@mui/material'
import moment from 'moment'

const DetailCardSm = ({ user }) => {
    return (
        <div className='detail-card-sm'>
            <div className='detail-card-user'>
                <img src={user.image || 'https://bit.ly/3i1HmGz'} alt='User Avatar'></img>
                <div className="detail-card-user-info">
                    <span className='detail-card-user-fullname'>{user.name}</span>
                    <span className='detail-card-username'>@{user.username}</span>
                </div>
            </div>
            <div className="detail-card-account-info">
                <span className='title-account-info'>User Details</span>
                <ul>
                    <li>
                        <Tooltip title="Username" placement="right" arrow>
                            <span><PersonOutlineOutlinedIcon /> @{user.username}</span>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip title="Phone Number" placement="right" arrow>
                            <span><PhoneIphoneOutlinedIcon /> {user.phone}</span>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip title="Email" placement="right" arrow>
                            <span><EmailOutlinedIcon /> {user.email}</span>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip title="Location" placement="right" arrow>
                            <span><FmdGoodOutlinedIcon /> {user.location}</span>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip title="Birthdate" placement="right" arrow>
                            <span><CakeOutlinedIcon /> {moment(user.birthdate).format('L')}</span>
                        </Tooltip>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default DetailCardSm
