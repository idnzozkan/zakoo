import React from 'react'
import styled from 'styled-components'
import { FavoriteBorderOutlined, ShoppingCartOutlined, ZoomInOutlined } from '@material-ui/icons'

const ProductItem = ({ product }) => {
    return (
        <Container>
            <ImageContainer>
                <IconsContainer>
                    <Icon>
                        <ShoppingCartOutlined />
                    </Icon>
                    <Icon>
                        <ZoomInOutlined />
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined />
                    </Icon>
                </IconsContainer>
                <Image src={product.img} />
            </ImageContainer>
            <InfoContainer>
                <Name>{product.name}</Name>
                <Price>${product.price}</Price>
            </InfoContainer>
        </Container>
    )
}

const ImageContainer = styled.div`
    flex: 3;
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    background-color: #F6F7FB;
    transition: all 300ms ease;
`

const IconsContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 10px;
    bottom: 20px;
    opacity: 0;
    transition: all 300ms ease;
`

const Icon = styled.div`
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    padding: 20px;
    transition: all 300ms ease;

    svg {
        color: #151875;
        font-size: 22px;
    }

    &:hover {
        background: white;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 45vh;

    &:hover ${ImageContainer} {
        background-color: #EBF4F3;
    }

    &:hover ${IconsContainer} {
        opacity: 1;
    }    
`

const Image = styled.img`
    object-fit: contain;
    min-height: 100%;
    width: 60%;
`

const InfoContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    width: 100%;
`

const Name = styled.span`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #151875;
    font-size: 18px;
    font-weight: 700;
    font-family: 'Josefin Sans', sans-serif;
    text-align: center;
    width: 100%;
`

const Price = styled.span`
    width: 100%;
    flex: 1;
    text-align: center;
    color: #151875;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 14px;
    margin-top: 10px;
`

export default ProductItem
