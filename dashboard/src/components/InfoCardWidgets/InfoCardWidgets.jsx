import React from 'react'
import './info-card-widgets.scss'
import OrdersCard from './OrdersCard'
import RevenueCard from './RevenueCard'
import CustomersCard from './CustomersCard'

const InfoCardWidgets = () => {
    return (
        <div className='info-card-widgets'>
            <RevenueCard />
            <OrdersCard />
            <CustomersCard />
        </div>
    )
}

export default InfoCardWidgets
