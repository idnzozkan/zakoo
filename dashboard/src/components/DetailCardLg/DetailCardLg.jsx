import React from 'react'
import './detail-card-lg.scss'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'

const DetailCardLg = () => {
    return (
        <div className='detail-card-lg'>
            <h3 className='detail-card-lg-title'>Update Information</h3>

            <form className="update-area">
                <div className="update-inputs">
                    <div className="update-input">
                        <label>Name</label>
                        <input type="text" placeholder='John Doe' />
                    </div>
                    <div className="update-input">
                        <label>Title</label>
                        <input type="text" placeholder='Software Engineer' />
                    </div>
                    <div className="update-input">
                        <label>Location</label>
                        <input type="text" placeholder='San Jose, USA' />
                    </div>
                    <div className="update-input">
                        <label>Phone Number</label>
                        <input type="tel" placeholder='+1-987-654-3210' />
                    </div>
                    <div className="update-input">
                        <label>Email</label>
                        <input type="email" placeholder='deniz@mail.com' />
                    </div>
                </div>
                <div className="update-avatar">
                    <div className="upload-avatar">
                        <img src="https://randomuser.me/api/portraits/men/37.jpg" alt="User Avatar" />
                        <label htmlFor="file"><FileUploadOutlinedIcon /> Upload</label>
                        <input type="file" id="file" style={{ display: 'none' }} />
                    </div>
                </div>
            </form>
            <button className="detail-card-update-btn">Update</button>
        </div>
    )
}

export default DetailCardLg
