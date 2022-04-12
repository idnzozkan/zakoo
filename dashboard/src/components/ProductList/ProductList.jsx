import React, { useEffect } from 'react'
import './product-list.scss'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getProducts } from '../../store/apiRequests'

const ProductList = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)

    useEffect(() => {
        getProducts(dispatch)
    }, [dispatch])

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure you want to delete this product?")

        if (confirm) {
            deleteProduct(dispatch, id)
        }
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 260 },
        {
            field: 'name', headerName: 'Product', width: 400, renderCell: (params) => {
                return (
                    <div className='product-list-product-container'>
                        <img src={params.row.image} alt="Product" />
                        <span>{params.row.title}</span>
                    </div>
                )
            }
        },
        {
            field: 'price', headerName: 'Price', width: 120, renderCell: (params) => {
                return <p>${params.row.price}</p>
            }
        },
        { field: 'isInStock', headerName: 'Stock', width: 120, type: "boolean" },
        {
            field: 'category', headerName: 'Category', width: 200, renderCell: (params) => {
                return <p style={{ textTransform: 'capitalize' }}>{params.row.category}</p>
            }
        },
        {
            field: 'actions', headerName: 'Actions', width: 190, renderCell: (params) => {
                return (
                    <div className='product-list-actions'>
                        <Link to={`/products/${params.row._id}`}>
                            <button className='product-list-btn edit'>Edit</button>
                        </Link>
                        <button className='product-list-btn delete' onClick={() => handleDelete(params.row._id)}><DeleteOutlineOutlinedIcon /></button>
                    </div>
                )
            }
        },

    ]
    return (
        <div className='product-list'>
            <DataGrid
                rows={products}
                columns={columns}
                getRowId={row => row._id}
                pageSize={8}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default ProductList
