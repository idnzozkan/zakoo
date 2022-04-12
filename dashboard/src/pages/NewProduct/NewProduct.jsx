import React, { useRef, useState } from 'react'
import './new-product.scss'
import PageHeader from '../../components/PageHeader'
import MainLayout from '../../layouts/MainLayout'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import uploadToFirebase from '../../utils/fileUpload'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { addProduct } from '../../store/apiRequests'
import { useDispatch } from 'react-redux'

const NewProduct = () => {
    const [inputs, setInputs] = useState({
        title: null,
        price: null,
        description: null,
        category: null,
        color: null,
        isInStock: null
    })
    const [file, setFile] = useState(null)
    const submitBtn = useRef(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleInput = (e) => {
        if (e.target.name === 'isInStock') {
            return setInputs(prev => ({ ...prev, [e.target.name]: e.target.value === 'true' }))
        }
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleFileUpload = (e) => {
        setFile(e.target.files[0])
    }

    const handleCreateBtn = async (e) => {
        e.preventDefault()
        const { title, price, description, category, color, isInStock } = inputs
        if (!title || !price || !description || !category || !color || isInStock === null || !file) {
            return toast.error('Please fill in all the fields')
        }

        submitBtn.current.disabled = true
        submitBtn.current.textContent = 'Please Wait...'

        const downloadURL = await uploadToFirebase(file)

        console.log({ ...inputs, image: downloadURL })

        toast.promise(addProduct(dispatch, { ...inputs, image: downloadURL }), {
            loading: 'Creating',
            success: 'Successfully created',
            error: 'Error when creating'
        })

        submitBtn.current.disabled = false
        submitBtn.current.textContent = 'Create'
        navigate('/products')
    }

    return (
        <MainLayout>
            <PageHeader title='New Product' btnType='back' />
            <div className="new-product-wrapper">
                <form className="new-product-form">
                    <div className="new-product-input">
                        <label>Product Name</label>
                        <input type="text" name="title" id="product-name" placeholder="Cool Brand's Ergonomic Chair" onChange={handleInput} />
                    </div>
                    <div className="new-product-input">
                        <label>Price</label>
                        <input type="number" name="price" id="product-price" placeholder='42' onChange={handleInput} />
                    </div>
                    <div className="new-product-textarea">
                        <label>Description</label>
                        <textarea rows="3" name="description" id="product-description" placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit asperiores inventore quam dignissimos repellat iusto non sunt quia veritatis excepturi cumque qui, amet deserunt temporibus, quibusdam magnam! Ipsam, quidem.' onChange={handleInput} />
                    </div>
                    <div className="new-product-select">
                        <label>Category</label>
                        <select name="category" id="product-categories" onChange={handleInput} >
                            <option disabled>Please select a category</option>
                            <option value="chair">Chair</option>
                            <option value="electronic">Electronic</option>
                            <option value="backpack">Backpack</option>
                        </select>
                    </div>
                    <div className="new-product-select">
                        <label>Color</label>
                        <select name="color" id="product-colors" onChange={handleInput} >
                            <option disabled>Please select a color</option>
                            <option value="black">Black</option>
                            <option value="white">White</option>
                            <option value="gray">Gray</option>
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                            <option value="yellow">Yellow</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="new-product-radio">
                        <label>Is It In Stock?</label>
                        <div className="product-stock-radio-inputs">
                            <div>
                                <input type="radio" id="stock-true" name="isInStock" value="true" onChange={handleInput} />
                                <label htmlFor="stock-true">Yes</label>
                            </div>
                            <div>
                                <input type="radio" id="stock-false" name="isInStock" value="false" onChange={handleInput} />
                                <label htmlFor="stock-false">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="new-product-input">
                        <label>Product Image</label>
                        <div className="product-img-input">
                            <label htmlFor="product-img"><FileUploadOutlinedIcon /> Upload</label>
                            <p>
                                {file?.name}
                            </p>
                        </div>
                        <input type="file" name="image" id="product-img" style={{ display: 'none' }} onChange={handleFileUpload} />
                    </div>
                </form>
                <button ref={submitBtn} className="create-btn" onClick={handleCreateBtn}>Create</button>
            </div>
        </MainLayout>
    )
}

export default NewProduct
