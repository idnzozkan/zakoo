import React, { useState } from 'react'
import './product-list.scss'
import dummyData from './dummyProductListData'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

const ProductList = () => {
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
            field: 'name', headerName: 'Product', width: 600, renderCell: (params) => {
                return (
                    <div className='product-list-product-container'>
                        <img src={params.row.image} alt="Product" />
                        <span>{params.row.name}</span>
                    </div>
                )
            }
        },
        {
            field: 'price', headerName: 'Price', width: 100, renderCell: (params) => {
                return <p>${params.row.price}</p>
            }
        },
        { field: 'stock', headerName: 'Stock', width: 100 },
        {
            field: 'categories', headerName: 'Categories', width: 200, renderCell: (params) => {
                return <p style={{ textTransform: 'capitalize' }}>{params.row.categories.toString()}</p>
            }
        },
        {
            field: 'actions', headerName: 'Actions', width: 190, renderCell: (params) => {
                return (
                    <div className='product-list-actions'>
                        <Link to={`/products/${params.row.id}`}>
                            <button className='product-list-btn edit'>Edit</button>
                        </Link>
                        <button className='product-list-btn delete' onClick={() => handleDelete(params.row.id)}><DeleteOutlineOutlinedIcon /></button>
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

export default ProductList
