import React from 'react'
import styled from 'styled-components'
import { featuredProducts } from '../data'
import { xsmall } from '../responsive'
import ProductItem from './ProductItem'

const Products = ({ title }) => {
    return (
        <Container>
            {title && (<Title>{title}</Title>)}
            <ProductsContainer>
                {featuredProducts.map(product => (
                    <ProductItem product={product} key={product.id} />
                ))}
            </ProductsContainer>
        </Container>
    )
}

const Container = styled.section`
    margin: 100px 370px;

    ${xsmall({ margin: '80px 20px' })}
`

const Title = styled.h2`
    color: #1A0B5B;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 42px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 50px;

    ${xsmall({ fontSize: '36px' })}
`

const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;

    ${xsmall({ gridTemplateColumns: '1fr' })}
`

export default Products
