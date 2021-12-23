import React from 'react'
import data from './chartData'
import MainLayout from '../../layouts/MainLayout'
import InfoCardWidgets from '../../components/InfoCardWidgets'
import Chart from '../../components/Chart'
import ListWidgets from '../../components/ListWidgets'

const Home = () => {
    return (
        <MainLayout>
            <InfoCardWidgets />
            <Chart title="Customer Analytics" data={data} xAxisDataKey="month" dataKey="New Customers" />
            <ListWidgets />
        </MainLayout>
    )
}

export default Home
