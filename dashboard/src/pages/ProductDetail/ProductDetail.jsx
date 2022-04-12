import React, { useEffect, useState } from 'react'
import './product-detail.scss'
import MainLayout from '../../layouts/MainLayout'
import PageHeader from '../../components/PageHeader'
import Chart from '../../components/Chart'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import { useLocation } from 'react-router-dom'
import { getProduct, updateProduct } from '../../store/apiRequests'
import toast from 'react-hot-toast'
import uploadToFirebase from '../../utils/fileUpload'

const ProductDetail = () => {
    const { pathname } = useLocation()
    const productId = pathname.split('/')[2]
    const [product, setProduct] = useState(null)
    const [inputs, setInputs] = useState(null)
    const [file, setFile] = useState(null)
    const [isUpdated, setIsUpdated] = useState(false)

    useEffect(() => {
        const getProductData = async () => {
            try {
                const product = await getProduct(productId)
                setProduct(product)
                setIsUpdated(false)
            } catch (error) {
                console.log(error)
            }
        }

        getProductData()
    }, [isUpdated])

    const chartData = [
        {
            month: 'Jan',
            'Sales': 10
        },
        {
            month: 'Feb',
            'Sales': 82
        },
        {
            month: 'Mar',
            'Sales': 60
        }
    ]

    const handleInput = (e) => {
        if (e.target.name === 'isInStock') {
            return setInputs(prev => ({ ...prev, [e.target.name]: e.target.value === 'true' }))
        }
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleFileUpload = (e) => {
        setFile(e.target.files[0])
    }

    const handleUpdateBtn = async (e) => {
        e.preventDefault()
        if (!inputs && !file) return

        if ((file && !inputs) || (file && inputs)) {
            const downloadURL = await uploadToFirebase(file)

            if (product) {
                toast.promise(updateProduct(product._id, { ...inputs, image: downloadURL }), {
                    loading: 'Updating',
                    success: 'Successfully updated',
                    error: 'Error when updating'
                })

                return setIsUpdated(true)
            }
        }

        if (inputs && !file && product) {
            toast.promise(
                updateProduct(product._id, inputs),
                {
                    loading: 'Updating',
                    success: 'Successfully updated',
                    error: 'Error when updating'
                }
            )
            setIsUpdated(true)
        }
    }

    return (
        <MainLayout>
            <PageHeader title='Edit Product' btnType='back' />
            {!product ? <h2>Loading...</h2> : (
                <>
                    <section className="product-detail-info">
                        <div className="product-detail-info-wrapper">
                            <div className="product-detail-chart">
                                <Chart title="Sales Performance" data={chartData} xAxisDataKey="month" dataKey="Sales" />
                            </div>
                            <div className="product-detail-data">
                                <div className="product-detail-data-wrapper">
                                    <div className="product-detail-data-header">
                                        <img src={product?.image} alt="Product" />
                                        <h3>{product?.title}</h3>
                                    </div>
                                    <div className="product-detail-data-content">
                                        <p>
                                            <span className="product-detail-data-title">
                                                ID:
                                            </span>
                                            {product?._id}
                                        </p>
                                        <p>
                                            <span className="product-detail-data-title">
                                                Total Sales:
                                            </span>
                                            123124
                                        </p>
                                        <p>
                                            <span className="product-detail-data-title">
                                                Stock Status:
                                            </span>
                                            {product?.isInStock ? 'In Stock' : 'Sold Out'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="product-detail-update">
                        <div className="product-detail-update-wrapper">
                            <form>
                                <div className="product-update-left">
                                    <div className="product-update-input">
                                        <label>Product Name</label>
                                        <input type="text" name="title" defaultValue={product?.title} onChange={handleInput} />
                                    </div>
                                    <div className="product-update-input">
                                        <label>Price</label>
                                        <input type="number" name="price" defaultValue={product?.price} onChange={handleInput} />
                                    </div>
                                    <div className="product-update-input">
                                        <label>Description</label>
                                        <textarea name="description" defaultValue={product?.description} onChange={handleInput} />
                                    </div>
                                    <div className="product-update-input">
                                        <label>Category</label>
                                        <select defaultValue={product?.category} name="category" id="product-categories" onChange={handleInput} >
                                            <option disabled>Please select a category</option>
                                            <option value="chair">Chair</option>
                                            <option value="electronic">Electronic</option>
                                            <option value="backpack">Backpack</option>
                                        </select>
                                    </div>
                                    <div className="product-update-input">
                                        <label>Color</label>
                                        <select defaultValue={product?.color} name="color" id="product-colors" onChange={handleInput} >
                                            <option disabled>Please select a color</option>
                                            <option value="other">Other</option>
                                            <option value="black">Black</option>
                                            <option value="white">White</option>
                                            <option value="gray">Gray</option>
                                            <option value="red">Red</option>
                                            <option value="green">Green</option>
                                            <option value="blue">Blue</option>
                                            <option value="yellow">Yellow</option>
                                        </select>
                                    </div>
                                    <div className="product-update-input">
                                        <label>Is It In Stock?</label>
                                        <div className="product-stock-radio-inputs">
                                            <div>
                                                <input type="radio" id="stock-true" name="isInStock" value="true" onChange={handleInput} />
                                                <label htmlFor="true">Yes</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="stock-false" name="isInStock" value="false" onChange={handleInput} />
                                                <label htmlFor="false">No</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-update-right">
                                    <div className="product-update-img">
                                        <img src={product?.image} alt="Product" />
                                        <label className="product-img-upload" htmlFor="product-img"><FileUploadOutlinedIcon /> Upload</label>
                                        <input type="file" name="image" id="product-img" onChange={handleFileUpload} style={{ display: 'none' }} />
                                    </div>
                                    <button onClick={handleUpdateBtn}>Update</button>
                                </div>
                            </form>
                        </div>
                    </section>
                </>
            )}
        </MainLayout>
    )
}

export default ProductDetail
