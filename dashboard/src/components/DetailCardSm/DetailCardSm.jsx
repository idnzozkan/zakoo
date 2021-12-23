import React from 'react'
import './detail-card-sm.scss'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined'
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined'

const DetailCardSm = () => {
    return (
        <div className='detail-card-sm'>
            <div className='detail-card-user'>
                <img src='https://randomuser.me/api/portraits/men/37.jpg' alt='User Avatar'></img>
                <div className="detail-card-user-info">
                    <span className='detail-card-user-name'>John Doe</span>
                    <span className='detail-card-user-title'>Software Engineer</span>
                </div>
            </div>
            <div className="detail-card-account-info">
                <span className='title-account-info'>Account Details</span>
                <ul>
                    <li>
                        <span><PersonOutlineOutlinedIcon /> @idnzozkan</span>
                    </li>
                    <li>
                        <span><PhoneIphoneOutlinedIcon /> +1-123-456-7890</span>
                    </li>
                    <li>
                        <span><EmailOutlinedIcon /> deniz@mail.com</span>
                    </li>
                    <li>
                        <span><FmdGoodOutlinedIcon /> San Jose, USA</span>
                    </li>
                    <li>
                        <span><CakeOutlinedIcon /> 01/10/1990</span>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default DetailCardSm
