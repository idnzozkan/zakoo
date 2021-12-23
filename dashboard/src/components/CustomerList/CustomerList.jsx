import React, { useState } from 'react'
import './customer-list.scss'
import dummyData from './dummyCustomerListData'
import { DataGrid } from '@mui/x-data-grid'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { Link } from 'react-router-dom'

const CustomerList = () => {
    const [data, setData] = useState(dummyData)

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure you want to delete this user?")

        if (confirm) {
            setData(data.filter(d => d.id !== id))
        }
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'user', headerName: 'User', width: 300, renderCell: (params) => {
                return (
                    <div className='customer-list-user-container'>
                        <img src={params.row.avatar} alt="User Avatar" />
                        <span>{params.row.name}</span>
                    </div>
                )
            }
        },
        { field: 'username', headerName: 'Username', width: 250 },
        { field: 'email', headerName: 'Email', width: 300 },
        { field: 'isAdmin', headerName: 'Admin', type: 'boolean', width: 100, },
        { field: 'status', headerName: 'Status', type: 'string', width: 80, },
        {
            field: 'actions', headerName: 'Actions', width: 190, renderCell: (params) => {
                return (
                    <div className='customer-list-actions'>
                        <Link to={`/customers/${params.row.id}`}>
                            <button className='customer-list-btn edit'>Edit</button>
                        </Link>
                        <button className='customer-list-btn delete' onClick={() => handleDelete(params.row.id)}><DeleteOutlineOutlinedIcon /></button>
                    </div>
                )
            }
        },

    ]

    return (
        <div className='customer-list'>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default CustomerList
