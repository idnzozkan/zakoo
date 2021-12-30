import React from 'react'
import './new-customer.scss'
import MainLayout from '../../layouts/MainLayout'
import PageHeader from '../../components/PageHeader/PageHeader'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'

const NewCustomer = () => {
    return (
        <MainLayout>
            <PageHeader title='New Customer' btnType='back' />
            <div className="new-customer-wrapper">

                <form className="new-customer-form">
                    <div className="new-customer-input">
                        <label>Full Name</label>
                        <input type="text" name="full-name" id="full-name" placeholder='John Doe' />
                    </div>
                    <div className="new-customer-input">
                        <label>Username</label>
                        <input type="text" name="username" id="username" placeholder='john_doe' />
                    </div>
                    <div className="new-customer-input">
                        <label>Email</label>
                        <input type="email" name="email" id="email" placeholder='john@mail.com' />
                    </div>
                    <div className="new-customer-input">
                        <label>Phone Number</label>
                        <input type="tel" name="phone" id="phone" placeholder='+1-987-654-3210' />
                    </div>
                    <div className="new-customer-input">
                        <label>Password</label>
                        <input type="password" name="password" id="password" placeholder='********' />
                    </div>
                    <div className="new-customer-input">
                        <label>Confirm Password</label>
                        <input type="password" name="confirm-password" id="confirm-password" placeholder='********' />
                    </div>
                    <div className="new-customer-input">
                        <label>Address</label>
                        <input type="text" name="address" id="address" placeholder='San Jose, USA' />
                    </div>
                    <div className="new-customer-input">
                        <label>Birthdate</label>
                        <input type="date" name="birthdate" id="birthdate" />
                    </div>
                    <div className="new-customer-input">
                        <label>Avatar</label>
                        <div className="avatar-input">
                            <label htmlFor="avatar"><FileUploadOutlinedIcon /> Upload</label>
                        </div>
                        <input type="file" name="avatar" id="avatar" style={{ display: 'none' }} />
                    </div>
                </form>
                <button className="create-btn">Create</button>
            </div>
        </MainLayout>
    )
}

export default NewCustomer
