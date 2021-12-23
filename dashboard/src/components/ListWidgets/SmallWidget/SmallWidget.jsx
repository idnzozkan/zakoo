import React from 'react'
import './small-widget.scss'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'

const SmallWidget = () => {
    return (
        <div className='small-widget'>
            <h3 className='list-widget-title'>New Users</h3>
            <div className="sm-widget-user">
                <img src='https://randomuser.me/api/portraits/men/37.jpg' alt='User Avatar'></img>
                <div className="sm-widget-user-info">
                    <span className='sm-widget-user-name'>John Doe</span>
                    <span className='sm-widget-user-title'>Software Engineer</span>
                </div>
                <button><VisibilityOutlinedIcon /> Display</button>
            </div>
            <div className="sm-widget-user">
                <img src='https://randomuser.me/api/portraits/women/68.jpg' alt='User Avatar'></img>
                <div className="sm-widget-user-info">
                    <span className='sm-widget-user-name'>Jane Smith</span>
                    <span className='sm-widget-user-title'>Product Designer</span>
                </div>
                <button><VisibilityOutlinedIcon /> Display</button>
            </div>
            <div className="sm-widget-user">
                <img src='https://randomuser.me/api/portraits/men/83.jpg' alt='User Avatar'></img>
                <div className="sm-widget-user-info">
                    <span className='sm-widget-user-name'>Mike Anderson</span>
                    <span className='sm-widget-user-title'>CTO</span>
                </div>
                <button><VisibilityOutlinedIcon /> Display</button>
            </div>
            <div className="sm-widget-user">
                <img src='https://randomuser.me/api/portraits/women/85.jpg' alt='User Avatar'></img>
                <div className="sm-widget-user-info">
                    <span className='sm-widget-user-name'>Dana Brown</span>
                    <span className='sm-widget-user-title'>Network Engineer</span>
                </div>
                <button><VisibilityOutlinedIcon /> Display</button>
            </div>
        </div>
    )
}

export default SmallWidget
