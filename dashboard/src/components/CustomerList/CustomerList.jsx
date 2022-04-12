import React, { useEffect } from 'react'
import './customer-list.scss'
import { DataGrid } from '@mui/x-data-grid'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { Link } from 'react-router-dom'
import { getUsers } from '../../store/apiRequests'
import { useDispatch, useSelector } from 'react-redux'

const CustomerList = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)

    useEffect(() => {
        getUsers(dispatch)
    }, [])

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure you want to delete this user?")

        if (confirm) {
            // TO-DO: Add delete request
        }
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 260 },
        {
            field: 'user', headerName: 'User', width: 300, renderCell: (params) => {
                return (
                    <div className='customer-list-user-container'>
                        <img src={params.row.image || 'https://bit.ly/3i1HmGz'} alt="User Avatar" />
                        <span>{params.row.name}</span>
                    </div>
                )
            }
        },
        { field: 'username', headerName: 'Username', width: 220 },
        { field: 'email', headerName: 'Email', width: 220 },
        { field: 'isAdmin', headerName: 'Admin', type: 'boolean', width: 120, },
        {
            field: 'actions', headerName: 'Actions', width: 190, renderCell: (params) => {
                return (
                    <div className='customer-list-actions'>
                        <Link to={`/customers/${params.row._id}`}>
                            <button className='customer-list-btn edit'>Edit</button>
                        </Link>
                        <button className='customer-list-btn delete' onClick={() => handleDelete(params.row._id)}><DeleteOutlineOutlinedIcon /></button>
                    </div>
                )
            }
        },

    ]

    return (
        <div className='customer-list'>
            <DataGrid
                rows={users}
                columns={columns}
                getRowId={row => row._id}
                pageSize={8}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default CustomerList
