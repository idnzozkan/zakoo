import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Products from '../components/Products'
import MainLayout from '../layouts/MainLayout'
import { xsmall } from '../responsive'

const ProductList = () => {
    // Scroll Top
    useEffect(() => {
        window.scroll({ top: 0 })
    }, [])

    const { pathname } = useLocation()
    const category = pathname.split('/')[2]
    const [filter, setFilter] = useState({ color: 'all' })
    const [sort, setSort] = useState('newest')

    const handleFilter = (e) => {
        setFilter({
            [e.target.name]: e.target.value
        })
    }

    const handleSort = (e) => {
        setSort(e.target.value)
    }

    return (
        <MainLayout>
            <Title>
                {category ? category : 'All'} Products
            </Title>
            <FiltersContainer>
                <Filter>
                    <FilterText>Filter products: </FilterText>
                    <Select name="color" onChange={handleFilter}>
                        <option disabled selected>Color</option>
                        <option value="all">All</option>
                        <option value="black">Black</option>
                        <option value="white">White</option>
                        <option value="gray">Gray</option>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort by: </FilterText>
                    <Select name="sort" onChange={handleSort}>
                        <option value="newest">Newest</option>
                        <option value="asc">Price (asc)</option>
                        <option value="desc">Price (desc)</option>
                    </Select>
                </Filter>
            </FiltersContainer>
            <Products category={category} filter={filter} sort={sort} />
        </MainLayout>
    )
}

const Title = styled.h2`
    padding: 100px 370px 0px 370px;
    font-family: "Josefin Sans", sans-serif;
    color: #151875;
    text-transform: capitalize;

    ${xsmall({ padding: '60px 20px 20px 20px' })}
`

const FiltersContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 370px;

    ${xsmall({ padding: '20px' })}
`

const Filter = styled.div`
    ${xsmall({ display: 'flex', flexDirection: 'column' })}
`

const FilterText = styled.span`
    margin-right: 20px;
    color: #3F509E;

    ${xsmall({ margin: '0 0 20px 0', fontSize: '18px' })}
`

const Select = styled.select`
    padding: 10px;
    outline: none;

    option {
        padding: 10px;
    }
`

export default ProductList
