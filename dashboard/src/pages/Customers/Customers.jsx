import React from 'react'
import './customers.scss'
import MainLayout from '../../layouts/MainLayout'
import CustomerList from '../../components/CustomerList'

const Customers = () => {
    return (
        <MainLayout>
            <div className="customer-list-header">
                <h1>Customers</h1>
                <button>New</button>
            </div>
            <CustomerList />
        </MainLayout>
    )
}

export default Customers
