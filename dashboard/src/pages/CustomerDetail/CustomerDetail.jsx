import React from 'react'
import './customer-detail.scss'
import MainLayout from '../../layouts/MainLayout'
import DetailCardSm from '../../components/DetailCardSm'
import DetailCardLg from '../../components/DetailCardLg'


const CustomerDetail = () => {

    return (
        <MainLayout>
            <div className="customer-detail-header">
                <h1>Edit User</h1>
            </div>
            <div className="customer-detail-wrapper">
                <DetailCardSm />
                <DetailCardLg />
            </div>
        </MainLayout>
    )
}

export default CustomerDetail
