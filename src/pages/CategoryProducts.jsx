import React from 'react'
import styled from 'styled-components'
import Products from '../components/Products'
import MainLayout from '../layouts/MainLayout'
import { xsmall } from '../responsive'

const CategoryProducts = () => {
    return (
        <MainLayout>
            <Title>
                Chairs
            </Title>
            <FiltersContainer>
                <Filter>
                    <FilterText>Filter products: </FilterText>
                    <Select>
                        <option disabled selected >Color</option>
                        <option>All</option>
                        <option>Black</option>
                        <option>White</option>
                        <option>Gray</option>
                        <option>Red</option>
                        <option>Green</option>
                        <option>Blue</option>
                        <option>Yellow</option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort by: </FilterText>
                    <Select>
                        <option selected >Newest</option>
                        <option>Price (asc)</option>
                        <option>Price (desc)</option>
                    </Select>
                </Filter>
            </FiltersContainer>
            <Products />
        </MainLayout>
    )
}

const Title = styled.h2`
    padding: 100px 370px 0px 370px;
    font-family: "Josefin Sans", sans-serif;
    color: #151875;

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

export default CategoryProducts
