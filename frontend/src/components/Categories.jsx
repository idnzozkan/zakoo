import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import { xsmall } from '../responsive'
import CategoryItem from './CategoryItem'

const Categories = () => {
    return (
        <Container>
            {categories.map(category => (
                <CategoryItem category={category} />
            ))}
        </Container>
    )
}

const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin: 50px 20px;

    ${xsmall({ gridTemplateColumns: '1fr' })}
`
export default Categories
