import React from 'react'
import './customer-detail.scss'
import { useNavigate } from 'react-router-dom'
import MainLayout from '../../layouts/MainLayout'
import DetailCardSm from '../../components/DetailCardSm'
import DetailCardLg from '../../components/DetailCardLg'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined'

const CustomerDetail = () => {
    const navigate = useNavigate()

    return (
        <MainLayout>
            <div className="customer-detail-header">
                <h1>Edit User</h1>
                <button onClick={() => navigate('/customers')}><ArrowBackIosOutlinedIcon /> Back</button>
            </div>
            <div className="customer-detail-wrapper">
                <DetailCardSm />
                <DetailCardLg />
            </div>
        </MainLayout>
    )
}

export default CustomerDetail
