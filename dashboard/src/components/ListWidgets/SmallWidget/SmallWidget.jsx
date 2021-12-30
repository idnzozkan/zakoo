import React from 'react'
import './small-widget.scss'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import { Link } from 'react-router-dom'

const SmallWidget = () => {
    return (
        <div className='small-widget'>
            <h3 className='list-widget-title'>New Users</h3>
            <div className="sm-widget-user">
                <img src='https://randomuser.me/api/portraits/men/37.jpg' alt='User Avatar'></img>
                <div className="sm-widget-user-info">
                    <span className='sm-widget-user-fullname'>John Doe</span>
                    <span className='sm-widget-username'>@john_doe</span>
                </div>
                <Link to="/customers/0">
                    <button><VisibilityOutlinedIcon /> Display</button>
                </Link>
            </div>
            <div className="sm-widget-user">
                <img src='https://randomuser.me/api/portraits/women/68.jpg' alt='User Avatar'></img>
                <div className="sm-widget-user-info">
                    <span className='sm-widget-user-fullname'>Jane Smith</span>
                    <span className='sm-widget-username'>@janesmith007</span>
                </div>
                <Link to="/customers/1">
                    <button><VisibilityOutlinedIcon /> Display</button>
                </Link>
            </div>
            <div className="sm-widget-user">
                <img src='https://randomuser.me/api/portraits/men/83.jpg' alt='User Avatar'></img>
                <div className="sm-widget-user-info">
                    <span className='sm-widget-user-fullname'>Mike Anderson</span>
                    <span className='sm-widget-username'>@crazymike20</span>
                </div>
                <Link to="/customers/2">
                    <button><VisibilityOutlinedIcon /> Display</button>
                </Link>
            </div>
            <div className="sm-widget-user">
                <img src='https://randomuser.me/api/portraits/women/85.jpg' alt='User Avatar'></img>
                <div className="sm-widget-user-info">
                    <span className='sm-widget-user-fullname'>Dana Brown</span>
                    <span className='sm-widget-username'>@iamdanabrown</span>
                </div>
                <Link to="/customers/3">
                    <button><VisibilityOutlinedIcon /> Display</button>
                </Link>
            </div>
        </div>
    )
}

export default SmallWidget
