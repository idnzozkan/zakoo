import React from 'react'
import styled from 'styled-components'
import { featuredProducts } from '../data'
import ProductItem from './ProductItem'

const Container = styled.section`
    margin: 100px 370px;
`

const Title = styled.h2`
    color: #1A0B5B;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 42px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 50px;

`

const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;
`

const Products = () => {
    return (
        <Container>
            <Title>Featured Products</Title>
            <ProductsContainer>
                {featuredProducts.map(product => (
                    <ProductItem product={product} key={product.id} />
                ))}
            </ProductsContainer>
        </Container>
    )
}

export default Products
