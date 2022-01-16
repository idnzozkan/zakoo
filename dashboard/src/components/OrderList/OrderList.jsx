import React, { useEffect } from 'react'
import './order-list.scss'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders, deleteOrder } from '../../store/apiRequests'
import moment from 'moment'
import Status from '../Status'

const OrderList = () => {
    const dispatch = useDispatch()
    const orders = useSelector(state => state.reducer.orders.orders)

    useEffect(() => {
        getOrders(dispatch)
    }, [dispatch])

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure you want to delete this order?")

        if (confirm) {
            deleteOrder(dispatch, id)
        }
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 260 },
        {
            field: 'userId', headerName: 'User', width: 250, renderCell: (params) => {
                return (
                    <div className='order-list-order-container'>
                        <img src={params.row.userId.image || 'https://immersivelrn.org/wp-content/uploads/no_avatar.jpg'} alt="User" />
                        <span>{params.row.userId.username}</span>
                    </div>
                )
            }
        },
        {
            field: 'createdAt', headerName: 'Date', width: 270, renderCell: (params) => {
                return (
                    <div>
                        <span>{moment(params.row.createdAt).format("MM-DD-YYYY, h:mm:ss a")}</span>
                    </div>
                )
            }
        },
        {
            field: 'amount', headerName: 'Total Amount', width: 150, renderCell: (params) => {
                return <p>${params.row.amount}</p>
            }
        },
        {
            field: 'status', headerName: 'Status', width: 170, renderCell: (params) => {
                return (
                    <div style={{ lineHeight: 'initial' }}>
                        <Status type={params.row.status} />
                    </div>
                )
            }
        },
        {
            field: 'actions', headerName: 'Actions', width: 190, renderCell: (params) => {
                return (
                    <div className='order-list-actions'>
                        <Link to={`/orders/${params.row._id}`}>
                            <button className='order-list-btn edit'>Edit</button>
                        </Link>
                        <button className='order-list-btn delete' onClick={() => handleDelete(params.row._id)}><DeleteOutlineOutlinedIcon /></button>
                    </div>
                )
            }
        }
    ]
    return (
        <div className='order-list'>
            <DataGrid
                rows={orders}
                columns={columns}
                getRowId={row => row._id}
                pageSize={8}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default OrderList
