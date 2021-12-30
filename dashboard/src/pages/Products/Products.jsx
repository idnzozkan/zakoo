import React from 'react'
import './products.scss'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import PageHeader from '../../components/PageHeader/PageHeader'
import ProductList from '../../components/ProductList/ProductList'

const Products = () => {
    return (
        <MainLayout>
            <PageHeader title='Products' btnPath='/products/new' btnType='new' />
            <ProductList />
        </MainLayout>
    )
}

export default Products
