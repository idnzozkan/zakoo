import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { publicRequest } from '../requestMethods'
import { xsmall } from '../responsive'
import ProductItem from './ProductItem'
import { useLocation } from 'react-router'

const Products = ({ title, category, filter, sort }) => {
    const { pathname } = useLocation()
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await publicRequest.get(category ? `/products?category=${category}` : '/products')
                setProducts(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getProducts()

    }, [category])

    useEffect(() => {
        if (pathname.startsWith('/products')) {
            if (Object.entries(filter)[0][1] === 'all') return setFilteredProducts(products)

            setFilteredProducts(products.filter(product =>
                Object.entries(filter).every(([key, value]) =>
                    product[key].includes(value)
                )
            ))
        }

    }, [filter, products, pathname])

    useEffect(() => {
        if (pathname.startsWith('/products')) {
            switch (sort) {
                case "newest":
                    setFilteredProducts(prev => [...prev].sort((a, b) => a.createdAt - b.createdAt))
                    break;
                case "asc":
                    setFilteredProducts(prev => [...prev].sort((a, b) => a.price - b.price))
                    break;
                case "desc":
                    setFilteredProducts(prev => [...prev].sort((a, b) => b.price - a.price))
                    break;
                default:
                    break;
            }
        }
    }, [sort, pathname])

    return (
        <Container>
            {title && (<Title>{title}</Title>)}
            <ProductsContainer>
                {
                    pathname.startsWith('/products')
                        ? filteredProducts.map(product => (<ProductItem product={product} key={product._id} />))
                        : products.slice(0, 8).map(product => (<ProductItem product={product} key={product._id} />))
                }
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
