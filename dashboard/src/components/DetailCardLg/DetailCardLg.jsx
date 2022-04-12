import React, { useState } from 'react'
import './detail-card-lg.scss'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import uploadToFirebase from '../../utils/fileUpload'
import toast from 'react-hot-toast'
import { updateUser } from '../../store/apiRequests'

const DetailCardLg = ({ user, setIsUpdated }) => {
    const [inputs, setInputs] = useState(null)
    const [file, setFile] = useState(null)

    const handleInput = (e) => {
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

            if (user) {
                toast.promise(updateUser(user._id, { ...inputs, image: downloadURL }), {
                    loading: 'Updating',
                    success: 'Successfully updated',
                    error: 'Error when updating'
                })

                return setIsUpdated(true)
            }
        }

        if (inputs && !file && user) {
            toast.promise(
                updateUser(user._id, inputs),
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
        <div className='detail-card-lg'>
            <h3 className='detail-card-lg-title'>Update Information</h3>
            <form className="update-area">
                <div className="update-inputs">
                    <div className="update-input">
                        <label>Name</label>
                        <input type="text" name="name" defaultValue={user.name} onChange={handleInput} />
                    </div>
                    <div className="update-input">
                        <label>Location</label>
                        <input type="text" name="location" defaultValue={user.location} onChange={handleInput} />
                    </div>
                    <div className="update-input">
                        <label>Phone Number</label>
                        <input type="tel" name="phone" defaultValue={user.phone} onChange={handleInput} />
                    </div>
                    <div className="update-input">
                        <label>Email</label>
                        <input type="email" name="email" defaultValue={user.email} onChange={handleInput} />
                    </div>
                </div>
                <div className="update-avatar">
                    <div className="upload-avatar">
                        <img src={user.image || "https://bit.ly/3i1HmGz"} alt="User Avatar" />
                        <label htmlFor="file"><FileUploadOutlinedIcon /> Upload</label>
                        <input type="file" name="image" id="file" style={{ display: 'none' }} onChange={handleFileUpload} />
                    </div>
                </div>
            </form>
            <button className="detail-card-update-btn" onClick={handleUpdateBtn}>Update</button>
        </div>
    )
}

export default DetailCardLg
