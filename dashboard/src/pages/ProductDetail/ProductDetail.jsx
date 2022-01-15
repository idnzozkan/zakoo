import React from 'react'
import './product-detail.scss'
import MainLayout from '../../layouts/MainLayout'
import PageHeader from '../../components/PageHeader'
import Chart from '../../components/Chart'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'

const ProductDetail = () => {
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

    const handleUpdateBtn = (e) => {
        e.preventDefault()
    }

    return (
        <MainLayout>
            <PageHeader title='Edit Product' btnType='back' />
            <section className="product-detail-info">
                <div className="product-detail-info-wrapper">
                    <div className="product-detail-chart">
                        <Chart title="Sales Performance" data={chartData} xAxisDataKey="month" dataKey="Sales" />
                    </div>
                    <div className="product-detail-data">
                        <div className="product-detail-data-wrapper">
                            <div className="product-detail-data-header">
                                <img src="https://i.imgur.com/Y0iPD75.png" alt="Product" />
                                <h3>Ultricies condimentum imperdiet</h3>
                            </div>
                            <div className="product-detail-data-content">
                                <p>
                                    <span className="product-detail-data-title">
                                        ID:
                                    </span>
                                    61aef5c54f68bf0fe1a68fd0
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
                                    In Stock
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
                                <input type="text" name="product-name" defaultValue="Ultricies condimentum imperdiet" />
                            </div>
                            <div className="product-update-input">
                                <label>Price</label>
                                <input type="number" name="product-price" defaultValue="42" />
                            </div>
                            <div className="product-update-input">
                                <label>Description</label>
                                <textarea name="product-description" defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit asperiores inventore quam dignissimos repellat iusto non sunt quia veritatis excepturi cumque qui, amet deserunt temporibus, quibusdam magnam! Ipsam, quidem. Saepe" />
                            </div>
                            <div className="product-update-input">
                                <label>Categories</label>
                                <select name="product-categories" id="product-categories">
                                    <option disabled>Please select a category</option>
                                    <option selected value="Chair">Chair</option>
                                    <option value="Electronic">Electronic</option>
                                    <option value="Backpack">Backpack</option>
                                </select>
                            </div>
                            <div className="product-update-input">
                                <label>Color</label>
                                <select name="product-colors" id="product-colors">
                                    <option disabled>Please select a color</option>
                                    <option value="black">Black</option>
                                    <option value="white">White</option>
                                    <option value="gray">Gray</option>
                                    <option value="red">Red</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
                                    <option value="yellow">Yellow</option>
                                    <option selected value="other">Other</option>
                                </select>
                            </div>
                            <div className="product-update-input">
                                <label>Is It In Stock?</label>
                                <div className="product-stock-radio-inputs">
                                    <div>
                                        <input type="radio" id="stock-true" name="stock" value="stock-true" checked />
                                        <label htmlFor="stock-true">Yes</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="stock-false" name="stock" value="stock-false" />
                                        <label htmlFor="stock-false">No</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-update-right">
                            <div className="product-update-img">
                                <img src="https://i.imgur.com/Y0iPD75.png" alt="Product" />
                                <label className="product-img-upload" htmlFor="product-img"><FileUploadOutlinedIcon /> Upload</label>
                                <input type="file" name="product-img" id="product-img" style={{ display: 'none' }} />
                            </div>
                            <button onClick={(e) => handleUpdateBtn(e)}>Update</button>
                        </div>
                    </form>
                </div>
            </section>
        </MainLayout>
    )
}

export default ProductDetail
