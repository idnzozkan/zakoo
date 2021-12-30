import React from 'react'
import './customers.scss'
import MainLayout from '../../layouts/MainLayout'
import PageHeader from '../../components/PageHeader/PageHeader'
import CustomerList from '../../components/CustomerList'

const Customers = () => {
    return (
        <MainLayout>
            <PageHeader title='Customers' btnPath='/customers/new' btnType='new' />
            <CustomerList />
        </MainLayout>
    )
}

export default Customers
