import React from 'react'
import OrderList from '../../components/OrderList'
import PageHeader from '../../components/PageHeader/PageHeader'
import MainLayout from '../../layouts/MainLayout/MainLayout'

const Orders = () => {
    return (
        <MainLayout>
            <PageHeader title='Orders' hideBtn />
            <OrderList />
        </MainLayout>
    )
}

export default Orders
