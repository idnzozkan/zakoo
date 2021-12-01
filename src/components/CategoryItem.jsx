import React from 'react'
import styled from 'styled-components'
import { xsmall } from '../responsive'

const CategoryItem = ({ category }) => {
    return (
        <Container>
            <Image src={category.img} />
            <InfoSection>
                <Title>{category.title}</Title>
                <Button>SHOP NOW</Button>
            </InfoSection>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 70vh;
    object-fit: cover;

    ${xsmall({ height: '20vh' })}
`

const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const Title = styled.h3`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 32px;
    color: white;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    z-index: 4;
`
const Button = styled.button`
    outline: none;
    border: 1.5px solid white;
    padding: 20px;
    font-size: 16px;
    font-weight: 700;
    background: #ffffff10;
    color: white;
    cursor: pointer;

    &:hover {
        background: white;
        color: black;
    }
`

export default CategoryItem