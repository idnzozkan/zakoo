import React from 'react'
import './customer-detail.scss'
import MainLayout from '../../layouts/MainLayout'
import DetailCardSm from '../../components/DetailCardSm'
import DetailCardLg from '../../components/DetailCardLg'
import PageHeader from '../../components/PageHeader/PageHeader'

const CustomerDetail = () => {

    return (
        <MainLayout>
            <PageHeader title='Edit User' btnType='back' />
            <div className="customer-detail-wrapper">
                <DetailCardSm />
                <DetailCardLg />
            </div>
        </MainLayout>
    )
}

export default CustomerDetail
