import React, { useRef, useState } from 'react'
import './new-customer.scss'
import MainLayout from '../../layouts/MainLayout'
import PageHeader from '../../components/PageHeader/PageHeader'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import uploadToFirebase from '../../utils/fileUpload'
import { addUser } from '../../store/apiRequests'

const NewCustomer = () => {
    const [inputs, setInputs] = useState({
        name: null,
        username: null,
        location: null,
        birthdate: null,
        phone: null,
        email: null,
        password: null,
    })
    const [file, setFile] = useState(null)
    const submitBtn = useRef(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleInput = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    console.log(inputs)

    const handleFileUpload = (e) => {
        setFile(e.target.files[0])
    }

    const handleCreateBtn = async (e) => {
        e.preventDefault()
        const { name, username, email, phone, password, confirmPassword, location, birthdate } = inputs
        if (!name || !username || !email || !phone || !password || !confirmPassword || !location || !birthdate) {
            return toast.error('Please fill in the required fields')
        }

        submitBtn.current.disabled = true
        submitBtn.current.textContent = 'Please Wait...'

        let downloadURL
        if (file) downloadURL = await uploadToFirebase(file)

        console.log({ ...inputs, image: downloadURL })

        toast.promise(addUser(dispatch, { ...inputs, image: downloadURL }), {
            loading: 'Creating',
            success: 'Successfully created',
            error: 'Error when creating'
        })

        submitBtn.current.disabled = false
        submitBtn.current.textContent = 'Create'
        navigate('/customers')
    }

    return (
        <MainLayout>
            <PageHeader title='New Customer' btnType='back' />
            <div className="new-customer-wrapper">
                <form className="new-customer-form">
                    <div className="new-customer-input">
                        <label>Full Name</label>
                        <input type="text" name="name" id="full-name" placeholder='John Doe' onChange={handleInput} />
                    </div>
                    <div className="new-customer-input">
                        <label>Username</label>
                        <input type="text" name="username" id="username" placeholder='john_doe' onChange={handleInput} />
                    </div>
                    <div className="new-customer-input">
                        <label>Email</label>
                        <input type="email" name="email" id="email" placeholder='john@mail.com' onChange={handleInput} />
                    </div>
                    <div className="new-customer-input">
                        <label>Phone Number</label>
                        <input type="tel" name="phone" id="phone" placeholder='+1-987-654-3210' onChange={handleInput} />
                    </div>
                    <div className="new-customer-input">
                        <label>Password</label>
                        <input type="password" name="password" id="password" placeholder='********' onChange={handleInput} />
                    </div>
                    <div className="new-customer-input">
                        <label>Confirm Password</label>
                        <input type="password" name="confirmPassword" id="confirm-password" placeholder='********' onChange={handleInput} />
                    </div>
                    <div className="new-customer-input">
                        <label>Address</label>
                        <textarea rows="3" name="location" id="address" placeholder='San Jose, USA' onChange={handleInput} />
                    </div>
                    <div className="new-customer-input">
                        <label>Birthdate</label>
                        <input type="date" name="birthdate" id="birthdate" onChange={handleInput} />
                    </div>
                    <div className="new-customer-input">
                        <label>Avatar</label>
                        <div className="avatar-input">
                            <label htmlFor="avatar"><FileUploadOutlinedIcon /> Upload</label>
                        </div>
                        <input type="file" name="image" id="avatar" style={{ display: 'none' }} onChange={handleFileUpload} />
                    </div>
                </form>
                <button ref={submitBtn} className="create-btn" onClick={handleCreateBtn}>Create</button>
            </div>
        </MainLayout>
    )
}

export default NewCustomer
