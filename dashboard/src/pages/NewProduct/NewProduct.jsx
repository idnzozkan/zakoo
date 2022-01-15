import React from 'react'
import './new-product.scss'
import PageHeader from '../../components/PageHeader'
import MainLayout from '../../layouts/MainLayout'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'

const NewProduct = () => {
    return (
        <MainLayout>
            <PageHeader title='New Product' btnType='back' />
            <div className="new-product-wrapper">
                <form className="new-product-form">
                    <div className="new-product-input">
                        <label>Product Name</label>
                        <input type="text" name="product-name" id="product-name" placeholder="Cool Brand's Ergonomic Chair" />
                    </div>
                    <div className="new-product-input">
                        <label>Price</label>
                        <input type="number" name="product-price" id="product-price" placeholder='42' />
                    </div>
                    <div className="new-product-textarea">
                        <label>Description</label>
                        <textarea rows="3" name="product-description" id="product-description" placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit asperiores inventore quam dignissimos repellat iusto non sunt quia veritatis excepturi cumque qui, amet deserunt temporibus, quibusdam magnam! Ipsam, quidem.' />
                    </div>
                    <div className="new-product-select">
                        <label>Category</label>
                        <select name="product-categories" id="product-categories">
                            <option selecteddisabled>Please select a category</option>
                            <option value="Chair">Chair</option>
                            <option value="Electronic">Electronic</option>
                            <option value="Backpack">Backpack</option>
                        </select>
                    </div>
                    <div className="new-product-select">
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
                    <div className="new-product-radio">
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
                    <div className="new-product-input">
                        <label>Product Image</label>
                        <div className="product-img-input">
                            <label htmlFor="product-img"><FileUploadOutlinedIcon /> Upload</label>
                        </div>
                        <input type="file" name="product-img" id="product-img" style={{ display: 'none' }} />
                    </div>
                </form>
                <button className="create-btn">Create</button>
            </div>
        </MainLayout>
    )
}

export default NewProduct
