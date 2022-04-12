import React, { useEffect, useState } from 'react'
import './small-widget.scss'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import { Link } from 'react-router-dom'
import { userRequest } from '../../../requestMethods'

const SmallWidget = () => {
    const [newUsers, setNewUsers] = useState(null)

    useEffect(() => {
        const fetchNewUsers = async () => {
            try {
                const res = await userRequest.get('/users?new=true')
                setNewUsers(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchNewUsers()
    }, [])

    return (
        <div className='small-widget'>
            <h3 className='list-widget-title'>New Users</h3>
            {newUsers?.map(u => (
                <div className="sm-widget-user" key={u._id}>
                    <img src={u.image || 'https://bit.ly/3i1HmGz'} alt='User Avatar'></img>
                    <div className="sm-widget-user-info">
                        <span className='sm-widget-user-fullname'>{u.name}</span>
                        <span className='sm-widget-username'>@{u.username}</span>
                    </div>
                    <Link to={`/customers/${u._id}`}>
                        <button><VisibilityOutlinedIcon /> Display</button>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default SmallWidget
